<script setup lang="ts">
type TutorialOutcomeStatus = 'win' | 'lose' | 'refund' | 'win-half' | 'lose-half'

interface TutorialVisualOption {
  label: string
  value?: string
  status: TutorialOutcomeStatus
}

const props = withDefaults(defineProps<{
  options: TutorialVisualOption[]
  src?: string
}>(), {
  src: '/tutorial-assets/outcomes/hdp-1-0.webp',
})

const statusLabels: Record<TutorialOutcomeStatus, string> = {
  win: 'win',
  lose: 'lose',
  refund: 'refund',
  'win-half': 'half win',
  'lose-half': 'half lose',
}

const altText = computed(() => props.options
  .map(option => `${option.label}${option.value ? ` ${option.value}` : ''}: ${statusLabels[option.status]}`)
  .join(', '))
</script>

<template>
  <img
    class="outcome-graphic"
    :src="src"
    :alt="altText"
    loading="lazy"
    decoding="async"
  >
</template>

<style scoped>
.outcome-graphic {
  display: block;
  width: min(100%, 370px);
  height: 130px;
  margin: auto auto 0;
  object-fit: contain;
  object-position: center bottom;
}

@media (max-width: 34rem) {
  .outcome-graphic {
    transform: scale(0.9);
    transform-origin: bottom center;
  }
}
</style>
