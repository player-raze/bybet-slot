<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { User, X } from 'lucide-vue-next'
import ReminderModal from '~/components/modals/ReminderModal.vue'

interface Game {
  id: string
  title: string
  image: string
  provider: string
  providerLogo?: string
  badge?: string
  buyBonus?: boolean
  rtpPercent?: string
  livePlayers?: number
  hotPercent?: string
  coldPercent?: string
  bottomMultiplier?: string
  promo?: boolean
  jackpotPool?: string
  href?: string
  theme?: string
  features?: string[]
  tags?: string[]
  winningLine?: string
}

interface Props {
  game: Game
  activeId?: string | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'select', game: Game): void
  (e: 'info', game: Game): void
  (e: 'start', game: Game): void
  (e: 'demo', game: Game): void
  (e: 'close'): void
}>()

const canShowDemo = (provider: string): boolean => {
  const p = (provider || '').trim().toUpperCase()
  return p !== 'PG' && p !== 'PG SOFT' && p !== 'CQ9' && p !== 'CG9'
}

const showTooltip = ref(false)
let hideTimeout: ReturnType<typeof setTimeout> | null = null

const openTooltip = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  showTooltip.value = true
}

const closeTooltip = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  hideTimeout = setTimeout(() => {
    showTooltip.value = false
    hideTimeout = null
  }, 100)
}

const closeTooltipNow = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  showTooltip.value = false
}

const cancelClose = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
}

const toggleTooltip = () => {
  if (showTooltip.value) {
    closeTooltipNow()
  } else {
    openTooltip()
  }
  emit('info', props.game)
}

const showReminderModal = ref(false)

const handleStartNowClick = () => {
  showReminderModal.value = true
}

const handleReminderOk = () => {
  showReminderModal.value = false
  emit('close')
  emit('start', props.game)
}

const handleReminderClose = () => {
  showReminderModal.value = false
}

watch(
  () => props.activeId,
  (newId) => {
    if (newId === props.game.id) {
      closeTooltipNow()
    } else {
      showReminderModal.value = false
    }
  }
)

const displayWinningLine = computed(() => {
  return props.game.winningLine || props.game.bottomMultiplier || '1024'
})

const displayRtp = computed(() => {
  return props.game.rtpPercent || '97.0%'
})

const displayTags = computed(() => {
  if (props.game.tags && props.game.tags.length > 0) return props.game.tags
  if (props.game.features && props.game.features.length > 0) return props.game.features
  return ['Entertainment', 'Auto Game', 'Free Spins', 'Buy Spins']
})

onUnmounted(() => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
})
</script>

