<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { cashOutRulesHtml } from '~/data/cash-out-rules'

useAppSeo({
  title: 'Cash Out Rules, Terms & Settlement Standards | ByBet',
  description: 'Official ByBet Cash Out rules: full and partial cash out unit stake rules, settlement for interrupted events, reversal protocols, and accumulator terms.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Cash Out Rules', path: '/game-rules/cash-out' },
  ],
})
</script>

<template>
  <div class="rules-cash-out-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="cash-out-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="cash-out-rules-content" v-html="cashOutRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-cash-out-page {
  opacity: 1 !important;
  transform: none !important;
}

.cash-out-rules-card {
  word-break: break-word;
}
</style>
