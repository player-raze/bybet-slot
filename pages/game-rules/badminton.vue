<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { badmintonRulesHtml } from '~/data/badminton-rules'

useAppSeo({
  title: 'Badminton Betting Rules & Settlement Standards | ByBet',
  description: 'Official ByBet badminton rules: BWF 21-point rally scoring, best of 3/5 games, retirement settlements, game handicaps, player totals, and walkover terms.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Badminton Rules', path: '/game-rules/badminton' },
  ],
})
</script>

<template>
  <div class="rules-badminton-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="badminton-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="badminton-rules-content" v-html="badmintonRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-badminton-page {
  opacity: 1 !important;
  transform: none !important;
}

.badminton-rules-card {
  word-break: break-word;
}
</style>
