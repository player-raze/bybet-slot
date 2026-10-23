<script setup lang="ts">
import {
  newGames,
  popularGames,
  providers,
  recommendedGames,
} from '~/data/homepage'

useSeoMeta({
  title: 'ByBet Casino Ph | The Premium Online Sports Betting Site',
  description: 'Experience top-tier gaming on the ByBet Casino Ph. We provide competitive odds and a vast selection of digital casino titles for every visitor.',
  ogTitle: 'ByBet Casino Ph | Your Premium Online Sports Betting Site',
  ogDescription: 'Experience top-tier gaming on the ByBet homepage. We provide competitive odds and a vast selection of digital casino titles for every visitor.',
  ogType: 'website',
  ogImage: '',
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
