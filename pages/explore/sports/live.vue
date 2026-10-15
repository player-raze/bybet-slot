<script setup lang="ts">
const selectedSports = ['Basketball', 'Soccer', 'Tennis', 'Baseball']
</script>

<template>
  <SportsPopular
    class="live-page"
    :selected-sports="selectedSports"
    initial-tab="inplay"
  />
</template>

<style scoped>
.live-page {
  min-width: 0;
}
</style>
