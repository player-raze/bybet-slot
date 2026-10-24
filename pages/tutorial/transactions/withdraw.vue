<script setup lang="ts">
import TransactionTutorialPage from '~/components/tutorial/TransactionTutorialPage.vue'

useAppSeo({
  title: 'How to Withdraw Winnings Step-by-Step Guide by ByBet Casino',
  description: 'Step-by-step withdrawal tutorial for ByBet Philippines. Learn how to request fast payouts directly to your GCash or bank account with ease.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorial' },
    { name: 'Withdrawal Tutorial', path: '/tutorial/transactions/withdraw' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Withdraw Winnings from ByBet',
    description: 'Learn how to withdraw winnings from your ByBet account quickly and safely.',
  },
})
</script>

<template>
  <h1 class="hidden">How to Withdraw in Bybet </h1>
  <TransactionTutorialPage mode="withdraw" />
</template>
