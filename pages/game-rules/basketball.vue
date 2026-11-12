<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { basketballRulesHtml } from '~/data/basketball-rules'

useAppSeo({
  title: 'Basketball Betting Rules (NBA, PBA & FIBA) | ByBet',
  description: 'Official basketball rules: Overtime inclusion, regulation times (43m NBA, 35m FIBA & PBA), quarter settlements, and player prop conditions on ByBet.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Basketball Rules', path: '/game-rules/basketball' },
  ],
})
</script>

<template>
  <div class="rules-basketball-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="basketball-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="basketball-rules-content" v-html="basketballRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-basketball-page {
  opacity: 1 !important;
  transform: none !important;
}

.basketball-rules-card {
  word-break: break-word;
}
</style>
