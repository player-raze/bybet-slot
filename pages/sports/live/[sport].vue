<script setup lang="ts">
import { computed } from 'vue'
import LiveView from '~/components/sports/LiveView.vue'

const route = useRoute()
const sport = computed(() => String(route.params.sport || '').toLowerCase())
const sportName = computed(() => sport.value.charAt(0).toUpperCase() + sport.value.slice(1))

useAppSeo({
  title: computed(() => `Live ${sportName.value} Betting — Real-Time In-Play Odds | ByBet`),
  description: computed(() => `Follow and bet live on ${sportName.value} games with real-time in-play odds, live momentum trackers, point spreads, and instant settlement at ByBet Philippines.`),
  breadcrumbs: computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/sports/popular' },
    { name: 'Live Sports', path: '/sports/live' },
    { name: sportName.value, path: `/sports/live/${sport.value}` },
  ]),
  schema: computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Live ${sportName.value} Betting - ByBet`,
    url: `https://bybet.com/sports/live/${sport.value}`,
    description: `Follow and bet live on ${sportName.value} games with real-time in-play odds at ByBet Philippines.`,
  })),
})

definePageMeta({
  validate: (route) => ['basketball', 'soccer', 'tennis', 'baseball'].includes(String(route.params.sport).toLowerCase()),
})
</script>

<template>
  <LiveView :sport="sport" />
</template>

