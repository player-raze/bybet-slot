<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue'

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
  <div class="game-rules-sticky-wrapper sticky-header-seal sticky top-0 lg:top-[var(--content-sticky-top)] z-30 bg-[#000000] -mx-2 sm:-mx-4 pb-2 mb-2 sm:mb-3">
    <header class="game-rules-header-wrapper">
      <!-- Universal Emerald Subpage Header with AA text scaler -->
      <SubpageHeader
        title="Game Rules"
        back-to="/explore/account/me"
        :sticky="false"
        class="mb-2"
      >
        <template #right>
          <button
            type="button"
            class="game-rules-aa flex items-center justify-center px-2 py-0.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded font-bold text-xs sm:text-sm tracking-tight transition-colors cursor-pointer select-none"
            :title="`Text size: ${textSizeLevel} (click to cycle)`"
            aria-label="Adjust font size"
            @click="cycleTextSize"
          >
            AA
          </button>
        </template>
      </SubpageHeader>

      <!-- Category Navigation Tabs (cornered layout matching screenshot) -->
      <nav
        ref="navContainerRef"
        class="game-rules-category-nav flex items-center gap-2 overflow-x-auto py-1 px-2 sm:px-4 scrollbar-none"
        aria-label="Game Rules Categories"
      >
        <NuxtLink
          v-for="tab in ruleTabs"
          :key="tab.to"
          :to="tab.to"
          class="game-rules-tab shrink-0 text-xs sm:text-sm font-semibold uppercase transition-all whitespace-nowrap select-none px-4 py-1.5 rounded-full border border-white/5"
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

@media (min-width: 64rem) {
  .game-rules-sticky-wrapper {
    margin-right: 0;
    margin-bottom: 8px;
    margin-left: 0;
    padding-bottom: 0;
  }

  .game-rules-aa {
    padding: 2px 8px;
    color: #1fa779;
    font-size: 16px;
    background: transparent;
  }

  .game-rules-aa:hover {
    color: #32d49a;
    background: rgba(255, 255, 255, 0.04);
  }

  .game-rules-category-nav {
    min-height: 46px;
    padding: 5px 12px;
    border: 1px solid rgba(255, 255, 255, 0.035);
    border-radius: 11px;
    color: #ececec;
    background: #1c1d1c;
    gap: 7px;
  }

  .game-rules-tab {
    min-height: 30px;
    padding: 5px 13px;
    border-color: transparent;
    border-radius: 16px;
    color: #ececec;
    font-size: 14px;
    line-height: 20px;
    background: transparent;
    box-shadow: none;
  }

  .game-rules-tab:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.06);
  }

  .game-rules-tab.tab-pill--active {
    color: #ffffff;
    background: #036242;
  }
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
