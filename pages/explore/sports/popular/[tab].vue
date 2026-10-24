<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  selectedTournaments?: Record<string, string[]>
}>()

const route = useRoute()

const tabNames: Record<string, string> = {
  league: 'Leagues',
  inplay: 'In-Play Live',
  upcoming: 'Upcoming',
  'pre-match': 'Pre-Match',
  'smart-pick': 'Smart Pick',
  outright: 'Outrights',
}

const tabLabel = computed(() => tabNames[String(route.params.tab)] || 'Matches')

useAppSeo({
  title: computed(() => `Popular Sports ${tabLabel.value} — Live Odds & Matches | ByBet`),
  description: computed(() => `Explore popular ${tabLabel.value} sports fixtures on ByBet Philippines. Real-time handicap lines, moneyline odds, and parlays across world-class leagues.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: tabLabel.value, path: `/explore/sports/popular/${route.params.tab}` },
  ]),
})

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
