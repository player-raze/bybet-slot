<script setup lang="ts">
import {
  Trophy,
  Radio,
  CalendarDays,
  ChartNoAxesCombined,
  Sparkles,
  Flag,
  RefreshCw,
} from 'lucide-vue-next'

import League from '~/components/sports/League.vue'
import Inplay from '~/components/sports/Inplay.vue'
import Upcoming from '~/components/sports/Upcoming.vue'
import Prematch from '~/components/sports/Prematch.vue'
import SmartPick from '~/components/sports/SmartPick.vue'
import Outright from '~/components/sports/Outright.vue'
import '~/assets/css/sports.css'

const props = withDefaults(defineProps<{
  selectedSports: string[]
  selectedTournaments?: Record<string, string[]>
  initialTab?: string
}>(), {
  selectedTournaments: () => ({}),
})

const route = useRoute()

const tabs = [
  { key: 'league', label: 'League', icon: Trophy },
  { key: 'inplay', label: 'In-Play', icon: Radio },
  { key: 'upcoming', label: 'Upcoming', icon: CalendarDays },
  { key: 'prematch', label: 'Pre-Match', icon: ChartNoAxesCombined },
  { key: 'smart-pick', label: 'Smart Pick', icon: Sparkles },
  { key: 'outright', label: 'Outright', icon: Flag },
] as const

const isOutrightDetail = computed(() => Boolean(route.params.sport && route.params.tournament))

const tournamentKey = computed(() => {
  const tournament = String(route.params.tournament ?? '').replaceAll('-', '_')
  return `${route.params.sport}_${tournament}`
})

const isPopularRoute = computed(() => route.path.startsWith('/explore/sports/popular'))

const activeTab = computed(() => {
  if (isOutrightDetail.value) {
    return 'outright'
  }

  if (isPopularRoute.value) {
    return route.params.tab === 'pre-match' ? 'prematch' : String(route.params.tab ?? 'league')
  }

  const queryTab = typeof route.query.tab === 'string' ? route.query.tab : undefined
  if (queryTab) {
    return queryTab === 'pre-match' ? 'prematch' : queryTab
  }

  return props.initialTab ?? 'league'
})

const tabPath = (key: string): string => {
  const slug = key === 'prematch' ? 'pre-match' : key
  if (isPopularRoute.value) {
    return `/explore/sports/popular/${slug}`
  }
  return `${route.path}?tab=${slug}`
}
const selectedSport = ref('')
const now = ref(Date.now())
let timer: ReturnType<typeof setInterval> | undefined

useSeoMeta({
  title: () => `${tabs.find(tab => tab.key === activeTab.value)?.label ?? 'Popular Sports'} | ByBet`,
  description: 'Explore leagues, live scores, upcoming fixtures and sports odds.',
})

const {
  data: leagues,
  status: leagueStatus,
  error: leagueError,
  refresh: refreshLeagues,
} = await useFetch('/api/sports', {
  query: { mode: 'league' },
})

const availableSports = computed(() => {
  const showOutrights = isOutrightDetail.value
  const sports = leagues.value?.sports ?? []

  return sports.filter((sport) => {
    if (!sport.active || sport.has_outrights !== showOutrights) {
      return false
    }

    if (props.selectedSports.length > 0 && !props.selectedSports.includes(sport.group)) {
      return false
    }

    if (activeTab.value === 'outright' && !isOutrightDetail.value) {
      return sports.some((market) => {
        const belongsToTournament = market.key === sport.key
          || market.key.startsWith(`${sport.key}_`)

        return market.active && market.has_outrights && belongsToTournament
      })
    }

    return !isOutrightDetail.value
      || sport.key === tournamentKey.value
      || sport.key.startsWith(`${tournamentKey.value}_`)
  })
})

const tournamentTitle = computed(() => {
  const tournament = leagues.value?.sports.find(sport => sport.key === tournamentKey.value)
  return tournament?.title ?? String(route.params.tournament ?? '').replaceAll('-', ' ').toUpperCase()
})

useSeoMeta({
  title: () => isOutrightDetail.value
    ? `${tournamentTitle.value} Outrights | ByBet`
    : `${tabs.find(tab => tab.key === activeTab.value)?.label ?? 'Popular Sports'} | ByBet`,
})

watch(availableSports, (sports) => {
  const requestedSport = typeof route.query.sport === 'string' ? route.query.sport : ''

  if (sports.some(sport => sport.key === requestedSport)) {
    selectedSport.value = requestedSport
    return
  }

  const hasSelectedSport = sports.some(sport => sport.key === selectedSport.value)

  if (!hasSelectedSport) {
    selectedSport.value = sports[0]?.key ?? ''
  }
}, { immediate: true })

const query = computed(() => ({
  mode: activeTab.value,
  sport: selectedSport.value,
}))

const isFixtureTab = computed(() => {
  return !['league', 'smart-pick', 'outright'].includes(activeTab.value)
})

const {
  data: fixtures,
  status: fixtureStatus,
  error: fixtureError,
  execute: loadFixtures,
} = await useFetch('/api/sports', {
  query,
  immediate: isFixtureTab.value && Boolean(selectedSport.value),
  watch: false,
})

