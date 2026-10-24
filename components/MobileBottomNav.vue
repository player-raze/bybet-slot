<script setup lang="ts">
import {
  ArrowLeft,
  Gamepad2,
  Play,
  Spade,
  UserRound,
  Volleyball,
} from 'lucide-vue-next'

const { translate } = useSiteLocale()
const route = useRoute()

const eGamesItems = [
  { label: 'Slots', icon: '/icons/egames/slots.webp', to: '/explore/egames/slots' },
  { label: 'Bingo', icon: '/icons/egames/bingo.webp', to: '/explore/egames/bingo' },
  { label: 'Jackpot', icon: '/icons/egames/jackpot.webp', to: '/explore/egames/jackpot' },
  { label: 'History', icon: '/icons/egames/history.webp', to: '/explore/egames/history' },
]

const isEGamesCategoryPath = (path: string): boolean => eGamesItems.some((item) => {
  return path === item.to || path.startsWith(`${item.to}/`)
})

const showingEGames = ref(isEGamesCategoryPath(route.path))

watch(() => route.path, (path) => {
  showingEGames.value = isEGamesCategoryPath(path)
})

const isPathActive = (destination: string): boolean => {
  if (destination === '/') {
    return route.path === '/'
  }

  return route.path === destination || route.path.startsWith(`${destination}/`)
}

const isSportsActive = computed(() => (
  route.path.startsWith('/explore/sports/')
  && !route.path.startsWith('/explore/sports/live')
))

const isInPlayActive = computed(() => route.path.startsWith('/explore/sports/live'))
const isAccountActive = computed(() => route.path.startsWith('/explore/account/'))
</script>

