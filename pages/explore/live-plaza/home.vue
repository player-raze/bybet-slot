<script setup lang="ts">
import { ChevronRight, MoreHorizontal } from 'lucide-vue-next'
import {
  EXPERT_PREDICTIONS,
  type Prediction,
  type PredictionOption,
} from '~/data/predictions'
import {
  POPULAR_GAMES,
  type PopularGame,
} from '~/data/live-plaza'
import type { LivePlazaSportFilter } from '~/components/live-plaza/LivePlazaSportFilters.vue'

useSeoMeta({
  title: 'Live Plaza — Popular Games & Expert Predictions | ByBet',
  description: 'Explore live plaza popular sports games and expert predictions with real-time hit rates, winning forecasts, and match odds.',
  ogTitle: 'Live Plaza — Popular Games & Expert Predictions | ByBet',
  ogDescription: 'Explore live plaza popular sports games and expert predictions with real-time hit rates, winning forecasts, and match odds.',
})

const { showDemoMessage } = useDemoInteraction()
const router = useRouter()

const popularSport = ref<LivePlazaSportFilter>('all')
const predictionsSport = ref<LivePlazaSportFilter>('all')
const sortByHitRateDesc = ref(false)
const unlockedIds = ref<Set<string>>(new Set())
const carouselContainer = ref<HTMLElement | null>(null)

const filteredPopularGames = computed(() => {
  if (popularSport.value === 'all') return POPULAR_GAMES
  return POPULAR_GAMES.filter(game => game.sport === popularSport.value)
})

const filteredPredictions = computed(() => {
  const predictions = predictionsSport.value === 'all'
    ? [...EXPERT_PREDICTIONS]
    : EXPERT_PREDICTIONS.filter(item => item.sport === predictionsSport.value)

  if (sortByHitRateDesc.value) {
    predictions.sort((a, b) => b.hitRate - a.hitRate)
  }

  return predictions
})

const scrollCarousel = (): void => {
  carouselContainer.value?.scrollBy({ left: 275, behavior: 'smooth' })
}

const togglePredictionSort = (): void => {
  sortByHitRateDesc.value = !sortByHitRateDesc.value
  showDemoMessage(sortByHitRateDesc.value ? 'Sorted by highest hit rate' : 'Showing win streak order')
}

const handlePredictClick = (): void => {
  router.push('/explore/live-plaza/expert-predictions')
}

const handleGameClick = (game: PopularGame): void => {
  showDemoMessage(`Selected ${game.homeTeam.name} vs ${game.awayTeam.name} (${game.league})`)
}

const handleUnlock = (prediction: Prediction): void => {
  if (unlockedIds.value.has(prediction.id)) {
    showDemoMessage(`Already unlocked predictions from ${prediction.predictorName}`)
    return
  }

  unlockedIds.value.add(prediction.id)
  showDemoMessage(`Unlocked expert prediction by ${prediction.predictorName}!`)
}

const handleOddClick = (prediction: Prediction, option: PredictionOption): void => {
  showDemoMessage(`Selected ${prediction.homeTeam} vs ${prediction.awayTeam} [${option.label} @ ${option.odd}]`)
}
</script>

<template>
  <div class="live-plaza-page">
    <SeoHeader
      sticky
      title="Live Plaza"
      description="Live Plaza on ByBet Philippines. Real-time game streaming, popular matches, and expert sports predictions."
      :show-back="false"
      :show-flag="false"
    />

    <section class="popular-panel" aria-labelledby="popular-games-title">
      <div class="panel-heading">
        <h2 id="popular-games-title">Popular Games</h2>
        <button type="button" class="panel-action" @click="handlePredictClick">
          <span>Predict</span>
          <MoreHorizontal :size="15" aria-hidden="true" />
        </button>
      </div>

      <div class="panel-filters">
        <LivePlazaSportFilters v-model="popularSport" />
      </div>

      <div class="popular-games-wrap">
        <div ref="carouselContainer" class="popular-games-list">
          <button
            v-for="game in filteredPopularGames"
            :key="game.id"
            type="button"
            class="popular-game"
            @click="handleGameClick(game)"
          >
            <span class="popular-game__topline">
              <span class="popular-game__meta">{{ game.date }} {{ game.time }}&nbsp; {{ game.league }}</span>
              <span class="popular-game__predict">Predict {{ game.predictCount }}</span>
            </span>

            <span class="popular-game__teams">
              <span class="popular-game__team">
                <img :src="game.homeTeam.logo" :alt="game.homeTeam.name" width="18" height="18">
                <span>{{ game.homeTeam.name }}</span>
              </span>
              <span class="popular-game__team">
                <img :src="game.awayTeam.logo" :alt="game.awayTeam.name" width="18" height="18">
                <span>{{ game.awayTeam.name }}</span>
              </span>
            </span>
          </button>
        </div>

        <button
          type="button"
          class="popular-games-next"
          aria-label="Show more popular games"
          @click="scrollCarousel"
        >
          <ChevronRight :size="16" :stroke-width="2.5" />
        </button>
      </div>
    </section>

    <section class="predictions-block" aria-labelledby="expert-predictions-title">
      <div class="predictions-toolbar">
        <div class="panel-heading">
          <h2 id="expert-predictions-title">Expert Predictions</h2>
          <button type="button" class="panel-action" @click="togglePredictionSort">
            <span>Win Streak</span>
            <MoreHorizontal :size="15" aria-hidden="true" />
          </button>
        </div>

        <div class="panel-filters">
          <LivePlazaSportFilters v-model="predictionsSport" />
        </div>
      </div>

      <div class="predictions-grid">
        <LivePlazaPredictionCard
          v-for="prediction in filteredPredictions"
          :key="prediction.id"
          :prediction="prediction"
          :unlocked="unlockedIds.has(prediction.id)"
          @unlock="handleUnlock"
          @select-odd="handleOddClick"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.live-plaza-page {
  width: 100%;
  min-width: 0;
  padding-top: 0.16rem;
  padding-bottom: 2rem;
  color: #ffffff;
}

