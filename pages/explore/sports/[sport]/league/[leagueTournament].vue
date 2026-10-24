<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  popularLeagues?: string[]
}>()

const route = useRoute()

const sportName = computed(() => {
  const s = String(route.params.sport || 'sports')
  return s.charAt(0).toUpperCase() + s.slice(1)
})

const leagueName = computed(() => {
  const l = String(route.params.leagueTournament || '')
  return l.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
})

useAppSeo({
  title: computed(() => `${leagueName.value} Betting Odds & Live Match Lines | ByBet`),
  description: computed(() => `Bet on ${leagueName.value} ${sportName.value} at ByBet Philippines. Competitive odds, Asian handicaps, moneylines, over/under totals, and tournament futures.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: sportName.value, path: `/explore/sports/${route.params.sport}` },
    { name: leagueName.value, path: route.path },
  ]),
  schema: computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${leagueName.value} ${sportName.value} Betting - ByBet`,
    url: `https://bybet.com${route.path}`,
    description: `Bet on ${leagueName.value} ${sportName.value} at ByBet Philippines with top odds and live markets.`,
  })),
})

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
