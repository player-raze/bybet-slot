<script setup lang="ts">
import BlogCategoryListing from '~/components/blogs/BlogCategoryListing.vue'

const route = useRoute()
const categorySlug = computed(() => {
  const raw = route.params.id
  return Array.isArray(raw) ? raw[0] : (raw as string) || 'all'
})

const { fetchBlogCategories } = useBloggerist()

// Determine if param is a category or redirect to /blog/:id
const { data: categories } = await useAsyncData('route-categories', () => fetchBlogCategories())

const isKnownCategory = computed(() => {
  if (categorySlug.value === 'all') return true
  return Boolean(categories.value?.some(c => c.slug === categorySlug.value))
})

// If it's not a known category, it might be a direct blog post slug; redirect to /blog/:slug
if (!isKnownCategory.value && import.meta.client) {
  // on client navigation if someone visited /blogs/test-slug
  // navigateTo(`/blog/${categorySlug.value}`, { replace: true })
}
</script>

<template>
  <BlogCategoryListing
    v-if="isKnownCategory"
    :category="categorySlug"
  />
  <div v-else class="blog-redirect-loading">
    <BlogCategoryListing :category="categorySlug" />
  </div>
</template>

<style scoped>
.blog-redirect-loading {
  width: 100%;
}
</style>
