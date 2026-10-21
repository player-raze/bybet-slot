<script setup lang="ts">
import {
  Crown,
  Flame,
  Snowflake,
  Trophy,
  House,
  MessageCircle,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Play,
  User,
  X,
  Trash2,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  BINGO_CATEGORIES,
  BINGO_CATEGORY_SVGS,
  BINGO_PROVIDERS,
  BINGO_SECTIONS,
  FREQUENTLY_SEARCHED_BINGO,
  type BingoCategory,
  type BingoGame,
  type BingoSection,
} from '~/data/bingo'
import GameCard from '~/components/game-cards/GameCard.vue'

const categoryIcons: Record<string, Component> = {
  House,
  Crown,
  Flame,
  Snowflake,
  Trophy,
}

const router = useRouter()
const activeCategory = ref('home')
const activeProvider = ref('all')
const searchQuery = ref('')
const isSearchOpen = ref(false)
const isSearchSubmitted = ref(false)
const searchInputRef = ref<HTMLInputElement | null>(null)
const isFilterOpen = ref(false)

const filterState = ref({
  theme: 'All',
  feature: 'All',
  winningLine: 'All',
})

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
  if (key === 'home') {
    activeCategory.value = 'home'
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  } else {
    router.push(`/explore/egames/bingo/${key}`)
  }
}

const selectProvider = (key: string): void => {
  activeProvider.value = key
}

const openSearch = (): void => {
  isSearchOpen.value = true
  isSearchSubmitted.value = false
  searchQuery.value = ''
  nextTick(() => {
    searchInputRef.value?.focus()
  })
}

const closeSearch = (): void => {
  isSearchOpen.value = false
  searchQuery.value = ''
  isSearchSubmitted.value = false
}

const {
  searchHistory,
  addToHistory,
  removeHistoryItem,
  clearHistory,
} = useSearchHistory('bybet_bingo_search_history', ['Super Bingo', 'Fortune Bingo'])

const clearSearch = (): void => {
  searchQuery.value = ''
  isSearchSubmitted.value = false
  nextTick(() => {
    searchInputRef.value?.focus()
  })
}

const handleSearchSubmit = (): void => {
  if (searchQuery.value.trim()) {
    isSearchSubmitted.value = true
    addToHistory(searchQuery.value)
  }
}

const handleInput = (): void => {
  if (!searchQuery.value.trim()) {
    isSearchSubmitted.value = false
  }
}

const selectFrequentSearch = (term: string): void => {
  searchQuery.value = term
  isSearchSubmitted.value = true
  addToHistory(term)
}

const showGameDetails = (game: any): void => {
  showDemoMessage(`${game.title} (${game.provider}) — Volatility: Medium-High • RTP: 97.5%`)
}

const showSectionHelp = (title: string): void => {
  showDemoMessage(`${title} reflects live real-time trends across active bingo games.`)
}

const activeGameId = ref<string | null>(null)

const handleCardClick = (game: any): void => {
  if (activeGameId.value === game.id) {
    activeGameId.value = null
  } else {
    activeGameId.value = game.id
  }
}

const handleStartNow = (game: any): void => {
  showDemoMessage(`Starting ${game.title} (${game.provider})...`)
  if (import.meta.client) {
    window.open(game.href || bybetRedirectUrl, '_blank')
  }
}

const handleDemo = (game: any): void => {
  showDemoMessage(`Launching Demo mode for ${game.title} (${game.provider})...`)
}

const handleDocumentClick = (event: MouseEvent): void => {
  const target = event.target as HTMLElement | null
  if (!target?.closest('.game-card')) {
    activeGameId.value = null
  }
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('click', handleDocumentClick)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.removeEventListener('click', handleDocumentClick)
  }
})

watch([searchQuery, activeProvider], () => {
  activeGameId.value = null
})

const filteredSections = computed<BingoSection[]>(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const provider = activeProvider.value.toLowerCase()

  return BINGO_SECTIONS.map((section) => {
    let games = section.games

    if (provider !== 'all') {
      games = games.filter((g) => g.provider.toLowerCase() === provider)
    }

    if (query) {
      games = games.filter((g) =>
        g.title.toLowerCase().includes(query) ||
        g.provider.toLowerCase().includes(query),
      )
    }

    return {
      ...section,
      games,
    }
  }).filter((section) => section.games.length > 0)
})

const resetFilters = (): void => {
  activeProvider.value = 'all'
  searchQuery.value = ''
  filterState.value = {
    theme: 'All',
    feature: 'All',
    winningLine: 'All',
  }
}
</script>

