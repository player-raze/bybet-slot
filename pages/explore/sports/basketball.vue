<script setup lang="ts">
const selectedSports = ['Basketball']
</script>

<template>
  <SportsPopular
    class="basketball-page"
    :selected-sports="selectedSports"
  />
</template>

<style scoped>
.basketball-page {
  min-width: 0;
}
</style>
