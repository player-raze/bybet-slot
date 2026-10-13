<script setup lang="ts">
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { GameSectionData } from '~/types/casino'

defineProps<{
  section: GameSectionData
}>()

const emit = defineEmits<{
  'launch-demo': [title: string]
}>()

const rowElement = ref<HTMLElement | null>(null)
const canScrollBack = ref(false)
const canScrollForward = ref(false)

const updateScrollControls = (): void => {
  const row = rowElement.value
  if (!row) {
    return
  }

  canScrollBack.value = row.scrollLeft > 4
  canScrollForward.value = row.scrollLeft + row.clientWidth < row.scrollWidth - 4
}

const scrollGames = (direction: -1 | 1): void => {
  rowElement.value?.scrollBy({
    left: direction * Math.max(260, rowElement.value.clientWidth * 0.72),
    behavior: 'smooth',
  })
}

onMounted(() => {
  updateScrollControls()
  window.addEventListener('resize', updateScrollControls, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScrollControls)
})
</script>

<template>
  <section :id="section.id" class="content-section" :aria-labelledby="`${section.id}-title`">
    <div class="section-heading">
      <div>
        <span class="heading-icon"><AppIcon :name="section.icon" :size="16" /></span>
        <h2 :id="`${section.id}-title`">{{ section.title }}</h2>
      </div>
      <div class="section-actions">
        <div v-if="canScrollBack || canScrollForward" class="scroll-actions" aria-label="Game carousel controls">
          <button
            type="button"
            aria-label="Previous games"
            :disabled="!canScrollBack"
            @click="scrollGames(-1)"
          >
            <ChevronLeft :size="15" />
          </button>
          <button
            type="button"
            aria-label="Next games"
            :disabled="!canScrollForward"
            @click="scrollGames(1)"
          >
            <ChevronRight :size="15" />
          </button>
        </div>
        <a :href="`#${section.id}`">View All <ArrowUpRight :size="14" /></a>
      </div>
    </div>

    <div ref="rowElement" class="game-row" @scroll.passive="updateScrollControls">
      <GameCard
        v-for="(game, index) in section.games"
        :key="game.id"
        :game="game"
        :eager="index < 6"
        @launch="emit('launch-demo', $event)"
      />
    </div>
  </section>
</template>

<style scoped>
.section-actions,
.scroll-actions {
  display: flex;
  align-items: center;
}

.section-actions {
  gap: 0.65rem;
}

.scroll-actions {
  gap: 0.25rem;
}

.scroll-actions button {
  display: grid;
  width: 1.8rem;
  height: 1.8rem;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 0.4rem;
  color: var(--secondary);
  background: var(--surface);
}

.scroll-actions button:hover:not(:disabled) {
  color: white;
  border-color: rgba(255, 255, 255, 0.14);
}

.scroll-actions button:disabled {
  opacity: 0.3;
}

.game-row {
  display: grid;
  grid-auto-columns: calc((100% - (var(--card-gap) * 5)) / 6);
  grid-auto-flow: column;
  gap: var(--card-gap);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.game-row::-webkit-scrollbar {
  display: none;
}

.game-row > * {
  scroll-snap-align: start;
}

@media (max-width: 74rem) {
  .game-row {
    grid-auto-columns: calc((100% - (var(--card-gap) * 4)) / 5);
  }
}

@media (max-width: 56rem) {
  .game-row {
    grid-auto-columns: calc((100% - (var(--card-gap) * 3)) / 4);
  }
}

@media (max-width: 40rem) {
  .game-row {
    margin-right: calc(var(--page-padding) * -1);
    padding-right: var(--page-padding);
    grid-auto-columns: minmax(8.2rem, 38vw);
  }
}
</style>
