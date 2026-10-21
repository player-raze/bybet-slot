<script setup lang="ts">
import TransactionTutorialPage from '~/components/tutorial/TransactionTutorialPage.vue'

useSeoMeta({
  title: 'Deposit Tutorial | ByBet',
  description: 'Learn the five steps for making a ByBet deposit, from selecting a method through verification.',
  ogTitle: 'Deposit Tutorial | ByBet',
  ogDescription: 'Follow the ByBet deposit process step by step.',
})
</script>

<template>
  <TransactionTutorialPage mode="deposit" />
</template>
