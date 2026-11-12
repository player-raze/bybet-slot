<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { baseballRulesHtml } from '~/data/baseball-rules'

useAppSeo({
  title: 'Baseball Betting Rules (MLB, NPB & KBO) | ByBet Sports',
  description: 'Official baseball rules on ByBet: International mercy rules, 8.5/9 inning standards for runlines and totals, extra innings, and 1st half settlements.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Baseball Rules', path: '/game-rules/baseball' },
  ],
})
</script>

<template>
  <div class="rules-baseball-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="baseball-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="baseball-rules-content" v-html="baseballRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-baseball-page {
  opacity: 1 !important;
  transform: none !important;
}

.baseball-rules-card {
  word-break: break-word;
}
</style>

