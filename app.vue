<script setup lang="ts">
const { locale, restoreLocale } = useSiteLocale()
const { restoreTimeZone } = useTimeZonePreference()
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
  restoreLocale()
  restoreTimeZone()
  applyTheme()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
