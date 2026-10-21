<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const ruleTabs = [
  { label: 'FOOTBALL', to: '/game-rules/football' },
  { label: 'BASKETBALL', to: '/game-rules/basketball' },
  { label: 'TENNIS', to: '/game-rules/tennis' },
  { label: 'SPORTS BETTING RULES', to: '/game-rules/sports-betting-rules' },
  { label: 'BASEBALL', to: '/game-rules/baseball' },
  { label: 'PARLAYS / MULTIPLES', to: '/game-rules/parlays-multiples' },
  { label: 'CASH OUT', to: '/game-rules/cash-out' },
  { label: 'OUTRIGHT', to: '/game-rules/outright' },
  { label: 'TABLE TENNIS', to: '/game-rules/table-tennis' },
  { label: 'BADMINTON', to: '/game-rules/badminton' },
]

const isActive = (tabTo: string): boolean => {
  const currentPath = route.path.replace(/\/$/, '')
  const targetPath = tabTo.replace(/\/$/, '')
  return currentPath === targetPath
}

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/account/me')
  }
}

// Interactive text size scaler for 'AA' button
const textSizeLevel = useState<'normal' | 'large' | 'xlarge'>('game-rules-text-size', () => 'normal')

const cycleTextSize = () => {
  if (textSizeLevel.value === 'normal') {
    textSizeLevel.value = 'large'
  } else if (textSizeLevel.value === 'large') {
    textSizeLevel.value = 'xlarge'
  } else {
    textSizeLevel.value = 'normal'
  }

  if (import.meta.client) {
    const root = document.querySelector('.site-shell') || document.documentElement
    root.classList.remove('rules-text-normal', 'rules-text-large', 'rules-text-xlarge')
    root.classList.add(`rules-text-${textSizeLevel.value}`)
  }
}

const navContainerRef = ref<HTMLElement | null>(null)

const scrollToActiveTab = () => {
  if (!import.meta.client || !navContainerRef.value) return
  nextTick(() => {
    const nav = navContainerRef.value
    if (!nav) return
    const activeEl = nav.querySelector('.tab-pill--active') as HTMLElement | null
    if (!activeEl) return
    const navRect = nav.getBoundingClientRect()
    const activeRect = activeEl.getBoundingClientRect()
    // Only scroll if active tab is actually overflowing/hidden outside viewport
    if (activeRect.left < navRect.left || activeRect.right > navRect.right) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  })
}

onMounted(() => {
  scrollToActiveTab()
})

watch(() => route.path, () => {
  scrollToActiveTab()
})
</script>

<template>
  <div class="game-rules-sticky-wrapper sticky top-[var(--header-height)] z-30 bg-[#000000] -mx-2 sm:-mx-4 px-2 sm:px-4 pt-1 pb-2 mb-2 sm:mb-3">
    <header class="game-rules-header-wrapper">
      <!-- Top Bar: [ < ] Game Rules ........... [ AA ] -->
      <div class="game-rules-top-bar flex items-center justify-between bg-[#171817] rounded-xl px-3 sm:px-4 py-2 border border-white/5 shadow-md mb-2">
        <div class="flex items-center gap-2.5">
          <button
            type="button"
            class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/40 hover:bg-black/70 flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer"
            aria-label="Back"
            title="Back"
            @click="handleBack"
          >
            <ChevronLeft class="h-4 w-4" />
          </button>
          <span class="text-sm sm:text-base font-bold text-white tracking-wide select-none">
            Game Rules
          </span>
        </div>

        <button
          type="button"
          class="flex items-center justify-center px-2 py-0.5 text-[#1fa779] hover:text-[#32d49a] hover:bg-white/5 rounded font-bold text-sm sm:text-base tracking-tight transition-colors cursor-pointer select-none"
          :title="`Text size: ${textSizeLevel} (click to cycle)`"
          aria-label="Adjust font size"
          @click="cycleTextSize"
        >
          AA
        </button>
      </div>

      <!-- Category Navigation Tabs (cornered layout matching screenshot) -->
      <nav
        ref="navContainerRef"
        class="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none"
        aria-label="Game Rules Categories"
      >
        <NuxtLink
          v-for="tab in ruleTabs"
          :key="tab.to"
          :to="tab.to"
          class="shrink-0 text-xs sm:text-sm font-semibold uppercase transition-all whitespace-nowrap select-none px-4 py-1.5 rounded-full border border-white/5"
          :class="isActive(tab.to)
            ? 'tab-pill--active bg-[#036242] text-white shadow font-bold'
            : 'bg-[#242625] text-[#8e9491] hover:text-white'"
        >
          {{ tab.label }}
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

:global(.rules-text-large .editor-container),
:global(.rules-text-large .football-rules-card),
:global(.rules-text-large .basketball-rules-card),
:global(.rules-text-large .tennis-rules-card),
:global(.rules-text-large .sports-betting-rules-card) {
  font-size: 1.125rem !important;
}

:global(.rules-text-xlarge .editor-container),
:global(.rules-text-xlarge .football-rules-card),
:global(.rules-text-xlarge .basketball-rules-card),
:global(.rules-text-xlarge .tennis-rules-card),
:global(.rules-text-xlarge .sports-betting-rules-card) {
  font-size: 1.25rem !important;
}
</style>
