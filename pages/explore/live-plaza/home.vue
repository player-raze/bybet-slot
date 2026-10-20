<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  ChevronRight,
  Lock,
  MoreHorizontal,
  Star,
  Unlock,
} from 'lucide-vue-next'
import {
  POPULAR_GAMES,
  LIVE_PLAZA_PREDICTIONS,
  type PopularGame,
  type LivePlazaPrediction,
  type LivePlazaPredictionOption,
} from '~/data/live-plaza'

useSeoMeta({
  title: 'Live Plaza — Popular Games & Expert Predictions | ByBet',
  description: 'Explore live plaza popular sports games and expert predictions with real-time hit rates, winning forecasts, and match odds.',
  ogTitle: 'Live Plaza — Popular Games & Expert Predictions | ByBet',
  ogDescription: 'Explore live plaza popular sports games and expert predictions with real-time hit rates, winning forecasts, and match odds.',
})

const { showDemoMessage } = useDemoInteraction()
const router = useRouter()

const popularSport = ref<'all' | 'basketball' | 'soccer'>('all')
const predictionsSport = ref<'all' | 'basketball' | 'soccer'>('all')
const sortByHitRateDesc = ref(true)
const unlockedIds = ref<Set<string>>(new Set())
const carouselContainer = ref<HTMLElement | null>(null)

const filteredPopularGames = computed(() => {
  if (popularSport.value === 'all') {
    return POPULAR_GAMES
  }
  return POPULAR_GAMES.filter(g => g.sport === popularSport.value)
})

const filteredPredictions = computed(() => {
  let list = [...LIVE_PLAZA_PREDICTIONS]

  if (predictionsSport.value !== 'all') {
    list = list.filter(item => item.sport === predictionsSport.value)
  }

  if (sortByHitRateDesc.value) {
    list.sort((a, b) => b.hitRate - a.hitRate)
  } else {
    list.sort((a, b) => a.hitRate - b.hitRate)
  }

  return list
})

const scrollCarousel = (direction: 'left' | 'right'): void => {
  if (!carouselContainer.value) return
  const amount = direction === 'right' ? 240 : -240
  carouselContainer.value.scrollBy({ left: amount, behavior: 'smooth' })
}

const toggleHitRateSort = (): void => {
  sortByHitRateDesc.value = !sortByHitRateDesc.value
  showDemoMessage(sortByHitRateDesc.value ? 'Sorted by Highest Hit Rate' : 'Sorted by Lowest Hit Rate')
}

const handlePredictClick = (): void => {
  router.push('/explore/live-plaza/expert-predictions')
}

const handleGameClick = (game: PopularGame): void => {
  showDemoMessage(`Selected ${game.homeTeam.name} vs ${game.awayTeam.name} (${game.league})`)
}

const handleUnlock = (prediction: LivePlazaPrediction): void => {
  if (unlockedIds.value.has(prediction.id)) {
    showDemoMessage(`Already unlocked predictions from ${prediction.predictorName}`)
    return
  }
  unlockedIds.value.add(prediction.id)
  showDemoMessage(`Unlocked expert prediction by ${prediction.predictorName}!`)
}

const handleOddClick = (prediction: LivePlazaPrediction, option: LivePlazaPredictionOption): void => {
  showDemoMessage(`Selected ${prediction.homeTeam} vs ${prediction.awayTeam} [${option.label} @ ${option.odd}]`)
}
</script>