<template>
  <div class="bingo-page w-full min-w-0 pb-16 pt-1">
    <!-- Top Bar: Category Tabs & Chat -->
    <div class="sticky-header sticky top-[var(--header-height)] z-30 bg-[#000000] -mx-1 px-1 pt-1 pb-2">
      <header class="top-nav-bar flex items-center justify-between gap-2 rounded-2xl bg-[#171817] border border-white/5 p-1 overflow-x-auto no-scrollbar shadow-sm">
        <div class="flex items-center gap-1.5 min-w-0">
          <button
            v-for="cat in BINGO_CATEGORIES"
            :key="cat.key"
            type="button"
            class="nav-tab flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none"
            :class="activeCategory === cat.key ? 'bg-[#036242] text-white shadow font-semibold' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
            :aria-label="cat.label"
            @click="selectCategory(cat.key)"
          >
            <span
              v-if="cat.svg || BINGO_CATEGORY_SVGS[cat.key]"
              class="slot-nav-svg mb-0.5 shrink-0 flex items-center justify-center"
              v-html="cat.svg || BINGO_CATEGORY_SVGS[cat.key]"
            />
            <component
              :is="categoryIcons[cat.iconName]"
              v-else-if="cat.iconName && categoryIcons[cat.iconName]"
              class="h-4 w-4 mb-0.5 shrink-0"
            />
            <span class="text-[11px] leading-tight whitespace-nowrap">{{ cat.shortLabel }}</span>
          </button>
        </div>

        <button
          type="button"
          class="nav-tab nav-tab--chat flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none shrink-0 border-l border-white/5 pl-2"
          :class="commentContext ? 'text-[#036242] font-semibold' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
          aria-label="Toggle chat room"
          @click="toggleChat"
        >
          <MessageCircle class="h-4 w-4 mb-0.5 shrink-0" />
          <span class="text-[11px] leading-tight">Chat</span>
        </button>
      </header>
    </div>

    <!-- Provider Filter Bar & Search / Filter Icons -->
    <div class="provider-filter-bar flex items-center justify-between gap-2 rounded-2xl bg-[#171817] border border-white/5 px-2 py-1.5 mb-3 shadow-sm">
      <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        <button
          v-for="prov in BINGO_PROVIDERS"
          :key="prov.key"
          type="button"
          class="provider-pill px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer select-none"
          :class="activeProvider === prov.key ? 'bg-[#036242] text-white font-bold shadow' : 'bg-[#242625] text-[#8e9491] hover:text-white'"
          @click="selectProvider(prov.key)"
        >
          {{ prov.label }}
        </button>
      </div>

      <div class="flex items-center gap-1 shrink-0">
        <button
          type="button"
          class="h-8 w-8 rounded-full bg-[#242625] text-[#8e9491] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Search games"
          @click="openSearch"
        >
          <Search class="h-4 w-4" />
        </button>
        <button
          type="button"
          class="h-8 w-8 rounded-full bg-[#242625] text-[#8e9491] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Filter games"
          @click="isFilterOpen = true"
        >
          <SlidersHorizontal class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- Search Overlay / Panel -->
    <div
      v-if="isSearchOpen"
      class="search-panel mb-6 rounded-2xl bg-[#171817] border border-white/5 p-4 shadow-lg"
    >
      <div class="relative flex items-center mb-4">
        <Search class="absolute left-3.5 h-4 w-4 text-[#8e9491]" />
        <input
          ref="searchInputRef"
          v-model="searchQuery"
          type="text"
          placeholder="Search by game or provider..."
          class="w-full rounded-xl bg-[#202220] border border-white/10 pl-10 pr-20 py-2.5 text-sm text-white placeholder-[#8e9491] focus:outline-none focus:border-[#036242] transition-colors"
          @input="handleInput"
          @keyup.enter="handleSearchSubmit"
        />
        <div class="absolute right-2 flex items-center gap-1">
          <button
            v-if="searchQuery"
            type="button"
            class="p-1 text-[#8e9491] hover:text-white rounded-md"
            @click="clearSearch"
          >
            <X class="h-4 w-4" />
          </button>
          <button
            type="button"
            class="p-1 text-[#8e9491] hover:text-white rounded-md"
            @click="closeSearch"
          >
            <span class="text-xs">Cancel</span>
          </button>
        </div>
      </div>

      <!-- Search History & Suggestions -->
      <div v-if="!isSearchSubmitted" class="space-y-4">
        <div v-if="searchHistory.length > 0" class="history-block">
          <div class="flex items-center justify-between text-xs text-[#8e9491] mb-2">
            <span>Recent Searches</span>
            <button
              type="button"
              class="hover:text-white flex items-center gap-1"
              @click="clearHistory"
            >
              <Trash2 class="h-3 w-3" />
              <span>Clear</span>
            </button>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(item, idx) in searchHistory"
              :key="item"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202220] text-xs text-white hover:bg-[#282a29] cursor-pointer"
              @click="selectFrequentSearch(item)"
            >
              <span>{{ item }}</span>
              <button
                type="button"
                class="hover:text-red-400"
                @click.stop="removeHistoryItem(idx)"
              >
                <X class="h-3 w-3" />
              </button>
            </span>
          </div>
        </div>

        <div class="suggestions-block">
          <div class="text-xs text-[#8e9491] mb-2">Frequently Searched</div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="term in FREQUENTLY_SEARCHED_BINGO"
              :key="term"
              type="button"
              class="px-3 py-1 rounded-full bg-[#202220] text-xs text-[#8e9491] hover:text-white hover:bg-[#282a29] transition-colors"
              @click="selectFrequentSearch(term)"
            >
              {{ term }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="filteredSections.length === 0"
      class="my-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-[#171817] p-8 text-center"
    >
      <Search class="h-10 w-10 text-[#7a807d]" />
      <h3 class="text-base font-semibold text-white">No bingo games found</h3>
      <p class="text-xs text-[#9ca3af]">Try adjusting your search query or provider filter.</p>
      <button
        type="button"
        class="mt-2 rounded-full bg-[#036242] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#047b53] transition-colors cursor-pointer"
        @click="resetFilters"
      >
        Reset Filters
      </button>
    </div>

    <!-- Bingo Sections (Home Page layout with full sections) -->
    <section
      v-for="section in filteredSections"
      :id="`section-${section.id}`"
      :key="section.id"
      class="bingo-section mb-6 scroll-mt-[135px]"
    >
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-2.5">
        <div class="flex items-center gap-1.5">
          <span class="text-base leading-none select-none">{{ section.emoji }}</span>
          <h2 class="text-[15px] font-bold text-white tracking-tight">{{ section.title }}</h2>
          <button
            v-if="section.hasHelp"
            type="button"
            class="h-3.5 w-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#8e9491] hover:text-white flex items-center justify-center text-[9px] font-bold transition-colors cursor-pointer"
            :aria-label="`Info about ${section.title}`"
            @click.stop.prevent="showSectionHelp(section.title)"
          >
            ?
          </button>
        </div>

        <!-- Section Link to Subroute -->
        <NuxtLink
          :to="`/explore/egames/bingo/${section.id === 'max-rtp' ? 'max-rpt' : section.id}`"
          class="count-badge flex items-center gap-0.5 rounded-full bg-[#202220] hover:bg-[#282a29] px-2.5 py-0.5 text-[11px] font-medium text-[#8e9491] hover:text-white transition-colors cursor-pointer"
        >
          <span>{{ section.count }}</span>
          <ChevronRight class="h-3 w-3" />
        </NuxtLink>
      </div>

      <!-- Games Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <GameCard
          v-for="game in section.games"
          :key="game.id"
          :game="game"
          :activeId="activeGameId"
          @select="handleCardClick"
          @info="showGameDetails"
          @start="handleStartNow"
          @demo="handleDemo"
        />
      </div>
    </section>

    <!-- Filter Modal -->
    <div
      v-if="isFilterOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      @click.self="isFilterOpen = false"
    >
      <div class="w-full max-w-md rounded-2xl bg-[#171817] border border-white/10 p-5 shadow-2xl">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-bold text-white">Filter Bingo Games</h3>
          <button
            type="button"
            class="p-1 text-[#8e9491] hover:text-white rounded-lg"
            @click="isFilterOpen = false"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-xs text-[#8e9491] mb-1.5">Theme</label>
            <div class="flex flex-wrap gap-1.5">
              <button
                v-for="th in ['All', 'Classic', 'Jackpot', 'Carnaval', 'Adventure']"
                :key="th"
                type="button"
                class="px-3 py-1 rounded-full text-xs transition-colors"
                :class="filterState.theme === th ? 'bg-[#036242] text-white font-semibold' : 'bg-[#202220] text-[#8e9491] hover:text-white'"
                @click="filterState.theme = th"
              >
                {{ th }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-xs text-[#8e9491] mb-1.5">Features</label>
            <div class="flex flex-wrap gap-1.5">
              <button
                v-for="ft in ['All', 'Multi-Card', 'Bonus Ball', 'Extra Ball', 'Jackpot']"
                :key="ft"
                type="button"
                class="px-3 py-1 rounded-full text-xs transition-colors"
                :class="filterState.feature === ft ? 'bg-[#036242] text-white font-semibold' : 'bg-[#202220] text-[#8e9491] hover:text-white'"
                @click="filterState.feature = ft"
              >
                {{ ft }}
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-white/5">
          <button
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-[#8e9491] hover:text-white bg-[#202220]"
            @click="filterState = { theme: 'All', feature: 'All', winningLine: 'All' }"
          >
            Reset
          </button>
          <button
            type="button"
            class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#036242] hover:bg-[#047b53]"
            @click="isFilterOpen = false"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slot-nav-svg {
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slot-nav-svg :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.slot-nav-svg :deep(.fill-text-4),
.slot-nav-svg :deep([class*="fill-text"]),
.slot-nav-svg :deep(path.fill-text-4),
.slot-nav-svg :deep(path:not([fill])) {
  fill: currentColor;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
