<script setup lang="ts">
import {
  newGames,
  popularGames,
  providers,
  recommendedGames,
} from '~/data/homepage'

useAppSeo({
  title: 'ByBet Casino Ph | The Premium Online Sports Betting Site',
  description: 'Experience top-tier gaming on the ByBet Casino Ph. We provide competitive odds and a vast selection of digital casino titles for every visitor.',
  image: '/brand/bybet-logo.webp',
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ByBet Philippines',
      url: 'https://bybet.com/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://bybet.com/explore/egames/slots?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ByBet',
      url: 'https://bybet.com/',
      logo: 'https://bybet.com/brand/bybet-logo.webp',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'Filipino'],
      },
    },
  ],
})

</script>

<template>
  <div class="home-page">
    <ReferenceHero />
    <ReferenceCategoryTabs />
    <ReferenceGameSection
      id="popular"
      title="Popular Slots"
      variant="popular"
      :games="popularGames"
      to="/explore/egames/slots"
    />
    <ReferenceJackpots />
    <ReferenceProviders :providers="providers" />
    <ReferencePromotions />
    <ReferenceGameSection
    id="new-releases"
    title="New Releases"
    variant="new"
    :games="newGames"
    to="/explore/egames/slots"
  />
  <ReferenceGameSection
    id="recommended"
    title="Recommended For You"
    variant="recommended"
    :games="recommendedGames"
    to="/explore/egames/slots"
  />
  <ReferenceInfo />
  </div>
</template>

<style scoped>
@media (max-width: 63.99rem) {
  .home-page {
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
  }
}
</style>
