<script setup lang="ts">
import { ArrowRight, Gift } from 'lucide-vue-next'

interface Promotion {
  label: string
  value: string
  detail?: string
  action: string
  image: string
  tone: 'emerald' | 'violet' | 'crimson'
}

const promotions: Promotion[] = [
  {
    label: 'Welcome Rewards',
    value: 'Up to ₱1,000',
    action: 'Register Now',
    image: '/reference/promotion-gift.webp',
    tone: 'emerald',
  },
  {
    label: 'Daily Cashback',
    value: 'Up to 15%',
    action: 'Learn More',
    image: '/reference/promotion-cashback.webp',
    tone: 'violet',
  },
  {
    label: 'Slot Tournament',
    value: '₱100,000',
    detail: 'Prize Pool',
    action: 'Join Now',
    image: '/reference/promotion-tournament.webp',
    tone: 'crimson',
  },
]

const { translate } = useSiteLocale()
</script>

<template>
  <section id="promotions" class="promotions-section" aria-labelledby="promotions-title">
    <header>
      <div><Gift :size="16" fill="currentColor" aria-hidden="true" /><h2 id="promotions-title">{{ translate('Promotions') }}</h2></div>
      <NuxtLink to="/explore/bonuses">{{ translate('View All') }} <ArrowRight :size="9" /></NuxtLink>
    </header>
    <div class="promotion-grid">
      <NuxtLink
        v-for="promotion in promotions"
        :key="promotion.label"
        to="/explore/bonuses"
        :data-tone="promotion.tone"
        :aria-label="`${translate(promotion.label)}: ${promotion.value}${promotion.detail ? ` ${translate(promotion.detail)}` : ''}`"
      >
        <img
          :src="promotion.image"
          alt=""
          width="1024"
          height="343"
          loading="lazy"
          decoding="async"
        >
        <span class="promotion-copy">
          <small>{{ translate(promotion.label) }}</small>
          <span class="promotion-value">
            <strong>{{ promotion.value }}</strong>
            <em v-if="promotion.detail">{{ translate(promotion.detail) }}</em>
          </span>
          <span class="promotion-action">
            {{ translate(promotion.action) }}
          </span>
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.promotions-section {
  margin-top: 0.45rem;
}

.promotions-section header {
  display: flex;
  min-height: 1.35rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.18rem;
}

.promotions-section header > div {
  display: flex;
  align-items: center;
  color: #ff554b;
  gap: 0.3rem;
}

.promotions-section h2 {
  margin: 0;
  font-size: var(--font-section-heading);
  font-weight: 800;
  background: linear-gradient(100deg, #f2bd45 0%, #fff1b8 48%, #ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.promotions-section header > a {
  display: flex;
  position: relative;
  isolation: isolate;
  align-items: center;
  min-height: 1.15rem;
  padding: 0.12rem 0.38rem;
  overflow: hidden;
  border: 1px solid rgba(214, 232, 222, 0.17);
  border-radius: 999px;
  color: #ffffff;
  font-size: 0.36rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.13), transparent 52%),
    rgba(3, 18, 13, 0.62);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.2),
    inset 0 -1px rgba(0, 0, 0, 0.28),
    0 0.16rem 0.42rem rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18px) saturate(1.45);
  -webkit-backdrop-filter: blur(18px) saturate(1.45);
  gap: 0.14rem;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.promotions-section header > a::before {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 10%;
  left: 10%;
  height: 50%;
  border-radius: 0 0 50% 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), transparent);
  content: '';
  pointer-events: none;
}

.promotions-section header > a:hover {
  border-color: rgba(91, 230, 179, 0.5);
  color: #ffffff;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.17), transparent 52%),
    rgba(4, 53, 38, 0.68);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.26),
    inset 0 -1px rgba(0, 25, 17, 0.3),
    0 0.2rem 0.5rem rgba(0, 0, 0, 0.26),
    0 0 0.45rem rgba(50, 212, 154, 0.1);
  transform: translateY(-1px);
}

.promotion-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.3rem;
}

.promotion-grid a {
  --promo-card-radius: 0.3rem;
  --promo-border-effect: #20c97d;
  display: block;
  position: relative;
  isolation: isolate;
  min-width: 0;
  aspect-ratio: 3.2 / 1;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: var(--promo-card-radius);
  background: #101713;
  box-shadow: 0 0.18rem 0.5rem rgba(0, 0, 0, 0.22);
}

.promotion-grid a[data-tone='emerald'] {
  --promo-border-effect: #20c97d;
  box-shadow:
    0 0.18rem 0.5rem rgba(0, 0, 0, 0.22),
    0 0 0.85rem rgba(32, 201, 125, 0.12);
}

.promotion-grid a[data-tone='violet'] {
  --promo-border-effect: #af48ec;
  box-shadow:
    0 0.18rem 0.5rem rgba(0, 0, 0, 0.22),
    0 0 0.85rem rgba(175, 72, 236, 0.14);
}

.promotion-grid a[data-tone='crimson'] {
  --promo-border-effect: #ff474e;
  box-shadow:
    0 0.18rem 0.5rem rgba(0, 0, 0, 0.22),
    0 0 0.85rem rgba(255, 71, 78, 0.14);
}

.promotion-grid a::before {
  content: '';
  position: absolute;
  z-index: 3;
  inset: 0;
  padding: 2px;
  border-radius: inherit;
  background: conic-gradient(
    from var(--promo-border-angle),
    transparent 0deg 228deg,
    var(--promo-border-effect) 268deg,
    rgba(255, 255, 255, 0.92) 300deg,
    var(--promo-border-effect) 328deg,
    transparent 360deg
  );
  pointer-events: none;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: promotion-border-run 2.6s linear infinite;
}

