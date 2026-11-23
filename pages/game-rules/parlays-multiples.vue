<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { parlaysRulesHtml } from '~/data/parlays-rules'

useAppSeo({
  title: 'Parlay & Multiples Combo Bet Settlement Rules | ByBet',
  description: 'Official ByBet rules for Parlays and Multiples: Trixie, Yankee, Super Yankee, Heinz, Goliath, system block permutations, and pushed leg settlement terms.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Parlays & Multiples Rules', path: '/game-rules/parlays-multiples' },
  ],
})
</script>

<template>
  <div class="rules-parlay-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="parlays-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="parlays-rules-content" v-html="parlaysRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-parlay-page {
  opacity: 1 !important;
  transform: none !important;
}

.parlays-rules-card {
  word-break: break-word;
}
</style>
