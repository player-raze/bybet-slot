<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  layout?: 'slider' | 'grid'
  wideColumns?: number
}>(), {
  layout: 'slider',
  wideColumns: 6,
})
</script>

<template>
  <div
    class="game-rail"
    :class="{ 'game-rail--grid': layout === 'grid' }"
    :style="{ '--wide-rail-columns': wideColumns, '--wide-rail-gaps': `${(wideColumns - 1) * 12}px` }"
    role="region"
    :aria-label="label"
    :tabindex="layout === 'slider' ? 0 : undefined"
  >
    <slot />
  </div>
</template>

<style scoped>
.game-rail {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 24px) / 3.35);
  gap: 8px;
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  padding-block: 2px;
  scroll-snap-type: x proximity;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
}

.game-rail::-webkit-scrollbar { display: none; }

.game-rail :slotted(.game-card) {
  min-width: 0;
  scroll-snap-align: start;
}

.game-rail--grid {
  grid-auto-flow: row;
  grid-auto-columns: auto;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: visible;
}

@media (min-width: 640px) {
  .game-rail { grid-auto-columns: calc((100% - 32px) / 4.35); }
  .game-rail--grid {
    grid-auto-columns: auto;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .game-rail {
    grid-auto-columns: calc((100% - 60px) / 6);
    gap: 12px;
  }
  .game-rail--grid {
    grid-auto-columns: auto;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .game-rail { grid-auto-columns: calc((100% - var(--wide-rail-gaps)) / var(--wide-rail-columns)); }
  .game-rail--grid {
    grid-auto-columns: auto;
    grid-template-columns: repeat(var(--wide-rail-columns), minmax(0, 1fr));
  }
}
</style>
