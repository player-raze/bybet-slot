<script setup lang="ts">
const { locale } = useSiteLocale()
const {
  applyTheme,
  effectiveTheme,
  themePreference,
} = useSiteTheme()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    'data-theme': effectiveTheme.value,
    'data-theme-preference': themePreference.value,
  },
}))

onMounted(() => {
  applyTheme()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
