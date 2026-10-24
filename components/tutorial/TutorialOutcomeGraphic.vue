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
  src: undefined,
})

const statusLabels: Record<TutorialOutcomeStatus, string> = {
  win: 'win',
  lose: 'lose',
  refund: 'refund',
  'win-half': 'half win',
  'lose-half': 'half lose',
}

const outcomeImageMap: Record<string, string> = {
  'win-lose': '/tutorial-assets/outcomes/win-lose.webp',
  'lose-win': '/tutorial-assets/outcomes/lose-win.png',
  'win-half-lose-half': '/tutorial-assets/outcomes/win-lose-half.png',
  'lose-half-win-half': '/tutorial-assets/outcomes/lose-win-half.png',
  'refund-refund': '/tutorial-assets/outcomes/refund.png',
  'win-lose-lose': '/tutorial-assets/outcomes/win-lose-lose.png',
  'lose-win-lose': '/tutorial-assets/outcomes/lose-win-lose.png',
  'lose-lose-win': '/tutorial-assets/outcomes/lose-lose-win.png',
  'lose-lose-lose': '/tutorial-assets/outcomes/lose-lose-lose.png',
}

const resolvedSrc = computed(() => {
  if (props.src) return props.src

  const statuses = props.options?.map(o => o.status) || []

  // Direct map check
  const key = statuses.join('-')
  if (outcomeImageMap[key]) {
    return outcomeImageMap[key]
  }

  // Two-outcome fallback checks
  if (statuses.length === 2) {
    if (statuses.includes('refund')) {
      return '/tutorial-assets/outcomes/refund.png'
    }
    if (statuses[0] === 'win' || statuses[0] === 'win-half') {
      return statuses[0] === 'win-half'
        ? '/tutorial-assets/outcomes/win-lose-half.png'
        : '/tutorial-assets/outcomes/win-lose.webp'
    }
    if (statuses[1] === 'win' || statuses[1] === 'win-half') {
      return statuses[1] === 'win-half'
        ? '/tutorial-assets/outcomes/lose-win-half.png'
        : '/tutorial-assets/outcomes/lose-win.png'
    }
  }

  // Three-outcome fallback checks
  if (statuses.length === 3) {
    if (statuses[0] === 'win') return '/tutorial-assets/outcomes/win-lose-lose.png'
    if (statuses[1] === 'win') return '/tutorial-assets/outcomes/lose-win-lose.png'
    if (statuses[2] === 'win') return '/tutorial-assets/outcomes/lose-lose-win.png'
    return '/tutorial-assets/outcomes/lose-lose-lose.png'
  }

  return '/tutorial-assets/outcomes/win-lose.webp'
})

const altText = computed(() => props.options
  ?.map(option => `${option.label}${option.value ? ` ${option.value}` : ''}: ${statusLabels[option.status] || option.status}`)
  .join(', ') || 'Tutorial outcome')
</script>

<template>
  <img
    class="outcome-graphic"
    :src="resolvedSrc"
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
