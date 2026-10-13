<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { OriginalGame } from '~/types/casino'

defineProps<{
  games: OriginalGame[]
}>()

const emit = defineEmits<{
  'launch-demo': [title: string]
}>()
</script>

<template>
  <section id="originals" class="content-section" aria-labelledby="originals-title">
    <div class="section-heading">
      <div>
        <span class="heading-icon"><AppIcon name="sparkles" :size="16" /></span>
        <h2 id="originals-title">Original Games</h2>
      </div>
      <a href="#originals-grid">View All <ArrowUpRight :size="14" /></a>
    </div>

    <div id="originals-grid" class="originals-grid">
      <button
        v-for="game in games"
        :key="game.id"
        type="button"
        class="original-tile"
        :style="{ '--tile-accent': game.accent }"
        @click="emit('launch-demo', game.title)"
      >
        <span class="original-copy">
          <strong>{{ game.title }}</strong>
          <small>{{ game.subtitle }}</small>
          <span>Play demo</span>
        </span>
        <span class="original-art" aria-hidden="true">
          <i class="art-orbit" />
          <b>{{ game.symbol }}</b>
          <i class="art-dot art-dot--one" />
          <i class="art-dot art-dot--two" />
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.originals-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--card-gap);
}

.original-tile {
  display: grid;
  position: relative;
  height: 7.8rem;
  grid-template-columns: 1fr 42%;
  overflow: hidden;
  border: 0;
  border-radius: var(--radius);
  color: white;
  text-align: left;
  background:
    linear-gradient(108deg, color-mix(in srgb, var(--tile-accent) 88%, #101713), color-mix(in srgb, var(--tile-accent) 56%, #080d0b));
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.08);
}

.original-tile:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

.original-copy {
  display: flex;
  z-index: 1;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0 1rem 1.1rem;
}

.original-copy strong {
  font-size: clamp(0.9rem, 1.15vw, 1.1rem);
  letter-spacing: -0.025em;
}

.original-copy small {
  margin-top: 0.18rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.6rem;
}

.original-copy > span {
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.57rem;
  font-weight: 760;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.original-art {
  position: relative;
}

.art-orbit {
  position: absolute;
  width: 7rem;
  height: 7rem;
  top: 0.3rem;
  right: -1.3rem;
  border: 0.85rem solid rgba(255, 255, 255, 0.07);
  border-radius: 50%;
  transform: rotate(-15deg);
}

.original-art b {
  position: absolute;
  top: 50%;
  left: 45%;
  color: rgba(255, 255, 255, 0.92);
  font-family: Georgia, serif;
  font-size: clamp(2rem, 3.4vw, 3.5rem);
  line-height: 1;
  text-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(7deg);
}

.art-dot {
  position: absolute;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.56);
}

.art-dot--one {
  top: 20%;
  left: 12%;
}

.art-dot--two {
  right: 14%;
  bottom: 15%;
  width: 0.2rem;
  height: 0.2rem;
}

@media (max-width: 48rem) {
  .originals-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .original-tile {
    height: 6.9rem;
    grid-template-columns: 1fr 38%;
  }

  .original-copy {
    padding-left: 0.8rem;
  }

  .original-copy small {
    display: none;
  }
}

@media (max-width: 23rem) {
  .originals-grid {
    grid-template-columns: 1fr;
  }
}
</style>
