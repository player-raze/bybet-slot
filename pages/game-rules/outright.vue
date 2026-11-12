<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { outrightRulesHtml } from '~/data/outright-rules'

useAppSeo({
  title: 'Outright Betting Rules & Tournament Futures | ByBet',
  description: 'Official ByBet Outright and Futures rules: All-In Ante-Post terms, Dead Heat tie reductions, regular season finishing positions, and monthly cutoff terms.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Outright Rules', path: '/game-rules/outright' },
  ],
})
</script>

<template>
  <div class="rules-outright-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="outright-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="outright-rules-content" v-html="outrightRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-outright-page {
  opacity: 1 !important;
  transform: none !important;
}

.outright-rules-card {
  word-break: break-word;
}
</style>