<template>
  <nav class="mobile-bottom-nav" :aria-label="translate('Primary navigation')">
    <div v-if="showingEGames" class="mobile-bottom-nav__row mobile-bottom-nav__row--egames">
      <NuxtLink
        v-for="item in eGamesItems"
        :key="item.label"
        :to="item.to"
        class="mobile-bottom-nav__item mobile-bottom-nav__item--egames"
        :class="{ 'mobile-bottom-nav__item--active': isPathActive(item.to) }"
        :aria-current="isPathActive(item.to) ? 'page' : undefined"
      >
        <img :src="item.icon" alt="" width="29" height="29" aria-hidden="true">
        <span>{{ translate(item.label) }}</span>
      </NuxtLink>

      <button
        type="button"
        class="mobile-bottom-nav__switch mobile-bottom-nav__switch--back"
        :aria-label="translate('Back to main navigation')"
        @click="showingEGames = false"
      >
        <span class="mobile-bottom-nav__switch-circle" aria-hidden="true">
          <ArrowLeft :size="28" :stroke-width="3" />
        </span>
      </button>
    </div>

    <div v-else class="mobile-bottom-nav__row mobile-bottom-nav__row--primary">
      <button
        type="button"
        class="mobile-bottom-nav__switch mobile-bottom-nav__switch--home"
        :aria-label="translate('Open eGames categories')"
        @click="showingEGames = true"
      >
        <span class="mobile-bottom-nav__switch-circle" aria-hidden="true">
          <Spade :size="27" :stroke-width="2.4" fill="currentColor" />
        </span>
      </button>

      <NuxtLink
        to="/explore/sports/popular"
        class="mobile-bottom-nav__item"
        :class="{ 'mobile-bottom-nav__item--active': isSportsActive }"
        :aria-current="isSportsActive ? 'page' : undefined"
      >
        <Volleyball :size="27" :stroke-width="2.1" aria-hidden="true" />
        <span>{{ translate('Sports') }}</span>
      </NuxtLink>

      <NuxtLink
        to="/explore/sports/live"
        class="mobile-bottom-nav__item"
        :class="{ 'mobile-bottom-nav__item--active': isInPlayActive }"
        :aria-current="isInPlayActive ? 'page' : undefined"
      >
        <span class="mobile-bottom-nav__inplay-icon" aria-hidden="true">
          <Volleyball :size="27" :stroke-width="2.1" />
          <Play class="mobile-bottom-nav__play" :size="12" :stroke-width="2.8" fill="currentColor" />
          <span class="mobile-bottom-nav__badge">45</span>
        </span>
        <span>{{ translate('In-Play') }}</span>
      </NuxtLink>

      <NuxtLink
        to="/explore/egames/slots"
        class="mobile-bottom-nav__item"
        :class="{ 'mobile-bottom-nav__item--active': route.path.startsWith('/explore/egames/') }"
        :aria-current="route.path.startsWith('/explore/egames/') ? 'page' : undefined"
      >
        <Gamepad2 :size="28" :stroke-width="2.1" aria-hidden="true" />
        <span>{{ translate('eGames') }}</span>
      </NuxtLink>

      <NuxtLink
        to="/explore/account/me"
        class="mobile-bottom-nav__item"
        :class="{ 'mobile-bottom-nav__item--active': isAccountActive }"
        :aria-current="isAccountActive ? 'page' : undefined"
      >
        <UserRound :size="27" :stroke-width="2.2" aria-hidden="true" />
        <span>{{ translate('Me') }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.mobile-bottom-nav {
  display: none;
}

@media (max-width: 63.99rem) {
  .mobile-bottom-nav {
    display: block;
    position: fixed;
    z-index: 48;
    right: 0;
    bottom: 0;
    left: 0;
    min-height: calc(66px + env(safe-area-inset-bottom));
    padding-bottom: env(safe-area-inset-bottom);
    overflow: visible;
    border: 0;
    border-radius: 20px 20px 0 0;
    color: #8c8c8c;
    background: rgba(17, 17, 17, 0.98);
    box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.34);
    backdrop-filter: blur(18px) saturate(1.12);
    -webkit-backdrop-filter: blur(18px) saturate(1.12);
  }

  .mobile-bottom-nav__row {
    display: grid;
    height: 66px;
    align-items: stretch;
  }

  .mobile-bottom-nav__row--primary {
    grid-template-columns: 60px repeat(4, minmax(0, 1fr));
  }

  .mobile-bottom-nav__row--egames {
    grid-template-columns: repeat(4, minmax(0, 1fr)) 60px;
  }

  .mobile-bottom-nav__item,
  .mobile-bottom-nav__switch {
    appearance: none;
    min-width: 0;
    border: 0;
    font-family: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .mobile-bottom-nav__item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 6px 2px 5px;
    color: #8d8d8d;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    background: transparent;
    gap: 5px;
    transition: color 140ms ease;
  }

  .mobile-bottom-nav__item :deep(svg) {
    flex: none;
  }

  .mobile-bottom-nav__item img {
    display: block;
    width: 29px;
    height: 29px;
    flex: none;
    object-fit: contain;
    filter: grayscale(1) brightness(1.25);
    opacity: 0.74;
    transition: filter 140ms ease, opacity 140ms ease;
  }

  .mobile-bottom-nav__item span:last-child {
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mobile-bottom-nav__item:hover,
  .mobile-bottom-nav__item--active {
    color: #079568;
  }

  .mobile-bottom-nav__item--active img {
    filter: none;
    opacity: 1;
  }

  .mobile-bottom-nav__switch {
    display: grid;
    height: 58px;
    align-self: end;
    place-items: center;
    color: #f4f7f5;
    background: #007c57;
  }

  .mobile-bottom-nav__switch--home {
    padding-right: 8px;
    border-radius: 0 31px 31px 0;
  }

  .mobile-bottom-nav__switch--back {
    padding-left: 8px;
    border-radius: 31px 0 0 31px;
  }

  .mobile-bottom-nav__switch-circle {
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    color: #f4f7f5;
    background: #101010;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.38);
  }

  .mobile-bottom-nav__switch--back .mobile-bottom-nav__switch-circle {
    color: #111111;
    background: #f4f4f4;
  }

  .mobile-bottom-nav__inplay-icon {
    display: grid;
    position: relative;
    width: 31px;
    height: 29px;
    place-items: center;
    overflow: visible !important;
  }

  .mobile-bottom-nav__play {
    position: absolute;
    right: -2px;
    bottom: -1px;
    color: currentColor;
    filter: drop-shadow(0 0 2px #111);
  }

  .mobile-bottom-nav__badge {
    display: grid;
    position: absolute;
    top: -8px;
    right: -12px;
    min-width: 20px;
    height: 20px;
    place-items: center;
    padding: 0 4px;
    border-radius: 10px;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    background: #00875e;
    box-shadow: 0 0 0 2px #111111;
  }

  @media (max-width: 22rem) {
    .mobile-bottom-nav__item {
      font-size: 11px;
    }

    .mobile-bottom-nav__switch-circle {
      width: 44px;
      height: 44px;
    }
  }
}
</style>
