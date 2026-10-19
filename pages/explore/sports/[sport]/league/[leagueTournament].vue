<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  popularLeagues?: string[]
}>()

definePageMeta({
  validate: route => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(route.params.leagueTournament)),
})
</script>

<template>
  <SportsPopular
    :selected-sports="selectedSports"
    :popular-leagues="popularLeagues"
    initial-tab="league"
  />
</template>