.popular-panel,
.predictions-toolbar {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.025);
  border-radius: 12px;
  background: #141414;
}

.popular-panel {
  margin-bottom: 8px;
}

.panel-heading {
  display: flex;
  min-height: 47px;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-bottom: 1px solid #2b2b2b;
}

.panel-heading h2 {
  margin: 0;
  color: #f7f7f7;
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
}

.panel-action {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  color: #e8e8e8;
  font-size: 11px;
  font-weight: 500;
  background: #242424;
  cursor: pointer;
  gap: 4px;
  transition: background-color 150ms ease;
}

.panel-action:hover {
  background: #303030;
}

.panel-filters {
  display: flex;
  min-height: 46px;
  align-items: center;
  padding: 0 11px;
}

.popular-games-wrap {
  position: relative;
  border-top: 1px solid #2b2b2b;
}

.popular-games-list {
  display: flex;
  min-width: 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.popular-games-list::-webkit-scrollbar {
  display: none;
}

.popular-game {
  display: flex;
  width: 265px;
  min-width: 265px;
  min-height: 111px;
  flex-direction: column;
  align-items: stretch;
  padding: 14px 12px 12px;
  border: 0;
  border-right: 1px solid #2b2b2b;
  color: #ffffff;
  text-align: left;
  background: transparent;
  cursor: pointer;
  gap: 13px;
  transition: background-color 150ms ease;
}

.popular-game:hover {
  background: rgba(255, 255, 255, 0.025);
}

.popular-game__topline,
.popular-game__team {
  display: flex;
  min-width: 0;
  align-items: center;
}

.popular-game__topline {
  justify-content: space-between;
  gap: 6px;
}

.popular-game__meta {
  overflow: hidden;
  min-width: 0;
  color: #7f827f;
  font-size: 10px;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.popular-game__predict {
  flex: 0 0 auto;
  padding: 3px 5px;
  border-radius: 4px;
  color: #eeeeee;
  font-size: 10px;
  font-weight: 800;
  line-height: 1;
  background: #2a2a2a;
}

.popular-game__teams {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.popular-game__team {
  color: #f3f3f3;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  gap: 6px;
}

.popular-game__team img {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  border-radius: 50%;
  object-fit: contain;
}

.popular-game__team span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.popular-games-next {
  display: grid;
  position: absolute;
  top: 50%;
  right: 12px;
  width: 27px;
  height: 27px;
  place-items: center;
  padding: 0;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  color: #eeeeee;
  background: #242424;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.42);
  cursor: pointer;
}

.predictions-block {
  min-width: 0;
}

.predictions-toolbar {
  margin-bottom: 8px;
}

.predictions-grid {
  display: grid;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

@media (max-width: 74rem) {
  .popular-game {
    width: 240px;
    min-width: 240px;
  }
}

@media (max-width: 55rem) {
  .predictions-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 47.99rem) {
  .live-plaza-page {
    padding-top: 0;
    padding-bottom: 5rem;
  }

  .panel-heading {
    min-height: 44px;
  }

  .panel-heading h2 {
    font-size: 14px;
  }

  .panel-filters {
    min-height: 42px;
  }

  .popular-game {
    width: 225px;
    min-width: 225px;
  }
}
</style>
