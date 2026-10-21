<script setup lang="ts">
import GameTutorialPage from '~/components/tutorial/GameTutorialPage.vue'

useSeoMeta({
  title: 'Mock Betting Tutorial | ByBet',
  description: 'Practice HDP, Over/Under, 1X2, corners, odd/even, correct score, and outright bets with interactive examples.',
  ogTitle: 'Mock Betting Tutorial | ByBet',
  ogDescription: 'Practice popular sports betting markets with interactive mock bets.',
})
</script>

<template>
  <GameTutorialPage mode="mock-betting" />
</template>
