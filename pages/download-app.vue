<script setup lang="ts">
import {
  Smartphone,
  Download,
  Apple,
  QrCode,
  ShieldCheck,
  Zap,
  Bell,
  Fingerprint,
  Tv,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from 'lucide-vue-next'

const router = useRouter()
const { showDemoMessage } = useDemoInteraction()
const activeTab = ref<'android' | 'ios'>('android')

useSeoMeta({
  title: 'Download ByBet Mobile App — Android APK & iOS | Official ByBet',
  description: 'Download the official ByBet mobile application for Android and iOS. Ultra-fast live sports odds, casino slots, biometric login, and instant GCash cashouts.',
  ogTitle: 'Download ByBet Mobile App — Android APK & iOS | Official ByBet',
  ogDescription: 'Experience mobile gaming at its finest. Download ByBet APK for Android or install our iOS Progressive Web App.',
})

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/account/me')
  }
}

const handleDownloadAndroid = (): void => {
  showDemoMessage('Downloading ByBet Official APK (v3.2.4)...')
}

const handleInstallIos = (): void => {
  showDemoMessage('iOS Installation Guide: Follow the 3 steps below in Safari')
}

const appFeatures = [
  {
    icon: Zap,
    title: 'Lightning Speed Odds',
    desc: 'Up to 3x faster live odds refreshes and instant one-tap bet placement without lag.',
  },
  {
    icon: Tv,
    title: 'HD Live Sports Streaming',
    desc: 'Watch Premier League, NBA, and La Liga matches live in full HD on your phone.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Login',
    desc: 'Log in securely in under one second using your Face ID or Fingerprint scanner.',
  },
  {
    icon: Bell,
    title: 'Instant Push Alerts',
    desc: 'Get notified immediately when your team scores or when withdrawal funds clear.',
  },
]
</script>

