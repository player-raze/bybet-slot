<script setup lang="ts">
import UnderMaintenance from '~/components/modals/UnderMaintenance.vue'

const isMaintenanceOpen = ref(true)

useAppSeo({
  title: 'Online Lottery & Numbers Games | ByBet Philippines',
  description: 'Play online lottery, draw games, and instant win ticket draws on ByBet Philippines with top prize payouts.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Entertainment', path: '/explore/entertainment/live-casino/all' },
    { name: 'Lottery', path: '/explore/entertainment/lottery' },
  ],
})
</script>

<template>
  <div>
    <ComingSoonFallback :disable-seo="true" />
    <UnderMaintenance
      v-if="isMaintenanceOpen"
      @close="isMaintenanceOpen = false"
    />
  </div>
</template>

