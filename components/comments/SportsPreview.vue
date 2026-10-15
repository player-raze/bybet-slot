<script setup lang="ts">
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl
import { MessageCircle, ShoppingBag, GraduationCap, ChartPie, Video, PanelsTopLeft, Play } from 'lucide-vue-next'

import type { LiveStreamCatalog } from '~/types/livestream'
import StreamPlayer from './StreamPlayer.vue'

const { data: catalog, status, refresh } = useFetch<LiveStreamCatalog>('/api/livestream', { server: false })
const selectedStreamId = ref('')
const endedStreamIds = ref(new Set<string>())
const streams = computed(() => (catalog.value?.results ?? [])
  .filter(stream => !endedStreamIds.value.has(stream.id)
    && (!stream.status || stream.status === 'live')
    && stream.sources?.some(source => source.url || source.fallbackUrl))
  .toSorted((a, b) => (Date.parse(b.startTime ?? '') || 0) - (Date.parse(a.startTime ?? '') || 0)))
const selectedStream = computed(() => streams.value.find(stream => stream.id === selectedStreamId.value) ?? streams.value[0])
watch(selectedStream, stream => { selectedStreamId.value = stream?.id ?? '' })
const previewMode = ref('video')
let refreshTimer: ReturnType<typeof setInterval> | undefined
let pendingRefresh: Promise<void> | undefined
let disposed = false

function refreshStreams() {
  if (disposed) return Promise.resolve()
  pendingRefresh ??= refresh().finally(() => { pendingRefresh = undefined })
  return pendingRefresh
}

async function switchEndedStream(id: string) {
  if (disposed || endedStreamIds.value.has(id)) return
  endedStreamIds.value = new Set([...endedStreamIds.value, id])
  await refreshStreams()
  if (!disposed) selectedStreamId.value = streams.value[0]?.id ?? ''
}

onMounted(() => { refreshTimer = setInterval(() => void refreshStreams(), 30000) })
onBeforeUnmount(() => {
  disposed = true
  clearInterval(refreshTimer)
})
const tabs = [
  { key: 'offers', label: 'Offers', icon: ShoppingBag },
  { key: 'insights', label: 'Insights', icon: GraduationCap },
  { key: 'stats', label: 'Statistics', icon: ChartPie },
]
</script>

<template>
  <section class="overflow-hidden rounded-2xl bg-[#1f1f1f] opacity-90 ">
    <div id="tv-title" class="flex min-w-0 items-center justify-center gap-2 px-4 py-2 text-center text-[16px] font-semibold">
      <template v-if="selectedStream">
        <span class="min-w-0 truncate text-right" :title="selectedStream.home.name">{{ selectedStream.home.name }}</span>
        <span class="shrink-0 whitespace-nowrap">{{ selectedStream.scoreAvailable ? `${selectedStream.homeScore ?? 0} - ${selectedStream.awayScore ?? 0}` : 'vs' }}</span>
        <span class="min-w-0 truncate text-left" :title="selectedStream.away.name">{{ selectedStream.away.name }}</span>
      </template>
      <template v-else>Sports TV</template>
    </div>
    <div class="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#14261d]">
      <StreamPlayer
        v-if="previewMode === 'court' && selectedStream"
        :key="selectedStream.id"
        :sources="selectedStream.sources ?? []" @ended="switchEndedStream(selectedStream.id)" @unavailable="switchEndedStream(selectedStream.id)" />
      <a
        v-else-if="previewMode === 'video' && selectedStream"
        :href="bybetRedirectUrl"
        class="relative flex h-full w-full items-center justify-center bg-[#14261d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
        :aria-label="`Play livestream: ${selectedStream.home.name} vs ${selectedStream.away.name}`"
      >
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <StreamPlayer :key="selectedStream.id" :sources="selectedStream.sources ?? []" @ended="switchEndedStream(selectedStream.id)" @unavailable="switchEndedStream(selectedStream.id)" class="box-border" preview />
        </div>
        <span class="relative flex flex-col items-center gap-2">
          <span class="grid h-5 w-5 place-items-center rounded-full bg-white text-white ring-1 ring-white/40 backdrop-blur-sm"><Play class="text-black" :size="15" fill="currentColor" aria-hidden="true" /></span>
        </span>
      </a>
      <div v-else class="flex h-full flex-col items-center justify-center px-5 text-center" role="status">
        <Video :size="26" class="mb-2 text-white/60" aria-hidden="true" />
        <p class="text-[14px] font-semibold text-white">
          {{ previewMode === 'court' ? 'Match radar unavailable' : status === 'pending' ? 'Loading live streams…' : 'Stream unavailable' }}
        </p>
        <button v-if="previewMode === 'court'" type="button" class="mt-2 text-[12px] text-[#48daa6]" @click="previewMode = 'video'">Watch live video</button>
        <button v-else-if="status !== 'pending'" type="button" class="mt-2 text-[12px] text-[#48daa6]" @click="refresh()">Try again</button>
      </div>
    </div>
    <div class="flex items-center justify-between gap-2 px-2 py-1">
      <div class="flex gap-1">
        <button type="button" class="grid h-5 w-5 place-items-center rounded-full bg-[#006649] text-white" aria-label="Comments" aria-pressed="true" title="Comments">
          <MessageCircle :size="18" aria-hidden="true" />
        </button>
        <a
          v-for="tab in tabs"
          :key="tab.key"
          :href="bybetRedirectUrl"
          class="grid h-5 w-5 place-items-center rounded-full text-[#959999] hover:bg-white/10"
          :aria-label="tab.label"
          :title="tab.label"
        >
          <component :is="tab.icon" :size="18" aria-hidden="true" />
        </a>
      </div>
      <div class="flex rounded-full bg-black p-1">
        <button type="button" class="grid h-5 w-5 place-items-center rounded-full text-[#b7baba]" :class="{ 'bg-[#343635]': previewMode === 'video' }" aria-label="Livestream" title="Livestream" :aria-pressed="previewMode === 'video'" @click="previewMode = 'video'">
          <Video :size="17" aria-hidden="true" />
        </button>
        <button type="button" class="grid h-5 w-5 place-items-center rounded-full text-[#b7baba]" :class="{ 'bg-[#343635]': previewMode === 'court' }" aria-label="Match radar" title="Match radar" :aria-pressed="previewMode === 'court'" @click="previewMode = 'court'">
          <PanelsTopLeft :size="17" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>
