<script setup lang="ts">
const selectedSports = ['Soccer']

definePageMeta({
  middleware: to => {
    if (to.path.replace(/\/$/, '') !== '/explore/sports/soccer') return
    const requestedTab = to.query.tab === 'prematch' ? 'pre-match' : String(to.query.tab ?? 'league')
    const tab = ['league', 'inplay', 'upcoming', 'pre-match', 'smart-pick', 'outright'].includes(requestedTab) ? requestedTab : 'league'
    const { tab: legacyTab, ...query } = to.query
    return navigateTo({ path: `/explore/sports/soccer/${tab}`, query }, { replace: true })
  },
})
</script>

<template>
  <NuxtPage :selected-sports="selectedSports" />
</template>
