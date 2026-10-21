<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  ChevronRight,
  LayoutGrid,
  Lock,
  MoreHorizontal,
  Star,
  Unlock,
} from 'lucide-vue-next'
import {
  EXPERT_PREDICTIONS,
  PREDICTORS,
  type Prediction,
  type Predictor,
} from '~/data/predictions'

useSeoMeta({
  title: 'Expert Predictions | Live Plaza | Bybet',
  description: 'Follow expert predictions, winning tips, and real-time sports forecasts with high hit rates.',
  ogTitle: 'Expert Predictions | Live Plaza | Bybet',
  ogDescription: 'Follow expert predictions, winning tips, and real-time sports forecasts with high hit rates.',
})

const { showDemoMessage } = useDemoInteraction()

const selectedSport = ref<'all' | 'basketball' | 'soccer'>('all')
const selectedPredictorId = ref<string | null>(null)
const sortByHitRateDesc = ref(true)
const unlockedPredictionIds = ref<Set<string>>(new Set())

const filteredPredictions = computed(() => {
  let list = [...EXPERT_PREDICTIONS]

  if (selectedSport.value !== 'all') {
    list = list.filter(item => item.sport === selectedSport.value)
  }

  if (selectedPredictorId.value) {
    list = list.filter(item => item.predictorId === selectedPredictorId.value)
  }

  if (sortByHitRateDesc.value) {
    list.sort((a, b) => b.hitRate - a.hitRate)
  } else {
    list.sort((a, b) => a.hitRate - b.hitRate)
  }

  return list
})

const selectSportFilter = (sport: 'all' | 'basketball' | 'soccer'): void => {
  selectedSport.value = sport
}

const selectPredictor = (predictorId: string | null): void => {
  if (selectedPredictorId.value === predictorId) {
    selectedPredictorId.value = null
  } else {
    selectedPredictorId.value = predictorId
  }
}

const toggleHitRateSort = (): void => {
  sortByHitRateDesc.value = !sortByHitRateDesc.value
  showDemoMessage(sortByHitRateDesc.value ? 'Sorted by Highest Hit Rate' : 'Sorted by Lowest Hit Rate')
}

const handleUnlock = (prediction: Prediction): void => {
  if (unlockedPredictionIds.value.has(prediction.id)) {
    showDemoMessage(`Already unlocked predictions from ${prediction.predictorName}`)
    return
  }
  unlockedPredictionIds.value.add(prediction.id)
  showDemoMessage(`Unlocked expert prediction by ${prediction.predictorName}!`)
}

const handleOddClick = (prediction: Prediction, option: { label: string; odd: string }): void => {
  showDemoMessage(`Selected ${prediction.homeTeam} vs ${prediction.awayTeam} [${option.label} @ ${option.odd}]`)
}
</script>

