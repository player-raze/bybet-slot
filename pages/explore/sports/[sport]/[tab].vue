<script setup lang="ts">
defineProps<{
  selectedSports: string[]
  popularLeagues?: string[]
  selectedTournaments?: Record<string, string[]>
}>()

const route = useRoute()

const sportName = computed(() => {
  const s = String(route.params.sport || 'sports')
  return s.charAt(0).toUpperCase() + s.slice(1)
})

const tabLabels: Record<string, string> = {
  league: 'Leagues',
  inplay: 'In-Play Live',
  upcoming: 'Upcoming Matches',
  'pre-match': 'Pre-Match Odds',
  'smart-pick': 'Smart Picks',
  outright: 'Outrights & Futures',
  replay: 'Match Replays',
}

const tabDisplayName = computed(() => {
  const t = String(route.params.tab || '')
  return tabLabels[t] || t.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
})

useAppSeo({
  title: computed(() => `${sportName.value} ${tabDisplayName.value} — Betting Odds | ByBet`),
  description: computed(() => `View ${tabDisplayName.value} for ${sportName.value} on ByBet Philippines. Real-time odds, team statistics, betting previews, and market options for every match.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: sportName.value, path: `/explore/sports/${route.params.sport}` },
    { name: tabDisplayName.value, path: route.path },
  ]),
})

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
