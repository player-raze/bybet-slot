<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  selectedTournaments?: Record<string, string[]>
}>()

const route = useRoute()
const hoursLabel = computed(() => String(route.params.hours).replace('hours', ' Hours'))

useAppSeo({
  title: computed(() => `Upcoming Sports Matches (Next ${hoursLabel.value}) | ByBet`),
  description: computed(() => `Check upcoming sports events starting in the next ${hoursLabel.value} on ByBet. Lock in early betting lines for basketball, soccer, tennis, and baseball.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: 'Upcoming', path: '/explore/sports/popular/upcoming' },
    { name: hoursLabel.value, path: route.path },
  ]),
})

definePageMeta({
  validate: route => ['1hours', '3hours', '6hours', '12hours', '24hours'].includes(String(route.params.hours)),
})
</script>

<template>
  <SportsPopular :selected-sports="selectedSports" :selected-tournaments="selectedTournaments" initial-tab="upcoming" />
</template>
