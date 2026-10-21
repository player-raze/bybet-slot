<script setup lang="ts">
import TransactionTutorialPage from '~/components/tutorial/TransactionTutorialPage.vue'

useSeoMeta({
  title: 'Withdrawal Tutorial | ByBet',
  description: 'Learn the five steps for completing a ByBet withdrawal, from scheduling through account confirmation.',
  ogTitle: 'Withdrawal Tutorial | ByBet',
  ogDescription: 'Follow the ByBet withdrawal process step by step.',
})
</script>

<template>
  <TransactionTutorialPage mode="withdraw" />
</template>
