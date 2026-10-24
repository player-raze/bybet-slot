<script setup lang="ts">
useAppSeo({
  title: 'Casino Game Guides & How to Play Tutorials | ByBet',
  description: 'Master online slots, live casino tables, and crash games with ByBet official game tutorials. Learn paylines, RTP strategies, and winning features.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorial' },
    { name: 'Game Guides', path: '/tutorial/game' },
  ],
})

await navigateTo('/tutorial/mock-betting', { redirectCode: 301, replace: true })
</script>

<template>
  <div />
</template>

