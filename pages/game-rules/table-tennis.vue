<script setup lang="ts">
import GameRulesNav from '~/components/game-rules/GameRulesNav.vue'
import { tableTennisRulesHtml } from '~/data/table-tennis-rules'

useSeoMeta({
  title: 'Table Tennis Betting Rules & Settlement | ByBet',
  description: 'Official ByBet table tennis rules: ITTF official scoring standards, retirement settlement rules, set & point handicaps, Over/Under lines, and in-play point markets.',
  ogTitle: 'Table Tennis Betting Rules & Settlement | ByBet',
  ogDescription: 'Master table tennis betting rules on ByBet: ITTF regulations, retirement and walkover settlements, handicaps, and point milestones.',
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

/* Dark mode theme adaptations for Google Docs exported HTML */
:deep(.editor-container) {
  color: #d1d5db;
  font-family: inherit;
}

:deep(.editor-container [style*="color:#7b7b7b"]),
:deep(.editor-container [style*="color:#6e6e6e"]) {
  color: #e5e7eb !important;
}

:deep(.editor-container [style*="background-color:#e1e1e1"]) {
  background-color: #1a2e22 !important;
  border-color: #036242 !important;
  color: #32d49a !important;
  border-radius: 8px;
}

:deep(.editor-container [style*="background-color:#e1e1e1"] span) {
  color: #32d49a !important;
}

:deep(.editor-container [style*="border-left:solid #bbbbb5"]),
:deep(.editor-container [style*="border-right:solid #bbbbb5"]),
:deep(.editor-container [style*="border-top:solid #bbbbb5"]),
:deep(.editor-container [style*="border-bottom:solid #bbbbb5"]) {
  border-color: #036242 !important;
}

:deep(.editor-container h2 strong span),
:deep(.editor-container strong span[style*="font-size:21pt"]),
:deep(.editor-container strong span[style*="font-size:22pt"]) {
  color: #ffffff !important;
}

:deep(.editor-container h4 strong span),
:deep(.editor-container h4 span) {
  color: #ffffff !important;
}

:deep(.editor-container li) {
  margin-bottom: 0.75rem;
}

:deep(.editor-container ul),
:deep(.editor-container ol) {
  padding-inline-start: 1.5rem !important;
}
</style>
