<script setup lang="ts">
const route = useRoute()
const legacySegments = Array.isArray(route.params.legacy)
  ? route.params.legacy
  : [route.params.legacy].filter((segment): segment is string => typeof segment === 'string')

const destination = legacySegments[0] === 'tutorial'
  ? '/tutorial'
  : '/tutorial/mock-betting'

await navigateTo(destination, { redirectCode: 301, replace: true })
</script>

<template>
  <div />
</template>
