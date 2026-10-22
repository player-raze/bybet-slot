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
  meta: [
    {
      name: 'theme-color',
      content: effectiveTheme.value === 'light' ? '#eef5f1' : '#080D0B',
    },
  ],
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
