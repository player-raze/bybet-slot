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
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  SLOT_CATEGORIES,
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

const activeCategory = ref('home')
const activeProviders = ref<string[]>(['all'])
const searchQuery = ref('')
const isSearchOpen = ref(false)
const isFilterOpen = ref(false)

// Filter state
const filterState = ref({
  theme: 'All',
  feature: 'All',
  winningLine: 'All'
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
  activeCategory.value = key
  if (import.meta.client) {
    if (key === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(`section-${key}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
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

const toggleSearch = (): void => {
  isSearchOpen.value = !isSearchOpen.value
  if (!isSearchOpen.value) {
    searchQuery.value = ''
  }
}

const showGameDetails = (game: any): void => {
  showDemoMessage(`${game.title} (${game.provider}) — RTP: 96.8% • Volatility: High`)
}

const showSectionHelp = (title: string): void => {
  showDemoMessage(`${title} reflects real-time payout statistics and RTP trends across active slot sessions.`)
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

const filteredSections = computed<SlotSection[]>(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const providers = activeProviders.value.map(p => p.toLowerCase())

  return SLOT_SECTIONS.map((section) => {
    let games = section.games

    if (!providers.includes('all')) {
      games = games.filter((g) => providers.includes(g.provider.toLowerCase()))
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

const resetFilters = () => {
  activeProviders.value = ['all']
  searchQuery.value = ''
  filterState.value = {
    theme: 'All',
    feature: 'All',
    winningLine: 'All'
  }
}
</script>

<template>
  <div class="slots-page w-full min-w-0 pb-16 pt-1">
    <!-- Sticky Header (Category Navigation + Provider Filter + Search) -->
    <div class="sticky-header sticky top-[var(--header-height)] z-30 bg-[#000000] -mx-1 px-1 pt-1 pb-2">
      <!-- Top Category Navigation Bar -->
      <header class="category-nav-bar flex items-center justify-between gap-1 rounded-[18px] bg-[#171817] p-1 mb-2.5 overflow-x-auto no-scrollbar shadow-sm">
        <div class="flex items-center gap-1 min-w-0">
          <button
            v-for="cat in SLOT_CATEGORIES"
            :key="cat.key"
            type="button"
            class="category-tab flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-[10px] transition-all cursor-pointer select-none"
            :class="activeCategory === cat.key ? 'category-tab--active bg-[#036242] text-white font-bold shadow-md' : 'text-[#7a807d] '"
            :aria-label="cat.label"
            @click="selectCategory(cat.key)"
          >
            <img
              v-if="cat.iconImage"
              :src="cat.iconImage"
              :alt="cat.label"
              class="h-4 w-4 mb-0.5 object-contain shrink-0"
            />
            <component
              v-else
              :is="categoryIcons[cat.iconName] || House"
              class="h-4 w-4 mb-0.5 shrink-0"
            />
            <span class="text-[11px] leading-tight truncate max-w-[56px] text-center">{{ cat.shortLabel || cat.label }}</span>
          </button>
        </div>

        <!-- Right Chat Toggle -->
        <button
          type="button"
          class="category-tab category-tab--chat flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none shrink-0  pl-2"
          :class="commentContext ? ' text-[#7a807d]' : 'text-[#7a807d]'"
          aria-label="Toggle chat room"
          @click="toggleChat"
        >
          <MessageCircle class="h-4 w-4 mb-0.5 shrink-0" />
          <span class="text-[11px] leading-tight">Chat</span>
        </button>
      </header>

      <!-- Provider Filter Bar -->
      <div class="provider-bar flex items-center justify-between gap-2">
        <!-- Provider Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            v-for="prov in SLOT_PROVIDERS"
            :key="prov.key"
            type="button"
            class="provider-pill px-4 py-1 rounded-full text-[12px] font-semibold transition-all whitespace-nowrap cursor-pointer select-none"
            :class="activeProviders.includes(prov.key) ? 'bg-[#036242] text-white font-bold shadow' : 'bg-[#202220] text-[#9ca3af] '"
            @click="toggleProvider(prov.key)"
          >
            {{ prov.label }}
          </button>
        </div>

        <!-- Actions: Search & Filter -->
        <div class="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            class="action-circle-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            :class="isSearchOpen || searchQuery ? 'bg-[#036242] text-black' : 'bg-[#202220] text-[#9ca3af] hover:text-white hover:bg-[#282a29]'"
            aria-label="Toggle game search"
            @click="toggleSearch"
          >
            <Search class="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            class="action-circle-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            :class="isFilterOpen ? 'bg-[#036242] text-black' : 'bg-[#202220] text-[#9ca3af] hover:text-white hover:bg-[#282a29]'"
            aria-label="Filter games"
            @click="isFilterOpen = !isFilterOpen"
          >
            <SlidersHorizontal class="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <!-- Search Bar Input (collapsible) -->
      <Transition name="fade-slide">
        <div v-if="isSearchOpen" class="mt-2.5 flex items-center gap-2 rounded-full bg-[#202220] border border-white/10 px-3.5 py-2 shadow-inner">
          <Search class="h-4 w-4 text-[#9ca3af] shrink-0" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by game title or provider..."
            class="w-full bg-transparent text-sm text-white placeholder-[#7a807d] focus:outline-none"
            autofocus
          />
          <button
            v-if="searchQuery"
            type="button"
            class="text-[#9ca3af] hover:text-white p-0.5"
            aria-label="Clear search"
            @click="searchQuery = ''"
          >
            <X class="h-4 w-4" />
          </button>
        </div>
      </Transition>
    </div>

    <!-- Empty State if no games match -->
    <div
      v-if="filteredSections.length === 0"
      class="my-12 flex flex-col items-center justify-center gap-3 rounded-full border border-white/5 bg-[#171817] p-8 text-center"
    >
      <Search class="h-10 w-10 text-[#7a807d]" />
      <h3 class="text-base font-semibold text-white">No games found</h3>
      <p class="text-xs text-[#9ca3af]">Try adjusting your search query or provider filter.</p>
      <button
        type="button"
        class="mt-2 rounded-full bg-[#036242] px-4 py-1.5 text-xs font-bold text-black hover:bg-[#00e701] transition-colors"
        @click="resetFilters"
      >
        Reset Filters
      </button>
    </div>

    <!-- Game Sections -->
    <section
      v-for="section in filteredSections"
      :id="`section-${section.id}`"
      :key="section.id"
      class="slot-section mb-6 scroll-mt-[135px]"
    >
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-2.5">
        <div class="flex items-center gap-1.5">
          <img
            v-if="section.iconImage"
            :src="section.iconImage"
            :alt="section.title"
            class="h-[18px] w-[18px] object-contain shrink-0"
          />
          <span v-else class="text-base leading-none select-none">{{ section.emoji }}</span>
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

        <!-- Section Count Pill -->
        <a
          :href="bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="count-badge flex items-center gap-0.5 rounded-full bg-[#202220] hover:bg-[#282a29] px-2.5 py-0.5 text-[11px] font-medium text-[#8e9491] hover:text-white transition-colors cursor-pointer"
        >
          <span>{{ section.count }}</span>
          <ChevronRight class="h-3 w-3" />
        </a>
      </div>

      <!-- Games 6-Column Grid -->
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
  </div>

  <!-- Filter Modal -->
  <Teleport to="body">
    <div v-if="isFilterOpen" class="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm p-4">
      <div class="bg-[#1a1c1a] w-full max-w-md rounded-t-3xl p-6 flex flex-col shadow-2xl border-t border-white/10 animate-slide-up">
        <div class="flex items-center justify-between mb-6">
          <button type="button" class="text-[#9ca3af] hover:text-white text-sm font-medium" @click="isFilterOpen = false">Cancel</button>
          <h3 class="text-lg font-bold text-white">Filter</h3>
          <div class="w-10"></div> <!-- Spacer for centering -->
        </div>

        <!-- Theme Section -->
        <div class="mb-6">
          <h4 class="text-white font-bold mb-3">Theme</h4>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="theme in ['All', 'Myth & History', 'Entertainment', 'Nature', 'Sports', 'Movie', 'Adventures', 'Foods', 'Romantic', 'Anime', 'Science Fiction', 'Others']" 
              :key="theme"
              type="button"
              class="px-3 py-2 rounded-lg text-sm transition-all cursor-pointer select-none"
              :class="filterState.theme === theme ? 'bg-[#036242] text-white font-bold shadow' : 'bg-[#282a29] text-[#9ca3af]'"
              @click="filterState.theme = theme"
            >
              {{ theme }}
            </button>
          </div>
        </div>

        <!-- Features Section -->
        <div class="mb-6">
          <h4 class="text-white font-bold mb-3">Features</h4>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="feat in ['All', 'Buy Spins', 'Prize Pool', 'Auto Game', 'Free Spins']" 
              :key="feat"
              type="button"
              class="px-3 py-2 rounded-lg text-sm transition-all cursor-pointer select-none"
              :class="filterState.feature === feat ? 'bg-[#036242] text-white font-bold shadow' : 'bg-[#282a29] text-[#9ca3af]'"
              @click="filterState.feature = feat"
            >
              {{ feat }}
            </button>
          </div>
        </div>

        <!-- Winning Line Section -->
        <div class="mb-8">
          <h4 class="text-white font-bold mb-3">Winning Line</h4>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="line in ['All', '≤10 lines', '11–99 lines', '≥100 lines']" 
              :key="line"
              type="button"
              class="px-3 py-2 rounded-lg text-sm transition-all cursor-pointer select-none"
              :class="filterState.winningLine === line ? 'bg-[#036242] text-white font-bold shadow' : 'bg-[#282a29] text-[#9ca3af]'"
              @click="filterState.winningLine = line"
            >
              {{ line }}
            </button>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex gap-3">
          <button 
            type="button"
            class="flex-1 py-3 rounded-xl bg-[#282a29] text-white font-bold transition-colors hover:bg-[#323532]"
            @click="filterState = { theme: 'All', feature: 'All', winningLine: 'All' }"
          >
            Reset
          </button>
          <button 
            type="button"
            class="flex-1 py-3 rounded-xl bg-[#036242] text-white font-bold transition-colors hover:bg-[#00e701]"
            @click="isFilterOpen = false"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-action-enter-active,
.fade-action-leave-active {
  transition: opacity 150ms ease;
}

.fade-action-enter-from,
.fade-action-leave-to {
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
</style>
