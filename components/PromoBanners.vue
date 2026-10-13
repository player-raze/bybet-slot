<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { PromoBanner } from '~/types/casino'

defineProps<{
  banners: PromoBanner[]
}>()

const emit = defineEmits<{
  'demo-action': [label: string]
}>()
</script>

<template>
  <section id="promotions" aria-labelledby="promotions-title">
    <h1 id="promotions-title" class="sr-only">Casino promotions</h1>
    <div class="promo-scroller">
      <article
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="promo-banner"
        :style="{ '--promo-accent': banner.accent }"
      >
        <div class="promo-copy">
          <span class="promo-eyebrow">{{ banner.eyebrow }}</span>
          <h2>{{ banner.title }}</h2>
          <p>{{ banner.copy }}</p>
          <button type="button" @click="emit('demo-action', banner.action)">
            {{ banner.action }}
            <ArrowUpRight :size="14" />
          </button>
        </div>
        <div class="promo-art" aria-hidden="true">
          <span class="promo-ring promo-ring--back" />
          <span class="promo-ring promo-ring--front" />
          <strong>{{ banner.symbol }}</strong>
          <span class="promo-spark promo-spark--one">✦</span>
          <span class="promo-spark promo-spark--two">✦</span>
          <span class="promo-index">0{{ index + 1 }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.promo-scroller {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--card-gap);
}

.promo-banner {
  display: grid;
  position: relative;
  min-width: 0;
  aspect-ratio: 1.7 / 1;
  grid-template-columns: minmax(0, 1.2fr) minmax(6.5rem, 0.8fr);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 80% 15%, color-mix(in srgb, var(--promo-accent) 65%, transparent), transparent 32%),
    linear-gradient(135deg, color-mix(in srgb, var(--promo-accent) 48%, #111d17), #0d1511 75%);
  box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.18);
}

.promo-banner::after {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: linear-gradient(120deg, transparent 35%, white 50%, transparent 62%);
  transform: translateX(-100%);
  transition: transform 450ms ease;
  content: '';
}

.promo-banner:hover::after {
  transform: translateX(100%);
}

.promo-copy {
  z-index: 1;
  align-self: center;
  padding: clamp(1rem, 2.2vw, 1.7rem);
}

.promo-eyebrow {
  display: block;
  margin-bottom: 0.55rem;
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.57rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.promo-copy h2 {
  max-width: 12rem;
  margin: 0;
  font-size: clamp(1.05rem, 1.45vw, 1.5rem);
  line-height: 1.03;
  letter-spacing: -0.04em;
}

.promo-copy p {
  max-width: 14rem;
  margin: 0.55rem 0 0.8rem;
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.68rem;
  line-height: 1.45;
}

.promo-copy button {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 0.4rem;
  color: white;
  font-size: 0.63rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.2);
  gap: 0.35rem;
}

.promo-art {
  position: relative;
  min-width: 0;
}

.promo-ring {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
}

.promo-ring--back {
  top: 15%;
  right: -25%;
  width: 9rem;
  height: 9rem;
}

.promo-ring--front {
  right: 3%;
  bottom: 3%;
  width: 6rem;
  height: 6rem;
  border-width: 0.7rem;
  border-color: rgba(255, 255, 255, 0.07);
}

.promo-art strong {
  position: absolute;
  top: 50%;
  left: 44%;
  color: rgba(255, 255, 255, 0.92);
  font-family: Georgia, serif;
  font-size: clamp(3.6rem, 5vw, 5.8rem);
  line-height: 1;
  text-shadow: 0 0.7rem 1.5rem rgba(0, 0, 0, 0.38);
  transform: translate(-50%, -50%) rotate(9deg);
}

.promo-spark {
  position: absolute;
  color: rgba(255, 255, 255, 0.66);
}

.promo-spark--one {
  top: 20%;
  left: 12%;
}

.promo-spark--two {
  right: 8%;
  bottom: 20%;
  font-size: 0.65rem;
}

.promo-index {
  position: absolute;
  right: 0.65rem;
  bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.16);
  font-size: 0.55rem;
  font-weight: 800;
}

@media (max-width: 74rem) {
  .promo-banner {
    aspect-ratio: 1.52 / 1;
  }

  .promo-copy p {
    display: none;
  }
}

@media (max-width: 48rem) {
  .promo-scroller {
    display: flex;
    margin-right: calc(var(--page-padding) * -1);
    padding-right: var(--page-padding);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .promo-scroller::-webkit-scrollbar {
    display: none;
  }

  .promo-banner {
    width: min(82vw, 22rem);
    aspect-ratio: 1.62 / 1;
    flex: 0 0 auto;
    scroll-snap-align: start;
  }
}
</style>
