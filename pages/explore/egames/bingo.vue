<script setup lang="ts">
import {
  Crown,
  Flame,
  Snowflake,
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
import {
  BINGO_CATEGORIES,
  BINGO_PROVIDERS,
  BINGO_SECTIONS,
  type BingoCategory,
  type BingoGame,
  type BingoSection,
} from '~/data/bingo'

const categoryIcons: Record<string, Component> = {
  Crown,
  Flame,
  Snowflake,
  Trophy,
}

const activeCategory = ref('top')
const activeProvider = ref('all')
const searchQuery = ref('')
const isSearchOpen = ref(false)
const isFilterOpen = ref(false)

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
    const el = document.getElementById(`section-${key}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

const selectProvider = (key: string): void => {
  activeProvider.value = key
}

const toggleSearch = (): void => {
  isSearchOpen.value = !isSearchOpen.value
  if (!isSearchOpen.value) {
    searchQuery.value = ''
  }
}

const showGameDetails = (game: BingoGame): void => {
  showDemoMessage(`${game.title} (${game.provider}) — Volatility: Medium-High • RTP: 97.5%`)
}

const showSectionHelp = (title: string): void => {
  showDemoMessage(`${title} reflects live real-time trends across active bingo games.`)
}

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
</script>

<template>
  <div class="bingo-page w-full min-w-0 pb-12 pt-1">
    <!-- Top Category Navigation Bar -->
    <header class="category-nav-bar flex items-center justify-between gap-1 rounded-2xl bg-[#171817] border border-white/5 p-1 mb-2.5 overflow-x-auto no-scrollbar shadow-sm">
      <div class="flex items-center gap-1 min-w-0">
        <button
          v-for="cat in BINGO_CATEGORIES"
          :key="cat.key"
          type="button"
          class="category-tab flex flex-col items-center justify-center min-w-[62px] py-1 px-3 rounded-xl transition-all cursor-pointer select-none"
          :class="activeCategory === cat.key ? 'category-tab--active bg-[#00c74d] text-[#0a1c13] font-bold shadow-md' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
          :aria-label="cat.label"
          @click="selectCategory(cat.key)"
        >
          <component :is="categoryIcons[cat.iconName] || Crown" class="h-4 w-4 mb-0.5 shrink-0" />
          <span class="text-[11px] leading-tight truncate max-w-[62px] text-center">{{ cat.label }}</span>
        </button>
      </div>

      <!-- Right Chat Toggle -->
      <button
        type="button"
        class="category-tab category-tab--chat flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none shrink-0 border-l border-white/5 pl-2"
        :class="commentContext ? 'text-[#00c74d] font-semibold' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
        aria-label="Toggle chat room"
        @click="toggleChat"
      >
        <MessageCircle class="h-4 w-4 mb-0.5 shrink-0" />
        <span class="text-[11px] leading-tight">Chat</span>
      </button>
    </header>

    <!-- Provider Filter Bar -->
    <div class="provider-bar flex items-center justify-between gap-2 mb-3">
      <!-- Provider Pills -->
      <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        <button
          v-for="prov in BINGO_PROVIDERS"
          :key="prov.key"
          type="button"
          class="provider-pill px-4 py-1 rounded-full text-[12px] font-semibold transition-all whitespace-nowrap cursor-pointer select-none"
          :class="activeProvider === prov.key ? 'bg-[#00c74d] text-black font-bold shadow' : 'bg-[#202220] text-[#9ca3af] hover:text-white hover:bg-[#282a29]'"
          @click="selectProvider(prov.key)"
        >
          {{ prov.label }}
        </button>
      </div>

      <!-- Actions: Search & Filter -->
      <div class="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          class="action-circle-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          :class="isSearchOpen || searchQuery ? 'bg-[#00c74d] text-black' : 'bg-[#202220] text-[#9ca3af] hover:text-white hover:bg-[#282a29]'"
          aria-label="Toggle game search"
          @click="toggleSearch"
        >
          <Search class="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          class="action-circle-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          :class="isFilterOpen ? 'bg-[#00c74d] text-black' : 'bg-[#202220] text-[#9ca3af] hover:text-white hover:bg-[#282a29]'"
          aria-label="Filter games"
          @click="isFilterOpen = !isFilterOpen"
        >
          <SlidersHorizontal class="h-3.5 w-3.5" />
        </button>
      </div>
    </div>

    <!-- Search Bar Input (collapsible) -->
    <Transition name="fade-slide">
      <div v-if="isSearchOpen" class="mb-4 flex items-center gap-2 rounded-xl bg-[#202220] border border-white/10 px-3.5 py-2 shadow-inner">
        <Search class="h-4 w-4 text-[#9ca3af] shrink-0" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search bingo games by title or provider..."
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

    <!-- Empty State if no games match -->
    <div
      v-if="filteredSections.length === 0"
      class="my-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-[#171817] p-8 text-center"
    >
      <Search class="h-10 w-10 text-[#7a807d]" />
      <h3 class="text-base font-semibold text-white">No bingo games found</h3>
      <p class="text-xs text-[#9ca3af]">Try adjusting your search query or provider filter.</p>
      <button
        type="button"
        class="mt-2 rounded-full bg-[#00c74d] px-4 py-1.5 text-xs font-bold text-black hover:bg-[#00e701] transition-colors"
        @click="activeProvider = 'all'; searchQuery = ''"
      >
        Reset Filters
      </button>
    </div>

    <!-- Bingo Sections: Top, Hot Games, Cold Games, Max RTP -->
    <section
      v-for="section in filteredSections"
      :id="`section-${section.id}`"
      :key="section.id"
      class="bingo-section mb-6"
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
        <a
          v-for="game in section.games"
          :key="game.id"
          :href="game.href || bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="game-card group relative flex flex-col cursor-pointer select-none"
          :aria-label="`Play ${game.title} by ${game.provider}`"
        >
          <!-- Card Image Thumbnail Container -->
          <div class="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a19] border border-white/5 shadow-md">
            <img
              :src="game.image"
              :alt="game.title"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />

            <!-- Top Left: NEW Badge -->
            <span
              v-if="game.badge === 'NEW'"
              class="absolute top-2 left-2 rounded bg-[#00c74d] text-black font-black text-[9px] px-1.5 py-0.5 leading-none shadow tracking-wide"
            >
              NEW
            </span>

            <!-- Top Right: Dual-color RTP Badge -->
            <div
              v-if="game.rtpPercent"
              class="absolute top-2 right-2 flex items-center rounded overflow-hidden shadow-md leading-none border border-black/40 text-[9px] font-black"
            >
              <span class="bg-[#00a843] text-white px-1.5 py-0.5">RTP</span>
              <span class="bg-white text-black px-1.5 py-0.5">{{ game.rtpPercent }}</span>
            </div>

            <!-- Top Right: Multiplier Badge (5000X, 3200X) -->
            <span
              v-else-if="game.badge && game.badge !== 'NEW'"
              class="absolute top-2 right-2 text-[#ffd700] font-black text-[12px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-none tracking-tight"
            >
              {{ game.badge }}
            </span>

            <!-- Top Right: Live Player Count Badge -->
            <span
              v-else-if="game.livePlayers"
              class="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-xs px-1.5 py-0.5 text-[10px] font-medium text-white/90"
            >
              <User class="h-2.5 w-2.5 text-white/70" />
              <span>{{ game.livePlayers }}</span>
            </span>

            <!-- Bottom Left: Hot Percent Badge -->
            <span
              v-if="game.hotPercent"
              class="absolute bottom-2 left-2 flex items-center gap-0.5 rounded-full bg-black/60 backdrop-blur-xs px-1.5 py-0.5 text-[10px] font-bold text-[#ffa63d] leading-none"
            >
              <span>🔥</span>
              <span>{{ game.hotPercent }}</span>
            </span>

            <!-- Bottom Left: Cold Percent Badge -->
            <span
              v-else-if="game.coldPercent"
              class="absolute bottom-2 left-2 flex items-center gap-0.5 rounded-full bg-black/60 backdrop-blur-xs px-1.5 py-0.5 text-[10px] font-bold text-[#62d0ff] leading-none"
            >
              <span>❄️</span>
              <span>{{ game.coldPercent }}</span>
            </span>

            <!-- Bottom-Right Info Icon -->
            <button
              type="button"
              class="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-black/45 backdrop-blur-xs flex items-center justify-center text-[10px] text-white/80 hover:text-white hover:bg-black/75 transition-colors"
              aria-label="Game Info"
              @click.stop.prevent="showGameDetails(game)"
            >
              ⓘ
            </button>

            <!-- Hover Play Button Overlay -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div class="h-10 w-10 rounded-full bg-[#00e701] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <Play class="h-5 w-5 fill-black ml-0.5" />
              </div>
            </div>
          </div>

          <!-- Bottom Caption: Title & Provider Logo -->
          <div class="mt-1.5 flex items-center justify-between gap-1 px-0.5">
            <span class="truncate text-[12px] font-semibold text-[#e5e7eb] group-hover:text-white transition-colors">
              {{ game.title }}
            </span>

            <div class="flex items-center shrink-0">
              <img
                v-if="game.providerLogo"
                :src="game.providerLogo"
                :alt="game.provider"
                class="h-3.5 max-w-[36px] object-contain opacity-80 group-hover:opacity-100 transition-opacity brightness-125"
                loading="lazy"
                decoding="async"
              />
              <span
                v-else
                class="text-[10px] font-bold text-[#8e9491] uppercase tracking-wider"
              >
                {{ game.provider }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
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

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
