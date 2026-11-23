<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { footballRulesHtml } from '~/data/football-rules'

useAppSeo({
  title: 'Football / Soccer Betting Rules & Settlement | ByBet',
  description: 'Official ByBet football rules: 90-minute regulation time, goalscorer terms, card and corner counting, VAR protocols, and abandoned match settlements.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Football Rules', path: '/game-rules/football' },
  ],
})
</script>

<template>
  <div class="rules-football-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="football-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="football-rules-content" v-html="footballRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-football-page {
  opacity: 1 !important;
  transform: none !important;
}

.football-rules-card {
  word-break: break-word;
}
</style>
