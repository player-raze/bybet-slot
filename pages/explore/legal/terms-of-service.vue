<script setup lang="ts">
useAppSeo({
  title: 'Terms of Service & User Agreement | ByBet Philippines',
  description: 'Read the ByBet Terms of Service governing platform usage, account security, payment transactions, and regulatory compliance standards.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Legal', path: '/explore/legal/general-terms' },
    { name: 'Terms of Service', path: '/terms-of-use' },
  ],
})

navigateTo('/terms-of-use', { redirectCode: 301 })
</script>

<template>
  <div />
</template>
