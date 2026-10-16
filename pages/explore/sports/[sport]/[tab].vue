<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  popularLeagues?: string[]
  selectedTournaments?: Record<string, string[]>
}>()

definePageMeta({
  // This segment accepts a tab name or an outright tournament slug.
  validate: route => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(route.params.tab)),
})
</script>

<template>
  <SportsPopular
    :selected-sports="selectedSports"
    :popular-leagues="popularLeagues"
    :selected-tournaments="selectedTournaments"
  />
</template>
