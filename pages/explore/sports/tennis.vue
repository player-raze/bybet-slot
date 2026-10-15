<script setup lang="ts">
const selectedSports = ['Tennis']
</script>

<template>
  <SportsPopular
    class="tennis-page"
    :selected-sports="selectedSports"
  />
</template>

<style scoped>
.tennis-page {
  min-width: 0;
}
</style>
