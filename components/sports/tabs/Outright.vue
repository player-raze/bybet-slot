<script setup lang="ts">
import { Trophy, ChevronUp, Flag, Search } from 'lucide-vue-next'
import Ai from '~/components/buttons/Ai.vue'
import type { Sport, SportsEvent } from '~/types/sports'

const props = defineProps<{
  filteredSports: Sport[]
  groups: string[]
  isOutrightDetail: boolean
  tournamentTitle: string
  refreshVersion: number
  aiTo?: string
}>()

const route = useRoute()
const search = ref('')

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
  return `/explore/sports/popular/${sport}/${tournament.join('-')}`
}

const expandedOutrights = ref<string[]>([])
const outrightEvents = ref<Record<string, SportsEvent[]>>({})
const outrightLoading = ref<Record<string, boolean>>({})
const outrightErrors = ref<Record<string, string>>({})

const loadOutright = async (key: string): Promise<void> => {
  if (outrightLoading.value[key]) {
    return
  }

  outrightLoading.value[key] = true
  outrightErrors.value[key] = ''

  try {
    const response = await $fetch('/api/sports', {
      query: { mode: 'outright', sport: key },
    })

    outrightEvents.value[key] = response.events
  } catch {
    outrightErrors.value[key] = 'Unable to load outright odds. Please try again.'
  } finally {
    outrightLoading.value[key] = false
  }
}

const toggleOutright = (key: string): void => {
  if (expandedOutrights.value.includes(key)) {
    expandedOutrights.value = expandedOutrights.value.filter(item => item !== key)
    return
  }

  expandedOutrights.value.push(key)

  if (!outrightEvents.value[key]) {
    void loadOutright(key)
  }
}

watch(() => route.path, () => {
  expandedOutrights.value = []
})

watch(() => props.refreshVersion, () => {
  expandedOutrights.value.forEach(key => void loadOutright(key))
})
</script>

<template>
  <div class="outright-tab">
    <div v-if="!isOutrightDetail" class="toolbar">
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

    <NuxtLink v-if="isOutrightDetail" to="/explore/sports/popular/outright" class="outright-back">
      ← All outright tournaments
    </NuxtLink>

    <section
      v-for="group in searchedGroups"
      :key="group"
      class="league-group"
    >
      <h3>{{ group }}</h3>
      <div v-if="!isOutrightDetail" class="league-grid">
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
      <div v-else class="outright-list">
        <article
          v-for="sport in filteredSports.filter(item => item.group === group)"
          :key="sport.key"
          class="outright-accordion"
        >
          <button
            :id="`outright-trigger-${sport.key}`"
            type="button"
            class="league-card outright-trigger"
            :aria-expanded="expandedOutrights.includes(sport.key)"
            :aria-controls="`outright-panel-${sport.key}`"
            @click="toggleOutright(sport.key)"
          >
            <span class="league-icon">
              <Trophy :size="19" aria-hidden="true" />
            </span>
            <span class="league-name">
              <strong>{{ sport.title }}</strong>
              <small>{{ sport.description || sport.group }}</small>
            </span>
            <ChevronUp
              :size="16"
              class="outright-chevron"
              :class="{ 'outright-chevron--expanded': expandedOutrights.includes(sport.key) }"
              aria-hidden="true"
            />
          </button>

          <div
            v-show="expandedOutrights.includes(sport.key)"
            :id="`outright-panel-${sport.key}`"
            class="outright-panel"
            role="region"
            :aria-labelledby="`outright-trigger-${sport.key}`"
            :aria-busy="outrightLoading[sport.key] || false"
          >
            <p v-if="outrightLoading[sport.key]" class="note" role="status">
              Loading outright odds…
            </p>
            <div v-else-if="outrightErrors[sport.key]" role="alert">
              <p class="note">{{ outrightErrors[sport.key] }}</p>
              <button type="button" class="outright-retry" @click="loadOutright(sport.key)">
                Try again
              </button>
            </div>
            <template v-else>
              <article
                v-for="event in outrightEvents[sport.key] ?? []"
                :key="event.id"
                class="outright-market"
              >
                <h4>{{ event.sport_title }} · Winner</h4>
                <div
                  v-for="bookmaker in (event.bookmakers ?? []).slice(0, 1)"
                  :key="bookmaker.key"
                >
                  <p class="bookmaker">{{ bookmaker.title }}</p>
                  <div
                    v-for="market in bookmaker.markets.filter(item => item.key === 'outrights')"
                    :key="market.key"
                    class="odds outright-odds"
                  >
                    <button
                      v-for="outcome in market.outcomes"
                      :key="outcome.name"
                      type="button"
                      class="odd-item"
                      @click="redirectToBybet()"
                    >
                      <span>{{ outcome.name }}</span>
                      <strong>{{ outcome.price.toFixed(2) }}</strong>
                    </button>
                  </div>
                </div>
                <p v-if="!event.bookmakers?.length" class="note">
                  Odds are currently unavailable.
                </p>
              </article>
              <p v-if="!outrightEvents[sport.key]?.length" class="note">
                No outright odds are available for this tournament right now.
              </p>
            </template>
          </div>
        </article>
      </div>
    </section>

    <div v-if="!searchedSports.length" class="empty">
      <h2>{{ isOutrightDetail ? 'No outright markets available' : 'No tournaments found' }}</h2>
      <p>{{ isOutrightDetail ? 'No outright markets are currently available for this tournament. Check back later.' : 'No available tournaments match your tournament list and search.' }}</p>
    </div>
  </div>
</template>
