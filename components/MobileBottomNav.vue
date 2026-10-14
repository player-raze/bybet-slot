<script setup lang="ts">
import { Dices, Gift, Headset, House, UserRound } from 'lucide-vue-next'

const { translate } = useSiteLocale()
const route = useRoute()

const navigationItems = [
  { label: 'Home', icon: House, to: '/' },
  { label: 'Slots', icon: Dices, to: '/explore/egames/slots' },
  { label: 'Promotions', icon: Gift, to: '/#promotions' },
  { label: 'Support', icon: Headset, to: '/#support' },
  { label: 'Account', icon: UserRound, to: '/explore/account/me' },
]

const isNavigationItemActive = (destination: string): boolean => {
  const [destinationPath, destinationFragment] = destination.split('#')

  if (destinationFragment) {
    return route.path === destinationPath && route.hash === `#${destinationFragment}`
  }

  if (destination === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(destination)
}
</script>

<template>
  <nav class="mobile-bottom-nav" :aria-label="translate('Primary navigation')">
    <NuxtLink
      v-for="item in navigationItems"
      :key="item.label"
      :to="item.to"
      :class="{ 'mobile-bottom-nav__link--active': isNavigationItemActive(item.to) }"
    >
      <component :is="item.icon" :size="17" :stroke-width="2.2" aria-hidden="true" />
      <span>{{ translate(item.label) }}</span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.mobile-bottom-nav {
  display: none;
}

@media (max-width: 63.99rem) {
  .mobile-bottom-nav {
    display: grid;
    position: fixed;
    z-index: 48;
    right: 0;
    bottom: 0;
    left: 0;
    min-height: calc(3.55rem + env(safe-area-inset-bottom));
    padding: 0.3rem 0.28rem env(safe-area-inset-bottom);
    border-top: 1px solid rgba(50, 212, 154, 0.28);
    background: rgba(3, 18, 13, 0.96);
    box-shadow: 0 -0.35rem 1rem rgba(0, 0, 0, 0.38);
    backdrop-filter: blur(18px) saturate(1.25);
    -webkit-backdrop-filter: blur(18px) saturate(1.25);
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .mobile-bottom-nav a {
    display: flex;
    min-width: 0;
    min-height: 3rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.38rem;
    color: #ffffff;
    font-size: 0.4rem;
    font-weight: 650;
    line-height: 1;
    text-decoration: none;
    gap: 0.22rem;
  }

  .mobile-bottom-nav a:hover,
  .mobile-bottom-nav .mobile-bottom-nav__link--active {
    color: #32d49a;
    background: rgba(50, 212, 154, 0.06);
  }

  .mobile-bottom-nav span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
