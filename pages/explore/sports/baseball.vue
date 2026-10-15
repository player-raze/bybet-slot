<script setup lang="ts">
const selectedSports = ['Baseball']
</script>

<template>
  <SportsPopular
    class="baseball-page"
    :selected-sports="selectedSports"
  />
</template>

<style scoped>
.baseball-page {
  min-width: 0;
}
</style>
