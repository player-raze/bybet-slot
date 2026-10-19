<script setup lang="ts">
import {
  House,
  Percent,
  ThumbsUp,
  Crown,
  Sparkles,
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
  SLOT_CATEGORIES,
  SLOT_PROVIDERS,
  SLOT_SECTIONS,
  type SlotCategory,
  type SlotGame,
  type SlotSection,
} from '~/data/slots'

const categoryIcons: Record<string, Component> = {
  House,
  Percent,
  ThumbsUp,
  Crown,
  Sparkles,
  Flame,
  Snowflake,
  Trophy,
}

const activeCategory = ref('home')
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

const selectProvider = (key: string): void => {
  activeProvider.value = key
}

const toggleSearch = (): void => {
  isSearchOpen.value = !isSearchOpen.value
  if (!isSearchOpen.value) {
    searchQuery.value = ''
  }
}

const showGameDetails = (game: SlotGame): void => {
  showDemoMessage(`${game.title} (${game.provider}) — RTP: 96.8% • Volatility: High`)
}

const showSectionHelp = (title: string): void => {
  showDemoMessage(`${title} reflects real-time payout statistics and RTP trends across active slot sessions.`)
}

const filteredSections = computed<SlotSection[]>(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const provider = activeProvider.value.toLowerCase()

  return SLOT_SECTIONS.map((section) => {
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
  <div class="slots-page w-full min-w-0 pb-12 pt-1">
    <!-- Top Category Navigation Bar -->
    <header class="category-nav-bar flex items-center justify-between gap-1 rounded-[18px] bg-[#171817] p-1 mb-2.5 overflow-x-auto no-scrollbar shadow-sm">
      <div class="flex items-center gap-1 min-w-0">
        <button
          v-for="cat in SLOT_CATEGORIES"
          :key="cat.key"
          type="button"
          class="category-tab flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-[10px] transition-all cursor-pointer select-none"
          :class="activeCategory === cat.key ? 'category-tab--active bg-[#00c74d] text-[#0a1c13] font-bold shadow-md' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
          :aria-label="cat.label"
          @click="selectCategory(cat.key)"
        >
          <component :is="categoryIcons[cat.iconName] || House" class="h-4 w-4 mb-0.5 shrink-0" />
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
    <div class="provider-bar flex items-center justify-between gap-2 mb-3">
      <!-- Provider Pills -->
      <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        <button
          v-for="prov in SLOT_PROVIDERS"
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
      <div v-if="isSearchOpen" class="mb-4 flex items-center gap-2 rounded-full bg-[#202220] border border-white/10 px-3.5 py-2 shadow-inner">
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
        class="mt-2 rounded-full bg-[#00c74d] px-4 py-1.5 text-xs font-bold text-black hover:bg-[#00e701] transition-colors"
        @click="activeProvider = 'all'; searchQuery = ''"
      >
        Reset Filters
      </button>
    </div>

    <!-- Game Sections -->
    <section
      v-for="section in filteredSections"
      :id="`section-${section.id}`"
      :key="section.id"
      class="slot-section mb-6"
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
          class="game-card group relative flex flex-col cursor-pointer select-none bg-[#141414] rounded-[10px]  p-0 transition-all "
          :aria-label="`Play ${game.title} by ${game.provider}`"
        >
          <!-- Card Image Thumbnail Container -->
          <div class="relative aspect-square w-full rounded-[10px] overflow-hidden bg-[#181a19]  shadow-md">
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

            <!-- Top Right: BUY BONUS Badge -->
            <span
              v-if="game.buyBonus"
              class="absolute top-1.5 right-1.5 rounded bg-[#0d594f]  px-1 py-0.5 text-[8px] font-black text-[#ffd700] text-center leading-tight shadow"
            >
              BUY<br>BONUS
            </span>

            <!-- Top Right: Dual-color RTP Badge -->
            <div
              v-else-if="game.rtpPercent"
              class="absolute top-2 right-2 flex items-center rounded overflow-hidden shadow-md leading-none border border-black/40 text-[9px] font-black"
            >
              <span class="bg-[#00a843] text-white px-1.5 py-0.5">RTP</span>
              <span class="bg-white text-black px-1.5 py-0.5">{{ game.rtpPercent }}</span>
            </div>

            <!-- Top Right: Multiplier Badge (7000X, 3600X, 1200X) -->
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

            <!-- Bottom Left: Multiplier Badge (e.g. 10.000x) -->
            <span
              v-else-if="game.bottomMultiplier"
              class="absolute bottom-2 left-2 rounded-sm bg-[#5c1605]/90 border border-[#9c2b0d]/50 px-1 py-0.2 text-[8.5px] font-bold text-[#ff9f68] leading-none"
            >
              {{ game.bottomMultiplier }}
            </span>

            <!-- Bottom-Right Info Icon -->
            <button
              type="button"
              class="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-black/45 backdrop-blur-xs flex items-center justify-center text-[10px] text-white/80 hover:text-white hover:bg-black/75 transition-colors"
              aria-label="Game Info"
              @click.stop.prevent="showGameDetails(game)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 12 12" fill="none" class="size-3">
  <g clip-path="url(#clip0_35610_114092)">
    <path d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259972 4.80025 -0.11622 6.00665 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0891 10.3295 10.3201 10.9888 9.33342C11.6481 8.34672 12 7.18669 12 6C11.9983 4.40922 11.3656 2.88407 10.2408 1.75921C9.11593 0.63436 7.59078 0.0016799 6 0ZM5.76923 2.76923C5.90616 2.76923 6.04001 2.80983 6.15386 2.88591C6.26771 2.96198 6.35644 3.0701 6.40884 3.1966C6.46124 3.32311 6.47495 3.46231 6.44824 3.5966C6.42152 3.73089 6.35559 3.85425 6.25877 3.95107C6.16195 4.04789 6.03859 4.11383 5.90429 4.14054C5.77 4.16726 5.6308 4.15355 5.5043 4.10115C5.37779 4.04875 5.26967 3.96001 5.1936 3.84616C5.11753 3.73231 5.07692 3.59846 5.07692 3.46154C5.07692 3.27793 5.14986 3.10184 5.2797 2.972C5.40953 2.84217 5.58562 2.76923 5.76923 2.76923ZM6.46154 9.23077C6.21672 9.23077 5.98194 9.13351 5.80883 8.9604C5.63572 8.78729 5.53846 8.55251 5.53846 8.30769V6C5.41606 6 5.29866 5.95137 5.21211 5.86482C5.12555 5.77826 5.07692 5.66087 5.07692 5.53846C5.07692 5.41605 5.12555 5.29866 5.21211 5.2121C5.29866 5.12555 5.41606 5.07692 5.53846 5.07692C5.78328 5.07692 6.01807 5.17417 6.19118 5.34729C6.36429 5.5204 6.46154 5.75518 6.46154 6V8.30769C6.58395 8.30769 6.70134 8.35632 6.7879 8.44287C6.87445 8.52943 6.92308 8.64682 6.92308 8.76923C6.92308 8.89164 6.87445 9.00903 6.7879 9.09559C6.70134 9.18214 6.58395 9.23077 6.46154 9.23077Z" fill="#DDDDDD"/>
  </g>
  <defs>
    <clipPath id="clip0_35610_114092">
      <rect width="12" height="12" fill="white"/>
    </clipPath>
  </defs>
</svg>

            </button>

            <!-- Hover Play Button Overlay -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div class="h-10 w-10 rounded-full bg-[#00e701] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <Play class="h-5 w-5 fill-black ml-0.5" />
              </div>
            </div>
          </div>

          <!-- Bottom Caption: Title & Provider Logo -->
          <div class="mt-1.5 flex items-center justify-between gap-1 px-1">
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
              <svg
                v-else-if="game.provider.toLowerCase().includes('play')"
                viewBox="0 0 24 24"
                class="h-4 w-4 fill-none stroke-current text-white/80 group-hover:text-white shrink-0"
                aria-label="Play'n GO"
              >
                <circle cx="12" cy="13.5" r="7.5" stroke="currentColor" stroke-width="1.2" />
                <path d="M7.5 7.5l2.25 2.5 2.25-2.5 2.25 2.5 2.25-2.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <text x="12" y="15.8" text-anchor="middle" font-size="5" font-weight="900" fill="currentColor" stroke="none">PLAY</text>
              </svg>
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
