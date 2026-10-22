<script setup lang="ts">
import {
  House,
  Percent,
  ThumbsUp,
  Crown,
  Medal,
  Sparkles,
  Flame,
  Snowflake,
  Banknote,
  Trophy,
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
  FREQUENTLY_SEARCHED_SLOTS,
  SLOT_CATEGORIES,
  SLOT_CATEGORY_SVGS,
  SLOT_PROVIDERS,
  SLOT_SECTIONS,
  type SlotCategory,
  type SlotGame,
  type SlotSection,
} from '~/data/slots'
import GameCard from '~/components/game-cards/GameCard.vue'
import SlotFilterModal from '~/components/slots/SlotFilterModal.vue'

const categoryIcons: Record<string, Component> = {
  House,
  Percent,
  ThumbsUp,
  Crown,
  Medal,
  Sparkles,
  Flame,
  Snowflake,
  Banknote,
  Trophy,
}

const route = useRoute()
const router = useRouter()

const normalizeCategory = (param: string): string => {
  const p = (param || '').toLowerCase()
  if (p === 'bonus' || p === 'bonuses') return 'bonus'
  if (p === 'max-rpt' || p === 'max-rtp') return 'max-rpt'
  return p
}

const activeCategory = computed(() => normalizeCategory(route.params.category as string || 'bonus'))

const sectionId = computed(() => {
  const cat = activeCategory.value
  if (cat === 'bonus') return 'bonuses'
  if (cat === 'max-rpt') return 'max-rtp'
  return cat
})

const activeProviders = ref<string[]>(['all'])
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
const { addRecentGame } = useRecentGames()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const toggleChat = (): void => {
  if (commentContext.value) {
    closeComments()
  } else {
    openGameComments()
  }
}

const selectCategory = (key: string): void => {
  if (isSearchOpen.value || isSearchSubmitted.value) {
    closeSearch()
  }
  if (key === 'home') {
    router.push('/explore/egames/slots')
  } else {
    router.push(`/explore/egames/slots/${key}`)
  }
}

const toggleProvider = (key: string): void => {
  if (key === 'all') {
    activeProviders.value = ['all']
  } else {
    activeProviders.value = activeProviders.value.filter(p => p !== 'all')
    if (activeProviders.value.includes(key)) {
      activeProviders.value = activeProviders.value.filter(p => p !== key)
      if (activeProviders.value.length === 0) {
        activeProviders.value = ['all']
      }
    } else {
      activeProviders.value.push(key)
    }
  }
}

const openSearch = (): void => {
  isSearchOpen.value = true
  isSearchSubmitted.value = false
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
} = useSearchHistory('bybet_slots_search_history', ['Super'])

const clearSearch = (): void => {
  searchQuery.value = ''
  nextTick(() => {
    searchInputRef.value?.focus()
  })
}

const handleSearchSubmit = (): void => {
  const query = searchQuery.value.trim()
  if (query) {
    isSearchSubmitted.value = true
    isSearchOpen.value = false
    addToHistory(query)
  }
}

const handleInput = (): void => {
  // Stay in search mode while typing
}

const selectFrequentSearch = (term: string): void => {
  searchQuery.value = term
  isSearchSubmitted.value = true
  isSearchOpen.value = false
  addToHistory(term)
}

const resetSearch = (): void => {
  searchQuery.value = ''
  isSearchSubmitted.value = false
  isSearchOpen.value = false
  activeProviders.value = ['all']
}

const showGameDetails = (game: any): void => {
  showDemoMessage(`${game.title} (${game.provider}) — RTP: 96.8% • Volatility: High`)
}

const activeGameId = ref<string | null>(null)

const handleCardClick = (game: any): void => {
  addRecentGame(game)
  if (activeGameId.value === game.id) {
    activeGameId.value = null
  } else {
    activeGameId.value = game.id
  }
}

const handleStartNow = (game: any): void => {
  addRecentGame(game)
  showDemoMessage(`Starting ${game.title} (${game.provider})...`)
  if (import.meta.client) {
    window.open(game.href || bybetRedirectUrl, '_blank')
  }
}

const handleDemo = (game: any): void => {
  addRecentGame(game)
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

watch([searchQuery, activeProviders, activeCategory], () => {
  activeGameId.value = null
})

const searchResults = computed<SlotGame[]>(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return []

  const seen = new Set<string>()
  const results: SlotGame[] = []

  for (const section of SLOT_SECTIONS) {
    for (const game of section.games) {
      const match =
        game.title.toLowerCase().includes(query) ||
        game.provider.toLowerCase().includes(query)
      if (match) {
        const key = `${game.title.toLowerCase()}__${game.provider.toLowerCase()}`
        if (!seen.has(key)) {
          seen.add(key)
          results.push(game)
        }
      }
    }
  }

  return results
})

