<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'

const emit = defineEmits<{
  explore: []
}>()
</script>

<template>
  <div class="empty">
    <Sparkles
      :size="32"
      aria-hidden="true"
    />
    <h2>Smart Pick is coming soon</h2>
    <p>Match insights and selections aren’t available yet. Explore the leagues and upcoming matches.</p>
    <button
      type="button"
      @click="emit('explore')"
    >
      Explore leagues
    </button>
  </div>
</template>
