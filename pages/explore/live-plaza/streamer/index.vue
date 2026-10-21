<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

useSeoMeta({
  title: 'Streamer | Live Plaza | ByBet',
  description: 'Watch live sports streamers, follow popular game broadcasts, and interact with the ByBet live plaza streaming community.',
  ogTitle: 'Streamer | Live Plaza | ByBet',
  ogDescription: 'Watch live sports streamers, follow popular game broadcasts, and interact with the ByBet live plaza streaming community.',
})

const router = useRouter()
const { translate } = useSiteLocale()

const handleAllStreamersClick = (): void => {
  router.push('/explore/live-plaza/streamer/all')
}
</script>

<template>
  <div class="live-plaza-streamer-page w-full min-w-0 pb-16 pt-1 text-white">
    <!-- Reusable Top SEO Header Bar -->
    <SeoHeader
      sticky
      :title="translate('Streamer')"
      description="Live streaming channels, interactive hosts, and gaming influencers on ByBet Philippines."
      :show-back="false"
    />

    <!-- Section 1: You may be interested -->
    <section class="streamer-card rounded-xl bg-[#141414] p-3.5 sm:p-4 mb-2 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-sm sm:text-[15px] font-bold text-white tracking-tight">
          {{ translate('You may be interested') }}
        </h2>
        <button
          type="button"
          class="all-streamers-btn flex items-center gap-0.5 sm:gap-1 text-xs text-[#8e8e8e] hover:text-white transition-colors cursor-pointer select-none"
          @click="handleAllStreamersClick"
        >
          <span>{{ translate('All Streamers') }}</span>
          <ChevronRight class="w-3.5 h-3.5" />
        </button>
      </div>

      <div class="empty-state-box flex items-center justify-center min-h-[90px] sm:min-h-[110px] text-xs sm:text-sm text-[#737373] select-none">
        {{ translate('No related streamer') }}
      </div>
    </section>

    <!-- Section 2: Streaming -->
    <section class="streamer-card rounded-xl bg-[#141414] p-3.5 sm:p-4 mb-2 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-sm sm:text-[15px] font-bold text-white tracking-tight">
          {{ translate('Streaming') }}
        </h2>
      </div>

      <div class="empty-state-box flex items-center justify-center min-h-[220px] sm:min-h-[300px] text-xs sm:text-sm text-[#737373] select-none">
        {{ translate('No related streamer') }}
      </div>
    </section>
  </div>
</template>

<style scoped>
.live-plaza-streamer-page {
  max-width: 100%;
}
</style>