<template>
  <div class="predictions-page">
    <div class="predictions-container">
      <!-- Section 1: Predict (Top Avatars Rail) -->
      <section class="predict-card">
        <h2 class="predict-card__title">Predict</h2>
        <div class="predict-rail">
          <!-- All Button -->
          <button
            type="button"
            class="predict-rail__item"
            :class="{ 'predict-rail__item--active': selectedPredictorId === null }"
            @click="selectPredictor(null)"
          >
            <div class="predict-rail__squircle">
              <LayoutGrid class="w-6 h-6" />
            </div>
            <span class="predict-rail__name">All</span>
          </button>

          <!-- Predictor Avatars -->
          <button
            v-for="predictor in PREDICTORS"
            :key="predictor.id"
            type="button"
            class="predict-rail__item"
            :class="{ 'predict-rail__item--active': selectedPredictorId === predictor.id }"
            @click="selectPredictor(predictor.id)"
          >
            <div class="predict-rail__avatar-wrapper">
              <img
                :src="predictor.avatar"
                :alt="predictor.name"
                class="predict-rail__avatar-img"
              />
              <span
                v-if="predictor.badgeCount"
                class="predict-rail__badge"
              >
                {{ predictor.badgeCount }}
              </span>
            </div>
            <span class="predict-rail__name">{{ predictor.name }}</span>
          </button>
        </div>
      </section>

      <!-- Section 2: Expert Predictions & Filter Bar -->
      <section class="predictions-section">
        <div class="predictions-section__header">
          <h2 class="predictions-section__title">Expert Predictions</h2>
          <button
            type="button"
            class="predictions-section__sort-btn"
            @click="toggleHitRateSort"
          >
            <span>Hit</span>
            <MoreHorizontal class="w-4 h-4" />
          </button>
        </div>

        <!-- Sport Filter Chips -->
        <div class="filter-chips">
          <button
            type="button"
            class="filter-chip"
            :class="{ 'filter-chip--active': selectedSport === 'all' }"
            @click="selectSportFilter('all')"
          >
            <Star class="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>All</span>
          </button>
          <button
            type="button"
            class="filter-chip"
            :class="{ 'filter-chip--active': selectedSport === 'basketball' }"
            @click="selectSportFilter('basketball')"
          >
            <span class="filter-chip__icon">🏀</span>
            <span>Basketball</span>
          </button>
          <button
            type="button"
            class="filter-chip"
            :class="{ 'filter-chip--active': selectedSport === 'soccer' }"
            @click="selectSportFilter('soccer')"
          >
            <span class="filter-chip__icon">⚽</span>
            <span>Soccer</span>
          </button>
        </div>

        <!-- Predictions Grid -->
        <div class="predictions-grid">
          <article
            v-for="item in filteredPredictions"
            :key="item.id"
            class="prediction-card"
          >
            <!-- Card Header: Predictor & Hit Rate -->
            <div class="prediction-card__header">
              <div class="prediction-card__author">
                <img
                  :src="item.predictorAvatar"
                  :alt="item.predictorName"
                  class="prediction-card__author-avatar"
                />
                <div class="prediction-card__author-info">
                  <h3 class="prediction-card__author-name">{{ item.predictorName }}</h3>
                  <p class="prediction-card__author-time">{{ item.publishedAgo }}</p>
                </div>
              </div>

              <div class="prediction-card__meta">
                <div class="prediction-card__hit-rate">
                  <span class="prediction-card__hit-label">Hit Rate</span>
                  <span class="prediction-card__hit-value">{{ item.hitRate.toFixed(2) }} <small>%</small></span>
                </div>
                <button
                  type="button"
                  class="prediction-card__unlock-btn"
                  :class="{ 'prediction-card__unlock-btn--unlocked': unlockedPredictionIds.has(item.id) }"
                  @click="handleUnlock(item)"
                >
                  <Unlock v-if="unlockedPredictionIds.has(item.id)" class="w-3.5 h-3.5 text-emerald-400" />
                  <Lock v-else class="w-3.5 h-3.5 text-white" />
                  <span>{{ unlockedPredictionIds.has(item.id) ? 'Unlocked' : 'Unlock' }}</span>
                </button>
              </div>
            </div>

            <!-- Inner Match Card -->
            <div class="match-box">
              <div class="match-box__header">
                <div class="match-box__league-meta">
                  <span class="match-box__badge">{{ item.marketType }}</span>
                  <span class="match-box__sport-icon">
                    {{ item.sport === 'basketball' ? '🏀' : '⚽' }}
                  </span>
                  <span class="match-box__league">{{ item.league }}</span>
                  <span class="match-box__time">{{ item.matchTime }}</span>
                </div>
                <ChevronRight class="w-4 h-4 text-white/40" />
              </div>

              <div class="match-box__teams">
                <span class="match-box__team match-box__team--home">{{ item.homeTeam }}</span>
                <span class="match-box__vs">vs</span>
                <span class="match-box__team match-box__team--away">{{ item.awayTeam }}</span>
              </div>

              <div class="match-box__odds">
                <button
                  v-for="(opt, idx) in item.options"
                  :key="idx"
                  type="button"
                  class="match-box__odd-btn"
                  @click="handleOddClick(item, opt)"
                >
                  <span class="match-box__odd-label">{{ opt.label }}</span>
                  <span class="match-box__odd-val">{{ opt.odd }}</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.predictions-page {
  min-height: 100vh;
  background-color: #0b0f0d;
  color: #ffffff;
  padding: 1.25rem 1rem 3rem;
}

