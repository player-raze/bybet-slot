<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  selectedTournaments?: Record<string, string[]>
}>()

const route = useRoute()
const hoursLabel = computed(() => String(route.params.hours).replace('hours', ' Hours'))

useAppSeo({
  title: computed(() => `Upcoming Sports Matches (Next ${hoursLabel.value}) Odds | ByBet`),
  description: computed(() => `Check upcoming sports events starting in the next ${hoursLabel.value} on ByBet Philippines. Lock in early betting lines for basketball, soccer, and tennis matches.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: 'Upcoming', path: '/explore/sports/popular/upcoming' },
    { name: hoursLabel.value, path: route.path },
  ]),
  schema: computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Upcoming Sports Matches (${hoursLabel.value}) - ByBet`,
    url: `https://bybet.com${route.path}`,
    description: `Upcoming sports fixtures starting in the next ${hoursLabel.value} on ByBet Philippines.`,
  })),
})

definePageMeta({
  validate: route => ['1hours', '3hours', '6hours', '12hours', '24hours'].includes(String(route.params.hours)),
})
</script>

<template>
  <SportsPopular :selected-sports="selectedSports" :selected-tournaments="selectedTournaments" initial-tab="upcoming" />
</template>
