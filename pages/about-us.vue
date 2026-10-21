<script setup lang="ts">
import {
  ShieldCheck,
  Award,
  Sparkles,
  Lock,
  Headphones,
  Gamepad2,
  Tv,
  Users,
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
} from 'lucide-vue-next'

const router = useRouter()
const { showDemoMessage } = useDemoInteraction()

useSeoMeta({
  title: 'About ByBet — Bigger Games. Brighter Wins. | Official Company Overview',
  description: 'Learn about ByBet, operated by Global Play Hub Innovations Corp. and accredited by PAGCOR. Discover our mission, audited fair gaming, and 24/7 service.',
  ogTitle: 'About ByBet — Bigger Games. Brighter Wins. | Official Company Overview',
  ogDescription: 'The premier online casino and sports betting platform in the Philippines. Learn about ByBet’s mission, licensing, and security infrastructure.',
})

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/account/me')
  }
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'PAGCOR Licensed & Regulated',
    desc: 'Operated under strict regulatory oversight by the Philippine Amusement and Gaming Corporation, guaranteeing player protection and legal compliance.',
  },
  {
    icon: Award,
    title: 'Certified RNG & Fair Play',
    desc: 'All virtual slot and table games are tested and certified by independent laboratories like Technical Systems Testing (TST) to ensure true randomness.',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    desc: 'Protected by 256-bit TLS encryption, ISO-certified server infrastructure, and multi-factor authentication protocols to safeguard player assets.',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    desc: 'Our Filipino customer care team is available 24 hours a day, 7 days a week, providing immediate assistance via live chat and social channels.',
  },
]

const stats = [
  { value: '3,000+', label: 'Certified Games' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '< 3 mins', label: 'Average Payout' },
  { value: '24/7', label: 'Live Support' },
]
</script>

<template>
  <div class="about-us-page max-w-4xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <!-- Reusable Top SEO Header Bar -->
    <SeoHeader
      title="About ByBet"
      description="Learn about ByBet, operated by Global Play Hub Innovations Corp. and accredited by PAGCOR. Discover our mission, audited fair gaming, and 24/7 service."
      back-to="/explore/account/me"
      custom-class="mb-4"
    >
      <template #title>
        <div>
          <span class="text-sm sm:text-base font-bold text-white tracking-tight">About ByBet</span>
          <p class="text-[11px] text-[#9eaea5] hidden sm:block font-normal">
            Our company, licensing, technology, and values
          </p>
        </div>
      </template>
      <template #right>
        <div class="flex items-center gap-2">
          <span class="text-base select-none">🇵🇭</span>
          <NuxtLink
            to="/explore/sports/popular"
            class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#036242] text-[#32d49a] hover:bg-[#047b53] hover:text-white transition-colors"
          >
            Explore Platform
          </NuxtLink>
        </div>
      </template>
    </SeoHeader>

    <!-- Brand Hero -->
    <div class="rounded-2xl bg-gradient-to-br from-[#036242]/40 via-[#141414] to-[#141414] p-6 sm:p-8 mb-6 border border-[#32d49a]/20 shadow-2xl">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#036242] text-[#32d49a] text-xs font-bold mb-3">
        <Sparkles class="h-3.5 w-3.5" />
        Bigger Games. Brighter Wins.
      </div>
      <h2 class="text-2xl sm:text-3xl font-black text-white leading-tight max-w-xl">
        The Philippines' Next-Generation Sports & Gaming Destination
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] mt-2 max-w-xl leading-relaxed">
        ByBet was founded with a singular mission: to provide Filipino gaming enthusiasts with a modern, ultra-reliable, and transparent entertainment platform that combines world-class sports wagering with certified casino games.
      </p>

      <!-- Stats Strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
        <div v-for="stat in stats" :key="stat.label" class="text-center sm:text-left">
          <div class="text-xl sm:text-2xl font-mono font-extrabold text-[#32d49a]">{{ stat.value }}</div>
          <div class="text-[11px] text-[#9eaea5] font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Company Story & Licensing -->
    <div class="rounded-xl bg-[#141414] p-5 border border-white/5 mb-6 space-y-3">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
        <ShieldCheck class="h-4 w-4 text-[#32d49a]" />
        Corporate Background & Accreditation
      </h3>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        ByBet is proudly owned and operated by <strong>Global Play Hub Innovations Corp.</strong>, a recognized technology and gaming enterprise incorporated in the Republic of the Philippines. Operating under strict license and accreditation issued by the <strong>Philippine Amusement and Gaming Corporation (PAGCOR)</strong>, ByBet adheres to international standards of fairness, player data protection, and anti-money laundering compliance.
      </p>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Our core architecture is built upon high-performance cloud infrastructure capable of processing thousands of concurrent transactions and video streams per second, ensuring uninterrupted gameplay during marquee sporting events.
      </p>
    </div>

    <!-- Core Pillars -->
    <div class="mb-8">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">
        The Four Pillars of ByBet
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          v-for="p in pillars"
          :key="p.title"
          class="rounded-xl bg-[#141414] p-4 border border-white/5 flex gap-3.5 items-start"
        >
          <div class="h-9 w-9 rounded-lg bg-[#036242]/30 text-[#32d49a] flex items-center justify-center shrink-0">
            <component :is="p.icon" class="h-4 w-4" />
          </div>
          <div>
            <h4 class="text-xs font-bold text-white mb-1">{{ p.title }}</h4>
            <p class="text-[11px] text-[#9eaea5] leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Gaming Portfolio Highlights -->
    <div class="rounded-xl bg-[#141414] p-5 border border-white/5 mb-8">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">
        Comprehensive Entertainment Portfolio
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div class="p-3.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          <Gamepad2 class="h-5 w-5 text-[#32d49a] mb-2" />
          <strong class="text-white block mb-1">Slots & Jackpots</strong>
          <p class="text-[#9eaea5] leading-relaxed">
            Over 3,000 verified slots from global giants including JILI, PG Soft, Pragmatic Play, Fa Chai, and CQ9 with progressive jackpots.
          </p>
        </div>

        <div class="p-3.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          <Tv class="h-5 w-5 text-amber-400 mb-2" />
          <strong class="text-white block mb-1">Live Dealer Casino</strong>
          <p class="text-[#9eaea5] leading-relaxed">
            Immersive 4K video feeds with professional live dealers in Baccarat, Roulette, Sic Bo, Blackjack, and Game Shows.
          </p>
        </div>

        <div class="p-3.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          <Users class="h-5 w-5 text-blue-400 mb-2" />
          <strong class="text-white block mb-1">Sportsbook & Live Plaza</strong>
          <p class="text-[#9eaea5] leading-relaxed">
            Market-leading odds on football, basketball, tennis, esports, and boxing with interactive community match chat.
          </p>
        </div>
      </div>
    </div>

    <!-- Contact & Customer Service CTA -->
    <div class="rounded-2xl bg-[#1C1C1C] p-5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h4 class="text-sm font-bold text-white mb-0.5">Need assistance or have feedback?</h4>
        <p class="text-xs text-[#9eaea5]">Our customer support team is available around the clock to help you.</p>
      </div>

      <NuxtLink
        to="/explore/egames/customer-service"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#32d49a] text-black font-bold text-xs hover:bg-[#28b884] transition-colors shrink-0 self-start sm:self-auto"
      >
        <span>24/7 Customer Service</span>
        <ArrowRight class="h-3.5 w-3.5" />
      </NuxtLink>
    </div>
  </div>
</template>

