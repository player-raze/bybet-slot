<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
import type { SportsEvent } from '~/types/sports'

const { openSportsComments } = useCommentPanel()

defineProps<{
  event: SportsEvent
  showScores?: boolean
  showOdds?: boolean
}>()

const formatDate = (value: string): string => {
  return new Intl.DateTimeFormat('en-PH', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'Asia/Manila',
  }).format(new Date(value))
}
</script>

<template>
  <article class="event-card">
    <div class="event-meta">
      <span>{{ event.sport_title }}</span>
      <span
        v-if="showScores"
        class="live"
      >
        ● LIVE
      </span>
      <time
        v-else
        :datetime="event.commence_time"
      >
        {{ formatDate(event.commence_time) }}
      </time>
      <button
        type="button"
        class="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-md text-[#a2aaa6] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#30cf99]"
        aria-label="Match comments"
        title="Comments"
        @click="openSportsComments(event)"
      >
        <MessageCircle :size="16" aria-hidden="true" />
      </button>
    </div>
    <h3 v-if="event.home_team">
      {{ event.home_team }}
      <span>vs</span>
      {{ event.away_team }}
    </h3>
    <h3 v-else>{{ event.sport_title }}</h3>
    <div
      v-if="showScores"
      class="scores"
    >
      <div
        v-for="score in event.scores"
        :key="score.name"
      >
        <span>{{ score.name }}</span>
        <strong>{{ score.score }}</strong>
      </div>
    </div>
    <template v-if="showOdds">
      <div
        v-for="bookmaker in (event.bookmakers ?? []).slice(0, 1)"
        :key="bookmaker.key"
      >
        <p class="bookmaker">{{ bookmaker.title }}</p>
        <div
          v-for="market in bookmaker.markets"
          :key="market.key"
          class="odds"
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
      <p
        v-if="!event.bookmakers?.length"
        class="note"
      >
        Odds are currently unavailable.
      </p>
    </template>
  </article>
</template>
