<script setup lang="ts">
useAppSeo({
  title: 'All Sports & Casino Streamers — Live Plaza | ByBet',
  description: 'Browse and follow top sports streamers, live casino hosts, and gaming commentators on ByBet Live Plaza. Join interactive broadcasts with live chat.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Live Plaza', path: '/live-plaza/home' },
    { name: 'Streamers', path: '/live-plaza/streamer/all' },
  ],
})

await navigateTo('/live-plaza/streamer/all', { replace: true })
</script>

<template>
  <div />
</template>

