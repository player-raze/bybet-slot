<script setup lang="ts">
import {
  ShieldAlert,
  ShieldCheck,
  Phone,
  Clock,
  HeartHandshake,
  AlertTriangle,
  UserX,
  FileCheck2,
  Lock,
} from 'lucide-vue-next'
import LegalPageShell from '~/components/legal/LegalPageShell.vue'

useSeoMeta({
  title: 'Responsible Gaming & Player Protection | ByBet Philippines',
  description: 'ByBet is committed to safe, responsible entertainment. Learn about PAGCOR self-exclusion, deposit limits, support hotlines, and underage gambling prevention.',
  ogTitle: 'Responsible Gaming & Player Protection | ByBet Philippines',
  ogDescription: 'Play responsibly with ByBet. Access self-exclusion tools, player limits, and 24/7 problem gambling support resources.',
})

const sections = [
  { id: 'policy', title: 'Our Commitment to Safety' },
  { id: 'age-limit', title: 'Strict 21+ Age Restriction' },
  { id: 'self-assessment', title: 'Self-Assessment: Warning Signs' },
  { id: 'player-tools', title: 'Player Protection Tools & Limits' },
  { id: 'self-exclusion', title: 'PAGCOR Self-Exclusion (NDRP)' },
  { id: 'hotlines', title: 'Support Hotlines & Helplines' },
  { id: 'parental-controls', title: 'Protecting Minors' },
]

const { showDemoMessage } = useDemoInteraction()
</script>

