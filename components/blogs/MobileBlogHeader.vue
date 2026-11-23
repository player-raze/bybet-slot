<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'

withDefaults(defineProps<{
  title?: string
  backTo?: string
}>(), {
  title: 'Blogs',
  backTo: '/',
})
</script>

<template>
  <header class="mobile-blog-header">
    <NuxtLink :to="backTo" class="mobile-blog-header__back" aria-label="Go back">
      <ChevronLeft :size="20" aria-hidden="true" />
    </NuxtLink>
    <p class="mobile-blog-header__title">{{ title }}</p>
    <NuxtLink to="/account/language" class="mobile-blog-header__flag" aria-label="Language: Philippines">
      <img src="/icons/PHP.webp" alt="Philippines" width="24" height="24">
    </NuxtLink>
  </header>
</template>

<style scoped>
.mobile-blog-header { display: none; }
@media (max-width: 63.99rem) {
  .mobile-blog-header {
    position: sticky;
    top: 0;
    z-index: 40;
    display: grid;
    grid-template-columns: 32px minmax(0, 1fr) 32px;
    align-items: center;
    height: 52px;
    padding: 0 14px;
    color: #fff;
    background: var(--main-color);
  }
  .mobile-blog-header__title { margin: 0; text-align: center; font-size: 16px; font-weight: 800; }
  .mobile-blog-header__back, .mobile-blog-header__flag {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #ffffff60;
    border-radius: 50%;
    background: #ffffff26;
  }
  img { width: 24px; height: 24px; object-fit: contain; }
}
</style>
