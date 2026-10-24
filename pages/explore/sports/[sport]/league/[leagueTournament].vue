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
  title: computed(() => `${leagueName.value} Betting Odds & Match Lines | ByBet`),
  description: computed(() => `Get the best betting odds on ${leagueName.value} ${sportName.value}. Bet on match winners, Asian handicaps, over/under totals, and championship futures on ByBet.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: sportName.value, path: `/explore/sports/${route.params.sport}` },
    { name: leagueName.value, path: route.path },
  ]),
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
