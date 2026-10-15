<script setup lang="ts">
import EventCard from './EventCard.vue'
import type { SportsEvent } from '~/types/sports'

const props = defineProps<{ events: SportsEvent[] }>()

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
      <h3>{{ group.name }}</h3>
      <div class="event-grid">
        <EventCard v-for="event in group.events" :key="event.id" :event="event" />
      </div>
    </section>
  </div>
</template>