watch(query, () => {
  fixtures.value = null

  if (isFixtureTab.value && selectedSport.value) {
    void loadFixtures()
  }
})

const filteredSports = computed(() => {
  return availableSports.value.filter((sport) => {
    if (!props.selectedSports.includes(sport.group)) {
      return false
    }

    // Detail pages are already restricted to the tournament in the URL.
    // A league opened from another sports page may not be in Popular's shortlist.
    if (isOutrightDetail.value) {
      return true
    }

    const tournamentKeys = props.selectedTournaments[sport.group] ?? []
    const matchesTournament = tournamentKeys.some((key) => {
      if (key.endsWith('*')) {
        return sport.key.startsWith(key.slice(0, -1))
      }

      return sport.key === key
        || (activeTab.value === 'outright' && sport.key.startsWith(`${key}_`))
    })

    if (tournamentKeys.length && !matchesTournament) {
      return false
    }

    return true
  })
})

const groups = computed(() => {
  return props.selectedSports.filter((group) => {
    return filteredSports.value.some(sport => sport.group === group)
  })
})

const outrightRefreshVersion = ref(0)

const inplayEvents = computed(() => {
  return (fixtures.value?.events ?? [])
    .filter((event) => {
      const start = new Date(event.commence_time).getTime()
      return !event.completed && event.scores && start <= now.value
    })
    .sort((a, b) => Date.parse(a.commence_time) - Date.parse(b.commence_time))
})

const upcomingEvents = computed(() => {
  return (fixtures.value?.events ?? [])
    .filter((event) => {
      const start = new Date(event.commence_time).getTime()
      return start > now.value
    })
    .sort((a, b) => Date.parse(a.commence_time) - Date.parse(b.commence_time))
})

const prematchEvents = computed(() => {
  return (fixtures.value?.events ?? [])
    .filter((event) => {
      const start = new Date(event.commence_time).getTime()
      return start > now.value
    })
    .sort((a, b) => Date.parse(a.commence_time) - Date.parse(b.commence_time))
})

const loading = computed(() => {
  return leagueStatus.value === 'pending'
    || (isFixtureTab.value && fixtureStatus.value === 'pending')
})

const error = computed(() => {
  return leagueError.value || (isFixtureTab.value ? fixtureError.value : null)
})

const activeLabel = computed(() => {
  return tabs.find(tab => tab.key === activeTab.value)?.label
})

const selectTab = (key: string): void => {
  void navigateTo(tabPath(key))
}

const refresh = (): void => {
  now.value = Date.now()

  if (activeTab.value === 'outright') {
    void refreshLeagues()
    outrightRefreshVersion.value += 1
    return
  }

  if (leagueError.value || !isFixtureTab.value) {
    void refreshLeagues()
  } else if (selectedSport.value) {
    void loadFixtures()
  }
}

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now()
  }, 30000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <section class="sports-page">
    <nav
      class="sports-tabs"
      aria-label="Sports categories"
    >
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.key"
        :to="tabPath(tab.key)"
        :class="{ selected: activeTab === tab.key }"
        :aria-current="activeTab === tab.key ? 'page' : undefined"
      >
        
        {{ tab.label }}
      </NuxtLink>
    </nav>

    <div
      class="results"
      :aria-busy="loading"
    >
      <SmartPick
        v-if="activeTab === 'smart-pick'"
        @explore="selectTab('league')"
      />
      <div
        v-else-if="loading && (isFixtureTab || !leagues)"
        class="empty"
        role="status"
      >
        <RefreshCw
          :size="28"
          aria-hidden="true"
        />
        <p>Loading {{ activeLabel?.toLowerCase() }}…</p>
      </div>
      <div
        v-else-if="error"
        class="empty"
        role="alert"
      >
        <h2>Unable to load sports</h2>
        <p>Sports data is temporarily unavailable. Please try again.</p>
        <button
          type="button"
          @click="refresh"
        >
          Try again
        </button>
      </div>
      <League
        v-else-if="activeTab === 'league'"
        :sports="availableSports"
        :filtered-sports="filteredSports"
        :groups="groups"
        :ai-to="tabPath('smart-pick')"
      />
      <Inplay
        v-else-if="activeTab === 'inplay'"
        :events="inplayEvents"
        :available-sports="availableSports"
        v-model:selected-sport="selectedSport"
        :ai-to="tabPath('smart-pick')"
      />
      <Upcoming
        v-else-if="activeTab === 'upcoming'"
        :events="upcomingEvents"
        :available-sports="availableSports"
        v-model:selected-sport="selectedSport"
        :ai-to="tabPath('smart-pick')"
      />
      <Prematch
        v-else-if="activeTab === 'prematch'"
        :events="prematchEvents"
        :available-sports="availableSports"
        v-model:selected-sport="selectedSport"
        :ai-to="tabPath('smart-pick')"
      />
      <Outright
        v-else-if="activeTab === 'outright'"
        :filtered-sports="filteredSports"
        :groups="groups"
        :is-outright-detail="isOutrightDetail"
        :tournament-title="tournamentTitle"
        :refresh-version="outrightRefreshVersion"
        :ai-to="tabPath('smart-pick')"
      />
    </div>
  </section>
</template>