<template>
  <div 
    class="game-card relative flex flex-col cursor-pointer select-none bg-[#141414] rounded-[10px] p-0 transition-all"
    @click="emit('select', game)"
    @mouseleave="closeTooltipNow"
  >
    <!-- Card Image Thumbnail Container -->
    <div class="relative aspect-square w-full rounded-[10px] overflow-hidden bg-[#181a19] shadow-md">
      <img
        :src="game.image"
        :alt="game.title"
        class="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      <!-- Top Left: NEW/PROMO Badge -->
      <span
        v-if="game.badge === 'NEW' || game.promo"
        class="absolute top-2 left-2 rounded bg-[#036242] text-black font-black text-[9px] px-1.5 py-0.5 leading-none shadow tracking-wide"
      >
        {{ game.badge === 'NEW' ? 'NEW' : 'PROMO' }}
      </span>

      <!-- Top Right: BUY BONUS Badge -->
      <span
        v-if="game.buyBonus"
        class="absolute top-1.5 right-1.5 rounded bg-[#0d594f] px-1 py-0.5 text-[8px] font-black text-[#ffd700] text-center leading-tight shadow"
      >
        BUY<br>BONUS
      </span>

      <!-- Top Right: Dual-color RTP Badge -->
      <div
        v-else-if="game.rtpPercent"
        class="absolute top-2 right-2 flex items-center rounded overflow-hidden shadow-md leading-none border border-black/40 text-[9px] font-black"
      >
        <span class="bg-[#00a843] text-white px-1.5 py-0.5">RTP</span>
        <span class="bg-white text-black px-1.5 py-0.5">{{ game.rtpPercent }}</span>
      </div>

      <!-- Top Right: Multiplier Badge -->
      <span
        v-else-if="game.badge && game.badge !== 'NEW'"
        class="absolute top-2 right-2 text-[#ffd700] font-black text-[12px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-none tracking-tight"
      >
        {{ game.badge }}
      </span>

      <!-- Top Right: Live Player Count Badge -->
      <span
        v-else-if="game.livePlayers"
        class="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-xs px-1.5 py-0.5 text-[10px] font-medium text-white/90"
      >
        <User class="h-2.5 w-2.5 text-white/70" />
        <span>{{ game.livePlayers }}</span>
      </span>

      <!-- Bottom Left: Hot/Cold/Multiplier Badge -->
      <span
        v-if="game.hotPercent"
        class="absolute bottom-2 left-2 flex items-center gap-0.5 rounded-full bg-black/60 backdrop-blur-xs px-1.5 py-0.5 text-[10px] font-bold text-[#ffa63d] leading-none"
      >
        <span>🔥</span>
        <span>{{ game.hotPercent }}</span>
      </span>
      <span
        v-else-if="game.coldPercent"
        class="absolute bottom-2 left-2 flex items-center gap-0.5 rounded-full bg-black/60 backdrop-blur-xs px-1.5 py-0.5 text-[10px] font-bold text-[#62d0ff] leading-none"
      >
        <span>❄️</span>
        <span>{{ game.coldPercent }}</span>
      </span>
      <span
        v-else-if="game.bottomMultiplier"
        class="absolute bottom-2 left-2 rounded-sm bg-[#5c1605]/90 border border-[#9c2b0d]/50 px-1 py-0.2 text-[8.5px] font-bold text-[#ff9f68] leading-none"
      >
        {{ game.bottomMultiplier }}
      </span>
      <span
        v-else-if="game.jackpotPool"
        class="absolute bottom-2 left-2 rounded-sm bg-black/70 backdrop-blur-xs px-1.5 py-0.5 text-[9.5px] font-bold text-[#ffd700] leading-none shadow"
      >
        {{ game.jackpotPool }}
      </span>

      <!-- Bottom-Right Info Icon -->
      <div class="absolute bottom-2 right-2 z-10">
        <button
          type="button"
          class="h-3.5 w-3.5 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Game info"
          @mouseenter="openTooltip"
          @mouseleave="closeTooltip"
          @click.stop.prevent="toggleTooltip"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none" class="size-2.5">
            <path d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259972 4.80025 -0.11622 6.00665 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0891 10.3295 10.3201 10.9888 9.33342C11.6481 8.34672 12 7.18669 12 6C11.9983 4.40922 11.3656 2.88407 10.2408 1.75921C9.11593 0.63436 7.59078 0.0016799 6 0ZM5.76923 2.76923C5.90616 2.76923 6.04001 2.80983 6.15386 2.88591C6.26771 2.96198 6.35644 3.0701 6.40884 3.1966C6.46124 3.32311 6.47495 3.46231 6.44824 3.5966C6.42152 3.73089 6.35559 3.85425 6.25877 3.95107C6.16195 4.04789 6.03859 4.11383 5.90429 4.14054C5.77 4.16726 5.6308 4.15355 5.5043 4.10115C5.37779 4.04875 5.26967 3.96001 5.1936 3.84616C5.11753 3.73231 5.07692 3.59846 5.07692 3.46154C5.07692 3.27793 5.14986 3.10184 5.2797 2.972C5.40953 2.84217 5.58562 2.76923 5.76923 2.76923ZM6.46154 9.23077C6.21672 9.23077 5.98194 9.13351 5.80883 8.9604C5.63572 8.78729 5.53846 8.55251 5.53846 8.30769V6C5.41606 6 5.29866 5.95137 5.21211 5.86482C5.12555 5.77826 5.07692 5.66087 5.07692 5.53846C5.07692 5.41605 5.12555 5.29866 5.21211 5.2121C5.29866 5.12555 5.41606 5.07692 5.53846 5.07692C5.78328 5.07692 6.01807 5.17417 6.19118 5.34729C6.36429 5.5204 6.46154 5.75518 6.46154 6V8.30769C6.58395 8.30769 6.70134 8.35632 6.7879 8.44287C6.87445 8.52943 6.92308 8.64682 6.92308 8.76923C6.92308 8.89164 6.87445 9.00903 6.7879 9.09559C6.70134 9.18214 6.58395 9.23077 6.46154 9.23077Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <!-- Info Tooltip Overlay (Matches design from reference image) -->
      <Transition name="fade-tooltip">
        <div
          v-if="showTooltip && activeId !== game.id"
          class="absolute inset-2 z-30 rounded-2xl bg-[#202120]/95 backdrop-blur-md p-3.5 sm:p-4 flex flex-col justify-between shadow-2xl border border-white/5 select-none cursor-default"
          @mouseenter="cancelClose"
          @mouseleave="closeTooltipNow"
          @click.stop="closeTooltipNow"
        >
          <!-- Top Row: Winning Line & RTP -->
          <div class="flex items-start justify-between">
            <div class="flex flex-col">
              <span class="text-[12px] sm:text-[13px] font-normal text-[#d6d6d6] leading-tight">Winning Line</span>
              <span class="text-[18px] sm:text-[21px] font-bold text-white leading-tight mt-1">{{ displayWinningLine }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[12px] sm:text-[13px] font-normal text-[#d6d6d6] leading-tight">RTP</span>
              <span class="text-[18px] sm:text-[21px] font-bold text-white leading-tight mt-1">{{ displayRtp }}</span>
            </div>
          </div>

          <!-- Feature / Tag Pills -->
          <div class="flex flex-col items-start gap-1.5 sm:gap-2">
            <span
              v-for="tag in displayTags"
              :key="tag"
              class="inline-flex items-center px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full border border-white/30 text-[11px] sm:text-[12.5px] font-normal text-white bg-transparent leading-normal tracking-wide"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </Transition>

    <!-- Click Action Overlay: Start Now & Demo -->
    <Transition name="fade-action">
      <div
        v-if="activeId === game.id"
        class="absolute inset-0 bg-black/80 backdrop-blur-[2px] p-2 flex flex-col items-center justify-center gap-2 z-20 cursor-default"
        @click.stop
      >
        <!-- Close Button -->
        <button
          type="button"
          class="absolute top-1.5 right-1.5 h-5 w-5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          @click.stop="emit('close')"
        >
          <X class="h-3 w-3" />
        </button>

        <!-- Start Now Button -->
        <button
          type="button"
          class="w-full max-w-[105px] py-1.5 px-3 rounded-full bg-[#036242] hover:bg-[#0e896033] text-white font-extrabold text-[12px] leading-tight text-center transition-all shadow-md active:scale-95 cursor-pointer"
          @click.stop="handleStartNowClick"
        >
          Start Now
        </button>

        <!-- Demo Button -->
        <button
          v-if="canShowDemo(game.provider)"
          type="button"
          class="w-full max-w-[105px] py-1.5 px-3 rounded-full bg-[#242624] hover:bg-[#2e312e] border border-white/20 text-white font-bold text-[11px] leading-tight text-center transition-all active:scale-95 cursor-pointer"
          @click.stop="emit('demo', game)"
        >
          Demo
        </button>
      </div>
    </Transition>
  </div>

  <!-- Bottom Caption: Title & Provider Logo -->
  <div class="my-0.5 flex items-center justify-between gap-1 px-1">
    <span class="truncate text-[12px] font-semibold text-[#e5e7eb] transition-colors">
      {{ game.title }}
    </span>

    <div class="flex items-center shrink-0">
      <img
        v-if="game.providerLogo"
        :src="game.providerLogo"
        :alt="game.provider"
        class="h-3.5 max-w-[36px] object-contain opacity-90 transition-opacity brightness-125"
        loading="lazy"
        decoding="async"
      />
      <span
        v-else
        class="text-[10px] font-bold text-[#8e9491] uppercase tracking-wider"
      >
        {{ game.provider }}
      </span>
    </div>
  </div>

  <!-- Login Reminder Modal -->
  <ReminderModal
    v-if="showReminderModal"
    title="Reminder"
    message="Please login first"
    @close="handleReminderClose"
    @ok="handleReminderOk"
  />
</div>
</template>

<style scoped>
.fade-action-enter-active,
.fade-action-leave-active {
  transition: opacity 150ms ease;
}

.fade-action-enter-from,
.fade-action-leave-to {
  opacity: 0;
}

.fade-tooltip-enter-active,
.fade-tooltip-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}

.fade-tooltip-enter-from,
.fade-tooltip-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
