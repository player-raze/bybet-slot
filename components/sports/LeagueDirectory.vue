<script setup lang="ts">
import { ChevronDown, ChevronLeft, Search, Trophy } from 'lucide-vue-next'
import Ai from '~/components/buttons/Ai.vue'
import Collapse from '~/components/buttons/Collapse.vue'
import type { Sport } from '~/types/sports'
import { SAMPLE_SPORTS, getTournamentLogo, getSportBall } from '~/data/sports'
import League from './tabs/League.vue'

interface DirectoryLeague extends Sport {
  inplay?: boolean
  count?: number
}

const props = withDefaults(defineProps<{
  sports: Sport[]
  popularLeagues?: string[]
  loading?: boolean
  aiTo?: string
}>(), {
  popularLeagues: () => [],
  loading: false,
})

const route = useRoute()
const bybetRedirectUrl = props.aiTo ?? useRuntimeConfig().public.bybetRedirectUrl
const base = useSportsRouteBase()
const search = ref('')

const isTennis = computed(() => route.params.sport === 'tennis')

// Baseline mock tennis leagues matching the production design and user specification
const DEFAULT_TENNIS_LEAGUES: DirectoryLeague[] = [
  // ATP
  {
    key: 'tennis_atp_1000_shanghai_masters_singles',
    group: 'Tennis',
    title: 'ATP 1000 China Shanghai Masters Men Singles',
    description: 'ATP 1000 Men Singles',
    active: true,
    has_outrights: false,
    inplay: true,
    count: 2,
  },
  {
    key: 'tennis_atp_1000_shanghai_masters_doubles',
    group: 'Tennis',
    title: 'ATP 1000 China Shanghai Masters Men Doubles',
    description: 'ATP 1000 Men Doubles',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 1,
  },
  {
    key: 'tennis_atp_bolivia_santa_cruz_2_challenger_singles',
    group: 'Tennis',
    title: 'ATP Bolivia Santa Cruz 2 Challenger Men Singles',
    description: 'Challenger Men Singles',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 4,
  },
  {
    key: 'tennis_atp_bolivia_santa_cruz_2_challenger_doubles',
    group: 'Tennis',
    title: 'ATP Bolivia Santa Cruz 2 Challenger Men Doubles',
    description: 'Challenger Men Doubles',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 2,
  },
  {
    key: 'tennis_atp_china_jinan_challenger_singles',
    group: 'Tennis',
    title: 'ATP China Jinan Challenger Men Singles',
    description: 'Challenger Men Singles',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 2,
  },
  // WTA
  {
    key: 'tennis_wta_125_spain',
    group: 'Tennis',
    title: 'WTA 125 Spain',
    description: 'WTA 125 Women Singles',
    active: true,
    has_outrights: false,
    inplay: true,
    count: 3,
  },
  {
    key: 'tennis_wta_wuhan_open_singles',
    group: 'Tennis',
    title: 'WTA Wuhan Open Women Singles',
    description: 'WTA 1000 Women Singles',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 2,
  },
  {
    key: 'tennis_wta_us_open_singles',
    group: 'Tennis',
    title: 'WTA US Open Women Singles',
    description: 'Grand Slam Women Singles',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 4,
  },
  {
    key: 'tennis_wta_beijing_china_open',
    group: 'Tennis',
    title: 'WTA 1000 China Beijing Open Women Singles',
    description: 'WTA 1000 Women Singles',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 2,
  },
  // UTR
  {
    key: 'tennis_utr_pro_series_men_singles',
    group: 'Tennis',
    title: 'UTR Pro Tennis Series Men Singles',
    description: 'UTR Pro Series',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 3,
  },
  {
    key: 'tennis_utr_pro_series_women_singles',
    group: 'Tennis',
    title: 'UTR Pro Tennis Series Women Singles',
    description: 'UTR Pro Series',
    active: true,
    has_outrights: false,
    inplay: true,
    count: 2,
  },
  {
    key: 'tennis_utr_newport_beach_singles',
    group: 'Tennis',
    title: 'UTR Newport Beach Men Singles',
    description: 'UTR Newport Beach',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 1,
  },
  {
    key: 'tennis_utr_barcelona_singles',
    group: 'Tennis',
    title: 'UTR Barcelona Men Singles',
    description: 'UTR Barcelona',
    active: true,
    has_outrights: false,
    inplay: false,
    count: 2,
  },
]

