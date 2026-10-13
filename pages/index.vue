<script setup lang="ts">
import {
  newGames,
  popularGames,
  providers,
  recommendedGames,
} from '~/data/homepage'

useSeoMeta({
  title: 'ByBet Slots — Spin Big Wins',
  description: 'Explore ByBet’s demo slots homepage with popular games, jackpots, promotions, providers, and new releases.',
  ogTitle: 'ByBet Slots — Spin Big Wins',
  ogDescription: 'A polished responsive slots homepage interface built with Nuxt.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
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
