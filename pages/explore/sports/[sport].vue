<script setup lang="ts">
const route = useRoute()
const sportNames: Record<string, string> = {
  basketball: 'Basketball', baseball: 'Baseball', soccer: 'Soccer', tennis: 'Tennis',
}
// Edit these API tournament keys to choose the Popular Leagues for each sport.
const popularLeagues: Record<string, string[]> = {
  basketball: ['basketball_nba', 'basketball_preseason', 'basketball_euroleague'],
  baseball: ['baseball_mlb'],
  soccer: ['soccer_epl', 'soccer_uefa_champs_league', 'soccer_uefa_champions_league'],
  tennis: ['tennis_wta_125_spain', 'tennis_atp_*', 'tennis_wta_*'],
}
const selectedPopularLeagues = computed(() => popularLeagues[String(route.params.sport)] ?? [])
const selectedSports = computed(() => [sportNames[String(route.params.sport)] ?? ''])

definePageMeta({
  validate: route => ['basketball', 'baseball', 'soccer', 'tennis'].includes(String(route.params.sport)),
  middleware: to => {
    const base = `/explore/sports/${to.params.sport}`
    if (to.path.replace(/\/$/, '') !== base) return
    const requestedTab = to.query.tab === 'prematch' ? 'pre-match' : String(to.query.tab ?? 'league')
    const tab = ['league', 'inplay', 'upcoming', 'pre-match', 'smart-pick', 'outright'].includes(requestedTab) ? requestedTab : 'league'
    const { tab: legacyTab, ...query } = to.query
    return navigateTo({ path: `${base}/${tab}`, query }, { replace: true })
  },
})
</script>

<template>
  <NuxtPage :selected-sports="selectedSports" :popular-leagues="selectedPopularLeagues" />
</template>
