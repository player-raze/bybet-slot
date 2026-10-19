<script setup lang="ts">
import { computed } from 'vue'
import '~/assets/css/sports.css'

const route = useRoute()

useSeoMeta({
  title: 'Live Inplay Matches | ByBet',
  description: 'Explore live inplay matches, real-time odds, and sports scores on ByBet.',
})

const liveTabs = [
  { key: 'all', label: 'All Live', icon: '/icons/sports/live.png', to: '/explore/sports/live' },
  { key: 'basketball', label: 'Basketball', icon: '/icons/sports/basketball.png', to: '/explore/sports/live/basketball' },
  { key: 'soccer', label: 'Soccer', icon: '/icons/sports/soccer.png', to: '/explore/sports/live/soccer' },
  { key: 'tennis', label: 'Tennis', icon: '/icons/sports/tennis.png', to: '/explore/sports/live/tennis' },
  { key: 'baseball', label: 'Baseball', icon: '/icons/sports/baseball.png', to: '/explore/sports/live/baseball' },
]

const currentSport = computed(() => {
  const sportParam = String(route.params.sport || '').toLowerCase()
  if (sportParam && ['basketball', 'soccer', 'tennis', 'baseball'].includes(sportParam)) {
    return sportParam
  }
  return 'all'
})
</script>

<template>
  <section class="sports-page live-page">
    <!-- Sports Tabs Navigation: Sport Ball Icons -->
    <nav
      class="sports-tabs"
      aria-label="Live sports categories"
    >
      <NuxtLink
        v-for="tab in liveTabs"
        :key="tab.key"
        :to="tab.to"
        :class="{ selected: currentSport === tab.key }"
        :aria-current="currentSport === tab.key ? 'page' : undefined"
      >
        <img
          :src="tab.icon"
          :alt="tab.label"
          class="w-5 h-5 object-contain shrink-0"
        />
        <span>{{ tab.label }}</span>
      </NuxtLink>
    </nav>

    <!-- Nested Route Content -->
    <NuxtPage />
  </section>
</template>

<style scoped>
.live-page {
  min-width: 0;
}
</style>
