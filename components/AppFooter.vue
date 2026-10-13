<script setup lang="ts">
import { Facebook, Instagram, Music2, Twitter } from 'lucide-vue-next'

interface ResponsibleGamingResource {
  name: string
  image: string
  width: number
  height: number
  presentation: 'circle' | 'compact' | 'pill' | 'transparent'
}

interface FooterLink {
  label: string
  to: string
}

interface FooterGroup {
  title: string
  links: FooterLink[]
}

const footerGroups: FooterGroup[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Slots', to: '/explore/egames/slots' },
      { label: 'Live Casino', to: '/explore/entertainment/live-casino' },
      { label: 'Sports', to: '/explore/sports/popular' },
      { label: 'Promotions', to: '/explore/bonuses' },
      { label: 'VIP', to: '/explore/account/vip' },
    ],
  },
  {
    title: 'Help & Support',
    links: [
      { label: 'Contact Us', to: '/explore/help/contact-us' },
      { label: 'FAQ', to: '/#faq-title' },
      { label: 'Responsible Gaming', to: '/explore/help/responsible-gaming' },
      { label: 'Terms of Service', to: '/explore/legal/terms-of-service' },
      { label: 'Privacy Policy', to: '/explore/legal/privacy-policy' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'General Terms', to: '/explore/legal/general-terms' },
      { label: 'Bonus Terms', to: '/explore/legal/bonus-terms' },
      { label: 'Betting Rules', to: '/explore/legal/betting-rules' },
      { label: 'Privacy Policy', to: '/explore/legal/privacy-policy' },
      { label: 'Cookie Policy', to: '/explore/legal/cookie-policy' },
    ],
  },
]

const responsibleGamingResources: ResponsibleGamingResource[] = [
  { name: 'Bridges of Hope', image: '/responsible-gaming/bridges-of-hope.png', width: 130, height: 64, presentation: 'pill' },
  { name: 'GA Pilipinas', image: '/responsible-gaming/ga-pilipinas.png', width: 130, height: 66, presentation: 'pill' },
  { name: '21 and above', image: '/responsible-gaming/age-restriction.png', width: 88, height: 32, presentation: 'compact' },
  { name: 'Responsible gaming support hotline', image: '/responsible-gaming/support-hotline.png', width: 130, height: 72, presentation: 'pill' },
  { name: 'PAGCOR', image: '/responsible-gaming/pagcor.png', width: 175, height: 175, presentation: 'circle' },
  { name: 'Milestone', image: '/responsible-gaming/milestone.png', width: 130, height: 27, presentation: 'transparent' },
  { name: 'DPO/DPS', image: '/responsible-gaming/dpo-dps.png', width: 61, height: 112, presentation: 'transparent' },
  { name: 'Technical Systems Testing', image: '/responsible-gaming/technical-systems-testing.png', width: 88, height: 43, presentation: 'transparent' },
  { name: 'GamCare', image: '/responsible-gaming/gamcare.png', width: 96, height: 99, presentation: 'transparent' },
  { name: 'Be Gamble Aware', image: '/responsible-gaming/be-gamble-aware.png', width: 88, height: 64, presentation: 'transparent' },
]

const responsibleGamingResourceGroups = [
  responsibleGamingResources.slice(0, 6),
  responsibleGamingResources.slice(6),
]

const { translate } = useSiteLocale()
</script>

<template>
  <footer id="support" class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <NuxtLink to="/">ByBet</NuxtLink>
        <strong>{{ translate('Bigger Games. Brighter Wins.') }}</strong>
        <p>{{ translate('ByBet is your destination for premium online slots, with top providers, exciting jackpots and rewards made for every player.') }}</p>
      </div>

      <nav v-for="group in footerGroups" :key="group.title" :aria-label="translate(group.title)">
        <h2>{{ translate(group.title) }}</h2>
        <NuxtLink
          v-for="link in group.links"
          :key="`${group.title}-${link.label}`"
          :to="link.to"
        >
          {{ translate(link.label) }}
        </NuxtLink>
      </nav>

      <div class="footer-social">
        <h2>{{ translate('Follow Us') }}</h2>
        <div>
          <a
            href="https://www.facebook.com/bybetph/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ByBet on Facebook"
          >
            <Facebook :size="11" fill="currentColor" />
          </a>
          <a
            href="https://www.facebook.com/bybetph/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ByBet on TikTok"
          >
            <Music2 :size="11" />
          </a>
          <a
            href="https://www.instagram.com/bybetph/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ByBet on Instagram"
          >
            <Instagram :size="11" />
          </a>
          <a
            href="https://www.instagram.com/bybetph/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ByBet on Twitter"
          >
            <Twitter :size="11" fill="currentColor" />
          </a>
        </div>
        <strong>{{ translate('Play responsibly. Set your limits.') }}</strong>
        <p>© {{ new Date().getFullYear() }} ByBet. {{ translate('All rights reserved.') }}</p>
      </div>

      <section class="responsible-gaming" :aria-label="translate('Responsible Gaming')">
        <h2>{{ translate('Responsible Gaming') }}</h2>
        <div class="responsible-gaming-row">
          <ul
            v-for="(resourceGroup, groupIndex) in responsibleGamingResourceGroups"
            :key="groupIndex"
            :class="{ 'responsible-gaming-list--right': groupIndex === 1 }"
          >
            <li
              v-for="resource in resourceGroup"
              :key="resource.name"
              :class="`responsible-gaming-tile--${resource.presentation}`"
            >
              <img
                :src="resource.image"
                :alt="resource.name"
                :width="resource.width"
                :height="resource.height"
                loading="lazy"
                decoding="async"
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 0.55rem;
  border-top: 1px solid rgba(50, 212, 154, 0.14);
  color: #8fa198;
  background: transparent;
}

