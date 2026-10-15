<script setup lang="ts">
import WinnerMatch from './WinnerMatch.vue'

const props = withDefaults(defineProps<{
  sportKey: string
  sortBy?: 'league' | 'time'
}>(), {
  sortBy: 'league',
})

const emit = defineEmits<{
  loaded: [payload: { sportKey: string; earliestTime: number | null }]
}>()

const { data, status, error, refresh } = await useFetch('/api/sports', {
  query: computed(() => ({ mode: 'league-odds', sport: props.sportKey })),
  server: false,
})

const showFullMarkets = computed(() => /^(basketball|baseball)_/.test(props.sportKey))

const isSoccer = computed(() => props.sportKey.startsWith('soccer_'))

const matches = computed(() => {
  const events = [...(data.value?.events ?? [])]
  if (props.sortBy === 'time') {
    events.sort((a, b) => Date.parse(a.commence_time) - Date.parse(b.commence_time))
  }
  return events.slice(0, 2)
})

watch(() => data.value?.events, (events) => {
  if (events && events.length > 0) {
    const sorted = [...events].sort((a, b) => Date.parse(a.commence_time) - Date.parse(b.commence_time))
    const first = sorted[0]?.commence_time ? Date.parse(sorted[0].commence_time) : null
    emit('loaded', { sportKey: props.sportKey, earliestTime: first })
  } else if (data.value) {
    emit('loaded', { sportKey: props.sportKey, earliestTime: null })
  }
}, { immediate: true })

const selectedOutcomes = ref<Record<string, string>>({})

const selectOutcome = (eventId: string, market: string, name: string): void => {
  const key = `${eventId}:${market}`
  selectedOutcomes.value[key] = selectedOutcomes.value[key] === name ? '' : name
}

</script>

<template>
  <div class="league-matches" :aria-busy="status === 'pending'">
    <p v-if="status === 'pending' || status === 'idle'" class="match-message" role="status">
      Loading matches…
    </p>
    <div v-else-if="error" class="match-message" role="alert">
      <p>Unable to load match odds.</p>
      <button type="button" class="retry" @click="refresh()">Try again</button>
    </div>
    <p v-else-if="!matches.length" class="match-message">No matches available right now.</p>

    <template v-else>
      <WinnerMatch
        v-for="match in matches"
        :key="match.id"
        :match="match"
        :soccer="isSoccer"
        :full-markets="showFullMarkets"
        :selected-outcome="selectedOutcomes[`${match.id}:h2h`]"
        @select="selectOutcome(match.id, 'h2h', $event)"
      />
    </template>

  </div>
</template>

<style scoped>
.match-message {
  padding: 16px;
  color: var(--secondary);
  font-size: 13px;
}

.retry {
  min-height: 44px;
  padding: 8px 16px;
  border: 0;
  border-radius: 8px;
  background: #076b4a;
  color: white;
}

.retry:focus-visible {
  outline: 2px solid #48daa6;
  outline-offset: 2px;
}
</style>