.promotion-grid a::after {
  position: absolute;
  z-index: 1;
  inset: 0;
  background: linear-gradient(90deg, rgba(0, 5, 3, 0.24), transparent 63%);
  content: '';
  pointer-events: none;
}

.promotion-grid a:hover {
  filter: brightness(1.06);
  transform: translateY(-1px);
}

.promotion-grid a[data-tone='emerald']:hover {
  box-shadow:
    0 0.22rem 0.55rem rgba(0, 0, 0, 0.24),
    0 0 1.1rem rgba(32, 201, 125, 0.22);
}

.promotion-grid a[data-tone='violet']:hover {
  box-shadow:
    0 0.22rem 0.55rem rgba(0, 0, 0, 0.24),
    0 0 1.1rem rgba(175, 72, 236, 0.24);
}

.promotion-grid a[data-tone='crimson']:hover {
  box-shadow:
    0 0.22rem 0.55rem rgba(0, 0, 0, 0.24),
    0 0 1.1rem rgba(255, 71, 78, 0.24);
}

@property --promo-border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes promotion-border-run {
  to {
    --promo-border-angle: 360deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .promotion-grid a::before {
    animation: none;
    background: var(--promo-border-effect);
    opacity: 0.75;
  }
}

.promotion-grid img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promotion-copy {
  display: flex;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 5.5%;
  width: 47%;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  text-transform: uppercase;
  text-shadow: 0 1px 0.35rem rgba(0, 0, 0, 0.72);
  transform: translateY(-50%);
}

.promotion-copy small {
  color: #ffffff;
  font-size: clamp(0.45rem, 0.72vw, 0.6rem);
  font-weight: 800;
  letter-spacing: 0.025em;
  line-height: 1.05;
}

.promotion-value {
  display: inline-flex;
  align-items: baseline;
  margin-top: 0.08rem;
  white-space: nowrap;
  gap: 0.18rem;
}

.promotion-copy strong {
  color: #ffd34f;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 850;
  letter-spacing: -0.025em;
  line-height: 1;
  background: linear-gradient(180deg, #fff7bd 0%, #ffd653 46%, #f2a719 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #f1c72e8f;
}

.promotion-copy em {
  color: #ffe27d;
  font-size: clamp(0.35rem, 0.52vw, 0.48rem);
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.035em;
}

.promotion-action {
  display: inline-flex;
  align-items: center;
  min-height: clamp(1.12rem, 1.8vw, 1.45rem);
  margin-top: clamp(0.24rem, 0.5vw, 0.42rem);
  padding: 0.14rem clamp(0.78rem, 1.12vw, 1rem);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0.38rem;
  font-size: clamp(0.4rem, 1vw, 0.55rem);
  font-weight: 800;
  line-height: 1;
  text-transform: none;
  background: linear-gradient(180deg, #07966a, #036242);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.16),
    0 0.12rem 0.28rem rgba(0, 0, 0, 0.22);
  gap: 0.18rem;
}

.promotion-grid a[data-tone='violet'] .promotion-action {
  background: linear-gradient(180deg, #7546b8, #4b218b);
}

.promotion-grid a:focus-visible {
  outline: 2px solid var(--accent-bright);
  outline-offset: 2px;
}

@media (min-width: 48rem) {
  .promotions-section header > a {
    font-size: 0.5rem;
  }
}

@media (max-width: 63.99rem) {
  .promotions-section {
    margin-top: 0.5rem;
  }

  .promotions-section header {
    min-height: 1.85rem;
    margin-bottom: 0.35rem;
  }

  .promotions-section header > div {
    gap: 0.38rem;
  }

  .promotions-section h2 {
    font-size: 0.95rem;
  }

  .promotions-section header > a {
    min-height: 1.65rem;
    padding: 0.22rem 0.65rem;
    font-size: 0.75rem;
    gap: 0.24rem;
  }

  .promotions-section header > a :deep(svg) {
    width: 0.75rem;
    height: 0.75rem;
  }

  .promotion-grid {
    grid-auto-columns: 84%;
    grid-auto-flow: column;
    grid-template-columns: none;
    margin-right: calc(var(--page-padding) * -1);
    padding-right: var(--page-padding);
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    touch-action: pan-x;
    -webkit-overflow-scrolling: touch;
    gap: 0.42rem;
  }

  .promotion-grid::-webkit-scrollbar {
    display: none;
  }

  .promotion-grid a {
    --promo-card-radius: 0.5rem;
    aspect-ratio: 2.85 / 1;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  .promotion-copy {
    left: 5.5%;
    width: 54%;
  }

  .promotion-copy small {
    font-size: clamp(0.62rem, 2.5vw, 0.75rem);
  }

  .promotion-value {
    margin-top: 0.14rem;
    gap: 0.24rem;
  }

  .promotion-copy strong {
    font-size: clamp(1.05rem, 4.4vw, 1.35rem);
  }

  .promotion-copy em {
    font-size: clamp(0.58rem, 2.2vw, 0.7rem);
  }

  .promotion-action {
    min-height: 1.6rem;
    margin-top: 0.36rem;
    padding: 0.22rem 0.75rem;
    border-radius: 0.4rem;
    font-size: clamp(0.68rem, 2.5vw, 0.78rem);
  }
}
</style>
