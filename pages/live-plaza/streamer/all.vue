<script setup lang="ts">
import { ChevronLeft, Search, X } from 'lucide-vue-next'

useAppSeo({
  title: 'Browse All Live Plaza Streamers & Channels | ByBet',
  description: 'Discover every live streaming channel on ByBet Live Plaza. Watch real-time match reactions, casino gameplay, and connect with top sports creators.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Live Plaza', path: '/live-plaza/home' },
    { name: 'Streamers', path: '/live-plaza/streamer' },
    { name: 'All Streamers', path: '/live-plaza/streamer/all' },
  ],
})

const router = useRouter()
const { translate } = useSiteLocale()

const searchQuery = ref('')

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/live-plaza/streamer')
  }
}
</script>

<template>
  <div class="live-plaza-all-streamers-page w-full min-w-0 pb-16 text-white light:text-[#14251d]">
    <h1 class="sr-only">All Streamers</h1>
    <!-- Reusable Top SEO Header Bar -->
    <SeoHeader
      heading-tag="p"
      sticky
      :title="translate('All Streamers')"
      description="Watch and follow top casino, sports, and gaming streamers live on ByBet Philippines."
      back-to="/live-plaza/streamer"
    />

    <!-- Search Section -->
    <section class="search-card rounded-xl bg-[#141414] p-2.5 sm:p-3 mb-2 shadow-sm flex justify-center light:bg-white light:border light:border-black/10">
      <div class="relative w-full max-w-[540px] flex items-center">
        <Search class="pointer-events-none absolute left-3 w-3 h-3 text-white light:text-[#607068]" />
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="translate('Search: Streamer, League, Team, Event...')"
          class="w-full h-6 pl-8 pr-7 rounded-full bg-black text-[14px] text-white placeholder-white focus:outline-none light:bg-[#edf4f0] light:text-[#14251d] light:placeholder-[#607068]"
        />
        <button
          v-if="searchQuery"
          type="button"
          class="absolute right-2.5 text-[#666666] hover:text-white transition-colors cursor-pointer light:hover:text-[#14251d]"
          aria-label="Clear search"
          @click="searchQuery = ''"
        >
          <X class="w-3 h-3" />
        </button>
      </div>
    </section>

    <!-- Main Empty State Card -->
    <section class="streamers-content-card rounded-xl bg-[#141414] p-4 min-h-[320px] sm:min-h-[420px] flex items-center justify-center shadow-sm light:bg-white light:border light:border-black/10">
      <div class="text-xs sm:text-[18px] text-[#737373] select-none light:text-[#8c918f]">
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

