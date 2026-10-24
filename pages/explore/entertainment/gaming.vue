<script setup lang="ts">
useAppSeo({
  title: 'Online Entertainment & Mini Games | ByBet Philippines',
  description: 'Discover top electronic gaming entertainment, arcade titles, table games, and casual betting options on ByBet Philippines with instant play.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Entertainment', path: '/explore/entertainment/live-casino/all' },
    { name: 'Gaming', path: '/explore/entertainment/gaming' },
  ],
})
</script>

<template>
  <ComingSoonFallback :disable-seo="true" />
</template>