.footer-content {
  display: grid;
  margin-left: var(--sidebar-width);
  padding: 0.8rem 0.62rem 0.78rem var(--content-gutter);
  grid-template-columns: 188fr 76fr 88fr 117fr 116fr;
  gap: 0;
  transition: margin-left 180ms ease;
}

.footer-brand {
  max-width: 7.6rem;
}

.footer-brand > a {
  display: block;
  margin-bottom: 0.4rem;
  color: white;
  font-size: 1.12rem;
  font-style: italic;
  font-weight: 850;
  letter-spacing: -0.06em;
}

.footer h2,
.footer-brand strong,
.footer-social > strong {
  display: block;
  white-space: nowrap;
  margin: 0 0 0.3rem;
  color: #eef4f1;
  font-size: var(--font-footer-heading);
}

.footer p {
  margin: 0;
  font-size: var(--font-footer-copy);
  line-height: 1.5;
}

.footer nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.18rem;
}

.footer nav a {
  font-size: 0.35rem;
}

.footer nav a:hover {
  color: white;
}

.footer-social > div {
  display: flex;
  margin: 0.38rem 0 1rem;
  gap: 0.34rem;
}

.footer-social a {
  display: grid;
  width: 0.95rem;
  height: 0.95rem;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: var(--brand);
  font-size: 0.6rem;
  background: #eef4f1;
}

.footer-social a:hover {
  color: var(--brand-hover);
  background: white;
  transform: translateY(-1px);
}

.footer-social a:focus-visible {
  outline-color: var(--bright);
  outline-offset: 2px;
}

.responsible-gaming {
  margin-top: 0.7rem;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  grid-column: 1 / -1;
}

.responsible-gaming h2 {
  margin-bottom: 0.45rem;
  color: var(--secondary);
}

.responsible-gaming-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  scrollbar-width: none;
  gap: clamp(1rem, 10vw, 8rem);
}

.responsible-gaming-row::-webkit-scrollbar {
  display: none;
}

.responsible-gaming ul {
  display: flex;
  flex: 0 0 auto;
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 0.3rem;
}

.responsible-gaming li {
  display: grid;
  width: 3.55rem;
  height: 1.75rem;
  flex: 0 0 3.55rem;
  place-items: center;
  padding: 0.2rem 0.3rem;
  border: 1px solid transparent;
  background: transparent;
}

.responsible-gaming-list--right li {
  width: 2.45rem;
  flex-basis: 2.45rem;
}

.responsible-gaming img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.responsible-gaming li.responsible-gaming-tile--pill {
  border-color: rgba(255, 255, 255, 0.16);
  border-radius: 0.7rem;
  background: #f4f7f5;
}

.responsible-gaming li.responsible-gaming-tile--compact {
  padding: 0.35rem 0.42rem;
  border-radius: 0.38rem;
  background: #f4f7f5;
}

.responsible-gaming li.responsible-gaming-tile--circle img {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.12rem;
  border-radius: 50%;
  background: #f4f7f5;
}

.responsible-gaming li.responsible-gaming-tile--transparent {
  padding-right: 0.2rem;
  padding-left: 0.2rem;
}

@media (min-width: 48rem) {
  .footer nav a {
    font-size: 0.48rem;
  }
}

@media (max-width: 63.99rem) {
  .footer-content {
    margin-left: 0;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 1rem 4.6rem;
  }

  .footer-brand,
  .footer-social {
    max-width: none;
    grid-column: 1 / -1;
  }
}

@media (max-width: 35rem) {
  .footer-content {
    row-gap: 0.45rem;
  }

  .footer-brand {
    grid-row: 1;
    grid-column: 1 / -1;
  }

  .footer nav:nth-of-type(1) {
    grid-row: 2;
    grid-column: 1;
  }

  .footer nav:nth-of-type(2) {
    grid-row: 2;
    grid-column: 2;
  }

  .footer nav:nth-of-type(3) {
    grid-row: 3;
    grid-column: 1;
  }

  .footer-social {
    min-width: 0;
    align-self: start;
    grid-row: 3;
    grid-column: 2;
  }

  .responsible-gaming {
    grid-row: 4;
  }
}
</style>


