<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { tennisRulesHtml } from '~/data/tennis-rules'

useAppSeo({
  title: 'Tennis Betting Rules & Retirement Settlement | ByBet',
  description: 'Official tennis betting rules. Player retirements, walkovers, game handicap, set betting, rain interruptions, and super tiebreak conditions on ByBet.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Tennis Rules', path: '/game-rules/tennis' },
  ],
})
</script>

<template>
  <div class="rules-tennis-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="tennis-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="tennis-rules-content" v-html="tennisRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-tennis-page {
  opacity: 1 !important;
  transform: none !important;
}

.tennis-rules-card {
  word-break: break-word;
}
</style>
