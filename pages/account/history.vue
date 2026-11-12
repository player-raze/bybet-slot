<script setup lang="ts">
useAppSeo({
  title: 'Betting History & Transaction Records | ByBet Platform',
  description: 'Review your sports wagers, casino game sessions, deposit logs, and withdrawal status. Complete transparent transaction history on ByBet Philippines.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Account', path: '/account/me' },
    { name: 'History', path: '/account/history' },
  ],
})
</script>

<template>
  <ComingSoonFallback :disable-seo="true" />
</template>
