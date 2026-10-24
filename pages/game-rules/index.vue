<script setup lang="ts">
useAppSeo({
  title: 'Sports Betting Rules & Settlement Directory | ByBet',
  description: 'Complete directory of ByBet sports betting rules. Understand settlement standards for football, basketball, tennis, baseball, cash out, and parlays.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ByBet Sports Betting Rules Directory',
    url: 'https://bybet.com/game-rules',
  },
})

navigateTo('/game-rules/sports-betting-rules', { redirectCode: 301 })
</script>

<template>
  <div />
</template>