<template>
  <div class="download-app-page max-w-4xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <!-- Reusable Top SEO Header Bar -->
    <SeoHeader
      title="Download ByBet Mobile App"
      description="Download the official ByBet Mobile App for iOS and Android. Enjoy sports betting, live dealer casino, and slots anytime, anywhere."
      back-to="/explore/account/me"
      custom-class="mb-4"
    >
      <template #title>
        <div>
          <span class="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1.5">
            <Smartphone class="h-4 w-4 text-[#32d49a]" />
            ByBet Mobile Application
          </span>
          <p class="text-[11px] text-[#9eaea5] hidden sm:block font-normal">
            Seamless gaming on Android and iOS smartphones
          </p>
        </div>
      </template>
      <template #right>
        <div class="flex items-center gap-2">
          <span class="text-base select-none">🇵🇭</span>
          <span class="text-xs font-mono text-[#32d49a] bg-[#036242]/40 px-2.5 py-1 rounded-full font-bold">
            v3.2.4 Official
          </span>
        </div>
      </template>
    </SeoHeader>

    <!-- Hero Card -->
    <div class="rounded-2xl bg-gradient-to-br from-[#036242]/40 via-[#141414] to-[#141414] p-6 sm:p-8 mb-6 border border-[#32d49a]/20 shadow-2xl relative overflow-hidden">
      <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="max-w-lg">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#036242] text-[#32d49a] text-xs font-bold mb-3 shadow-sm">
            <Sparkles class="h-3.5 w-3.5" />
            Exclusive App Experience
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Bet Faster. Win Bigger. Anywhere, Anytime.
          </h2>
          <p class="text-xs sm:text-sm text-[#d1d5db] mt-2 leading-relaxed">
            Download the official ByBet mobile app for ultra-low latency live odds, over 3,000+ slots, live casino streaming, and instant GCash/Maya transactions.
          </p>

          <!-- Download Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 mt-6">
            <button
              type="button"
              class="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#32d49a] text-black font-extrabold text-xs sm:text-sm hover:bg-[#28b884] transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              @click="handleDownloadAndroid"
            >
              <Download class="h-4 w-4" />
              <span>Download Android APK</span>
            </button>

            <button
              type="button"
              class="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#1C1C1C] text-white font-bold text-xs sm:text-sm hover:bg-[#252525] border border-white/10 transition-all shadow-md cursor-pointer"
              @click="activeTab = 'ios'"
            >
              <Apple class="h-4 w-4" />
              <span>iOS Quick Install</span>
            </button>
          </div>
        </div>

        <!-- QR Code Box -->
        <div class="rounded-2xl bg-[#1a1a1a] p-4 border border-white/10 flex flex-col items-center text-center shrink-0 shadow-lg">
          <div class="h-32 w-32 rounded-xl bg-white p-2 flex items-center justify-center mb-2 shadow-inner">
            <!-- Stylized QR Code Graphic -->
            <div class="h-full w-full bg-slate-900 rounded p-1 flex flex-col justify-between">
              <div class="flex justify-between">
                <div class="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
                  <div class="h-4 w-4 bg-slate-900 rounded-xs" />
                </div>
                <div class="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
                  <div class="h-4 w-4 bg-slate-900 rounded-xs" />
                </div>
              </div>
              <div class="text-[9px] font-mono text-[#32d49a] font-bold tracking-tighter">BYBET APP</div>
              <div class="flex justify-between">
                <div class="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
                  <div class="h-4 w-4 bg-slate-900 rounded-xs" />
                </div>
                <div class="h-8 w-8 border border-white flex items-center justify-center text-white text-[8px] font-bold">
                  SCAN
                </div>
              </div>
            </div>
          </div>
          <span class="text-xs font-bold text-white">Scan with Camera</span>
          <span class="text-[10px] text-[#7a807d]">Direct Mobile Download</span>
        </div>
      </div>
    </div>

    <!-- App Features Grid -->
    <div class="mb-8">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">
        Engineered for Mobile Performance
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div
          v-for="feat in appFeatures"
          :key="feat.title"
          class="rounded-xl bg-[#141414] p-4 border border-white/5 flex flex-col justify-between"
        >
          <div>
            <div class="h-9 w-9 rounded-lg bg-[#036242]/30 text-[#32d49a] flex items-center justify-center mb-2.5">
              <component :is="feat.icon" class="h-4 w-4" />
            </div>
            <h4 class="text-xs font-bold text-white mb-1">{{ feat.title }}</h4>
            <p class="text-[11px] text-[#9eaea5] leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Installation Guides with Tabs -->
    <div class="rounded-xl bg-[#141414] p-5 border border-white/5 mb-8">
      <div class="flex items-center gap-2 pb-4 mb-4 border-b border-white/5">
        <button
          type="button"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer"
          :class="activeTab === 'android'
            ? 'bg-[#036242] text-white shadow-sm'
            : 'bg-[#1C1C1C] text-[#9eaea5] hover:text-white'"
          @click="activeTab = 'android'"
        >
          <Download class="h-3.5 w-3.5" />
          <span>Android Installation Guide</span>
        </button>

        <button
          type="button"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer"
          :class="activeTab === 'ios'
            ? 'bg-[#036242] text-white shadow-sm'
            : 'bg-[#1C1C1C] text-[#9eaea5] hover:text-white'"
          @click="activeTab = 'ios'"
        >
          <Apple class="h-3.5 w-3.5" />
          <span>iOS (iPhone / iPad) Guide</span>
        </button>
      </div>

      <!-- Android Content -->
      <div v-if="activeTab === 'android'" class="space-y-4">
        <div class="flex items-start gap-3">
          <div class="h-7 w-7 rounded-full bg-[#036242] text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
          <div>
            <strong class="text-xs font-bold text-white block mb-0.5">Download the APK File</strong>
            <p class="text-xs text-[#9eaea5]">Click "Download Android APK" above to save the latest `bybet-latest.apk` (approx. 28 MB) to your device.</p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="h-7 w-7 rounded-full bg-[#036242] text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
          <div>
            <strong class="text-xs font-bold text-white block mb-0.5">Allow Install from Unknown Sources</strong>
            <p class="text-xs text-[#9eaea5]">When prompted by Android Security, tap Settings and toggle "Allow from this source" or "Install unknown apps" for your browser.</p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="h-7 w-7 rounded-full bg-[#036242] text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
          <div>
            <strong class="text-xs font-bold text-white block mb-0.5">Open & Launch ByBet</strong>
            <p class="text-xs text-[#9eaea5]">Tap the completed download notification to complete installation. Log in to claim exclusive mobile bonus rewards!</p>
          </div>
        </div>
      </div>

      <!-- iOS Content -->
      <div v-else class="space-y-4">
        <div class="flex items-start gap-3">
          <div class="h-7 w-7 rounded-full bg-[#036242] text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
          <div>
            <strong class="text-xs font-bold text-white block mb-0.5">Open ByBet in Safari</strong>
            <p class="text-xs text-[#9eaea5]">Ensure you are viewing ByBet on your iPhone or iPad using the default Apple Safari browser.</p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="h-7 w-7 rounded-full bg-[#036242] text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
          <div>
            <strong class="text-xs font-bold text-white block mb-0.5">Tap the Share Icon</strong>
            <p class="text-xs text-[#9eaea5]">Tap the Share button (square icon with an upward arrow) located at the bottom center of the Safari toolbar.</p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="h-7 w-7 rounded-full bg-[#036242] text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
          <div>
            <strong class="text-xs font-bold text-white block mb-0.5">Select "Add to Home Screen"</strong>
            <p class="text-xs text-[#9eaea5]">Scroll down the share sheet and tap "Add to Home Screen". The ByBet icon will now launch as a full-screen, ultra-fast web application!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Security & Compatibility -->
    <div class="rounded-xl bg-[#1a1a1a] p-4 border border-white/5 flex items-start gap-3 text-xs text-[#9eaea5]">
      <ShieldCheck class="h-5 w-5 text-[#32d49a] shrink-0 mt-0.5" />
      <div>
        <strong class="text-white block mb-0.5">Certified Virus-Free & Secure</strong>
        ByBet application packages are digitally signed and verified with 256-bit SSL encryption. Compatible with Android 7.0 (Nougat) or newer, and iOS 14.0 or newer.
      </div>
    </div>
  </div>
</template>

