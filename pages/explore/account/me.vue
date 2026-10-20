<script setup lang="ts">
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  FileText,
  Gift,
  Ticket,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Mic2,
  Target,
  Trophy,
  Sliders,
  Calendar,
  Palette,
  LayoutGrid,
  Globe,
  Clock,
  Moon,
  Headphones,
  GraduationCap,
  FileCheck,
  Lock,
  Handshake,
  Smartphone,
  Info,
} from 'lucide-vue-next'

const { showDemoMessage } = useDemoInteraction()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const openSections = reactive({
  general: true,
  livePlaza: true,
  gameSettings: true,
  systemSettings: true,
  help: true,
  specialPromotion: true,
  helpList: true,
  responsibility: true,
  aboutUs: true,
})

const toggleSection = (key: keyof typeof openSections): void => {
  openSections[key] = !openSections[key]
}

const selectedOdds = ref('Euro (Dec)')
const isOddsDropdownOpen = ref(false)
const oddsOptions = ['Euro (Dec)', 'Hong Kong', 'Indo', 'Malay', 'US']

const selectedTheme = ref<'International' | 'Asia'>('International')
const selectedMode = ref<'Light' | 'Dark' | 'Auto'>('Dark')

// Real-time GMT+8 clock
const serverTime = ref('')
let timer: ReturnType<typeof setInterval> | undefined

