<script setup lang="ts">
import { MessageCircle, Play } from 'lucide-vue-next'
import { User } from 'lucide-vue-next'
import ReminderModal from '~/components/modals/ReminderModal.vue'
import {
  LIVE_CASINO_CATEGORIES,
  LIVE_CASINO_TABLES,
  type LiveCasinoCategory,
  type LiveCasinoTable,
} from '~/data/live-casino'
import { liveCasinoGames } from '~/data/casino'

const route = useRoute()
const router = useRouter()

const pragmaticPlayLogo = '/images/casino/pragmatic-play.png'

const activeCategory = computed(() => (route.params.category as string) || 'baccarat')

const { context: commentContext, openGameComments, closeComments } = useCommentPanel()
const { showDemoMessage } = useDemoInteraction()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const isReminderOpen = ref(false)

const toggleChat = (): void => {
  if (commentContext.value) {
    closeComments()
  } else {
    openGameComments()
  }
}

const selectCategory = (key: string): void => {
  router.push(`/explore/entertainment/live-casino/${key}`)
}

const handleTableClick = (event: MouseEvent): void => {
  event.preventDefault()
  isReminderOpen.value = true
}

const handleOkClick = (): void => {
  isReminderOpen.value = false
  window.location.href = bybetRedirectUrl
}

const filteredTables = computed<LiveCasinoTable[]>(() => {
  const cat = activeCategory.value
  return LIVE_CASINO_TABLES.filter(t => {
    if (cat === 'baccarat') {
      return t.category === 'baccarat' || t.category === 'live-casino'
    }
    return t.category === cat
  })
})

// Map dice value to dot positions (3x3 grid)
const getDiceDots = (val: number) => {
  const dots: Record<number, number[]> = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  }
  return dots[val] || []
}

const getRouletteColor = (num: number) => {
  if (num === 0) return 'bg-green-500'
  const reds = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
  return reds.includes(num) ? 'bg-red-500' : 'bg-black'
}

const getRoadmapColumns = (wins?: any[]) => {
  const totalCols = 12
  const totalRows = 6
  const rawCols = wins || []
  const activeCols = rawCols.length > totalCols ? rawCols.slice(-totalCols) : rawCols

  return Array.from({ length: totalCols }, (_, colIdx) => {
    const col = activeCols[colIdx] || []
    return Array.from({ length: totalRows }, (_, rowIdx) => col[rowIdx] || null)
  })
}

interface SicBoRound {
  dice: number[]
  total: number
  bigSmall: string
  oddEven: string
}

const DEFAULT_SICBO_ROUNDS: SicBoRound[] = [
  { dice: [2, 3, 6], total: 11, bigSmall: 'B', oddEven: 'O' },
  { dice: [1, 5, 1], total: 7, bigSmall: 'S', oddEven: 'O' },
  { dice: [4, 4, 2], total: 10, bigSmall: 'S', oddEven: 'E' },
  { dice: [3, 5, 6], total: 14, bigSmall: 'B', oddEven: 'E' },
  { dice: [1, 2, 3], total: 6, bigSmall: 'S', oddEven: 'E' },
  { dice: [5, 5, 3], total: 13, bigSmall: 'B', oddEven: 'O' },
  { dice: [2, 4, 5], total: 11, bigSmall: 'B', oddEven: 'O' },
  { dice: [6, 6, 1], total: 13, bigSmall: 'B', oddEven: 'O' },
  { dice: [1, 3, 4], total: 8, bigSmall: 'S', oddEven: 'E' },
]

const getSicBoRounds = (wins?: any[]): SicBoRound[] => {
  if (!Array.isArray(wins) || wins.length === 0) {
    return DEFAULT_SICBO_ROUNDS
  }

  const parsed: SicBoRound[] = []
  for (const w of wins) {
    if (Array.isArray(w)) {
      if (Array.isArray(w[0])) {
        const dice = w[0].slice(0, 3)
        const total = typeof w[1] === 'number' ? w[1] : dice.reduce((sum: number, val: number) => sum + val, 0)
        const bigSmall = (Array.isArray(w[3]) && w[3][0]) || (total >= 11 ? 'B' : 'S')
        const oddEven = (Array.isArray(w[3]) && w[3][1]) || (total % 2 === 1 ? 'O' : 'E')
        parsed.push({ dice, total, bigSmall, oddEven })
      } else if (typeof w[0] === 'number') {
        const dice = (w as number[]).slice(0, 3)
        const total = dice.reduce((sum: number, val: number) => sum + val, 0)
        const bigSmall = total >= 11 ? 'B' : 'S'
        const oddEven = total % 2 === 1 ? 'O' : 'E'
        parsed.push({ dice, total, bigSmall, oddEven })
      }
    }
  }

  if (parsed.length >= 9) {
    return parsed.slice(-9)
  }

  const remainder = DEFAULT_SICBO_ROUNDS.slice(parsed.length)
  return [...parsed, ...remainder]
}
</script>

