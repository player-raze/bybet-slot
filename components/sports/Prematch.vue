<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChartNoAxesCombined, Search } from 'lucide-vue-next'
import EventCard from './cards/EventCard.vue'
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

const handleSportChange = (event: Event): void => {
  const target = event.target as HTMLSelectElement | null
  if (target?.value) {
    emit('update:selectedSport', target.value)
  }
}

const filteredEvents = computed(() => {
  const q = search.value.toLowerCase().trim()
  if (!q) {
    return props.events
  }
  return props.events.filter((event) => {
    const details = `${event.home_team ?? ''} ${event.away_team ?? ''} ${event.sport_title ?? ''}`.toLowerCase()
    return details.includes(q)
  })
})
</script>

<template>
  <div class="prematch-tab">
    <div class="toolbar">
      <Ai
        v-if="aiTo"
        :to="aiTo"
        title="Smart Pick AI"
      />

      <label class="search">
        <span class="search-icons">
          <Search :size="16" aria-hidden="true" />
          <ChartNoAxesCombined :size="15" class="search-badge text-[#48daa6]" aria-hidden="true" />
        </span>
        <input
          v-model="search"
          type="search"
          placeholder="Search prematch matches or teams"
          aria-label="Search prematch matches or teams"
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
    </div>

    <div class="section-heading">
      <h2>Prematch</h2>
      <span>{{ filteredEvents.length }} events · Philippine time</span>
    </div>
    <p class="note">Upcoming matches with available match winner odds. Decimal odds from US bookmakers.</p>
    <div class="event-grid">
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event="event"
        show-odds
      />
    </div>
    <div v-if="!filteredEvents.length" class="empty">
      <ChartNoAxesCombined :size="32" class="text-[#48daa6]" aria-hidden="true" />
      <h2>No prematch events</h2>
      <p>Try another league or check back later.</p>
    </div>
  </div>
</template>
