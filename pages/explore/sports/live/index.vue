<script setup lang="ts">
import LiveView from '~/components/sports/LiveView.vue'

useAppSeo({
  title: 'Live Sports Betting Hub — In-Play Match Odds | ByBet',
  description: 'Access ByBet live in-play sports betting hub. Real-time scores, momentum trackers, dynamic handicap odds, and instant bet settlement 24/7.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/explore/sports/popular' },
    { name: 'Live Hub', path: '/explore/sports/live' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ByBet Live Sports Hub',
    url: 'https://bybet.com/explore/sports/live',
  },
})
</script>

<template>
  <LiveView />
</template>