<template>
  <LegalPageShell
    title="Responsible Gaming"
    subtitle="Gaming is a form of leisure and entertainment, not a way to generate income or escape financial distress."
    last-updated="October 2026"
    compliance-badge="PAGCOR Regulated • 21+ Only"
    :sections="sections"
  >
    <!-- Commitment -->
    <section id="policy" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-3">
      <div class="flex items-center gap-2">
        <ShieldCheck class="h-5 w-5 text-[#32d49a]" />
        <h2 class="text-base font-bold text-white">Our Responsible Gaming Commitment</h2>
      </div>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        ByBet and Global Play Hub Innovations Corp. are dedicated to fostering a safe, transparent, and enjoyable gaming environment. While the majority of players enjoy casino games and sports betting as safe recreation, gambling carries inherent risks. We empower our members with comprehensive controls, clear spending limits, and seamless access to professional counseling support.
      </p>
    </section>

    <!-- 21+ Age Limit -->
    <section id="age-limit" class="rounded-xl bg-[#1a1414] p-5 border border-red-500/30 space-y-3">
      <div class="flex items-center gap-2">
        <div class="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white font-extrabold text-xs">
          21+
        </div>
        <h2 class="text-base font-bold text-red-200">Strict Legal Age Requirement (21+)</h2>
      </div>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Philippine law and PAGCOR licensing regulations strictly forbid anyone under the age of 21 from participating in real-money gaming activities. We deploy rigorous automated and manual age verification procedures on every new account. Any account discovered to have been created by a minor will be immediately terminated and all funds withheld.
      </p>
    </section>

    <!-- Self Assessment -->
    <section id="self-assessment" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-3">
      <div class="flex items-center gap-2">
        <AlertTriangle class="h-5 w-5 text-amber-400" />
        <h2 class="text-base font-bold text-white">Warning Signs of Problem Gambling</h2>
      </div>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Ask yourself the following questions honestly to determine if your gaming habits may be becoming harmful:
      </p>
      <div class="space-y-2 text-xs text-[#9eaea5]">
        <div class="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          • Do you gamble to escape anxiety, stress, depression, or loneliness?
        </div>
        <div class="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          • Do you gamble with money needed for essential expenses (rent, bills, groceries)?
        </div>
        <div class="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          • After losing, do you feel an urgent impulse to immediately chase back your losses?
        </div>
        <div class="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          • Have you ever lied to family or friends about how much time or money you spend gaming?
        </div>
        <div class="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          • Have you borrowed money or sold personal possessions to finance your betting?
        </div>
      </div>
      <p class="text-xs text-amber-300 font-medium">
        If you answered "Yes" to two or more of these questions, we strongly advise using our self-exclusion tools and seeking guidance from the support organizations below.
      </p>
    </section>

    <!-- Player Protection Tools -->
    <section id="player-tools" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-3">
      <div class="flex items-center gap-2">
        <Lock class="h-5 w-5 text-[#32d49a]" />
        <h2 class="text-base font-bold text-white">Player Protection Tools</h2>
      </div>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        ByBet provides automated safety tools to help you manage your gaming habits:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div class="p-3.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          <strong class="text-[#32d49a] block mb-1">Deposit Limits</strong>
          Cap your daily, weekly, or monthly deposit amount. Decreasing limits takes effect immediately.
        </div>
        <div class="p-3.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          <strong class="text-amber-400 block mb-1">Session Reminders</strong>
          Pop-up alerts notifying you how long you have been actively playing in your current session.
        </div>
        <div class="p-3.5 rounded-lg bg-[#1a1a1a] border border-white/5">
          <strong class="text-blue-400 block mb-1">Cooling-Off Period</strong>
          Take a temporary break from gaming for 24 hours, 7 days, or 30 days with one simple click.
        </div>
      </div>
    </section>

    <!-- Self Exclusion -->
    <section id="self-exclusion" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-3">
      <div class="flex items-center gap-2">
        <UserX class="h-5 w-5 text-[#32d49a]" />
        <h2 class="text-base font-bold text-white">PAGCOR Self-Exclusion Program (NDRP)</h2>
      </div>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        PAGCOR manages the <strong>National Database for Restricted Persons (NDRP)</strong>, allowing individuals to exclude themselves or be excluded by close family members from all licensed online gaming and land-based casinos throughout the Philippines.
      </p>
      <div class="p-4 rounded-lg bg-[#1a1a1a] border border-white/5 text-xs text-[#9eaea5] space-y-2">
        <div class="text-white font-bold">Exclusion Periods Available:</div>
        <div>• 6 Months • 1 Year • 5 Years (Irrevocable during active term)</div>
        <p class="text-[#d1d5db]">
          To submit a self-exclusion application, visit PAGCOR’s official portal or contact ByBet Customer Support to assist with registration.
        </p>
      </div>
    </section>

    <!-- Support Hotlines -->
    <section id="hotlines" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-3">
      <div class="flex items-center gap-2">
        <HeartHandshake class="h-5 w-5 text-[#32d49a]" />
        <h2 class="text-base font-bold text-white">Support Hotlines & Professional Counseling</h2>
      </div>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Confidential, free assistance is available 24/7 through accredited organizations:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-4 rounded-lg bg-[#1a1a1a] border border-white/5 flex flex-col justify-between">
          <div>
            <strong class="text-white block text-sm mb-1">Bridges of Hope Drug & Alcohol Rehab</strong>
            <p class="text-[#9eaea5] mb-2">Accredited facility for behavioral addictions and counseling.</p>
          </div>
          <div class="font-mono text-[#32d49a] text-[11px] space-y-0.5">
            <div>Tel: (02) 8655-6677</div>
            <div>Mobile: 0917-509-8826</div>
          </div>
        </div>

        <div class="p-4 rounded-lg bg-[#1a1a1a] border border-white/5 flex flex-col justify-between">
          <div>
            <strong class="text-white block text-sm mb-1">GA Pilipinas (Gamblers Anonymous)</strong>
            <p class="text-[#9eaea5] mb-2">Fellowship of recovering individuals sharing support.</p>
          </div>
          <div class="font-mono text-[#32d49a] text-[11px] space-y-0.5">
            <div>Tel: (02) 8727-2856</div>
            <div>Web: gapilipinas.org</div>
          </div>
        </div>

        <div class="p-4 rounded-lg bg-[#1a1a1a] border border-white/5 flex flex-col justify-between">
          <div>
            <strong class="text-white block text-sm mb-1">DOH Mental Health Crisis Hotline</strong>
            <p class="text-[#9eaea5] mb-2">Toll-free national crisis helpline for urgent emotional support.</p>
          </div>
          <div class="font-mono text-[#32d49a] text-[11px] space-y-0.5">
            <div>Toll-free Hotline: 1553</div>
            <div>Globe: 0917-899-8727</div>
          </div>
        </div>

        <div class="p-4 rounded-lg bg-[#1a1a1a] border border-white/5 flex flex-col justify-between">
          <div>
            <strong class="text-white block text-sm mb-1">PAGCOR Regulatory Monitoring</strong>
            <p class="text-[#9eaea5] mb-2">Player safety and responsible gaming compliance division.</p>
          </div>
          <div class="font-mono text-[#32d49a] text-[11px] space-y-0.5">
            <div>Email: compliance@pagcor.ph</div>
            <div>Web: pagcor.ph/regulatory</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parental Controls -->
    <section id="parental-controls" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <ShieldAlert class="h-5 w-5 text-amber-400" />
        Protecting Minors & Parental Filtering Tools
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        If you share internet-connected computers or mobile devices with children or minors under 21, we strongly recommend installing certified parental filtering software such as Net Nanny, CyberPatrol, or Qustodio to block access to online gaming portals. Always keep your ByBet login credentials and payment cards out of reach.
      </p>
    </section>
  </LegalPageShell>
</template>

