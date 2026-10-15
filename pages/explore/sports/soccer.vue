<script setup lang="ts">
const selectedSports = ['Soccer']
</script>

<template>
  <SportsPopular
    class="soccer-page"
    :selected-sports="selectedSports"
  />
</template>

<style scoped>
.soccer-page {
  min-width: 0;
}
</style>

