<script setup lang="ts">
const route = useRoute()
const cleanPath = route.path.replace(/^\/explore\/?/, '')
await navigateTo({
  path: `/${cleanPath}`,
  query: route.query,
  hash: route.hash,
}, { redirectCode: 301, replace: true })
</script>

<template>
  <div />
</template>
