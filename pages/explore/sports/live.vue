<script setup lang="ts">
import { matchesSportsSelection } from '~/utils/sportsSelection'
import { ref, computed } from 'vue'
import {
  Trophy,
  Radio,
  CalendarDays,
  ChartNoAxesCombined,
  Sparkles,
  Flag,
  Search,
  RefreshCw,
} from 'lucide-vue-next'
import InplayMatches from '~/components/sports/InplayMatches.vue'
import Sort from '~/components/buttons/Sort.vue'
import Collapse from '~/components/buttons/Collapse.vue'
import Ai from '~/components/buttons/Ai.vue'
import type { SportsEvent } from '~/types/sports'
import '~/assets/css/sports.css'

const selectedSports = ['Basketball', 'Soccer', 'Tennis', 'Baseball']
// Optional: supply Odds API tournament keys to restrict this page further.
const selectedTournaments: Record<string, string[]> | undefined = undefined

const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl
useSeoMeta({
  title: 'Live Inplay Matches | ByBet',
  description: 'Explore live inplay matches, real-time odds, and sports scores on ByBet.',
})

const tabs = [
  { key: 'league', label: 'League', icon: Trophy, to: '/explore/sports/popular/league' },
  { key: 'inplay', label: 'Inplay', icon: Radio, to: '/explore/sports/live' },
  { key: 'upcoming', label: 'Upcoming', icon: CalendarDays, to: '/explore/sports/popular/upcoming' },
  { key: 'prematch', label: 'Prematch', icon: ChartNoAxesCombined, to: '/explore/sports/popular/pre-match' },
  { key: 'smart-pick', label: 'Smart Pick', icon: Sparkles, to: '/explore/sports/popular/smart-pick' },
  { key: 'outright', label: 'Outright', icon: Flag, to: '/explore/sports/popular/outright' },
] as const

const search = ref('')
const sortBy = ref<'league' | 'time'>('time')
const matchList = ref<InstanceType<typeof InplayMatches> | null>(null)

const { data, status, error, refresh } = await useFetch('/api/sports', {
  query: { mode: 'inplay' },
})
const liveEvents = computed(() => data.value?.events ?? [])
let refreshTimer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  refreshTimer = setInterval(() => { if (status.value !== 'pending') void refresh() }, 30000)
})
onBeforeUnmount(() => clearInterval(refreshTimer))

const filteredEvents = computed(() => {
  const q = search.value.toLowerCase().trim()
  let list = liveEvents.value.filter(event => matchesSportsSelection(event, selectedSports, selectedTournaments))

  if (q) {
    list = list.filter((event) => {
      const details = `${event.home_team ?? ''} ${event.away_team ?? ''} ${event.sport_title ?? ''}`.toLowerCase()
      return details.includes(q)
    })
  }

  return [...list].sort((a, b) => {
    if (sortBy.value === 'league') {
      const leagueCompare = (a.sport_title ?? '').localeCompare(b.sport_title ?? '')
      if (leagueCompare !== 0) {
        return leagueCompare
      }
    }
    return new Date(b.commence_time).getTime() - new Date(a.commence_time).getTime()
  })
})
</script>

<template>
  <section class="sports-page live-page">
    <!-- Sports Tabs Navigation (matching inplay page) -->
    <nav
      class="sports-tabs"
      aria-label="Sports categories"
    >
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.key"
        :to="tab.to"
        :class="{ selected: tab.key === 'inplay' }"
        :aria-current="tab.key === 'inplay' ? 'page' : undefined"
      >
        <component
          :is="tab.icon"
          :size="17"
          aria-hidden="true"
        />
        {{ tab.label }}
      </NuxtLink>
    </nav>

    <!-- Inplay Page Content -->
    <div class="results" :aria-busy="status === 'pending'">
      <div class="inplay-tab">
        <!-- Toolbar identical to Inplay tab -->
        <div class="toolbar">
          <Ai
            :to="bybetRedirectUrl"
            title="Smart Pick AI"
          />

          <label class="search">
            <span class="search-icons">
              <Search :size="16" aria-hidden="true" />
            </span>
            <input
              v-model="search"
              type="search"
              placeholder="Search league or team"
              aria-label="Search league or team"
            >
          </label>

          <Sort
            v-model="sortBy"
          />

          <Collapse
            :model-value="matchList?.allCollapsed ?? false"
            title="Collapse all matches"
            @toggle="matchList?.toggleAll()"
          />
        </div>

        <!-- Loading State -->
        <div v-if="status === 'pending' && !data" class="empty" role="status">
          <RefreshCw :size="28" class="animate-spin text-[#48daa6]" aria-hidden="true" />
          <p>Loading inplay matches…</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="empty" role="alert">
          <h2>Unable to load inplay matches</h2>
          <p>Live sports data is temporarily unavailable. Please try again.</p>
          <button type="button" @click="refresh()">
            Try again
          </button>
        </div>

        <!-- Live Matches List using InplayMatches -->
        <InplayMatches
          v-else-if="filteredEvents.length"
          ref="matchList"
          :events="filteredEvents"
        />

        <!-- Empty State -->
        <div v-else class="empty">
          <h2>No inplay events</h2>
          <p>Try another league or check back later.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.live-page {
  min-width: 0;
}
</style>
