<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { ChevronDown, Search, Trophy } from 'lucide-vue-next'
import LeagueMatches from './LeagueMatches.vue'
import Sort from '~/components/buttons/Sort.vue'
import Collapse from '~/components/buttons/Collapse.vue'
import Ai from '~/components/buttons/Ai.vue'
import type { Sport } from '~/types/sports'

const props = withDefaults(defineProps<{
  filteredSports?: Sport[]
  sports?: Sport[]
  groups?: string[]
  sortBy?: 'league' | 'time'
  collapsedTournaments?: string[]
  aiTo?: string
}>(), {
  sortBy: 'league',
})

const emit = defineEmits<{
  'update:collapsedTournaments': [keys: string[]]
  'update:sortBy': [val: 'league' | 'time']
  toggle: [key: string]
}>()

const search = ref('')
const localSortBy = ref<'league' | 'time'>(props.sortBy)
const localCollapsed = ref<string[]>([])
const earliestTimes = ref<Record<string, number>>({})

const currentSort = computed({
  get: () => localSortBy.value,
  set: (val: 'league' | 'time') => {
    localSortBy.value = val
    emit('update:sortBy', val)
  },
})

const CollapseIcon = defineComponent({
  props: {
    expanded: Boolean,
  },
  setup(iconProps) {
    return () => h(ChevronDown, {
      size: 16,
      class: ['league-chevron', { 'league-chevron--expanded': iconProps.expanded }],
      'aria-hidden': 'true',
    })
  },
})

const collapsedList = computed({
  get: () => props.collapsedTournaments ?? localCollapsed.value,
  set: (val: string[]) => {
    localCollapsed.value = val
    emit('update:collapsedTournaments', val)
  },
})

const isExpanded = (key: string): boolean => {
  return !collapsedList.value.includes(key)
}

const toggleTournament = (key: string): void => {
  emit('toggle', key)
  if (collapsedList.value.includes(key)) {
    collapsedList.value = collapsedList.value.filter(item => item !== key)
    return
  }

  collapsedList.value = [...collapsedList.value, key]
}

const effectiveSports = computed(() => {
  const base = props.sports ?? props.filteredSports ?? []
  const q = search.value.toLowerCase().trim()
  if (!q) {
    return base
  }
  return base.filter((sport) => {
    const details = `${sport.title} ${sport.group} ${sport.description}`.toLowerCase()
    return details.includes(q)
  })
})

const allCollapsed = computed(() => {
  return effectiveSports.value.length > 0
    && effectiveSports.value.every(sport => collapsedList.value.includes(sport.key))
})

const toggleCollapseAll = (): void => {
  if (allCollapsed.value) {
    collapsedList.value = []
  } else {
    collapsedList.value = effectiveSports.value.map(sport => sport.key)
  }
}

const handleMatchLoaded = (payload: { sportKey: string; earliestTime: number | null }): void => {
  if (payload.earliestTime != null) {
    earliestTimes.value[payload.sportKey] = payload.earliestTime
  }
}

const getGroupTournaments = (group: string): Sport[] => {
  const sports = effectiveSports.value.filter(item => item.group === group)

  if (currentSort.value === 'time') {
    return [...sports].sort((a, b) => {
      const timeA = earliestTimes.value[a.key] ?? Number.MAX_SAFE_INTEGER
      const timeB = earliestTimes.value[b.key] ?? Number.MAX_SAFE_INTEGER
      if (timeA !== timeB) {
        return timeA - timeB
      }
      return a.title.localeCompare(b.title)
    })
  }

  return [...sports].sort((a, b) => a.title.localeCompare(b.title))
}

const sortedGroups = computed(() => {
  const baseGroups = props.groups && props.groups.length > 0
    ? props.groups.filter(g => effectiveSports.value.some(s => s.group === g))
    : Array.from(new Set(effectiveSports.value.map(s => s.group)))

  if (currentSort.value !== 'time') {
    return baseGroups
  }

  return [...baseGroups].sort((groupA, groupB) => {
    const sportsA = effectiveSports.value.filter(s => s.group === groupA)
    const sportsB = effectiveSports.value.filter(s => s.group === groupB)
    const minA = Math.min(...sportsA.map(s => earliestTimes.value[s.key] ?? Number.MAX_SAFE_INTEGER))
    const minB = Math.min(...sportsB.map(s => earliestTimes.value[s.key] ?? Number.MAX_SAFE_INTEGER))
    return minA - minB
  })
})
</script>

<template>
  <div class="league-tab">
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
          placeholder="Search tournaments"
          aria-label="Search tournaments"
        >
      </label>

      <!-- Sort button -->
      <Sort
        v-model="currentSort"
      />

      <!-- Collapse all / Expand all button -->
      <Collapse
        v-model="allCollapsed"
        @toggle="toggleCollapseAll"
      />
    </div>

    <section
      v-for="group in sortedGroups"
      :key="group"
      class="league-group"
    >
      <h2>{{ group }}</h2>
      <div class="league-matches-list">
        <article
          v-for="sport in getGroupTournaments(group)"
          :key="sport.key"
          class="league-preview"
        >
          <button
            :id="`league-trigger-${sport.key}`"
            class="league-card league-preview-heading"
            type="button"
            :aria-expanded="isExpanded(sport.key)"
            :aria-controls="`league-panel-${sport.key}`"
            @click="toggleTournament(sport.key)"
          >
            <span class="league-name">
              <strong>{{ sport.title }} {{ sport.description || sport.group }}</strong>
            </span>
            <CollapseIcon :expanded="isExpanded(sport.key)" />
          </button>
          <div
            v-show="isExpanded(sport.key)"
            :id="`league-panel-${sport.key}`"
            role="region"
            :aria-labelledby="`league-trigger-${sport.key}`"
          >
            <LeagueMatches
              :sport-key="sport.key"
              :sort-by="currentSort"
              @loaded="handleMatchLoaded"
            />
          </div>
        </article>
      </div>
    </section>
    <div
      v-if="!effectiveSports.length"
      class="empty"
    >
      <Trophy :size="32" class="text-[#ff8a3d]" aria-hidden="true" />
      <h2>No leagues found</h2>
      <p>Try searching for a different tournament or league.</p>
    </div>
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
  transform: rotate(90deg);
}
</style>
