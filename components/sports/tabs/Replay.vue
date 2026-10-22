<script setup lang="ts">
import { RotateCcw } from 'lucide-vue-next'
</script>

<template>
  <div class="empty">
    <RotateCcw :size="32" aria-hidden="true" />
    <h2>No replays available</h2>
    <p>Soccer match replays will appear here when they become available.</p>
  </div>
</template>
