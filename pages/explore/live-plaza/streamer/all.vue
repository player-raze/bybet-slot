<script setup lang="ts">
import { ChevronLeft, Search, X } from 'lucide-vue-next'

useSeoMeta({
  title: 'All Streamers | Live Plaza | ByBet',
  description: 'Search and browse all live sports and casino streamers on ByBet Live Plaza.',
  ogTitle: 'All Streamers | Live Plaza | ByBet',
  ogDescription: 'Search and browse all live sports and casino streamers on ByBet Live Plaza.',
})

const router = useRouter()
const { translate } = useSiteLocale()

const searchQuery = ref('')

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/live-plaza/streamer')
  }
}
</script>

<template>
  <div class="live-plaza-all-streamers-page w-full min-w-0 pb-16 pt-1 text-white">
    <!-- Reusable Top SEO Header Bar -->
    <SeoHeader
      sticky
      :title="translate('All Streamers')"
      description="Watch and follow top casino, sports, and gaming streamers live on ByBet Philippines."
      back-to="/explore/live-plaza/streamer"
    />

    <!-- Search Section -->
    <section class="search-card rounded-xl bg-[#141414] p-2.5 sm:p-3 mb-2 shadow-sm flex justify-center">
      <div class="relative w-full max-w-[340px] flex items-center">
        <Search class="pointer-events-none absolute left-3 w-3.5 h-3.5 text-[#666666]" />
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="translate('Search: Streamer, League, Team, Event...')"
          class="w-full h-8 pl-8 pr-7 rounded-full bg-black border border-white/5 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#32d49a]/40 transition-colors"
        />
        <button
          v-if="searchQuery"
          type="button"
          class="absolute right-2.5 text-[#666666] hover:text-white transition-colors cursor-pointer"
          aria-label="Clear search"
          @click="searchQuery = ''"
        >
          <X class="w-3 h-3" />
        </button>
      </div>
    </section>

    <!-- Main Empty State Card -->
    <section class="streamers-content-card rounded-xl bg-[#141414] p-4 min-h-[320px] sm:min-h-[420px] flex items-center justify-center shadow-sm">
      <div class="text-xs sm:text-sm text-[#737373] select-none">
        {{ translate('No related streamer') }}
      </div>
    </section>
  </div>
</template>

<style scoped>
.live-plaza-all-streamers-page {
  max-width: 100%;
}
</style>

