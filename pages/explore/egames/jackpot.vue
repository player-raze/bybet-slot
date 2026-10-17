<script setup lang="ts">
import {
  MessageCircle,
  ChevronRight,
  Play,
  User,
} from 'lucide-vue-next'
import {
  JACKPOT_NAV_TABS,
  JACKPOT_SECTIONS,
  JACKPOT_WINNERS,
  type JackpotGame,
  type JackpotSection,
} from '~/data/jackpot'

const activeTab = ref('all')

const { context: commentContext, openGameComments, closeComments } = useCommentPanel()
const { showDemoMessage } = useDemoInteraction()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const toggleChat = (): void => {
  if (commentContext.value) {
    closeComments()
  } else {
    openGameComments()
  }
}

const selectTab = (key: string): void => {
  activeTab.value = key
  if (import.meta.client) {
    if (key === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(`section-${key.toLowerCase()}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
}

const showGameDetails = (game: JackpotGame): void => {
  showDemoMessage(`${game.title} (${game.provider}) — Jackpot Pool: ${game.jackpotPool || 'Active'} • RTP: ${game.rtpPercent || '97.0%'}`)
}

const filteredSections = computed<JackpotSection[]>(() => {
  if (activeTab.value === 'all') {
    return JACKPOT_SECTIONS
  }
  return JACKPOT_SECTIONS.filter((s) => s.provider.toLowerCase() === activeTab.value.toLowerCase())
})
</script>

<template>
  <div class="jackpot-page w-full min-w-0 pb-16 pt-1">
    <!-- Top Nav Tabs Bar (777, JILI, CQ9, JDB + Chat) -->
    <header class="top-nav-bar flex items-center justify-between gap-2 rounded-2xl bg-[#171817] border border-white/5 p-1 mb-4 overflow-x-auto no-scrollbar shadow-sm">
      <div class="flex items-center gap-1.5 min-w-0">
        <button
          v-for="tab in JACKPOT_NAV_TABS"
          :key="tab.key"
          type="button"
          class="nav-tab flex items-center justify-center min-w-[58px] py-1.5 px-3.5 rounded-xl transition-all cursor-pointer select-none"
          :class="activeTab === tab.key ? 'bg-[#00c74d] shadow-md' : 'hover:bg-white/5'"
          :aria-label="tab.label"
          @click="selectTab(tab.key)"
        >
          <span
            v-if="tab.isAll"
            class="text-[13px] font-black tracking-wider"
            :class="activeTab === tab.key ? 'text-[#0a1c13]' : 'text-white/80'"
          >
            {{ tab.label }}
          </span>
          <img
            v-else
            :src="tab.logo"
            :alt="tab.label"
            class="h-4 max-w-[42px] object-contain transition-opacity"
            :class="activeTab === tab.key ? 'brightness-0 contrast-200' : 'brightness-125 opacity-80 hover:opacity-100'"
          />
        </button>
      </div>

      <!-- Right Chat Toggle -->
      <button
        type="button"
        class="nav-tab nav-tab--chat flex flex-col items-center justify-center min-w-[56px] py-1 px-2.5 rounded-xl transition-all cursor-pointer select-none shrink-0 border-l border-white/5 pl-2"
        :class="commentContext ? 'text-[#00c74d] font-semibold' : 'text-[#7a807d] hover:text-white hover:bg-white/5'"
        aria-label="Toggle chat room"
        @click="toggleChat"
      >
        <MessageCircle class="h-4 w-4 mb-0.5 shrink-0" />
        <span class="text-[11px] leading-tight">Chat</span>
      </button>
    </header>

    <!-- Provider Jackpot Sections -->
    <section
      v-for="section in filteredSections"
      :id="`section-${section.id}`"
      :key="section.id"
      class="jackpot-provider-section mb-8"
    >
      <!-- Section Header: Provider Logo on Left, Jackpot Banner in Center, Count on Right -->
      <div class="flex items-center justify-between mb-2">
        <!-- Left: Provider Logo -->
        <div class="flex items-center">
          <img
            :src="section.providerLogo"
            :alt="section.provider"
            class="h-5 max-w-[56px] object-contain brightness-125 opacity-90"
          />
        </div>

        <!-- Center: 3D Jackpot Graphic + Mascot -->
        <div class="flex flex-col items-center justify-center">
          <div class="relative flex items-center justify-center">
            <span class="jackpot-logo-text text-xl md:text-2xl font-black tracking-widest uppercase select-none">
              JACKPOT
            </span>
            <span class="text-2xl absolute -top-3.5 -right-7 select-none filter drop-shadow">
              {{ section.jackpotCharacter === 'dragon' ? '🐉' : section.jackpotCharacter === 'genie' ? '🧞' : '🐼' }}
            </span>
          </div>

          <!-- Digital Odometer / Counter Bar -->
          <div
            v-if="section.counterDigits"
            class="jackpot-counter-box mt-1.5 flex items-center gap-1 rounded-xl bg-[#282a29] border border-white/10 px-3.5 py-1 shadow-inner"
          >
            <template v-for="(char, idx) in section.counterDigits" :key="idx">
              <div
                v-if="char !== '.' && char !== ','"
                class="digit-cell flex h-7 w-5.5 items-center justify-center rounded bg-[#1e201f] border border-black/50 text-[16px] font-black text-[#ffcb3d] shadow-sm select-none"
              >
                {{ char }}
              </div>
              <span v-else class="text-[#ffcb3d] font-black text-sm px-0.5 select-none">{{ char }}</span>
            </template>
          </div>
        </div>

        <!-- Right: Section Count Pill -->
        <a
          :href="bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="count-badge flex items-center gap-0.5 rounded-full bg-[#202220] hover:bg-[#282a29] px-2.5 py-0.5 text-[11px] font-medium text-[#8e9491] hover:text-white transition-colors cursor-pointer"
        >
          <span>{{ section.count }}</span>
          <ChevronRight class="h-3 w-3" />
        </a>
      </div>

      <!-- Games Grid: 6 Columns -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <a
          v-for="game in section.games"
          :key="game.id"
          :href="game.href || bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="game-card group relative flex flex-col cursor-pointer select-none"
          :aria-label="`Play ${game.title} by ${game.provider}`"
        >
          <!-- Card Image Thumbnail Container -->
          <div class="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#181a19] border border-white/5 shadow-md">
            <img
              :src="game.image"
              :alt="game.title"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />

            <!-- Top Left: PROMO Badge -->
            <span
              v-if="game.promo"
              class="absolute top-1.5 left-1.5 rounded bg-[#c58a18] text-black font-black text-[8px] px-1.5 py-0.5 leading-none shadow tracking-wide"
            >
              PROMO
            </span>

            <!-- Top Left: Star BUY Badge -->
            <span
              v-else-if="game.buyBonus"
              class="absolute top-1.5 left-1.5 rounded-full bg-black/60 border border-[#ffd700]/40 px-1.5 py-0.5 text-[8.5px] font-bold text-[#ffd700] flex items-center gap-0.5 shadow leading-none"
            >
              <span>★</span> BUY
            </span>

            <!-- Top Right: Dual-color RTP Badge -->
            <div
              v-if="game.rtpPercent"
              class="absolute top-2 right-2 flex items-center rounded overflow-hidden shadow-md leading-none border border-black/40 text-[9px] font-black"
            >
              <span class="bg-[#00a843] text-white px-1.5 py-0.5">RTP</span>
              <span class="bg-white text-black px-1.5 py-0.5">{{ game.rtpPercent }}</span>
            </div>

            <!-- Bottom Left: Jackpot Pool Amount -->
            <span
              v-if="game.jackpotPool"
              class="absolute bottom-2 left-2 rounded-sm bg-black/70 backdrop-blur-xs px-1.5 py-0.5 text-[9.5px] font-bold text-[#ffd700] leading-none shadow"
            >
              {{ game.jackpotPool }}
            </span>

            <!-- Bottom-Right Info Icon -->
            <button
              type="button"
              class="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-black/45 backdrop-blur-xs flex items-center justify-center text-[10px] text-white/80 hover:text-white hover:bg-black/75 transition-colors"
              aria-label="Game Info"
              @click.stop.prevent="showGameDetails(game)"
            >
              ⓘ
            </button>

            <!-- Hover Play Button Overlay -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div class="h-10 w-10 rounded-full bg-[#00e701] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <Play class="h-5 w-5 fill-black ml-0.5" />
              </div>
            </div>
          </div>

          <!-- Bottom Caption: Title & Provider Logo -->
          <div class="mt-1.5 flex items-center justify-between gap-1 px-0.5">
            <span class="truncate text-[12px] font-semibold text-[#e5e7eb] group-hover:text-white transition-colors">
              {{ game.title }}
            </span>

            <div class="flex items-center shrink-0">
              <img
                v-if="game.providerLogo"
                :src="game.providerLogo"
                :alt="game.provider"
                class="h-3.5 max-w-[36px] object-contain opacity-80 group-hover:opacity-100 transition-opacity brightness-125"
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
        </a>
      </div>
    </section>

    <!-- Winners List Card -->
    <div class="winners-card rounded-2xl bg-[#171817] border border-white/5 p-4 shadow-sm mb-8">
      <h3 class="text-base font-bold text-white mb-3">Winners List</h3>

      <div class="divide-y divide-white/5">
        <div
          v-for="winner in JACKPOT_WINNERS"
          :key="winner.id"
          class="flex items-center justify-between py-2.5 text-xs"
        >
          <!-- Left: Provider Logo + Masked Username -->
          <div class="flex items-center gap-3">
            <img
              :src="winner.providerLogo"
              alt=""
              class="h-3.5 max-w-[36px] object-contain brightness-125 opacity-80"
            />
            <span class="text-[#8e9491] font-mono">{{ winner.username }}</span>
          </div>

          <!-- Center: Won Amount -->
          <span class="text-white font-semibold font-mono">{{ winner.amount }}</span>

          <!-- Right: Date Time -->
          <span class="text-[#626664] text-[11px] font-mono">{{ winner.date }}</span>
        </div>
      </div>
    </div>

    <!-- Regulatory / PAGCOR Footer Block -->
    <footer class="regulatory-footer flex flex-col items-center justify-center text-center gap-3 pt-4 pb-8">
      <!-- Certification Badges -->
      <div class="flex items-center gap-4">
        <div class="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow p-1">
          <span class="text-[10px] font-extrabold text-[#0038a8] leading-tight">PAGCOR</span>
        </div>
        <div class="h-10 w-28 rounded-lg bg-white flex items-center justify-center gap-1.5 px-2 shadow">
          <span class="text-xs font-black text-red-600 border border-red-600 rounded-full h-5 w-5 flex items-center justify-center">21</span>
          <span class="text-[7.5px] font-bold text-black leading-tight text-left">GAMBLING CAN BE ADDICTIVE<br><strong>KNOW WHEN TO STOP</strong></span>
        </div>
      </div>

      <!-- Links & Warnings -->
      <div class="text-[11px] font-semibold text-[#f04438] tracking-wide">
        <a href="https://www.pagcor.ph/regulatory" target="_blank" rel="noopener noreferrer" class="hover:underline">WWW.PAGCOR.PH/REGULATORY</a>
        <span class="mx-2">•</span>
        <a href="mailto:keepitfun@pagcor.ph" class="hover:underline">KEEPITFUN@PAGCOR.PH</a>
      </div>

      <p class="text-[10px] font-medium text-[#2e90fa] max-w-md uppercase leading-relaxed">
        GAMBLING DOESN'T GUARANTEE EARNINGS OR FINANCIAL IMPROVEMENT. STAY WITHIN YOUR LIMITS.
      </p>

      <div class="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#1e201f] px-3 py-1 text-[11px] text-[#9ca3af]">
        <span>📞</span>
        <span class="font-mono font-bold text-white">(02) 8248-8686</span>
      </div>
    </footer>
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

.jackpot-logo-text {
  background: linear-gradient(180deg, #fff7b2 0%, #ffc82f 45%, #e68500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 0 #8c4a00) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.7));
  letter-spacing: 0.08em;
}
</style>
