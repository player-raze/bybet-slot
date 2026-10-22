<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'

const router = useRouter()
const { showDemoMessage } = useDemoInteraction()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

useSeoMeta({
  title: 'Download ByBet Mobile App — Android APK & iOS | Official ByBet',
  description: 'Download the official ByBet mobile application for Android and iOS. Ultra-fast live sports odds, casino slots, and instant gaming.',
  ogTitle: 'Download ByBet Mobile App — Android APK & iOS | Official ByBet',
  ogDescription: 'Experience mobile gaming at its finest. Download ByBet for Google Play and App Store.',
})

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/account/me')
  }
}

const handleGooglePlay = (): void => {
  showDemoMessage('Downloading ByBet Official Android App from Google Play...')
  if (import.meta.client ) {
    window.open('https://play.google.com/store/apps/details?id=com.bygame.sports&hl=en')
  }
}

const handleAppStore = (): void => {
  showDemoMessage('Redirecting to ByBet on the Apple App Store...')
  if (import.meta.client ) {
    window.open('https://apps.apple.com/ph/app/bygame/id6748813909')
  }
}
</script>

<template>
  <div class="download-app-page max-w-4xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <!-- Top Sticky Header Bar with black background wrapper -->
    <div class="sticky top-[var(--header-height)] z-20 bg-[#000000] -mx-1 px-1 pt-0.5 pb-1 mb-2">
      <div class="header-card flex items-center gap-2 rounded-lg bg-[#141414] px-3 py-2 text-white shadow-sm border border-white/5">
        <button
          type="button"
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#1f1f1f] text-[#1fa779] hover:bg-[#252525] transition-colors cursor-pointer shrink-0"
          aria-label="Go back"
          @click="handleBack"
        >
          <ChevronLeft class="h-3.5 w-3.5" />
        </button>

        <h1 class="text-[15px] font-bold text-white tracking-tight leading-tight">
          Download APP
        </h1>
      </div>
    </div>

    <!-- Center Content Card with Soccer Player Graphic and Floating Buttons -->
    <div class="app-card rounded-2xl bg-[#141414] border border-white/5 p-4 sm:p-6 lg:p-10 mb-6 flex flex-col items-center justify-center relative overflow-hidden shadow-lg">
      <div class="relative w-full max-w-[560px] mx-auto flex items-center justify-center min-h-[300px] sm:min-h-[460px]">
        <!-- Center Image matching 2nd photo -->
        <img
          src="/images/app/league-player.webp"
          alt="ByBet App League"
          class="w-full h-auto max-h-[480px] object-contain select-none pointer-events-none drop-shadow-2xl"
          loading="eager"
        />

        <!-- Floating Buttons in the Middle -->
        <div class="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-4 z-10 pointer-events-none">
          <!-- Download in Google Play -->
          <button
            type="button"
            class="pointer-events-auto flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#036242] hover:bg-[#047b53] text-white font-bold text-xs sm:text-sm shadow-[0_8px_30px_rgb(0,0,0,0.85)] border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            @click="handleGooglePlay"
          >
            <svg class="w-5 h-5 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3.609 1.814L13.792 12 3.61 22.186A2.298 2.298 0 0 1 3 20.627V3.373c0-.62.23-1.19.609-1.559z" fill="#00D2FF"/>
              <path d="M17.37 8.423l-3.578 3.577 3.578 3.577 4.08-2.317a1.442 1.442 0 0 0 0-2.52l-4.08-2.317z" fill="#FFCE00"/>
              <path d="M3.609 22.186l10.183-10.186 3.578 3.577-11.458 6.51a2.127 2.127 0 0 1-2.303.099z" fill="#FF3A44"/>
              <path d="M3.609 1.814c.73-.418 1.62-.387 2.303.099l11.458 6.51-3.578 3.577L3.609 1.814z" fill="#00E676"/>
            </svg>
            <span>Download in Google Play</span>
          </button>

          <!-- Download in App Store -->
          <button
            type="button"
            class="pointer-events-auto flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1e201f]/95 hover:bg-[#282d2a] text-white font-bold text-xs sm:text-sm shadow-[0_8px_30px_rgb(0,0,0,0.85)] border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            @click="handleAppStore"
          >
            <svg class="w-5 h-5 shrink-0 fill-current" width="20" height="20" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.66 1.38-.56.65-1.06 1.7-0.92 2.73 1.05.08 2.05-.49 2.66-1.24z"/>
            </svg>
            <span>Download in App Store</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Compliance Section matching 2nd Photo -->
    <div class="flex flex-col items-center justify-center text-center space-y-3 pt-2">
      <!-- Certifications / Badges -->
      <div class="flex items-center justify-center gap-3">
        <div class="h-10 w-10 rounded-full bg-white flex items-center justify-center p-1 shadow">
          <img
            src="/responsible-gaming/pagcor.webp"
            alt="PAGCOR Regulated"
            class="h-7 w-7 object-contain"
          />
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
    </div>
  </div>
</template>

<style scoped>
.download-app-page {
  opacity: 1 !important;
  transform: none !important;
}

.app-card {
  word-break: break-word;
}
</style>