// Query inplay catalog to mark real live events when available
const { data: inplayData } = await useFetch('/api/sports', {
  query: { mode: 'inplay' },
  lazy: true,
  server: false,
})

const inplayKeySet = computed(() => {
  const set = new Set<string>()
  for (const event of inplayData.value?.events ?? []) {
    if (event.sport_key) set.add(event.sport_key.toLowerCase())
  }
  return set
})

// Combine provided sports with baseline sports while avoiding duplicate keys
const allLeagues = computed<DirectoryLeague[]>(() => {
  const currentSport = String(route.params.sport || '').toLowerCase()
  let baseList: Sport[] = []

  if (isTennis.value) {
    baseList = [...DEFAULT_TENNIS_LEAGUES]
  } else if (currentSport === 'basketball') {
    baseList = SAMPLE_SPORTS.filter(s => s.group === 'Basketball' && !s.has_outrights)
  } else if (currentSport === 'soccer') {
    baseList = SAMPLE_SPORTS.filter(s => s.group === 'Soccer' && !s.has_outrights)
  } else if (currentSport === 'baseball') {
    baseList = SAMPLE_SPORTS.filter(s => s.group === 'Baseball' && !s.has_outrights)
  } else {
    // popular or all sports
    baseList = SAMPLE_SPORTS.filter(s => !s.has_outrights)
  }

  const list: DirectoryLeague[] = baseList.map(sport => ({
    ...sport,
    inplay: inplayKeySet.value.has(sport.key.toLowerCase()),
    count: Math.floor((sport.title.length % 3) + 1),
  }))

  for (const sport of props.sports) {
    const exists = list.some(item =>
      item.key === sport.key || item.title.toLowerCase() === sport.title.toLowerCase(),
    )
    if (!exists && !sport.has_outrights) {
      list.push({
        ...sport,
        inplay: inplayKeySet.value.has(sport.key.toLowerCase()),
        count: Math.floor((sport.title.length % 3) + 1),
      })
    }
  }

  return list
})

const tournamentKey = computed(() => route.params.leagueTournament
  ? `${route.params.sport}_${String(route.params.leagueTournament).replaceAll('-', '_')}`
  : '')

const tournament = computed(() => {
  const targetKey = tournamentKey.value
  const slug = String(route.params.leagueTournament ?? '').replaceAll('-', '_')
  return allLeagues.value.find(sport =>
    sport.key === targetKey
    || sport.key.replace(/^[^_]+_/, '') === slug
    || sport.key.endsWith(`_${slug}`),
  )
})

const filteredLeagues = computed(() => {
  const q = search.value.toLowerCase().trim()
  if (!q) {
    return allLeagues.value
  }
  return allLeagues.value.filter(sport =>
    `${sport.title} ${sport.description ?? ''} ${sport.group}`.toLowerCase().includes(q),
  )
})

const isPopular = (key: string): boolean => {
  if (props.popularLeagues && props.popularLeagues.length > 0) {
    if (props.popularLeagues.some(selected =>
      selected.endsWith('*') ? key.startsWith(selected.slice(0, -1)) : key === selected,
    )) return true
  }

  const defaultPopular = [
    'basketball_nba',
    'basketball_euroleague',
    'basketball_nba_preseason',
    'soccer_epl',
    'soccer_uefa_champions_league',
    'soccer_germany_bundesliga',
    'soccer_italy_serie_a',
    'soccer_spain_la_liga',
    'baseball_mlb',
    'tennis_atp_wimbledon',
    'tennis_atp_1000_shanghai_masters_singles',
    'tennis_wta_125_spain',
    'tennis_wta_wuhan_open_singles',
  ]
  return defaultPopular.includes(key)
}

const popularLeaguesList = computed(() => {
  return filteredLeagues.value.filter(sport => isPopular(sport.key))
})

