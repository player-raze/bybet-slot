<script setup lang="ts">
import { Trophy, ChevronUp, Search } from 'lucide-vue-next'
import Ai from '~/components/buttons/Ai.vue'
import type { Sport } from '~/types/sports'

const props = defineProps<{
  filteredSports: Sport[]
  groups: string[]
  aiTo?: string
}>()

const search = ref('')
const sportsRouteBase = useSportsRouteBase()

const searchedSports = computed(() => {
  const q = search.value.toLowerCase().trim()
  if (!q) {
    return props.filteredSports
  }
  return props.filteredSports.filter((sport) => {
    const details = `${sport.title} ${sport.group} ${sport.description ?? ''}`.toLowerCase()
    return details.includes(q)
  })
})

const searchedGroups = computed(() => {
  return props.groups.filter((group) => {
    return searchedSports.value.some(sport => sport.group === group)
  })
})

const tournamentPath = (key: string): string => {
  const [sport, ...tournament] = key.split('_')
  return `${sportsRouteBase.value || '/explore/sports/popular'}/${sport}/${tournament.join('-')}`
}

</script>

<template>
  <div class="outright-tab">
    <div class="toolbar">
      <Ai
        v-if="aiTo"
        :to="aiTo"
        title="Smart Pick AI"
      />

      <label class="search">
        <span class="search-icons">
          <Search :size="16" aria-hidden="true" />
        </span>
        <input
          v-model="search"
          type="search"
          placeholder="Search league"
          aria-label="Search league"
        >
      </label>
    </div>

    <section
      v-for="group in searchedGroups"
      :key="group"
      class="league-group"
    >
      <h3>{{ group }}</h3>
      <div class="league-grid">
        <NuxtLink
          v-for="sport in searchedSports.filter(item => item.group === group)"
          :key="sport.key"
          :to="tournamentPath(sport.key)"
          class="league-card"
        >
          <span class="league-icon">
            <Trophy :size="19" aria-hidden="true" />
          </span>
          <span class="league-name">
            <strong>{{ sport.title }}</strong>
            <small>{{ sport.description || sport.group }}</small>
          </span>
          <ChevronUp :size="16" aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>
    <div v-if="!searchedSports.length" class="empty">
      <h2>No tournaments found</h2>
      <p>No available tournaments match your tournament list and search.</p>
    </div>
  </div>
</template>
