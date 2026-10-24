<script setup lang="ts">
useAppSeo({
  title: 'VIP Club & Loyalty Rewards Program | ByBet Philippines',
  description: 'Join the exclusive ByBet VIP Club. Unlock weekly cashbacks, high-roller bonuses, priority withdrawals, and personalized account management benefits.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Account', path: '/explore/account/me' },
    { name: 'VIP Club', path: '/explore/account/vip' },
  ],
})
</script>

<template>
  <ComingSoonFallback :disable-seo="true" />
</template>
