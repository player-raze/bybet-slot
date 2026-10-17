<script setup lang="ts">
import { MessageCircle, Play } from 'lucide-vue-next'
import {
  LIVE_CASINO_CATEGORIES,
  LIVE_CASINO_TABLES,
  type LiveCasinoCategory,
  type LiveCasinoTable,
} from '~/data/live-casino'

const activeCategory = ref('baccarat')

const { context: commentContext, openGameComments, closeComments } = useCommentPanel()
const { showDemoMessage } = useDemoInteraction()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const toggleChat = (): void => {
  if (commentContext.value) {
    closeComments()
  } else {
    openGameComments()
  }
}

const selectCategory = (key: string): void => {
  activeCategory.value = key
}

const filteredTables = computed<LiveCasinoTable[]>(() => {
  if (activeCategory.value === 'baccarat') {
    return LIVE_CASINO_TABLES
  }
  // For other categories, showcase the available live tables with demo feedback
  return LIVE_CASINO_TABLES
})
</script>

<template>
  <div class="live-casino-page w-full min-w-0 pb-16 pt-1 text-white">
    <!-- Top Bar: Brand Icon on Left, Chat on Right -->
    <header class="top-brand-bar flex items-center justify-between gap-2 rounded-2xl bg-[#171817] border border-white/5 p-1 mb-2.5 shadow-sm">
      <div class="flex items-center pl-1">
        <!-- Live Provider Green Brand Emblem -->
        <div class="h-9 w-9 rounded-xl bg-[#00c74d] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" class="h-5 w-5 fill-[#0a1c13]" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
      </div>

      <!-- Right Chat Toggle -->
      <button
        type="button"
        class="nav-tab nav-tab--chat flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none border-l border-white/5 pl-2"
        :class="commentContext ? 'text-[#00c74d] font-semibold' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
        aria-label="Toggle chat room"
        @click="toggleChat"
      >
        <MessageCircle class="h-4 w-4 mb-0.5 shrink-0" />
        <span class="text-[11px] leading-tight">Chat</span>
      </button>
    </header>

    <!-- Category Filter Bar (Game Show, Baccarat, Dragon Tiger, Roulette, Sicbo, Fan Tan, Blackjack, Poker) -->
    <div class="category-nav-bar flex items-center gap-1.5 overflow-x-auto no-scrollbar rounded-2xl bg-[#171817] border border-white/5 px-2 py-1.5 mb-3 shadow-sm">
      <button
        v-for="cat in LIVE_CASINO_CATEGORIES"
        :key="cat.key"
        type="button"
        class="category-pill px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer select-none"
        :class="activeCategory === cat.key ? 'bg-[#00c74d] text-black font-bold shadow' : 'text-[#8e9491] hover:text-white hover:bg-[#242625]'"
        @click="selectCategory(cat.key)"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Live Casino Tables Grid: 4 Columns matching screenshot -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
      <a
        v-for="table in filteredTables"
        :key="table.id"
        :href="table.href || bybetRedirectUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="live-table-card group relative flex flex-col rounded-2xl overflow-hidden bg-[#181a19] border border-white/5 shadow-md cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5"
        :aria-label="`Join ${table.title}`"
      >
        <!-- Table Image (Dealer Stream + Bead Plate Roadmap + Stats) -->
        <div class="relative w-full overflow-hidden rounded-2xl bg-[#181a19]">
          <img
            :src="table.image"
            :alt="table.title"
            class="w-full h-auto object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />

          <!-- Hover Play Overlay -->
          <div class="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-2xl">
            <div class="h-10 w-10 rounded-full bg-[#00e701] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
              <Play class="h-5 w-5 fill-black ml-0.5" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