<template>
  <div class="live-casino-page w-full min-w-0 pb-16 pt-1 text-white">
    <!-- Top Bar -->
    <header class="top-brand-bar flex items-center  justify-between gap-2 rounded-lg bg-[#202020] p-0 py-1 mb-1.5 shadow-sm">
      <div class="flex items-center pl-1 bg-[#141414] width-full  flex-auto px-3 py-1.5 shadow-sm">
        <div class="h-9 w-9 rounded-xl bg-[#036242] flex items-center justify-center shadow-md">
          <img
            :src="pragmaticPlayLogo"
            alt="Pragmatic Play"
            class="h-6 w-6 object-contain"
          />
        </div>
      </div>
      <button
        type="button"
        class="nav-tab nav-tab--chat flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none  pl-2"
        :class="commentContext ? 'text-[#7a807d] font-semibold' : 'text-[#7a807d] '"
        @click="toggleChat"
      >
        <MessageCircle class="h-4 w-4 mb-0.5 shrink-0" />
        <span class="text-[11px] leading-tight">Chat</span>
      </button>
    </header>

    <!-- Category Filter Bar -->
    <div class="category-nav-bar flex items-center gap-1.5 overflow-x-auto no-scrollbar rounded-lg bg-[#171817]  px-1 py-1.5 mb-1.5 shadow-sm">
      <button
        v-for="cat in LIVE_CASINO_CATEGORIES"
        :key="cat.key"
        type="button"
        class="category-pill px-1.5 py-0.5 rounded-md text-[14px]  whitespace-nowrap transition-all cursor-pointer select-none"
        :class="activeCategory === cat.key ? 'bg-[#036242] text-white font-bold shadow' : 'text-[#8e9491] '"
        @click="selectCategory(cat.key)"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Live Casino Tables Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
      
      <!-- Table Cards -->
      <div 
        v-for="table in filteredTables" 
        :key="table.id" 
        class="relative group cursor-pointer" 
        @click="handleTableClick"
      >
        <div class="overflow-hidden rounded-md bg-[#141414] shadow-md ">
          
          <!-- Top Part: Image -->
          <div class="relative w-full aspect-[4/3] overflow-hidden">
            <img
              :src="table.image || '/images/casino/card1.jpg'"
              class="w-full h-full object-cover"
              :alt="table.title"
              @error="($event.target as HTMLImageElement).src = '/images/casino/card1.jpg'"
            />
            <div class="absolute top-0.5 inset-x-0.5 flex items-start justify-between gap-0.5 pointer-events-none">
              <div class="p-0.5 rounded backdrop-blur-lg text-[11px] font-medium bg-black/10 leading-tight break-words min-w-0">
                {{ table.title }}
              </div>
              <div class="p-0.5 rounded-full bg-black/10 backdrop-blur-lg text-[10px] flex items-center gap-0 shrink-0">
                <User class="h-1.5 w-1.5" />
                {{ table.players }}
              </div>
            </div>
          </div>

          <!-- Bottom Part: Dynamic Content based on table.category -->
          <div class="p-0 ">
            
            <!-- BACCARAT / DRAGON TIGER LAYOUT -->
            <div v-if="table.category === 'baccarat' || table.category === 'dragon-tiger'">
              <div class="grid grid-cols-12 gap-[1px] bg-neutral-500 border-2 border-neutral-500 rounded-sm overflow-hidden mb-2">
                <div
                  v-for="(col, colIdx) in getRoadmapColumns(table.wins)"
                  :key="colIdx"
                  class="flex flex-col gap-[1px]"
                >
                  <div
                    v-for="(win, rowIdx) in col"
                    :key="rowIdx"
                    class="aspect-square bg-[#181a19] flex items-center justify-center relative min-h-0 min-w-0"
                  >
                    <div
                      v-if="win"
                      class="w-[75%] h-[75%] rounded-full border flex items-center justify-center relative shrink-0"
                      :class="{
                        'border-blue-500 text-blue-500': win.result === 'P',
                        'border-red-500 text-red-500': win.result === 'B',
                        'border-green-500 text-green-500': win.result === 'T'
                      }"
                    >
                      <div v-if="win.tie" class="absolute inset-0 flex items-center justify-center text-[7px] leading-none select-none">/</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between px-1 py-1 text-[10px] font-medium">
                <div class="flex items-center gap-1">
                  <img src="/images/casino/shoe-stats.png" alt="Shoe stats" class="w-2.5 h-2.5 object-contain shrink-0" />
                  <span v-if="table.stats">{{ table.stats.shoe }}</span>
                </div>
                <div class="flex items-center gap-1 text-red-500"><span class="font-bold">B</span><span v-if="table.stats">{{ table.stats.banker }}</span></div>
                <div class="flex items-center gap-1 text-blue-500"><span class="font-bold">P</span><span v-if="table.stats">{{ table.stats.player }}</span></div>
                <div class="flex items-center gap-1 text-green-500"><span class="font-bold">T</span><span v-if="table.stats">{{ table.stats.tie }}</span></div>
              </div>
            </div>

            <!-- ROULETTE LAYOUT -->
            <div v-else-if="table.category === 'roulette'">
              <div class="flex items-center justify-center flex-wrap gap-0.5 mb-1 mt-0.5 p-0.5">
                <div
                  v-for="(res, i) in table.wins"
                  :key="i"
                  class="w-2.5 h-2.5 flex items-center justify-center rounded-sm text-[9px] font-bold "
                  :class="[getRouletteColor(res[1]), i === 0 ? 'border-white border-2' : '']"
                >
                  {{ res[1] }}
                </div>
              </div>
            </div>

            <!-- SIC BO LAYOUT -->
            <div v-else-if="table.category === 'sicbo'">
              <div class="grid grid-cols-9 gap-[3px] mb-1">
                <div
                  v-for="(round, rIdx) in getSicBoRounds(table.wins)"
                  :key="rIdx"
                  class="flex flex-col gap-[3px]"
                >
                  <div
                    v-for="(dice, dIdx) in round.dice"
                    :key="dIdx"
                    class="aspect-square bg-white rounded-sm flex items-center justify-center p-0 shadow-inner relative"
                  >
                    <div class="grid grid-cols-3 grid-rows-3 gap-0 w-full h-full p-[1.2px]">
                      <div v-for="dotIdx in 9" :key="dotIdx" class="flex items-center justify-center">
                        <div v-if="getDiceDots(dice).includes(dotIdx - 1)" class="w-[3px] h-[3px] bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-9 gap-[2px] mb-1">
                <div
                  v-for="(round, rIdx) in getSicBoRounds(table.wins)"
                  :key="rIdx"
                  class="bg-[#FEDC7D] rounded-full  text-center text-[11px]  text-orange-950"
                >
                  {{ round.total }}
                </div>
              </div>
              <div class="space-y-1">
                <div class="grid grid-cols-9 gap-[2px]">
                  <div
                    v-for="(round, rIdx) in getSicBoRounds(table.wins)"
                    :key="rIdx"
                    class=" rounded-full text-center text-[10px] text-white flex items-center justify-center"
                    :class="round.bigSmall === 'B' ? 'bg-[#4C9EEA]' : 'bg-[#E7021A]'"
                  >
                    {{ round.bigSmall }}
                  </div>
                </div>
                <div class="grid grid-cols-9 gap-[2px]">
                  <div
                    v-for="(round, rIdx) in getSicBoRounds(table.wins)"
                    :key="rIdx"
                    class=" rounded-full text-center text-[10px] text-white flex items-center justify-center"
                    :class="round.oddEven === 'E' ? 'bg-[#4C9EEA]' : 'bg-[#E7021A]'"
                  >
                    {{ round.oddEven }}
                  </div>
                </div>
              </div>
            </div>

            <!-- FAN TAN LAYOUT -->
            <div v-else-if="table.category === 'fan-tan'">
              <div class="flex flex-wrap gap-0 px-1 my-1 overflow-hidden">
                <div 
                  v-for="(val, i) in table.wins" 
                  :key="i" 
                  class="flex-1 h-3 flex items-center justify-center rounded-full text-[11px] font-bold "
                  :class="i === 0 ? 'bg-red-600 text-white' : ''"
                >
                  {{ val }}
                </div>
              </div>
            </div>

            <!-- Blackjack Layout -->
            <div v-else-if="table.category === 'blackjack'">
              <div class="flex items-center justify-center gap-1.5 py-1">
                <div 
                  v-for="(active, i) in table.wins" 
                  :key="i" 
                  class="w-2 h-2  flex items-center justify-center transition-colors text-white/30"
                >
                  <svg v-if="active" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                  <svg v-else class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /><line x1="4" y1="16" x2="16" y2="4" stroke="currentColor" stroke-width="5" /></svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Reminder Modal -->
    <ReminderModal
      v-if="isReminderOpen"
      title="Reminder"
      message="Please login first"
      @close="isReminderOpen = false"
      @ok="handleOkClick"
    />
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
