<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  selectedTournaments?: Record<string, string[]>
}>()

definePageMeta({
  validate: route => ['league', 'inplay', 'upcoming', 'pre-match', 'smart-pick', 'outright'].includes(String(route.params.tab)),
})
</script>

<template>
  <SportsPopular
    :selected-sports="selectedSports"
    :selected-tournaments="selectedTournaments"
  />
</template>