const updateServerTime = (): void => {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const gmt8 = new Date(utc + 3600000 * 8)
  const hours = String(gmt8.getHours()).padStart(2, '0')
  const minutes = String(gmt8.getMinutes()).padStart(2, '0')
  const seconds = String(gmt8.getSeconds()).padStart(2, '0')
  serverTime.value = `${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateServerTime()
  timer = setInterval(updateServerTime, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="me-page w-full min-w-0 pb-0 pt-1 text-white">
    <!-- Top Account Card: Login / Sign Up & Action Buttons -->
    <div class="account-card rounded-lg bg-[#141414]  px-2 py-3 mb-3.5 shadow-sm">
      <div class="px-2">
        <div class="flex items-center gap-1">
          <a
            :href="bybetRedirectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#2b2b2b] rounded-lg border border-[#1fa779] px-4 py-1 text-[12px] font-semibold text-[#1fa779] hover:bg-[#252525] transition-colors"
          >
            Login
          </a>
          <a
            :href="bybetRedirectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg bg-[#036242] px-4 py-1 text-[12px] font-bold text-white hover:bg-[#122F25] transition-colors"
          >
            Sign Up
          </a>
        </div>

        <p class="mt-2 text-[12px] text-[#707070]">Hi, please log in/register first.</p>
      </div>
      

      <!-- 4 Quick Actions: Deposit, Withdraw, VIP, Bonus -->
      <div class="grid grid-cols-4 gap-1 mt-4">
        <a
          :href="bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-btn flex items-center justify-center rounded-lg bg-[#005a3c] py-2 text-[14px] font-semibold text-white transition-colors shadow-sm"
        >
          Deposit
        </a>
        <a
          :href="bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-btn flex items-center justify-center rounded-lg bg-[#005a3c]  py-2 text-[14px] font-semibold text-white transition-colors shadow-sm"
        >
          Withdraw
        </a>
        <a
          :href="bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-btn flex items-center justify-center rounded-lg bg-[#005a3c]  py-2 text-[14px] font-semibold text-white transition-colors shadow-sm"
        >
          VIP
        </a>
        <a
          :href="bybetRedirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-btn flex items-center justify-center rounded-lg bg-[#005a3c]  py-2 text-[14px] font-semibold text-white transition-colors shadow-sm"
        >
          Bonus
        </a>
      </div>
    </div>

    <!-- Accordion 1: General -->
    <div class="section-card rounded-lg bg-[#141414] p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('general')"
      >
        <span class="text-[15px] font-bold text-white">General</span>
        <ChevronUp v-if="openSections.general" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.general" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- Betting History -->
        <a :href="bybetRedirectUrl" target="_blank" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <FileText class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Betting History</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </a>

        <!-- Bonuses -->
        <NuxtLink to="/explore/bonuses" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#4d3c12] text-[#ffc83d]">
              <Gift class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Bonuses</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Coupon Center -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Coupon Center')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#4a2612] text-[#ff8042]">
              <Ticket class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Coupon Center</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>

        <!-- Referral Bonus -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Referral Bonus')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Share2 class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Referral Bonus</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>

        <!-- Responsible Gaming -->
        <NuxtLink to="/explore/help/responsible-gaming" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#4d1618] text-[#ff5252]">
              <ShieldAlert class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Responsible Gaming</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>
      </div>
    </div>

    <!-- Accordion 2: Live Plaza -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('livePlaza')"
      >
        <span class="text-[15px] font-bold text-white">Live Plaza</span>
        <ChevronUp v-if="openSections.livePlaza" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.livePlaza" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- Streamer Broadcast -->
        <NuxtLink to="/explore/live-plaza/streamer" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#3a1a54] text-[#b388ff]">
              <Mic2 class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Streamer Broadcast</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Match Predictions -->
        <NuxtLink to="/explore/live-plaza/expert-predictions" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#124d45] text-[#34d399]">
              <Target class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Match Predictions</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Results -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Match Results')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#4d2a12] text-[#ff9800]">
              <Trophy class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Results</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>

    <!-- Accordion 3: Game Settings -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('gameSettings')"
      >
        <span class="text-[15px] font-bold text-white">Game Settings</span>
        <ChevronUp v-if="openSections.gameSettings" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.gameSettings" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- Odds Settings -->
        <div class="menu-item flex items-center justify-between relative">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#242625] text-white/90">
              <Sliders class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db]">Odds Settings</span>
          </div>
          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-1 rounded bg-[#202220] px-2 py-0.5 text-xs text-white hover:bg-[#282a29] transition-colors cursor-pointer"
              @click="isOddsDropdownOpen = !isOddsDropdownOpen"
            >
              <span>{{ selectedOdds }}</span>
              <ChevronDown class="h-3 w-3 text-[#7a807d]" />
            </button>
            <div
              v-if="isOddsDropdownOpen"
              class="absolute right-0 top-full mt-1 z-30 rounded-lg bg-[#202220] border border-white/10 shadow-lg py-1 min-w-[100px]"
            >
              <button
                v-for="opt in oddsOptions"
                :key="opt"
                type="button"
                class="w-full text-left px-3 py-1 text-xs hover:bg-white/10 transition-colors"
                :class="selectedOdds === opt ? 'text-[#00c74d] font-bold' : 'text-white'"
                @click="selectedOdds = opt; isOddsDropdownOpen = false"
              >
                {{ opt }}
              </button>
            </div>
          </div>
        </div>

        <!-- Event Settings -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Event Settings')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#242625] text-white/90">
              <Calendar class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Event Settings</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>

        <!-- Theme -->
        <div class="menu-item flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#3a1a54] text-[#b388ff]">
              <Palette class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db]">Theme</span>
          </div>
          <!-- Toggle Pill -->
          <div class="flex items-center rounded-full bg-[#202220] p-0.5 text-xs">
            <button
              type="button"
              class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-all cursor-pointer"
              :class="selectedTheme === 'International' ? 'bg-[#00c74d] text-black font-bold shadow' : 'text-[#7a807d] hover:text-white'"
              @click="selectedTheme = 'International'"
            >
              International
            </button>
            <button
              type="button"
              class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-all cursor-pointer"
              :class="selectedTheme === 'Asia' ? 'bg-[#00c74d] text-black font-bold shadow' : 'text-[#7a807d] hover:text-white'"
              @click="selectedTheme = 'Asia'"
            >
              Asia
            </button>
          </div>
        </div>

        <!-- Market Display -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Market Display Settings')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <LayoutGrid class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Market Display</span>
          </div>
          <div class="flex items-center gap-1 text-xs text-[#7a807d] group-hover:text-white transition-colors">
            <span>Default (Features Bets)</span>
            <ChevronRight class="h-3.5 w-3.5 text-[#555a57]" />
          </div>
        </button>
      </div>
    </div>

    <!-- Accordion 4: System Settings -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('systemSettings')"
      >
        <span class="text-[15px] font-bold text-white">System Settings</span>
        <ChevronUp v-if="openSections.systemSettings" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.systemSettings" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- Language -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Language: English')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <Globe class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Language</span>
          </div>
          <div class="flex items-center gap-1 text-xs text-[#7a807d] group-hover:text-white transition-colors">
            <span>English - EN</span>
            <ChevronRight class="h-3.5 w-3.5 text-[#555a57]" />
          </div>
        </button>

        <!-- Time Zone -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Time Zone: GMT+08:00')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Clock class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Time Zone</span>
          </div>
          <div class="flex items-center gap-1 text-xs text-[#7a807d] group-hover:text-white transition-colors">
            <span>GMT+08:00</span>
            <ChevronRight class="h-3.5 w-3.5 text-[#555a57]" />
          </div>
        </button>

        <!-- Mode -->
        <div class="menu-item flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#242625] text-white/90">
              <Moon class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db]">Mode</span>
          </div>
          <!-- Segmented Toggle -->
          <div class="flex items-center rounded-full bg-[#202220] p-0.5 text-xs">
            <button
              type="button"
              class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-all cursor-pointer"
              :class="selectedMode === 'Light' ? 'bg-[#00c74d] text-black font-bold shadow' : 'text-[#7a807d] hover:text-white'"
              @click="selectedMode = 'Light'"
            >
              Light
            </button>
            <button
              type="button"
              class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-all cursor-pointer"
              :class="selectedMode === 'Dark' ? 'bg-[#00c74d] text-black font-bold shadow' : 'text-[#7a807d] hover:text-white'"
              @click="selectedMode = 'Dark'"
            >
              Dark
            </button>
            <button
              type="button"
              class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-all cursor-pointer"
              :class="selectedMode === 'Auto' ? 'bg-[#00c74d] text-black font-bold shadow' : 'text-[#7a807d] hover:text-white'"
              @click="selectedMode = 'Auto'"
            >
              Auto
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Accordion 5: Help -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('help')"
      >
        <span class="text-[15px] font-bold text-white">Help</span>
        <ChevronUp v-if="openSections.help" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.help" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- 24/7 Services -->
        <NuxtLink to="/explore/egames/customer-service" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Headphones class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">24/7 Services</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Transaction Tutorial -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Transaction Tutorial')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <FileText class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Transaction Tutorial</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>

        <!-- Tutorial -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Beginner Tutorial')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <GraduationCap class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Tutorial</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>

        <!-- Game Rules -->
        <NuxtLink to="/explore/legal/betting-rules" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#4d3c12] text-[#ffc83d]">
              <FileCheck class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Game Rules</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Responsible Gaming -->
        <NuxtLink to="/explore/help/responsible-gaming" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#3a1a54] text-[#b388ff]">
              <ShieldCheck class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Responsible Gaming</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Terms of Use -->
        <NuxtLink to="/explore/legal/terms-of-service" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#124d45] text-[#34d399]">
              <FileText class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Terms of Use</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Privacy Policy -->
        <NuxtLink to="/explore/legal/privacy-policy" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#4d1618] text-[#ff5252]">
              <Lock class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Privacy Policy</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </NuxtLink>

        <!-- Affiliate -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Affiliate Program')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Handshake class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Affiliate</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>

        <!-- Download APP -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('ByBet Mobile App Download')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#4a2612] text-[#ff8042]">
              <Smartphone class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">Download APP</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>

        <!-- About Us -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="openSections.aboutUs = true">
          <div class="flex items-center gap-2.5">
            <div class="grid h-7 w-7 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Info class="h-4 w-4" />
            </div>
            <span class="text-xs text-[#d1d5db] group-hover:text-white transition-colors">About Us</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57] group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>

    <!-- Section: Special Promotion -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('specialPromotion')"
      >
        <span class="text-[13px] font-bold text-white">Special Promotion</span>
        <ChevronUp v-if="openSections.specialPromotion" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.specialPromotion" class="pt-3 text-xs text-[#8e9491] space-y-2">
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Your Jackpot, Your Reward')">
          Your Jackpot, Your Reward.
        </p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Latest Deals')">
          Latest Deals
        </p>
      </div>
    </div>

    <!-- Section: HELP List -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('helpList')"
      >
        <span class="text-[13px] font-bold text-white uppercase tracking-wider">HELP</span>
        <ChevronUp v-if="openSections.helpList" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.helpList" class="pt-3 text-xs text-[#8e9491] space-y-2">
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('24/7 Services')">24/7 Services</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Game Rules')">Game Rules</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Responsible Gaming')">Responsible Gaming</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Terms of Use')">Terms of Use</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Privacy Policy')">Privacy Policy</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('About Us')">About Us</p>
      </div>
    </div>

    <!-- Section: Responsibility & Reputation -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-3.5 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('responsibility')"
      >
        <span class="text-[13px] font-bold text-white">Responsibility & Reputation</span>
        <ChevronUp v-if="openSections.responsibility" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.responsibility" class="flex flex-wrap items-center gap-6 pt-4">
        <img
          src="/responsible-gaming/technical-systems-testing.png"
          alt="Technical Systems Testing"
          class="h-7 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
        />
        <img
          src="/responsible-gaming/dpo-dps.png"
          alt="DPO DPS"
          class="h-7 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
        />
        <img
          src="/responsible-gaming/gamcare.png"
          alt="GamCare"
          class="h-7 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
        />
        <img
          src="/responsible-gaming/be-gamble-aware.png"
          alt="Be Gamble Aware"
          class="h-7 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>

    <!-- Section: About Us -->
    <div class="section-card rounded-lg bg-[#141414]  p-4 mb-6 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('aboutUs')"
      >
        <span class="text-[13px] font-bold text-white">About Us</span>
        <ChevronUp v-if="openSections.aboutUs" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.aboutUs" class="pt-4 text-xs text-[#8e9491] leading-relaxed space-y-3">
        <!-- Logo -->
        <NuxtLink to="/" class="inline-block mb-1">
          <img
            src="/brand/bybet-logo.png"
            alt="ByBet"
            class="h-7 w-auto object-contain"
          />
        </NuxtLink>

        <p>
          ByBet is an online sports betting and gaming platform designed to provide users with a secure, reliable, and premium wagering experience. We uphold the highest standards of integrity, transparency, and responsible gaming - earning the trust of sports fans and betters alike.
        </p>
        <p>
          Our platform is designed with the user in mind, offering secure technology, seamless navigation, and competitive markets across a wide range of sports and gaming options. ByBet continuously invests in innovation, compliance, and customer protection to ensure a fair and enjoyable experience for every player.
        </p>
        <p>
          At ByBet, player safety and data security are paramount. We implement robust safeguards and follow applicable regulatory requirements to protect personal information and transactions, providing our users with confidence and peace of mind.
        </p>
        <p>
          Join ByBet today and experience a trusted platform that elevates your sports betting journey to the next level.
        </p>

        <h4 class="font-bold text-white pt-2">Cookies & User Experience</h4>
        <p>
          To enhance your experience and improve platform performance, ByBet uses cookies and similar technologies to collect information from our servers when you access or use the website. By registering with ByBet or continuing to use the platform, you consent to our use of cookies in accordance with our Cookie Policy.
        </p>
        <p>
          Please note that disabling or disabling cookies may limit your access to certain features or areas of the platform and may affect overall functionality.
        </p>

        <!-- Meta Footer: Server Time & Copyright -->
        <div class="border-t border-white/5 pt-3 mt-4 text-[11px] text-[#626664] space-y-1">
          <p>Server Time: {{ serverTime }} (GMT+08:00)</p>
          <p>Copyright © 2026 ByBet Group. All Rights Reserved.</p>
        </div>
      </div>
    </div>

    <!-- Regulatory / PAGCOR Footer Block -->
    <footer class="regulatory-footer flex flex-col items-center justify-center text-center gap-3 pt-2 pb-6">
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
.menu-item {
  min-height: 2rem;
}
</style>