// Grouping logic: Tennis uses ATP, WTA, UTR. Other sports use country.
function getTennisCategory(sport: DirectoryLeague): 'ATP' | 'WTA' | 'UTR' {
  const text = `${sport.key} ${sport.title} ${sport.description ?? ''}`.toLowerCase()
  if (/\b(atp)\b/i.test(text) || sport.key.includes('_atp_') || sport.key.startsWith('tennis_atp')) {
    return 'ATP'
  }
  if (/\b(wta)\b/i.test(text) || sport.key.includes('_wta_') || sport.key.startsWith('tennis_wta')) {
    return 'WTA'
  }
  if (/\b(utr)\b/i.test(text) || sport.key.includes('_utr_') || sport.key.startsWith('tennis_utr')) {
    return 'UTR'
  }
  return 'ATP'
}

const sections = computed(() => {
  if (isTennis.value) {
    const atp: DirectoryLeague[] = []
    const wta: DirectoryLeague[] = []
    const utr: DirectoryLeague[] = []

    for (const sport of filteredLeagues.value) {
      const cat = getTennisCategory(sport)
      if (cat === 'ATP') atp.push(sport)
      else if (cat === 'WTA') wta.push(sport)
      else if (cat === 'UTR') utr.push(sport)
    }

    const result: { title: string; leagues: DirectoryLeague[]; type: 'atp' | 'wta' | 'utr' | 'country' }[] = []
    if (atp.length) result.push({ title: 'ATP', leagues: atp, type: 'atp' })
    if (wta.length) result.push({ title: 'WTA', leagues: wta, type: 'wta' })
    if (utr.length) result.push({ title: 'UTR', leagues: utr, type: 'utr' })
    return result
  }

  // Country grouping for Soccer, Basketball, Baseball, etc.
  const countryMap = new Map<string, DirectoryLeague[]>()
  for (const sport of filteredLeagues.value) {
    const country = getCountryForSport(sport)
    if (!countryMap.has(country)) {
      countryMap.set(country, [])
    }
    countryMap.get(country)!.push(sport)
  }

  const sortedCountries = [...countryMap.keys()].sort((a, b) => {
    if (a === 'International') return 1
    if (b === 'International') return -1
    return a.localeCompare(b)
  })

  return sortedCountries.map(country => ({
    title: country,
    leagues: countryMap.get(country) ?? [],
    type: 'country' as const,
  }))
})

// Accordion collapse / expand state: All expanded by default
const expandedGroups = ref<string[]>([])

// Populate initial expanded groups
watch(
  [sections, popularLeaguesList],
  ([newSections, newPopular]) => {
    const allTitles = [
      ...(newPopular.length ? ['__popular__'] : []),
      ...newSections.map(s => s.title),
    ]
    if (expandedGroups.value.length === 0) {
      expandedGroups.value = allTitles
    }
  },
  { immediate: true },
)

const isGroupExpanded = (title: string): boolean => {
  return expandedGroups.value.includes(title)
}

const toggleGroup = (title: string): void => {
  if (expandedGroups.value.includes(title)) {
    expandedGroups.value = expandedGroups.value.filter(t => t !== title)
  } else {
    expandedGroups.value = [...expandedGroups.value, title]
  }
}

const allCollapsed = computed(() => {
  return expandedGroups.value.length === 0
})

const toggleCollapseAll = (): void => {
  if (allCollapsed.value) {
    const allTitles = [
      ...(popularLeaguesList.value.length ? ['__popular__'] : []),
      ...sections.value.map(s => s.title),
    ]
    expandedGroups.value = allTitles
  } else {
    expandedGroups.value = []
  }
}

const leaguePath = (key: string) => {
  const slug = key.split('_').slice(1).join('-')
  return `${base.value}/league/${slug}`
}

const COUNTRY_FLAGS: Record<string, string> = {
  'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'Spain': '🇪🇸',
  'Germany': '🇩🇪',
  'Italy': '🇮🇹',
  'France': '🇫🇷',
  'USA': '🇺🇸',
  'Japan': '🇯🇵',
  'South Korea': '🇰🇷',
  'Australia': '🇦🇺',
  'Brazil': '🇧🇷',
  'Argentina': '🇦🇷',
  'Mexico': '🇲🇽',
  'Netherlands': '🇳🇱',
  'Portugal': '🇵🇹',
  'Turkey': '🇹🇷',
  'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'Belgium': '🇧🇪',
  'Greece': '🇬🇷',
  'Sweden': '🇸🇪',
  'Norway': '🇳🇴',
  'Denmark': '🇩🇰',
  'Poland': '🇵🇱',
  'Austria': '🇦🇹',
  'Switzerland': '🇨🇭',
  'Saudi Arabia': '🇸🇦',
  'China': '🇨🇳',
  'Philippines': '🇵🇭',
  'International': '🌐',
}
</script>

