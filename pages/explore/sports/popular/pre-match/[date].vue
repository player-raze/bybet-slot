<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  selectedTournaments?: Record<string, string[]>
}>()

const route = useRoute()

useAppSeo({
  title: computed(() => `Pre-Match Sports Odds for ${route.params.date} | ByBet`),
  description: computed(() => `Browse upcoming pre-match sports fixtures scheduled for ${route.params.date} on ByBet. Early odds, line movements, and comprehensive betting markets.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: 'Pre-Match', path: '/explore/sports/popular/pre-match' },
    { name: String(route.params.date), path: route.path },
  ]),
})

definePageMeta({
  validate: route => {
    const value = String(route.params.date)
    const match = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value)
    if (!match) return false
    const [, month, day, year] = match
    const date = new Date(`${year}-${month}-${day}T00:00:00Z`)
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === `${year}-${month}-${day}`
  },
})
</script>

<template>
  <SportsPopular :selected-sports="selectedSports" :selected-tournaments="selectedTournaments" initial-tab="prematch" />
</template>
