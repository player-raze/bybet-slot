<script setup lang="ts">
type TutorialOutcomeStatus = 'win' | 'lose' | 'refund' | 'win-half' | 'lose-half'
type TutorialOptionTone = 'home' | 'draw' | 'away'

interface TutorialVisualOption {
  label: string
  value?: string
  status: TutorialOutcomeStatus
  tone: TutorialOptionTone
}

interface TutorialScenario {
  score: string
  description: string
  subtitle?: string
  image?: string
  options: TutorialVisualOption[]
}

defineProps<{
  scenario: TutorialScenario
}>()
</script>

<template>
  <article class="tutorial-scenario-card">
    <h3>{{ scenario.score }}</h3>
    <p v-if="scenario.subtitle" class="tutorial-scenario-subtitle">{{ scenario.subtitle }}</p>
    <p class="tutorial-scenario-description">{{ scenario.description }}</p>
    <TutorialOutcomeGraphic :options="scenario.options" :src="scenario.image" />
  </article>
</template>

<style scoped>
.tutorial-scenario-card {
  display: flex;
  height: 230px;
  min-width: 0;
  overflow: hidden;
  flex-direction: column;
  padding: 14px 12px 0;
  border-radius: 11px;
  color: #f2f2f2;
  background: #141414;
}

.tutorial-scenario-card h3 {
  margin: 0;
  color: #f4f4f4;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.08;
  text-align: center;
}

.tutorial-scenario-subtitle {
  margin: 7px 0 0;
  color: #f1f1f1;
  font-size: 13px;
  line-height: 1.2;
  text-align: center;
}

.tutorial-scenario-description {
  min-height: 32px;
  margin: 8px 0 0;
  color: #f0f0f0;
  font-size: 11px;
  font-weight: 400;
  line-height: 1.35;
}

.tutorial-scenario-subtitle + .tutorial-scenario-description {
  margin-top: 5px;
}

@media (max-width: 46rem) {
  .tutorial-scenario-card {
    height: 220px;
  }

  .tutorial-scenario-card h3 {
    font-size: 26px;
  }
}
</style>
