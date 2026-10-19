<script setup lang="ts">
import { computed } from 'vue'
import LiveView from '~/components/sports/LiveView.vue'

const route = useRoute()
const sport = computed(() => String(route.params.sport || '').toLowerCase())

definePageMeta({
  validate: (route) => ['basketball', 'soccer', 'tennis', 'baseball'].includes(String(route.params.sport).toLowerCase()),
})
</script>

<template>
  <LiveView :sport="sport" />
</template>