const isShowingResults = computed(() => {
  return isSearchOpen.value && isSearchSubmitted.value && searchQuery.value.trim().length > 0
})

const displayedGames = computed<SlotGame[]>(() => {
  const providers = activeProviders.value.map(p => p.toLowerCase())
  let games: SlotGame[] = []

  if (activeCategory.value === 'home') {
    // Collect unique games from all sections
    const seen = new Set<string>()
    for (const s of SLOT_SECTIONS) {
      for (const g of s.games) {
        if (!seen.has(g.id)) {
          seen.add(g.id)
          games.push(g)
        }
      }
    }
  } else {
    const sec = SLOT_SECTIONS.find(s => s.id === sectionId.value)
    games = sec ? [...sec.games] : []
  }

  if (!providers.includes('all')) {
    games = games.filter(g => providers.includes(g.provider.toLowerCase()))
  }

  return games
})
</script>

<template>
  <div class="slots-page w-full min-w-0 pb-16 pt-1">
    <!-- Top Bar: Category Tabs & Chat -->
    <div class="sticky-header sticky top-[var(--header-height)] z-30 bg-[#000000] -mx-1 px-1 pt-1 pb-2">
      <header class="top-nav-bar flex items-center justify-between gap-1.5 rounded-lg bg-[#171817] p-1 overflow-x-auto no-scrollbar">
        <div class="flex items-center gap-1 min-w-0">
          <button
            v-for="cat in SLOT_CATEGORIES"
            :key="cat.key"
            type="button"
            class="nav-tab flex flex-col items-center justify-center min-w-[48px] py-1 px-2.5 rounded-md transition-all cursor-pointer select-none"
            :class="activeCategory === cat.key ? 'bg-[#036242] text-white shadow font-semibold' : 'text-[#959799]'"
            :aria-label="cat.label"
            @click="selectCategory(cat.key)"
          >
            <span
              v-if="cat.svg || SLOT_CATEGORY_SVGS[cat.key]"
              class="slot-nav-svg mb-0.5 shrink-0 flex items-center justify-center"
              v-html="cat.svg || SLOT_CATEGORY_SVGS[cat.key]"
            />
            <component
              :is="categoryIcons[cat.iconName]"
              v-else-if="cat.iconName && categoryIcons[cat.iconName]"
              class="h-2 w-2 mb-0.5 shrink-0"
            />
            <span class="text-[10px] leading-tight whitespace-nowrap">{{ cat.shortLabel }}</span>
          </button>
        </div>

        <button
          type="button"
          class="nav-tab nav-tab--chat flex flex-col items-center justify-center min-w-[48px] py-1 px-2 rounded-md transition-all cursor-pointer select-none shrink-0"
          :class="commentContext ? 'text-[#959799]' : 'text-[#959799]'"
          aria-label="Toggle chat room"
          @click="toggleChat"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mb-0.5 shrink-0"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.17487 19.8675L7.9565 18.1075C8.63891 18.2396 9.31883 18.308 10 18.308C15.4956 18.308 20 14.2442 20 9.15401C20 4.06434 15.4954 0 10 0C4.50461 0 0 4.06434 0 9.15401C0 12.0413 1.46921 14.6858 3.88947 16.3963L3.85501 19.0683C3.84572 19.7874 4.5896 20.2378 5.17487 19.8675ZM5.50007 10.9998C6.32849 10.9998 7.00007 10.3282 7.00007 9.49982C7.00007 8.67139 6.32849 7.99982 5.50007 7.99982C4.67164 7.99982 4.00007 8.67139 4.00007 9.49982C4.00007 10.3282 4.67164 10.9998 5.50007 10.9998ZM12.0001 9.49982C12.0001 10.3282 11.3285 10.9998 10.5001 10.9998C9.67164 10.9998 9.00007 10.3282 9.00007 9.49982C9.00007 8.67139 9.67164 7.99982 10.5001 7.99982C11.3285 7.99982 12.0001 8.67139 12.0001 9.49982C12.0001 10.3282 11.3285 10.9998 10.5001 10.9998ZM15.5001 10.9998C16.3285 10.9998 17.0001 10.3282 17.0001 9.49982C17.0001 8.67139 16.3285 7.99982 15.5001 7.99982C14.6716 7.99982 14.0001 8.67139 14.0001 9.49982C14.0001 10.3282 14.6716 10.9998 15.5001 10.9998Z"
            />
          </svg>
          <span class="text-[10px] leading-tight whitespace-nowrap">Chat</span>
        </button>
      </header>

      <!-- Provider Filter Bar & Search / Filter Icons -->
      <div v-if="!isSearchOpen" class="provider-filter-bar flex items-center justify-between gap-2 py-1.5 mb-1 shadow-sm">
        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            v-for="prov in SLOT_PROVIDERS"
            :key="prov.key"
            type="button"
            class="provider-pill px-4 py-1.5 rounded-full text-[12px] whitespace-nowrap transition-all cursor-pointer select-none border border-white/5"
            :class="activeProviders.includes(prov.key) ? 'bg-[#036242] text-white font-bold shadow' : 'bg-[#242625] text-[#8e9491] '"
            @click="toggleProvider(prov.key)"
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
    </div>

    <!-- Search View (Image 1) -->
    <div
      v-if="isSearchOpen"
      class="search-view w-full pt-4 pb-8"
    >
      <!-- Search Input Row -->
      <div class="flex items-center gap-3 mb-6">
        <div class="relative flex-1">
          <input
            ref="searchInputRef"
            v-model="searchQuery"
            type="text"
            placeholder="Enter game name"
            class="w-full h-11 rounded-full bg-[#171817] border border-[#2b2d2b] px-5 text-sm text-white placeholder-[#7a807d] focus:outline-none focus:border-[#036242] transition-colors"
            @input="handleInput"
            @keyup.enter="handleSearchSubmit"
          />
          <button
            v-if="searchQuery"
            type="button"
            class="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7a807d] hover:text-white p-1"
            aria-label="Clear input"
            @click="clearSearch"
          >
            <X class="h-4 w-4" />
          </button>
        </div>
        <button
          type="button"
          class="text-sm text-white hover:text-white/80 px-2 py-1 select-none cursor-pointer font-medium whitespace-nowrap"
          @click="closeSearch"
        >
          Cancel
        </button>
      </div>

      <!-- History Section -->
      <div v-if="searchHistory.length > 0" class="history-section mb-6">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-semibold text-white tracking-wide">History</h3>
          <button
            type="button"
            class="text-[#7a807d] hover:text-white p-1 transition-colors cursor-pointer"
            aria-label="Clear history"
            title="Clear history"
            @click="clearHistory"
          >
            <Trash2 class="h-4 w-4" />
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="item in searchHistory"
            :key="item"
            type="button"
            class="px-3.5 py-1.5 rounded-full bg-[#1b1c1b] text-xs text-[#8e9491] hover:text-white hover:bg-[#242625] transition-colors cursor-pointer"
            @click="selectFrequentSearch(item)"
          >
            {{ item }}
          </button>
        </div>
      </div>

      <!-- Frequently Searched Section -->
      <div class="frequently-searched-section mb-8">
        <div class="text-sm font-semibold text-white tracking-wide mb-3">
          Frequently searched
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="term in FREQUENTLY_SEARCHED_SLOTS"
            :key="term"
            type="button"
            class="px-3.5 py-1.5 rounded-full bg-[#1b1c1b] text-xs text-[#8e9491] hover:text-white hover:bg-[#242625] transition-colors cursor-pointer"
            @click="selectFrequentSearch(term)"
          >
            {{ term }}
          </button>
        </div>
      </div>
    </div>

    <!-- Search Results View (Image 2) -->
    <div v-else-if="isSearchSubmitted" class="search-results-view mb-12">
      <div
        v-if="searchResults.length > 0"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2.5"
      >
        <GameCard
          v-for="game in searchResults"
          :key="game.id"
          :game="game"
          :activeId="activeGameId"
          @select="handleCardClick"
          @info="showGameDetails"
          @start="handleStartNow"
          @demo="handleDemo"
        />
      </div>

      <!-- Empty State for Search Results -->
      <div
        v-else
        class="my-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-[#171817] p-8 text-center"
      >
        <Search class="h-10 w-10 text-[#7a807d]" />
        <h3 class="text-base font-semibold text-white">No games found for "{{ searchQuery }}"</h3>
        <p class="text-xs text-[#9ca3af]">Try adjusting your search query or provider filter.</p>
        <button
          type="button"
          class="mt-2 rounded-full bg-[#036242] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#047b53] transition-colors cursor-pointer"
          @click="resetSearch"
        >
          Reset Search
        </button>
      </div>
    </div>

    <!-- Active Category Games Grid -->
    <div v-else class="slots-games-container">
      <div
        v-if="displayedGames.length > 0"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5"
      >
        <GameCard
          v-for="game in displayedGames"
          :key="game.id"
          :game="game"
          :activeId="activeGameId"
          @select="handleCardClick"
          @info="showGameDetails"
          @start="handleStartNow"
          @demo="handleDemo"
        />
      </div>
      <div v-else class="text-center py-12 text-sm text-[#8e9491]">
        No games available for this selection.
      </div>
    </div>

    <SlotFilterModal
      v-model="filterState"
      v-model:open="isFilterOpen"
    />
  </div>
</template>

<style scoped>
.slot-nav-svg {
  width: 1rem;
  height: 1rem;
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
.slot-nav-svg :deep(.fill-title-button-special),
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
