<script setup lang="ts">
import { ArrowRight, Info, Trophy } from 'lucide-vue-next'

interface Jackpot {
  label: string
  amount: string
  image: string
  amountColor: string
  borderEffectColor: string
}

const jackpots: Jackpot[] = [
  {
    label: 'Mega Jackpot',
    amount: '₱1,256,832.45',
    image: '/images/jackpots/mega-red.webp',
    amountColor: '#ffe27a',
    borderEffectColor: '#ff4138',
  },
  {
    label: 'Grand Jackpot',
    amount: '₱356,901.22',
    image: '/images/jackpots/grand-purple.webp',
    amountColor: '#e19bff',
    borderEffectColor: '#d83cff',
  },
  {
    label: 'Major Jackpot',
    amount: '₱85,421.36',
    image: '/images/jackpots/major-blue.webp',
    amountColor: '#7fd8ff',
    borderEffectColor: '#22cfff',
  },
  {
    label: 'Minor Jackpot',
    amount: '₱12,903.14',
    image: '/images/jackpots/minor-green.webp',
    amountColor: '#f5ee7a',
    borderEffectColor: '#2df083',
  },
]

const { translate } = useSiteLocale()
</script>

<template>
  <section class="jackpot-section" aria-labelledby="jackpots-title">
    <header>
      <div>
        <Trophy :size="16" fill="currentColor" aria-hidden="true" />
        <h2 id="jackpots-title">{{ translate('Top Jackpots') }}</h2>
      </div>
      <NuxtLink to="/explore/egames/jackpot">{{ translate('View All') }} <ArrowRight :size="9" /></NuxtLink>
    </header>
    <div class="jackpot-grid">
      <NuxtLink
        v-for="jackpot in jackpots"
        :key="jackpot.label"
        to="/explore/egames/jackpot"
        :style="{
          '--jackpot-image': `url('${jackpot.image}')`,
          '--jackpot-amount': jackpot.amountColor,
          '--jackpot-border-effect': jackpot.borderEffectColor,
        }"
      >
        <span class="jackpot-text">
          <small>{{ translate(jackpot.label) }}</small>
          <strong>{{ jackpot.amount }}</strong>
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.jackpot-section {
  margin-top: 0.2rem;
}

.jackpot-section header {
  display: flex;
  min-height: 1.35rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.18rem;
}

.jackpot-section header > div {
  display: flex;
  align-items: center;
  color: #f7c43c;
  gap: 0.3rem;
}

.jackpot-section h2 {
  margin: 0;
  color: white;
  font-size: var(--font-section-heading);
  font-weight: 750;
}

.jackpot-section header small {
  color: #8a9c93;
  font-size: 0.35rem;
}

.jackpot-info {
  color: #8a9c93;
}

.jackpot-section header > a {
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
  font-size: 0.37rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.13), transparent 52%),
    rgba(3, 18, 13, 0.62);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.2),
    inset 0 -1px rgba(0, 0, 0, 0.28),
    0 0.16rem 0.42rem rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(18px) saturate(1.45);
  -webkit-backdrop-filter: blur(18px) saturate(1.45);
  gap: 0.18rem;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.jackpot-section header > a::before {
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

.jackpot-section header > a:hover {
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

.jackpot-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.28rem;
}

.jackpot-grid > a {
  --jackpot-card-radius: 0.42rem;
  display: flex;
  position: relative;
  min-width: 0;
  height: 5.3rem;
  align-items: center;
  padding: 0.12rem 0.3rem 0.12rem 39%;
  overflow: hidden;
  border: 0;
  border-radius: var(--jackpot-card-radius);
  color: white;
  background-color: #101914;
  background-image: var(--jackpot-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  isolation: isolate;
}

.jackpot-grid > a::before {
  content: '';
  position: absolute;
  z-index: 1;
  inset: 0;
  padding: 2px;
  border-radius: inherit;
  background: conic-gradient(
    from var(--jackpot-border-angle),
    transparent 0deg 235deg,
    var(--jackpot-border-effect) 272deg,
    white 304deg,
    var(--jackpot-border-effect) 332deg,
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
  animation: jackpot-border-run 2.8s linear infinite;
}

.jackpot-grid > a:hover {
  filter: brightness(1.12);
}

.jackpot-text {
  display: flex;
  position: relative;
  z-index: 2;
  min-width: 0;
  flex: 1;
  align-items: center;
  flex-direction: column;
}

.jackpot-grid small {
  overflow: hidden;
  color: #f1f5f3;
  font-size: 0.36rem;
  font-weight: 750;
  text-transform: uppercase;
  white-space: nowrap;
}

.jackpot-grid strong {
  overflow: hidden;
  color: var(--jackpot-amount);
  font-size: 0.64rem;
  font-weight: 850;
  white-space: nowrap;
  text-shadow: 0 0.1rem 0.16rem rgba(0, 0, 0, 0.5);
}

@property --jackpot-border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes jackpot-border-run {
  to {
    --jackpot-border-angle: 360deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .jackpot-grid > a::before {
    animation: none;
    background: var(--jackpot-border-effect);
    opacity: 0.8;
  }
}

@media (min-width: 48rem) {
  .jackpot-grid > a {
    --jackpot-card-radius: 0.75rem;
  }

  .jackpot-section header small,
  .jackpot-section header > a,
  .jackpot-grid small {
    font-size: 0.5rem;
  }

  .jackpot-grid strong {
    font-size: 1.3rem;
  }
}

@media (max-width: 63.99rem) {
  .jackpot-section {
    margin-top: 0.5rem;
  }

  .jackpot-section header {
    min-height: 1.85rem;
    margin-bottom: 0.35rem;
  }

  .jackpot-section header > div {
    gap: 0.38rem;
  }

  .jackpot-section h2 {
    font-size: 0.95rem;
  }

  .jackpot-section header small,
  .jackpot-info {
    display: none;
  }

  .jackpot-section header > a {
    min-height: 1.65rem;
    padding: 0.22rem 0.65rem;
    font-size: 0.75rem;
    gap: 0.24rem;
  }

  .jackpot-section header > a :deep(svg) {
    width: 0.75rem;
    height: 0.75rem;
  }

  .jackpot-grid {
    grid-auto-columns: calc((100% - 0.38rem) / 2);
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
    gap: 0.38rem;
  }

  .jackpot-grid::-webkit-scrollbar {
    display: none;
  }

  .jackpot-grid > a {
    --jackpot-card-radius: 0.5rem;
    height: 4.35rem;
    padding: 0.2rem 0.38rem 0.2rem 40%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  .jackpot-text {
    gap: 0.08rem;
  }

  .jackpot-grid small {
    font-size: clamp(0.58rem, 2.3vw, 0.72rem);
    letter-spacing: 0.02em;
  }

  .jackpot-grid strong {
    font-size: clamp(0.78rem, 3.3vw, 1rem);
  }
}
</style>