<template>
  <div class="live-plaza-home-page w-full min-w-0 pb-16 pt-1 text-white">
    <!-- Top Header Bar -->
    <header class="live-plaza-top-bar flex items-center rounded-xl bg-[#1c2321] px-4 py-2.5 mb-2 shadow-sm">
      <h1 class="text-sm sm:text-[15px] font-bold text-white tracking-tight">
        Live Plaza
      </h1>
    </header>

    <!-- Section 1: Popular Games -->
    <section class="popular-games-section rounded-xl bg-[#141414] p-3.5 sm:p-4 mb-2 shadow-sm">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-[15px] font-bold text-white">
          Popular Games
        </h2>
        <button
          type="button"
          class="predict-header-btn flex items-center gap-1.5 rounded-full bg-[#1e2421] border border-white/10 px-3 py-1 text-xs font-semibold text-white/90 hover:bg-[#252f2a] transition-all cursor-pointer"
          @click="handlePredictClick"
        >
          <span>Predict</span>
          <MoreHorizontal class="h-3.5 w-3.5" />
        </button>
      </div>

      <!-- Filter Chips -->
      <div class="flex items-center gap-2 mb-3 overflow-x-auto no-scrollbar">
        <button
          type="button"
          class="filter-pill flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer select-none"
          :class="popularSport === 'all' ? 'bg-[#036242] text-white shadow' : 'bg-transparent text-[#8e9491] hover:text-white'"
          @click="popularSport = 'all'"
        >
          <span class="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#32d49a] text-[#041a10]">
            <Star class="h-2.5 w-2.5 fill-current" />
          </span>
          <span>All</span>
        </button>
        <button
          type="button"
          class="filter-pill flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer select-none"
          :class="popularSport === 'basketball' ? 'bg-[#036242] text-white shadow' : 'bg-transparent text-[#8e9491] hover:text-white'"
          @click="popularSport = 'basketball'"
        >
          <span>🏀</span>
          <span>Basketball</span>
        </button>
        <button
          type="button"
          class="filter-pill flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer select-none"
          :class="popularSport === 'soccer' ? 'bg-[#036242] text-white shadow' : 'bg-transparent text-[#8e9491] hover:text-white'"
          @click="popularSport = 'soccer'"
        >
          <span>⚽</span>
          <span>Soccer</span>
        </button>
      </div>

      <!-- Carousel Row -->
      <div class="relative group">
        <div
          ref="carouselContainer"
          class="popular-carousel flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          <div
            v-for="game in filteredPopularGames"
            :key="game.id"
            class="popular-game-card flex flex-col justify-between shrink-0 min-w-[205px] max-w-[215px] rounded-lg bg-[#141414] border border-[#232725] p-2.5 hover:border-white/20 transition-all cursor-pointer select-none"
            @click="handleGameClick(game)"
          >
            <!-- Card Header -->
            <div class="flex items-center justify-between gap-1 mb-2">
              <span class="text-[11px] text-[#7a807d] truncate font-normal">
                {{ game.date }} {{ game.time }} {{ game.league }}
              </span>
              <span class="rounded bg-[#202522] border border-white/5 px-1.5 py-0.5 text-[10px] font-semibold text-white/90 shrink-0">
                Predict {{ game.predictCount }}
              </span>
            </div>

            <!-- Teams -->
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <img
                  :src="game.homeTeam.logo"
                  :alt="game.homeTeam.name"
                  class="h-3.5 w-3.5 rounded-full object-contain shrink-0"
                >
                <span class="text-xs font-medium text-white truncate">{{ game.homeTeam.name }}</span>
              </div>
              <div class="flex items-center gap-2">
                <img
                  :src="game.awayTeam.logo"
                  :alt="game.awayTeam.name"
                  class="h-3.5 w-3.5 rounded-full object-contain shrink-0"
                >
                <span class="text-xs font-medium text-white truncate">{{ game.awayTeam.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Right Arrow Button -->
        <button
          type="button"
          class="carousel-nav-btn absolute right-0 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1c2220]/90 border border-white/10 text-white shadow-lg hover:bg-[#252f2a] transition-all cursor-pointer"
          aria-label="Scroll right"
          @click="scrollCarousel('right')"
        >
          <ChevronRight class="h-4 w-4" />
        </button>
      </div>
    </section>

    <!-- Section 2: Expert Predictions -->
    <section class="expert-predictions-section rounded-xl bg-[#141414] p-3.5 sm:p-4 mb-2 shadow-sm">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-[15px] font-bold text-white">
          Expert Predictions
        </h2>
        <button
          type="button"
          class="hit-sort-btn flex items-center gap-1.5 rounded-full bg-[#1e2421] border border-white/10 px-3 py-1 text-xs font-semibold text-white/90 hover:bg-[#252f2a] transition-all cursor-pointer"
          @click="toggleHitRateSort"
        >
          <span>Hit</span>
          <MoreHorizontal class="h-3.5 w-3.5" />
        </button>
      </div>

      <!-- Filter Chips -->
      <div class="flex items-center gap-2 mb-3.5 overflow-x-auto no-scrollbar">
        <button
          type="button"
          class="filter-pill flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer select-none"
          :class="predictionsSport === 'all' ? 'bg-[#036242] text-white shadow' : 'bg-transparent text-[#8e9491] hover:text-white'"
          @click="predictionsSport = 'all'"
        >
          <span class="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#32d49a] text-[#041a10]">
            <Star class="h-2.5 w-2.5 fill-current" />
          </span>
          <span>All</span>
        </button>
        <button
          type="button"
          class="filter-pill flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer select-none"
          :class="predictionsSport === 'basketball' ? 'bg-[#036242] text-white shadow' : 'bg-transparent text-[#8e9491] hover:text-white'"
          @click="predictionsSport = 'basketball'"
        >
          <span>🏀</span>
          <span>Basketball</span>
        </button>
        <button
          type="button"
          class="filter-pill flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer select-none"
          :class="predictionsSport === 'soccer' ? 'bg-[#036242] text-white shadow' : 'bg-transparent text-[#8e9491] hover:text-white'"
          @click="predictionsSport = 'soccer'"
        >
          <span>⚽</span>
          <span>Soccer</span>
        </button>
      </div>

      <!-- Predictions 2-Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
        <article
          v-for="item in filteredPredictions"
          :key="item.id"
          class="prediction-card rounded-xl bg-[#141414] border border-[#232725] p-3.5 flex flex-col justify-between hover:border-white/15 transition-all"
        >
          <!-- Author & Hit Rate Header -->
          <div class="flex items-start justify-between mb-2.5">
            <div class="flex items-center gap-2.5">
              <img
                :src="item.predictorAvatar"
                :alt="item.predictorName"
                class="h-8 w-8 rounded-full object-cover border border-white/10 shrink-0"
              >
              <div class="flex flex-col">
                <span class="text-sm font-bold text-white leading-tight">{{ item.predictorName }}</span>
                <span class="text-[11px] text-[#7a807d] mt-0.5">{{ item.publishedAgo }}</span>
              </div>
            </div>

            <div class="flex flex-col items-end gap-1.5">
              <div class="flex items-baseline gap-1">
                <span class="text-[11px] text-[#7a807d]">Hit Rate</span>
                <span class="text-lg sm:text-xl font-extrabold text-[#32d49a] tracking-tight leading-none">
                  {{ item.hitRate % 1 === 0 ? item.hitRate : item.hitRate.toFixed(2) }}<small class="text-xs font-bold ml-0.5">%</small>
                </span>
              </div>

              <button
                type="button"
                class="unlock-btn flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white/90 hover:border-[#32d49a] hover:text-[#32d49a] transition-all cursor-pointer"
                :class="{ 'border-[#32d49a] text-[#32d49a]': unlockedIds.has(item.id) }"
                @click="handleUnlock(item)"
              >
                <Unlock v-if="unlockedIds.has(item.id)" class="h-3 w-3 text-[#32d49a]" />
                <Lock v-else class="h-3 w-3 text-white" />
                <span>{{ unlockedIds.has(item.id) ? 'Unlocked' : 'Unlock' }}</span>
              </button>
            </div>
          </div>

          <!-- Inner Match Box -->
          <div class="match-box rounded-lg bg-[#0e1210] p-2.5 sm:p-3 flex flex-col gap-2">
            <!-- Match Header -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-xs text-[#9eaea5]">
                <span class="rounded bg-[#32d49a]/10 border border-[#32d49a]/40 px-1.5 py-0.5 text-[10px] font-bold text-[#32d49a]">
                  {{ item.marketType }}
                </span>
                <span>{{ item.sport === 'basketball' ? '🏀' : '⚽' }}</span>
                <span class="font-medium text-white/80">{{ item.league }}</span>
                <span class="text-[#7a807d]">{{ item.matchTime }}</span>
              </div>
              <ChevronRight class="h-3.5 w-3.5 text-[#555a57]" />
            </div>

            <!-- Teams -->
            <div class="flex items-center justify-between text-xs sm:text-[13px] font-semibold text-white py-0.5">
              <span class="text-right flex-1 truncate pr-2">{{ item.homeTeam }}</span>
              <span class="text-xs font-normal text-[#7a807d] px-1">vs</span>
              <span class="text-left flex-1 truncate pl-2">{{ item.awayTeam }}</span>
            </div>

            <!-- Odds Row -->
            <div class="grid grid-cols-2 gap-2 mt-0.5">
              <button
                v-for="(opt, idx) in item.options"
                :key="idx"
                type="button"
                class="odd-btn flex items-center justify-between rounded-md bg-[#232323] hover:bg-[#2b2b2b] px-3 py-1.5 transition-all cursor-pointer border border-white/5 active:scale-[0.98]"
                @click="handleOddClick(item, opt)"
              >
                <span class="text-xs text-[#9eaea5] font-medium">{{ opt.label }}</span>
                <span class="text-xs font-bold text-white">{{ opt.odd }}</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.live-plaza-home-page {
  max-width: 100%;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