@media (min-width: 768px) {
  .predictions-page {
    padding: 1.5rem 2rem 4rem;
  }
}

.predictions-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Top Predict Card */
.predict-card {
  position: sticky;
  top: var(--header-height);
  z-index: 20;
  background-color: #171d1a;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.25rem;
}

.predict-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.predict-rail {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.predict-rail::-webkit-scrollbar {
  height: 4px;
}

.predict-rail::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
}

.predict-rail__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.predict-rail__item:hover {
  transform: translateY(-2px);
}

.predict-rail__squircle {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: #242c27;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.predict-rail__item--active .predict-rail__squircle {
  background-color: #1e4533;
  color: #34d399;
  box-shadow: 0 0 0 2px #34d399;
}

.predict-rail__avatar-wrapper {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
}

.predict-rail__avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.predict-rail__item--active .predict-rail__avatar-img {
  border-color: #34d399;
  box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.3);
}

.predict-rail__badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: #ef4444;
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: 700;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #171d1a;
}

.predict-rail__name {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  max-width: 4rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Predictions Section */
.predictions-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.predictions-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.predictions-section__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
}

.predictions-section__sort-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background-color: #1e2622;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  padding: 0.375rem 0.875rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.predictions-section__sort-btn:hover {
  background-color: #27332d;
  color: #ffffff;
}

/* Filter Chips */
.filter-chips {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.filter-chip {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background-color: #171d1a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 9999px;
  padding: 0.4rem 1rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-chip:hover {
  background-color: #1f2723;
  color: #ffffff;
}

.filter-chip--active {
  background-color: #1e4533;
  border-color: rgba(52, 211, 153, 0.4);
  color: #ffffff;
}

.filter-chip__icon {
  font-size: 0.875rem;
}

/* Grid */
.predictions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .predictions-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Card */
.prediction-card {
  background-color: #171d1a;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.2s ease;
}

.prediction-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
}

.prediction-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.prediction-card__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.prediction-card__author-avatar {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.prediction-card__author-info {
  display: flex;
  flex-direction: column;
}

.prediction-card__author-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #ffffff;
}

.prediction-card__author-time {
  font-size: 0.6875rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.125rem;
}

.prediction-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.375rem;
}

.prediction-card__hit-rate {
  display: flex;
  align-items: baseline;
  gap: 0.375rem;
}

.prediction-card__hit-label {
  font-size: 0.6875rem;
  color: rgba(255, 255, 255, 0.45);
}

.prediction-card__hit-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #34d399;
  letter-spacing: -0.025em;
  line-height: 1;
}

.prediction-card__hit-value small {
  font-size: 0.875rem;
  font-weight: 600;
}

.prediction-card__unlock-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.prediction-card__unlock-btn:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.4);
}

.prediction-card__unlock-btn--unlocked {
  border-color: rgba(52, 211, 153, 0.4);
  color: #34d399;
}

/* Inner Match Box */
.match-box {
  background-color: #101512;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.match-box__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.match-box__league-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.match-box__badge {
  font-size: 0.625rem;
  font-weight: 700;
  color: #34d399;
  border: 1px solid rgba(52, 211, 153, 0.4);
  background-color: rgba(52, 211, 153, 0.08);
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
}

.match-box__sport-icon {
  font-size: 0.8125rem;
}

.match-box__league {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.match-box__time {
  color: rgba(255, 255, 255, 0.45);
}

.match-box__teams {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0;
}

.match-box__team {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  flex: 1;
}

.match-box__team--home {
  text-align: right;
  padding-right: 0.75rem;
}

.match-box__team--away {
  text-align: left;
  padding-left: 0.75rem;
}

.match-box__vs {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
}

.match-box__odds {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.match-box__odd-btn {
  background-color: #1a221d;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.15s ease;
}

.match-box__odd-btn:hover {
  background-color: #222d26;
  border-color: rgba(255, 255, 255, 0.15);
}

.match-box__odd-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.match-box__odd-val {
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
}
</style>
