<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  selectedTournaments?: Record<string, string[]>
}>()

definePageMeta({
  validate: (route) => {
    return ['basketball', 'soccer', 'tennis', 'baseball'].includes(String(route.params.sport))
      && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(route.params.tournament))
  },
})
</script>

<template>
  <SportsPopular
    :selected-sports="selectedSports"
    :selected-tournaments="selectedTournaments"
  />
</template>
