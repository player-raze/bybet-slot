<script setup lang="ts">
useAppSeo({
  title: 'Explore Games, Sports & Casino Entertainment | ByBet',
  description: 'Explore premier sports betting, live dealer casino tables, slots, and exclusive player bonuses on the official ByBet Philippines gaming platform.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
  ],
})
</script>

<template>
  <ComingSoonFallback :disable-seo="true" />
</template>
