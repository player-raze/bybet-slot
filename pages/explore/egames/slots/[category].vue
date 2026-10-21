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
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const toggleChat = (): void => {
  if (commentContext.value) {
    closeComments()
  } else {
    openGameComments()
  }
}

const selectCategory = (key: string): void => {
  if (isSearchOpen.value) {
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
} = useSearchHistory('bybet_slots_search_history', ['Super Ace', 'Fortune Gems 2'])

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
  showDemoMessage(`${game.title} (${game.provider}) — RTP: 96.8% • Volatility: High`)
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
      <header class="top-nav-bar flex items-center justify-between gap-2 rounded-md bg-[#171817] border border-white/5 p-1 overflow-x-auto no-scrollbar shadow-sm">
        <div class="flex items-center gap-1.5 min-w-0">
          <button
            v-for="cat in SLOT_CATEGORIES"
            :key="cat.key"
            type="button"
            class="nav-tab flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none"
            :class="activeCategory === cat.key ? 'bg-[#036242] text-white shadow font-semibold' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
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
              class="h-4 w-4 mb-0.5 shrink-0"
            />
            <span class="text-[11px] leading-tight whitespace-nowrap">{{ cat.shortLabel }}</span>
          </button>
        </div>

        <button
          type="button"
          class="nav-tab nav-tab--chat flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-md transition-all cursor-pointer select-none shrink-0 border-l border-white/5 pl-2"
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
          v-for="prov in SLOT_PROVIDERS"
          :key="prov.key"
          type="button"
          class="provider-pill px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer select-none"
          :class="activeProviders.includes(prov.key) ? 'bg-[#036242] text-white font-bold shadow' : 'bg-[#242625] text-[#8e9491] hover:text-white'"
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
      <div v-if="!isShowingResults" class="space-y-4">
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
              v-for="term in FREQUENTLY_SEARCHED_SLOTS"
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

      <!-- Search Results -->
      <div v-if="isShowingResults" class="results-block">
        <div class="text-xs text-[#8e9491] mb-3">
          Found {{ searchResults.length }} result(s) for "{{ searchQuery }}"
        </div>
        <div
          v-if="searchResults.length > 0"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5"
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
        <div v-else class="text-center py-8 text-sm text-[#8e9491]">
          No games found matching your search.
        </div>
      </div>
    </div>

    <!-- Active Category Games Grid (Layout like Image 1) -->
    <div v-if="!isSearchOpen" class="slots-games-container">
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

    <!-- Filter Modal -->
    <div
      v-if="isFilterOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      @click.self="isFilterOpen = false"
    >
      <div class="w-full max-w-md rounded-2xl bg-[#171817] border border-white/10 p-5 shadow-2xl">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-bold text-white">Filter Games</h3>
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
                v-for="th in ['All', 'Mythology', 'Adventure', 'Classic', 'Fantasy', 'Asian']"
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
                v-for="ft in ['All', 'Free Spins', 'Buy Feature', 'Megaways', 'Jackpot', 'Multiplier']"
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
