<script setup lang="ts">
import { ref, computed } from 'vue'
import { Radio, Search } from 'lucide-vue-next'
import EventCard from './EventCard.vue'
import Sort from '~/components/buttons/Sort.vue'
import Collapse from '~/components/buttons/Collapse.vue'
import Ai from '~/components/buttons/Ai.vue'
import type { Sport, SportsEvent } from '~/types/sports'

const props = defineProps<{
  events: SportsEvent[]
  availableSports?: Sport[]
  selectedSport?: string
  aiTo?: string
}>()

const emit = defineEmits<{
  'update:selectedSport': [sport: string]
}>()

const search = ref('')
const sortBy = ref<'league' | 'time'>('time')
const allCollapsed = ref(false)

const handleSportChange = (event: Event): void => {
  const target = event.target as HTMLSelectElement | null
  if (target?.value) {
    emit('update:selectedSport', target.value)
  }
}

const filteredEvents = computed(() => {
  const q = search.value.toLowerCase().trim()
  let list = props.events

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
    return new Date(a.commence_time).getTime() - new Date(b.commence_time).getTime()
  })
})
</script>

<template>
  <div class="inplay-tab">
    <div class="toolbar">
      <Ai
        v-if="aiTo"
        :to="aiTo"
        title="Smart Pick AI"
      />

      <label class="search">
        <span class="search-icons">
          <Search :size="16" aria-hidden="true" />
          <Radio :size="15" class="search-badge text-[#48daa6] animate-pulse" aria-hidden="true" />
        </span>
        <input
          v-model="search"
          type="search"
          placeholder="Search inplay matches or teams"
          aria-label="Search inplay matches or teams"
        >
      </label>

      <label
        v-if="availableSports && availableSports.length > 0"
        class="league-select"
      >
        <span class="sr-only">League</span>
        <select
          :value="selectedSport"
          @change="handleSportChange"
        >
          <option
            v-for="sport in availableSports"
            :key="sport.key"
            :value="sport.key"
          >
            {{ sport.title }}
          </option>
        </select>
      </label>

      <Sort
        v-model="sortBy"
      />

      <Collapse
        v-model="allCollapsed"
        title="Collapse all matches"
      />
    </div>

    <div class="section-heading">
      <h2>Inplay</h2>
      <span>{{ filteredEvents.length }} events · Philippine time</span>
    </div>

    <div v-show="!allCollapsed" class="event-grid">
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event="event"
        show-scores
      />
    </div>

    <div v-if="!filteredEvents.length" class="empty">
      <Radio :size="32" class="text-[#48daa6]" aria-hidden="true" />
      <h2>No inplay events</h2>
      <p>Try another league or check back later.</p>
    </div>
  </div>
</template>
