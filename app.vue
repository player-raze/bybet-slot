<script setup lang="ts">
import { buildBloggeristSeoHead } from '~/utils/bloggeristSeoHead'

const { locale, restoreLocale } = useSiteLocale()
const { restoreTimeZone } = useTimeZonePreference()
const {
  applyTheme,
  effectiveTheme,
  themePreference,
} = useSiteTheme()
const { isLoading, loadingLabel, checkAssetsAndDismiss } = useByBetLoader()
const { fetchBlogSeoSettings } = useBloggerist()

const { data: bloggeristSeoSettings } = await useAsyncData(
  'blog-seo-settings',
  () => fetchBlogSeoSettings(),
)

useHead(() => buildBloggeristSeoHead(bloggeristSeoSettings.value))

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
  checkAssetsAndDismiss()
})

const nuxtApp = useNuxtApp()
nuxtApp.hook('page:finish', () => {
  nextTick(() => {
    checkAssetsAndDismiss(100, 1500)
  })
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Transition name="fade">
    <ByBetSpinner
      v-if="isLoading"
      fullscreen
      size="lg"
      :label="loadingLabel"
    />
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
