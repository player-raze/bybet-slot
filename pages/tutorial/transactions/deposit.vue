<script setup lang="ts">
import TransactionTutorialPage from '~/components/tutorial/TransactionTutorialPage.vue'

useAppSeo({
  title: 'How to Deposit Funds via GCash and Maya Guide in ByBet Casino',
  description: 'Step-by-step deposit guide for ByBet Philippines. Follow 5 easy steps to fund your account securely using GCash, Maya, ShopeePay, or bank transfer.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorial' },
    { name: 'Deposit Tutorial', path: '/tutorial/transactions/deposit' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Deposit on ByBet',
    description: 'Learn how to deposit funds into your ByBet wallet in 5 simple steps.',
  },
})
</script>

<template>
  <h1 class="hidden">How to Deposit in Bybet </h1>
  <TransactionTutorialPage mode="deposit" />
</template>