<template>
  <div class="league-directory">
    <!-- Single Tournament Detail View -->
    <template v-if="tournamentKey">
         <NuxtLink
          :to="base || '/explore/sports/popular'"
          class="toolbar-circle-btn"
          aria-label="Back"
          title="Back"
        >
          <ChevronLeft :size="18"  />
        </NuxtLink>
      <League
        v-if="tournament"
        :key="tournament.key"
        class="mt-2"
        :sports="[tournament]"
        :match-limit-per-tournament="Infinity"
        :ai-to="bybetRedirectUrl"
        hide-sport-title
      />
      <div v-else class="py-12 text-center text-neutral-400">
        <p>League not available.</p>
        <NuxtLink :to="`${base}/league`" class="mt-3 inline-block text-sm text-[#48daa6]">Return to all leagues</NuxtLink>
      </div>
    </template>

    <!-- League Directory View -->
    <template v-else>
      <!-- Top Toolbar -->
      <div class="toolbar">
        <Ai
          v-if="bybetRedirectUrl"
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
            placeholder="Search league sample"
            aria-label="Search league"
          >
        </label>

        <Collapse
          :model-value="allCollapsed"
          @toggle="toggleCollapseAll"
        />
      </div>

      <!-- Loading Skeleton -->
      <div v-if="loading" class="flex flex-col gap-4 mt-4" aria-busy="true">
        <div v-for="s in 2" :key="s" class="rounded-[12px] bg-[#181a19]  p-4">
          <div class="mb-3 h-5 w-32 rounded bg-[#2e3230] animate-pulse" />
          <div class="space-y-2">
            <div v-for="i in 3" :key="i" class="h-12 rounded-lg bg-[#222423] animate-pulse" />
          </div>
        </div>
      </div>

      <div v-else class="space-y-3 mt-2">
        <!-- Popular Leagues Section (Collapsible) -->
        <section
          v-if="popularLeaguesList.length"
          class="rounded-[12px] bg-[#181a19]  overflow-hidden"
        >
          <button
            type="button"
            class="w-full  flex items-center justify-between px-2 py-1 text-left  transition-colors"
            :aria-expanded="isGroupExpanded('__popular__')"
            @click="toggleGroup('__popular__')"
          >
            <span class="text-[15px] font-semibold text-white">Popular Leagues</span>
            <ChevronDown
              :size="18"
              class="text-neutral-400 transition-transform duration-200"
              :class="{ 'rotate-180': isGroupExpanded('__popular__') }"
              aria-hidden="true"
            />
          </button>

          <div
            v-show="isGroupExpanded('__popular__')"
            class="px-2 pb-1 pt-1"
          >
            <div class="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
              <NuxtLink
                v-for="league in popularLeaguesList"
                :key="league.key"
                :to="leaguePath(league.key)"
                class="flex flex-col items-center justify-top min-w-[72px] max-w-[72px] h-[88px] p-1 rounded-lg bg-[#252827] transition text-center shrink-0 group"
              >
                <!-- Tournament logo with small sport ball at bottom right -->
                <div class="relative w-5 h-5 flex items-center justify-center shrink-0 ">
                  <img
                    :src="getTournamentLogo(league)"
                    :alt="league.title"
                    class="w-[32] h-full object-contain"
                    loading="lazy"
                  />
                  <img
                    v-if="getSportBall(league, route.params.sport as string)"
                    :src="getSportBall(league, route.params.sport as string)"
                    alt=""
                    class="absolute -bottom-1 -right-1 w-[12px] h-[12px] rounded-full  bg-[#181a19] shadow-sm object-contain pointer-events-none"
                  />
                </div>

                <span class="text-[11px] font-medium text-[#ccc] leading-tight line-clamp-2 mt-2">
                  {{ league.title }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- Group Sections (ATP, WTA, UTR for Tennis; Countries for others) -->
        <template v-if="sections.length">
          <section
            v-for="section in sections"
            :key="section.title"
            class="rounded-[12px] bg-[#181a19] overflow-hidden"
          >
            <!-- Group Accordion Header -->
            <button
              type="button"
              class="w-full flex items-center justify-between px-2 py-1 text-left transition-colors"
              :aria-expanded="isGroupExpanded(section.title)"
              @click="toggleGroup(section.title)"
            >
              <div class="flex items-center gap-2">
                <!-- ATP Header Badge -->
                <div
                  v-if="section.type === 'atp'"
                  class="h-4 px-1 rounded bg-[#001e4e]  flex items-center justify-center shadow-sm"
                >
                  <span class="text-[8px] font-black tracking-wider text-white">ATP</span>
                  <span class="text-[5.5px] font-semibold text-[#6899d3] ml-0.5 tracking-tight">TOUR</span>
                </div>

                <!-- WTA Header Badge -->
                <div
                  v-else-if="section.type === 'wta'"
                  class="relative w-5 h-5 rounded-full bg-[#5c2d82] flex items-center justify-center shrink-0 shadow-sm"
                >
                  <span class="text-[7.5px] font-black italic text-white tracking-tighter">WTA</span>
                  <span class="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                </div>

                <!-- UTR Header Badge -->
                <div
                  v-else-if="section.type === 'utr'"
                  class="h-4 px-1.5 rounded bg-[#00828a] flex items-center justify-center shadow-sm"
                >
                  <span class="text-[8px] font-black text-white tracking-wide">UTR</span>
                </div>

                <!-- Country Flag -->
                <span
                  v-else-if="COUNTRY_FLAGS[section.title]"
                  class="text-[17px] leading-none"
                  aria-hidden="true"
                >
                  {{ COUNTRY_FLAGS[section.title] }}
                </span>

                <!-- General icon fallback -->
                <Trophy
                  v-else
                  :size="16"
                  class="text-[#48daa6]"
                  aria-hidden="true"
                />

                <span class="text-[15px] font-semibold text-white">{{ section.title }}</span>
              </div>

              <ChevronDown
                :size="18"
                class="text-neutral-400 transition-transform duration-200"
                :class="{ 'rotate-180': isGroupExpanded(section.title) }"
                aria-hidden="true"
              />
            </button>

            <!-- Group Accordion Body: League Rows -->
            <div
              v-show="isGroupExpanded(section.title)"
              class="divide-y divide-[#222524] "
            >
              <NuxtLink
                v-for="league in section.leagues"
                :key="league.key"
                :to="leaguePath(league.key)"
                class="flex items-center justify-between px-2 py-1  transition-colors group cursor-pointer"
              >
                <!-- Left: Badge + League Title -->
                <div class="flex items-center gap-2 min-w-0">
                  <!-- Tournament logo with small sport ball at bottom right -->
                  <div class="relative  flex items-center justify-center shrink-0  ">
                    <img
                      :src="getTournamentLogo(league)"
                      :alt="league.title"
                      class="w-full h-[20px] object-contain"
                      loading="lazy"
                    />
                  </div>

                  <!-- Title -->
                  <span class="text-[13.5px] text-[#e0e2e1] truncate">
                    {{ league.title }}
                  </span>
                </div>

                <!-- Right: In-Play Badge + Match Count -->
                <div class="flex items-center gap-2.5 shrink-0">
                  <span
                    v-if="league.inplay"
                    class="bg-[#093E2C] text-white text-[12px] px-2 py-0.5 rounded-md whitespace-nowrap"
                  >
                    In-Play
                  </span>
                  <span class="text-[13px] text-[#888] min-w-[14px] text-right font-normal">
                    {{ league.count ?? 1 }}
                  </span>
                </div>
              </NuxtLink>
            </div>
          </section>
        </template>

        <!-- No Leagues Found -->
        <div v-else class="py-12 text-center text-neutral-400">
          <p>No leagues found.</p>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
