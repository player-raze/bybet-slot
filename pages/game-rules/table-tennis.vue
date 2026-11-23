<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { tableTennisRulesHtml } from '~/data/table-tennis-rules'

useAppSeo({
  title: 'Table Tennis Betting Rules & Match Settlement | ByBet',
  description: 'Official ByBet table tennis rules: ITTF scoring standards, retirement settlement rules, set and point handicaps, Over/Under lines, and in-play markets.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Game Rules', path: '/game-rules' },
    { name: 'Table Tennis Rules', path: '/game-rules/table-tennis' },
  ],
})
</script>

<template>
  <div class="rules-table-tennis-page max-w-5xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <GameRulesNav />

    <!-- Document Content Container -->
    <div class="table-tennis-rules-card bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto">
      <div class="table-tennis-rules-content" v-html="tableTennisRulesHtml" />
    </div>
  </div>
</template>

<style scoped>
.rules-table-tennis-page {
  opacity: 1 !important;
  transform: none !important;
}

.table-tennis-rules-card {
  word-break: break-word;
}
</style>
