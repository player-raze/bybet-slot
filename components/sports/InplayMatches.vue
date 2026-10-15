<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import InplayMatch from './InplayMatch.vue'
import type { SportsEvent } from '~/types/sports'

const props = defineProps<{ events: SportsEvent[] }>()
const collapsed = ref<string[]>([])
const selectedOutcomes = ref<Record<string, string>>({})
const sportType = (event: SportsEvent) => (event.sport || event.sport_key.split('_')[0] || '').toLowerCase()
const tournamentKey = (event: SportsEvent) => `${sportType(event)}:${event.sport_key}:${event.sport_title}`
const tournamentKeys = computed(() => [...new Set(props.events.map(tournamentKey))])
const allCollapsed = computed(() => tournamentKeys.value.length > 0 && tournamentKeys.value.every(key => collapsed.value.includes(key)))
const isExpanded = (key: string) => !collapsed.value.includes(key)
function toggleTournament(key: string) {
  collapsed.value = isExpanded(key) ? [...collapsed.value, key] : collapsed.value.filter(item => item !== key)
}
function toggleAll() {
  collapsed.value = allCollapsed.value ? [] : [...tournamentKeys.value]
}
function tournaments(events: SportsEvent[]) {
  const groups = new Map<string, { key: string; title: string; events: SportsEvent[] }>()
  for (const event of events) {
    const key = tournamentKey(event)
    const group = groups.get(key) ?? { key, title: event.sport_title, events: [] }
    group.events.push(event)
    groups.set(key, group)
  }
  return [...groups.values()]
}
defineExpose({ toggleAll, allCollapsed })

const sportNames: Record<string, string> = {
  basketball: 'Basketball', nba: 'Basketball', pba: 'Basketball',
  soccer: 'Soccer', football: 'Soccer',
  tennis: 'Tennis', atp: 'Tennis', wta: 'Tennis',
  baseball: 'Baseball', mlb: 'Baseball',
}
const sportOrder = ['Basketball', 'Soccer', 'Tennis', 'Baseball']

const groups = computed(() => {
  const matchesBySport = new Map<string, SportsEvent[]>()
  for (const event of props.events) {
    const sport = (event.sport || event.sport_key.split('_')[0] || '').toLowerCase()
    const name = sportNames[sport] || (sport && !sport.includes(':')
      ? sport.charAt(0).toUpperCase() + sport.slice(1).replaceAll('-', ' ')
      : 'Other sports')
    const matches = matchesBySport.get(name) ?? []
    matches.push(event)
    matchesBySport.set(name, matches)
  }
  return [...matchesBySport].map(([name, events]) => ({ name, events }))
    .sort((a, b) => {
      const rank = (name: string) => sportOrder.indexOf(name) < 0 ? sportOrder.length : sportOrder.indexOf(name)
      return rank(a.name) - rank(b.name)
    })
})
</script>

<template>
  <div class="min-w-0">
    <section v-for="group in groups" :key="group.name" class="league-group" :aria-label="group.name">
      <h2 class="mb-2 text-[18px]">{{ group.name }}</h2>
      <div class="league-matches-list">
        <article v-for="tournament in tournaments(group.events)" :key="tournament.key" class="league-preview">
          <button
            :id="`inplay-trigger-${tournament.key}`"
            class="league-card league-preview-heading"
            type="button"
            :aria-expanded="isExpanded(tournament.key)"
            :aria-controls="`inplay-panel-${tournament.key}`"
            @click="toggleTournament(tournament.key)"
          >
            <span class="league-name truncate text-[12px] text-[#999]" :title="tournament.title">{{ tournament.title }} {{ group.name }}</span>
            <ChevronDown :size="16" class="shrink-0" :class="{ 'rotate-180': isExpanded(tournament.key) }" aria-hidden="true" />
          </button>
          <div
            v-show="isExpanded(tournament.key)"
            :id="`inplay-panel-${tournament.key}`"
            role="region"
            :aria-labelledby="`inplay-trigger-${tournament.key}`"
          >
            <InplayMatch
              v-for="event in tournament.events"
              :key="event.id"
              :match="event"
              :soccer="['soccer', 'football'].includes(sportType(event))"
              :full-markets="['basketball', 'nba', 'pba', 'baseball', 'mlb'].includes(sportType(event))"
              :selected-outcome="selectedOutcomes[event.id]"
              @select="selectedOutcomes[event.id] = selectedOutcomes[event.id] === $event ? '' : $event"
            />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.league-matches-list {
  display: grid;
  gap: 16px;
}

.league-preview {
  min-width: 0;
  overflow: hidden;
  border-radius: 10px;
  background: var(--surface);
}

.league-preview-heading {
  width: 100%;
  border: 0;
  border-radius: 0;
}


.league-preview-heading:focus-visible {
  outline-offset: -3px;
}

.league-chevron {
  flex-shrink: 0;
}

.league-chevron--expanded {
  transform: rotate(180deg);
}
</style>
