<script setup lang="ts">
useAppSeo({
  title: 'Progressive Jackpots — Big Win Casino Slots | ByBet',
  description: 'Chase massive progressive jackpots on ByBet Philippines. Discover high-payout slot machines and mega jackpot prize pools updated in real time.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Jackpots', path: '/explore/egames/jackpot/all' },
  ],
})

definePageMeta({
  middleware: () => {
    return navigateTo('/explore/egames/jackpot/all', { replace: true })
  },
})
</script>

<template>
  <div />
</template>

