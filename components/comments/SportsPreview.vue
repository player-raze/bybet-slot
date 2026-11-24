<script setup lang="ts">
import { MessageCircle, ShoppingBag, GraduationCap, ChartPie, Video, PanelsTopLeft, Play } from 'lucide-vue-next'

import type { LiveStreamCatalog } from '~/types/livestream'
import { buildBybetRedirectUrl } from '~/utils/sportsRedirect'

const { bybetRedirectUrl: rawRedirectUrl, bybetRedirectCode } = useRuntimeConfig().public
const bybetRedirectUrl = buildBybetRedirectUrl('login', rawRedirectUrl, bybetRedirectCode)

const { data: catalog, status, refresh } = useFetch<LiveStreamCatalog>('/api/livestream', { server: false })
const selectedStreamId = ref('')
const thumbnailError = ref(false)

const streams = computed(() => {
  const list = (catalog.value?.results ?? [])
    .filter(stream => !stream.status || stream.status === 'live')
  return list.toSorted((a, b) => {
    const aHasVideo = (a.hasStream || (a.sources && a.sources.length > 0)) ? 1 : 0
    const bHasVideo = (b.hasStream || (b.sources && b.sources.length > 0)) ? 1 : 0
    if (bHasVideo !== aHasVideo) return bHasVideo - aHasVideo
    return (Date.parse(b.startTime ?? '') || 0) - (Date.parse(a.startTime ?? '') || 0)
  })
})
const selectedStream = computed(() => streams.value.find(stream => stream.id === selectedStreamId.value) ?? streams.value[0])
watch(selectedStream, stream => {
  if (stream?.id) selectedStreamId.value = stream.id
}, { immediate: true })

watch(selectedStreamId, () => {
  thumbnailError.value = false
})

const streamThumbnail = computed(() => {
  if (thumbnailError.value) return '/images/sports/category-banners/background-basketball.png'
  return selectedStream.value?.thumbnail || '/images/sports/category-banners/background-basketball.png'
})

function handleThumbnailError() {
  thumbnailError.value = true
}

const streamTitle = computed(() => {
  const stream = selectedStream.value
  if (!stream) return 'Sports TV'
  return stream.iframe?.title || `${stream.home?.name || 'Live'} vs ${stream.away?.name || 'Match'}`
})

const previewMode = ref('video')
let refreshTimer: ReturnType<typeof setInterval> | undefined
let pendingRefresh: Promise<void> | undefined
let disposed = false

function refreshStreams() {
  if (disposed) return Promise.resolve()
  pendingRefresh ??= refresh().finally(() => { pendingRefresh = undefined })
  return pendingRefresh
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
    <div id="tv-title" class="flex min-w-0 items-center justify-between px-3 py-2 text-[13px] font-semibold text-white">
      <div class="flex min-w-0 flex-1 items-center justify-center gap-2 truncate">
        <template v-if="selectedStream">
          <span class="min-w-0 truncate text-right" :title="selectedStream.home?.name">{{ selectedStream.home?.name }}</span>
          <span class="shrink-0 whitespace-nowrap font-bold">
            {{ selectedStream.scoreAvailable ? `${selectedStream.homeScore ?? 0} - ${selectedStream.awayScore ?? 0}` : 'vs' }}
          </span>
          <span class="min-w-0 truncate text-left" :title="selectedStream.away?.name">{{ selectedStream.away?.name }}</span>
        </template>
        <template v-else>Sports TV</template>
      </div>
      
    </div>
    <div class="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#14261d]">
      <a
        v-if="selectedStream"
        :href="bybetRedirectUrl"
        target="_blank"
        rel="nofollow noopener noreferrer"
        data-section="SportsTV"
        :aria-label="`Play ${streamTitle}`"
        class="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1712] via-[#10241b] to-[#07130e] select-none"
      >
        <!-- Background Picture / Thumbnail -->
        <img
          :src="streamThumbnail"
          :alt="streamTitle"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          @error="handleThumbnailError"
        />

        <!-- Dark Gradient Overlays for Readability & Cinematic Contrast -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 pointer-events-none" />

        <!-- Play Button in the Middle -->
        <div class="relative z-10 flex flex-col items-center justify-center gap-2">
          <span
            class="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-black shadow-xl shadow-white/40 transition-all duration-300 ease-out group-hover:scale-110 active:scale-95 cursor-pointer"
            aria-hidden="true"
          >
            <!-- Outer glowing pulse ring -->
            <span class="absolute inset-0 rounded-full bg-white opacity-30 animate-ping pointer-events-none" />
            <Play :size="20" class="fill-current text-black translate-x-0.5 transition-transform group-hover:scale-110" />
          </span>
        </div>
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
        <button type="button" class="grid h-5 w-5 place-items-center rounded-full bg-[var(--main-highlight)] text-white" aria-label="Comments" aria-pressed="true" title="Comments">
          <MessageCircle :size="18" aria-hidden="true" />
        </button>
        <a
          v-for="tab in tabs"
          :key="tab.key"
          :href="bybetRedirectUrl"
          target="_blank"
          rel="nofollow noopener noreferrer"
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
