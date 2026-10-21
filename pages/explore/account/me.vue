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
const { selectedLanguageLabel } = useSiteLocale()
const { selectedTimeZone } = useTimeZonePreference()

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

const selectedOdds = ref('Euro Odds')
const isOddsDropdownOpen = ref(false)
const oddsOptions = ['Euro Odds', 'Hong Kong Odds', 'Malay Odds', 'Indo Odds']

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
    <div class="account-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
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
    <div class="section-card rounded-lg bg-[#141414] px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full mb-2 mb-2 items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('general')"
      >
        <span class="text-[16px] font-bold text-white">General</span>
        <ChevronUp v-if="openSections.general" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.general" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-1">
        <!-- Betting History -->
        <a :href="bybetRedirectUrl" target="_blank" rel="noopener noreferrer" class="menu-item flex items-center justify-between ">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded  text-[#4ea8de]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="#01AEF3"></rect><path d="M9.564 5C9.326 5 9.102 5.091 8.941 5.259L5.259 8.934C5.091 9.102 5 9.326 5 9.557V16.354C5 17.817 6.19 19 7.653 19H16.347C17.81 19 19 17.817 19 16.354V7.646C19 6.183 17.81 5 16.347 5H9.564ZM9.2 13.113H14.8C15.185 13.113 15.507 13.421 15.507 13.806C15.507 14.191 15.199 14.506 14.814 14.513H14.8H9.2C8.815 14.513 8.493 14.205 8.493 13.82C8.493 13.435 8.801 13.12 9.186 13.113H9.2ZM9.2 9.62H14.8C15.185 9.62 15.5 9.935 15.5 10.32C15.5 10.705 15.185 11.02 14.8 11.02H9.2C8.815 11.02 8.5 10.705 8.5 10.32C8.5 9.935 8.815 9.62 9.2 9.62Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Betting History</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </a>

        <!-- Bonuses -->
        <NuxtLink to="/explore/bonuses" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded  text-[#ffc83d]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="none" class="fill-[#FFBA00]"></rect><path d="M18.0058 19.5H6.00076C5.56593 19.5 5.16687 19.1208 5.16687 18.58V9.83301H18.8397V18.58C18.8397 19.1208 18.4406 19.5 18.0058 19.5Z" stroke="white"></path><path d="M14.9645 4C14.7711 4 14.5844 4.08 14.4443 4.22667L12.0033 6.78675L9.56229 4.22667C9.4289 4.08 9.23549 4 9.04207 4C6.99455 4 5.33386 5.74672 5.33386 7.88679C5.33386 8.31347 5.66733 8.66681 6.07417 8.66681H17.9324C18.3393 8.66681 18.6728 8.31347 18.6728 7.88679C18.6728 5.74672 17.0121 4 14.9645 4ZM6.9412 7.11343C7.21465 6.30007 7.90827 5.69339 8.74862 5.57338L10.2159 7.11343H6.9412ZM13.7907 7.11343L15.258 5.57338C16.0983 5.68672 16.792 6.30007 17.0654 7.11343H13.7907Z" fill="white"></path><g filter="url(#filter0_b_4992_814)"><path d="M19.6999 12.6664H4.30679C4.13339 12.6664 4 12.4998 4 12.2931V10.073C4 9.66635 4.28012 9.33301 4.61359 9.33301H19.3864C19.7266 9.33301 20 9.66635 20 10.073V12.2931C20 12.4998 19.8599 12.6664 19.6932 12.6664H19.6999Z" fill="white"></path></g><g filter="url(#filter1_b_4992_814)"><path d="M10.4026 9.33301H13.6039V20H10.4026V9.33301Z" fill="white"></path></g><defs><filter id="filter0_b_4992_814" x="0" y="5.33301" width="24" height="11.3335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4992_814"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4992_814" result="shape"></feBlend></filter><filter id="filter1_b_4992_814" x="6.40259" y="5.33301" width="11.2013" height="18.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4992_814"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4992_814" result="shape"></feBlend></filter></defs></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Bonuses</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Coupon Center -->
        <a :href="bybetRedirectUrl" target="_blank" rel="noopener noreferrer" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded text-[#ff8042]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="none" class="fill-layer-46"></rect><path d="M20 10.2V7.22C20 6.54 19.42 6 18.71 6H5.29C4.58 6 4 6.55 4 7.22V10.2C5.05 10.2 5.89 11.01 5.89 12C5.89 12.99 5.04 13.8 4 13.8V16.78C4 17.46 4.58 18 5.29 18H18.71C19.42 18 20 17.45 20 16.78V13.8C18.95 13.8 18.11 12.99 18.11 12C18.11 11.01 18.96 10.2 20 10.2ZM9.68 15C9.68 15.33 9.4 15.6 9.05 15.6C8.7 15.6 8.42 15.33 8.42 15V9C8.42 8.67 8.7 8.4 9.05 8.4C9.4 8.4 9.68 8.67 9.68 9V15Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db] transition-colors">Coupon Center</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </a>

        <!-- Referral Bonus -->
        <a :href="bybetRedirectUrl" target="_blank" rel="noopener noreferrer" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded  text-[#4ea8de]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="none" class="fill-[#428ACD]"></rect><path d="M19.8866 11.4559C19.8866 11.6743 19.7729 11.6743 19.6592 11.7836L14.7841 16.3634C14.443 16.5819 13.8768 16.3634 13.6495 16.0357C13.5701 15.9038 13.5315 15.7513 13.5358 15.5988V13.0903C10.5845 11.4538 6.72605 12.3257 5.02307 15.0546C4.44826 15.9389 4.13512 16.9571 4.11367 18C4 17.5651 4 17.1281 4 16.5819C4.00214 12.2185 7.86279 8.7269 12.5149 8.7269H13.5358V6.76469C13.5251 6.35246 13.864 6.01031 14.2929 6C14.3058 6 14.3187 6 14.3315 6C14.5567 6 14.6704 6 14.7841 6.10924L19.552 10.3696C19.9531 10.5613 20.1139 11.0292 19.9144 11.4146C19.908 11.4291 19.8994 11.4414 19.8909 11.4559H19.8844H19.8866Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Referral Bonus</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </a>

        <!-- Responsible Gaming -->
        <NuxtLink to="/explore/help/responsible-gaming" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded text-[#ff5252]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75"><rect width="32" height="32" rx="10.6667" fill="#D80027" class=""></rect><g clip-path="url(#clip0_1190_232664)"><path d="M16.4266 22.0561C15.7037 22.0561 14.9805 22.0561 14.2577 22.0561C14.0963 22.0561 13.974 22.1561 13.9717 22.2867C13.9693 22.4177 14.0926 22.5269 14.257 22.5272C15.7253 22.5286 17.1936 22.532 18.6619 22.5259C19.1372 22.5238 19.7129 22.086 19.88 21.6189C19.9302 21.4788 19.9787 21.3342 19.9975 21.1876C20.0123 21.0729 20.0679 21.0137 20.1525 20.9525C20.8615 20.4399 21.5679 19.9228 22.2756 19.4081C22.7462 19.0659 23.2084 18.7097 23.6931 18.3892C23.9632 18.211 24.2677 18.1718 24.61 18.2304C25.2126 18.3331 25.445 18.9631 25.279 19.5047C25.1765 19.8394 24.9509 20.0657 24.7245 20.2905C24.1677 20.8443 23.6085 21.3978 23.0194 21.9152C22.4824 22.3867 21.925 22.8402 21.3399 23.2477C20.6887 23.7012 20.0107 24.1264 19.273 24.4248C18.6296 24.685 17.964 24.8885 17.3092 25.1198C16.652 25.3518 15.9698 25.3627 15.2924 25.3021C14.7895 25.2572 14.2947 25.131 13.8268 24.915C13.3084 24.6755 12.7813 24.4557 12.2578 24.2275C11.9233 24.0815 11.5918 23.9274 11.2526 23.7941C11.0088 23.6981 10.7582 23.6128 10.5032 23.5546C10.0626 23.4536 9.61927 23.3529 9.17127 23.2995C8.87686 23.2644 8.57269 23.3188 8.2729 23.3178C8.22136 23.3178 8.14793 23.2508 8.12468 23.1971C8.09807 23.1345 8.11424 23.0525 8.11424 22.979C8.11424 21.8414 8.11424 20.7038 8.11424 19.5659C8.11424 19.2213 8.16376 19.174 8.49218 19.0628C9.01665 18.8852 9.55426 18.8111 10.101 18.8624C10.3832 18.889 10.6692 18.9539 10.9367 19.0499C11.5228 19.2601 12.0927 19.5176 12.6799 19.7238C13.1578 19.8915 13.6466 20.0279 14.1637 20.0303C15.6135 20.0374 17.0636 20.0667 18.5134 20.0643C19.0517 20.0636 19.4269 20.4092 19.5263 20.8858C19.6125 21.2985 19.3461 21.8333 18.8991 21.9816C18.7549 22.0295 18.5959 22.05 18.4433 22.0517C17.771 22.0588 17.0983 22.0547 16.4256 22.0547V22.0561H16.4266Z" fill="white"></path><path d="M20.1463 17.0899H18.1265C18.1265 16.9572 18.1265 16.83 18.1265 16.7028C18.1269 16.1537 18.1282 15.6047 18.1276 15.0553C18.1276 14.8801 18.0349 14.7743 17.8891 14.775C17.7284 14.7756 17.6634 14.8369 17.661 15.0151C17.6563 15.3716 17.659 15.7285 17.6587 16.085C17.6587 16.3623 17.6553 16.6399 17.6607 16.9171C17.663 17.0494 17.6078 17.0967 17.4808 17.0964C16.4325 17.0937 15.3843 17.092 14.336 17.0964C14.1952 17.0971 14.1683 17.0396 14.1693 16.9137C14.1733 16.2854 14.1723 15.6571 14.1689 15.0287C14.1679 14.8233 14.0473 14.7215 13.8725 14.7852C13.7371 14.8345 13.6984 14.9576 13.699 15.0985C13.701 15.6873 13.7 16.2759 13.7 16.8647C13.7 16.9321 13.7 16.9994 13.7 17.0811H11.6857C11.6813 17.0375 11.6729 16.9943 11.6729 16.9508C11.6729 15.9149 11.6685 14.8787 11.6779 13.8429C11.6823 13.3608 11.8679 12.9329 12.1226 12.5328C12.4443 12.0273 12.8994 11.6847 13.4467 11.4769C13.6805 11.3881 13.9392 11.3285 14.1878 11.3248C15.3142 11.3085 16.4413 11.3051 17.5677 11.3204C18.3324 11.3309 18.9676 11.6653 19.4736 12.2334C19.7919 12.5906 20.0291 13.0016 20.0914 13.4914C20.1197 13.7129 20.152 13.9357 20.1537 14.1582C20.1611 15.0753 20.1577 15.9925 20.1574 16.9093C20.1574 16.9644 20.151 17.0198 20.1466 17.0899H20.1463Z" fill="white"></path><path d="M14.1526 8.46123C14.0762 7.48933 15.0557 6.64329 15.9622 6.68377C16.8929 6.72561 17.7775 7.51824 17.6767 8.6844C17.6033 9.53588 16.8249 10.3455 15.8204 10.2887C14.9227 10.238 14.1021 9.49914 14.1526 8.46089V8.46123Z" fill="white"></path><path d="M6.49414 24.598C6.49414 24.4809 6.49414 24.4023 6.49414 24.3238C6.49414 22.2636 6.49448 20.2034 6.49481 18.1436C6.49481 17.9188 6.49481 17.9171 6.71444 17.9154C6.97213 17.9137 7.23015 17.9218 7.4875 17.9126C7.61955 17.9079 7.64986 17.9623 7.64852 18.0821C7.64313 18.5573 7.64346 19.0329 7.64346 19.5081C7.64346 21.1379 7.64279 22.7681 7.64582 24.3979C7.64582 24.5405 7.64683 24.6235 7.4518 24.6054C7.14358 24.5772 6.83099 24.598 6.49414 24.598Z" fill="white"></path></g><defs><clipPath id="clip0_1190_232664"><rect width="18.6667" height="18.6667" fill="white" transform="translate(6.66602 6.66675)"></rect></clipPath></defs></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Responsible Gaming</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>
      </div>
    </div>

    <!-- Accordion 2: Live Plaza -->
    <div class="section-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('livePlaza')"
      >
        <span class="text-[16px] font-bold text-white">Live Plaza</span>
        <ChevronUp v-if="openSections.livePlaza" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.livePlaza" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- Streamer Broadcast -->
        <NuxtLink to="/explore/live-plaza/streamer" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#3a1a54] text-[#b388ff]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="none" class="fill-[#9747FF]"></rect><path d="M16.5245 8.99329C16.0889 8.99329 15.7334 9.35352 15.7334 9.7938V11.4949C15.7334 13.5662 14.0534 15.2473 11.9911 15.2473C9.92891 15.2473 8.24891 13.5662 8.24891 11.4949V9.7938C8.24891 9.35352 7.89336 8.99329 7.4578 8.99329C7.02225 8.99329 6.66669 9.35352 6.66669 9.7938V11.4949C6.66669 14.1766 8.64002 16.398 11.2 16.7782V18.3993H9.6178C9.18225 18.3993 8.82669 18.7595 8.82669 19.1998C8.82669 19.6401 9.18225 20.0003 9.6178 20.0003H14.3822C14.8178 20.0003 15.1734 19.6401 15.1734 19.1998C15.1734 18.7595 14.8178 18.3993 14.3822 18.3993H12.8V16.7782C15.36 16.398 17.3334 14.1666 17.3334 11.4949V9.7938C17.3334 9.35352 16.9778 8.99329 16.5422 8.99329H16.5245Z" fill="white"></path><path d="M11.9911 13.9961C10.5245 13.9961 9.32446 12.6352 9.32446 10.9842V7.01167C9.32446 5.35061 10.5245 3.99976 11.9911 3.99976C13.4578 3.99976 14.6578 5.36062 14.6578 7.01167V10.9842C14.6578 12.6453 13.4578 13.9961 11.9911 13.9961Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Streamer Broadcast</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Match Predictions -->
        <NuxtLink to="/explore/live-plaza/expert-predictions" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#124d45] text-[#34d399]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="#1EB1A5" class=""></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M4.81528 14.6522C4.34665 15.1208 4.34665 15.8806 4.81528 16.3492C5.28391 16.8178 6.04371 16.8178 6.51233 16.3492L9.05892 13.8026L10.8432 15.5827C11.0686 15.8076 11.3742 15.9337 11.6926 15.9332C12.011 15.9327 12.3162 15.8057 12.5409 15.5801L16.7999 11.3048V13.2C16.7999 13.8627 17.3372 14.4 17.9999 14.4C18.6627 14.4 19.1999 13.8627 19.1999 13.2V8.39995C19.1999 8.23554 19.1669 8.07886 19.107 7.93618C19.0482 7.79563 18.9615 7.66401 18.8468 7.54981C18.6171 7.32094 18.3179 7.20441 18.0173 7.20008L17.9982 7.19995H13.1999C12.5372 7.19995 11.9999 7.73721 11.9999 8.39995C11.9999 9.06269 12.5372 9.59995 13.1999 9.59995H15.1107L11.6881 13.0355L9.90545 11.257C9.43666 10.7894 8.67763 10.7898 8.20939 11.258L4.81528 14.6522Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Match Predictions</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Results -->
        <button type="button" class="menu-item flex items-center justify-between group text-left w-full cursor-pointer" @click="showDemoMessage('Match Results')">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#4d2a12] text-[#ff9800]">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="none" class="fill-[#FF6161]"></rect><path d="M18.3588 12.6387H13.2726C12.9197 12.6387 12.6336 12.9247 12.6336 13.2775V18.3612C12.6336 18.714 12.9197 19 13.2726 19H18.3588C18.7117 19 18.9978 18.714 18.9978 18.3612V13.2775C18.9978 12.9247 18.7117 12.6387 18.3588 12.6387Z" fill="white"></path><path d="M15.0147 9.99625C15.5224 9.99625 15.9776 9.83 16.3628 9.5675L17.9736 11.2562C18.2099 11.51 18.5864 11.51 18.8227 11.2738C19.0591 11.02 19.0591 10.635 18.8227 10.39L17.1419 8.64C17.317 8.29 17.4046 7.905 17.4046 7.5025C17.4046 6.12875 16.3278 5.00875 15.0059 5.00875C13.6841 5.00875 12.6073 6.12875 12.6073 7.5025C12.6073 8.87625 13.6841 9.99625 15.0059 9.99625H15.0147ZM15.0147 6.25125C15.68 6.25125 16.214 6.8025 16.214 7.5025C16.214 8.2025 15.68 8.75375 15.0147 8.75375C14.3494 8.75375 13.8154 8.2025 13.8154 7.5025C13.8154 6.8025 14.3494 6.25125 15.0147 6.25125Z" fill="white"></path><path d="M10.7252 12.6387H5.63905C5.28611 12.6387 5 12.9247 5 13.2775V18.3612C5 18.714 5.28611 19 5.63905 19H10.7252C11.0781 19 11.3642 18.714 11.3642 18.3612V13.2775C11.3642 12.9247 11.0781 12.6387 10.7252 12.6387Z" fill="white"></path><path d="M10.7252 5H5.63905C5.28611 5 5 5.28598 5 5.63875V10.7225C5 11.0753 5.28611 11.3612 5.63905 11.3612H10.7252C11.0781 11.3612 11.3642 11.0753 11.3642 10.7225V5.63875C11.3642 5.28598 11.0781 5 10.7252 5Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Results</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </button>
      </div>
    </div>

    <!-- Accordion 3: Game Settings -->
    <div class="section-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full mb-2 items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('gameSettings')"
      >
        <span class="text-[16px] font-bold text-white">Game Settings</span>
        <ChevronUp v-if="openSections.gameSettings" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.gameSettings" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- Odds Settings -->
        <div class="menu-item flex items-center justify-between relative">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#242625] text-white/90">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" class="fill-black"></rect><path d="M11.6102 19C8.07127 19 5 16.9429 5 12.7252C5 8.07822 8.58575 5 12.8575 5C16.6147 5 19 7.42706 19 10.9049C19 13.9387 16.8797 15.4778 15.1025 15.4778C14.0891 15.4778 13.2784 15.0338 13.1069 14.2051H13.0757C12.5612 14.871 11.6882 15.3446 10.9399 15.3446C9.59911 15.3446 8.64811 14.3827 8.64811 12.8436C8.64811 10.8605 10.1448 8.77378 12.1871 8.77378C12.7795 8.77378 13.2472 9.02537 13.5434 9.60254H13.5902L13.8241 8.89218H15.2584L14.4788 12.518C14.1982 13.5983 14.4944 14.1163 15.3363 14.1163C16.4276 14.1163 17.5345 12.9027 17.5345 10.9641C17.5345 8.4482 16.069 6.34672 12.6704 6.34672C9.58352 6.34672 6.57461 8.84778 6.57461 12.6808C6.57461 15.981 8.95991 17.6533 11.7973 17.6533C12.7483 17.6533 13.7929 17.3573 14.5256 16.9725L15.0557 18.186C13.9955 18.7336 12.8575 19 11.6102 19ZM11.4232 13.9387C11.8285 13.9387 12.2183 13.7315 12.7171 13.1099L13.1693 10.7273C12.9354 10.3573 12.6548 10.1945 12.2494 10.1945C11.0958 10.1945 10.3942 11.63 10.3942 12.7104C10.3942 13.5539 10.7996 13.9387 11.4232 13.9387Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]">Odds Settings</span>
          </div>
          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-1 rounded bg-black px-2 py-0.5 text-[14px] text-white hover:bg-[#282a29] transition-colors cursor-pointer"
              @click="isOddsDropdownOpen = !isOddsDropdownOpen"
            >
              <span>{{ selectedOdds }}</span>
              <ChevronDown class="h-3 w-3 text-[#7a807d]" />
            </button>
            <div
              v-if="isOddsDropdownOpen"
              class="absolute right-0 top-full mt-1 z-30 rounded-lg bg-[#1f1f1f]/90  border border-white/10 shadow-lg py-1 min-w-[100px]"
            >
              <button
                v-for="opt in oddsOptions"
                :key="opt"
                type="button"
                class="w-full text-left px-3 py-1 text-[14px] hover:bg-white/10 transition-colors"
                :class="selectedOdds === opt ? 'text-[#00c74d] font-bold' : 'text-white'"
                @click="selectedOdds = opt; isOddsDropdownOpen = false"
              >
                {{ opt }}
              </button>
            </div>
          </div>
        </div>

        <!-- Event Settings -->
        <a :href="bybetRedirectUrl" target="_blank" rel="noopener noreferrer" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#242625] text-white/90">
              <em class="relative min-h-6 min-w-6 mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="8" fill="none" class="fill-[#666]"></rect><path d="M7.00997 13.425V4.005H5.86997V13.425C4.87997 13.675 4.15997 14.535 4.15997 15.565C4.15997 16.595 4.88997 17.465 5.86997 17.705V19.995H7.00997V17.705C7.99997 17.455 8.71997 16.595 8.71997 15.565C8.71997 14.535 7.98997 13.665 7.00997 13.425ZM6.43997 16.675C5.80997 16.675 5.29997 16.175 5.29997 15.565C5.29997 14.955 5.80997 14.455 6.43997 14.455C7.06997 14.455 7.57997 14.955 7.57997 15.565C7.57997 16.175 7.06997 16.675 6.43997 16.675Z" fill="white"></path><path d="M12.57 5.74V4H11.43V5.74C10.44 5.99 9.71997 6.85 9.71997 7.88C9.71997 8.91 10.45 9.78 11.43 10.02V20H12.57V10.02C13.56 9.77 14.28 8.91 14.28 7.88C14.28 6.85 13.55 5.98 12.57 5.74ZM12 8.99C11.37 8.99 10.86 8.49 10.86 7.88C10.86 7.27 11.37 6.77 12 6.77C12.63 6.77 13.14 7.27 13.14 7.88C13.14 8.49 12.63 8.99 12 8.99Z" fill="white"></path><path d="M19.84 13.355C19.84 12.325 19.11 11.455 18.13 11.215V4.005H16.99V11.205C16 11.455 15.28 12.315 15.28 13.345C15.28 14.375 16.01 15.245 16.99 15.485V19.995H18.13V15.485C19.12 15.235 19.84 14.375 19.84 13.345V13.355ZM17.55 14.465C16.92 14.465 16.41 13.965 16.41 13.355C16.41 12.745 16.92 12.245 17.55 12.245C18.18 12.245 18.69 12.745 18.69 13.355C18.69 13.965 18.18 14.465 17.55 14.465Z" fill="white"></path></svg></em>
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Event Settings</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </a>

        <!-- Theme -->
        <div class="menu-item flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#3a1a54] text-[#b388ff]">
              <Palette class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]">Theme</span>
          </div>
          <!-- Toggle Pill -->
          <div class="flex items-center rounded-full bg-[#202220] p-0.5 text-[14px]">
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
        <a :href="bybetRedirectUrl" target="_blank" rel="noopener noreferrer" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <LayoutGrid class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Market Display</span>
          </div>
          <div class="flex items-center gap-1 text-[14px] text-[#7a807d]  transition-colors">
            <span>Default (Features Bets)</span>
            <ChevronRight class="h-3.5 w-3.5 text-[#555a57]" />
          </div>
        </a>
      </div>
    </div>

    <!-- Accordion 4: System Settings -->
    <div class="section-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full mb-2 items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('systemSettings')"
      >
        <span class="text-[16px] font-bold text-white">System Settings</span>
        <ChevronUp v-if="openSections.systemSettings" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.systemSettings" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- Language -->
        <NuxtLink to="/explore/account/language" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <Globe class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Language</span>
          </div>
          <div class="flex items-center gap-1 text-[14px] text-[#7a807d]  transition-colors">
            <span>{{ selectedLanguageLabel }}</span>
            <ChevronRight class="h-3.5 w-3.5 text-[#555a57]" />
          </div>
        </NuxtLink>

        <!-- Time Zone -->
        <NuxtLink to="/explore/account/timezone" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Clock class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Time Zone</span>
          </div>
          <div class="flex items-center gap-1 text-[14px] text-[#7a807d]  transition-colors">
            <span>{{ selectedTimeZone.offset }}</span>
            <ChevronRight class="h-3.5 w-3.5 text-[#555a57]" />
          </div>
        </NuxtLink>

        <!-- Mode -->
        <div class="menu-item flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#242625] text-white/90">
              <Moon class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]">Mode</span>
          </div>
          <!-- Segmented Toggle -->
          <div class="flex items-center rounded-full bg-[#202220] p-0.5 text-[14px]">
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
    <div class="section-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full mb-2 items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('help')"
      >
        <span class="text-[16px] font-bold text-white">Help</span>
        <ChevronUp v-if="openSections.help" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.help" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pt-4">
        <!-- 24/7 Services -->
        <NuxtLink to="/explore/egames/customer-service" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Headphones class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">24/7 Services</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Transaction Tutorial -->
        <!-- Transaction Tutorial -->
        <NuxtLink to="/tutorial/transactions/deposit" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <FileText class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Transaction Tutorial</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Tutorial -->
        <NuxtLink to="/tutorial/mock-betting" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#124d35] text-[#34d399]">
              <GraduationCap class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Tutorial</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Game Rules -->
        <NuxtLink to="/game-rules/sports-betting-rules" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#4d3c12] text-[#ffc83d]">
              <FileCheck class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Game Rules</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Responsible Gaming -->
        <NuxtLink to="/responsible-gaming" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#3a1a54] text-[#b388ff]">
              <ShieldCheck class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Responsible Gaming</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Terms of Use -->
        <NuxtLink to="/terms-of-use" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#124d45] text-[#34d399]">
              <FileText class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Terms of Use</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Privacy Policy -->
        <NuxtLink to="/privacy-policy" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#4d1618] text-[#ff5252]">
              <Lock class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Privacy Policy</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Affiliate -->
        <NuxtLink to="/affiliate" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Handshake class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Affiliate</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- Download APP -->
        <NuxtLink to="/download-app" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#4a2612] text-[#ff8042]">
              <Smartphone class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">Download APP</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>

        <!-- About Us -->
        <NuxtLink to="/about-us" class="menu-item flex items-center justify-between group">
          <div class="flex items-center gap-2.5">
            <div class="grid h-4 w-4 place-items-center rounded bg-[#183a54] text-[#4ea8de]">
              <Info class="h-4 w-4" />
            </div>
            <span class="text-[14px] text-[#d1d5db]  transition-colors">About Us</span>
          </div>
          <ChevronRight class="h-3.5 w-3.5 text-[#555a57]  transition-colors" />
        </NuxtLink>
      </div>
    </div>

    <!-- Section: Special Promotion -->
    <div class="section-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full mb-2 items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('specialPromotion')"
      >
        <span class="text-[13px] font-bold text-white">Special Promotion</span>
        <ChevronUp v-if="openSections.specialPromotion" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.specialPromotion" class="pt-3 text-[14px] text-[#8e9491] space-y-2">
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Your Jackpot, Your Reward')">
          Your Jackpot, Your Reward.
        </p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Latest Deals')">
          Latest Deals
        </p>
      </div>
    </div>

    <!-- Section: HELP List -->
    <div class="section-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full mb-2 items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('helpList')"
      >
        <span class="text-[13px] font-bold text-white uppercase tracking-wider">HELP</span>
        <ChevronUp v-if="openSections.helpList" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.helpList" class="pt-3 text-[14px] text-[#8e9491] space-y-2">
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('24/7 Services')">24/7 Services</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Game Rules')">Game Rules</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Responsible Gaming')">Responsible Gaming</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Terms of Use')">Terms of Use</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('Privacy Policy')">Privacy Policy</p>
        <p class="hover:text-white transition-colors cursor-pointer" @click="showDemoMessage('About Us')">About Us</p>
      </div>
    </div>

    <!-- Section: Responsibility & Reputation -->
    <div class="section-card rounded-lg bg-[#141414]  px-2 py-3 mb-2 shadow-sm">
      <button
        type="button"
        class="flex w-full mb-2 items-center justify-between text-left cursor-pointer select-none"
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
        class="flex w-full mb-2 items-center justify-between text-left cursor-pointer select-none"
        @click="toggleSection('aboutUs')"
      >
        <span class="text-[13px] font-bold text-white">About Us</span>
        <ChevronUp v-if="openSections.aboutUs" class="h-4 w-4 text-[#7a807d]" />
        <ChevronDown v-else class="h-4 w-4 text-[#7a807d]" />
      </button>

      <div v-show="openSections.aboutUs" class="pt-4 text-[14px] text-[#8e9491] leading-relaxed space-y-3">
        <!-- Logo -->
        <NuxtLink to="/" class="inline-block mb-2">
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
          <span class="text-[14px] font-black text-red-600 border border-red-600 rounded-full h-5 w-5 flex items-center justify-center">21</span>
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
}
</style>
