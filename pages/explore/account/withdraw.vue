<script setup lang="ts">
useAppSeo({
  title: 'Fast Withdrawals — Instant Payouts via GCash | ByBet',
  description: 'Withdraw your winnings quickly and securely from ByBet. Enjoy fast payout processing via GCash, Maya, and local bank transfers with 24/7 support.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Account', path: '/explore/account/me' },
    { name: 'Withdraw', path: '/explore/account/withdraw' },
  ],
})
</script>

<template>
  <ComingSoonFallback :disable-seo="true" />
</template>
