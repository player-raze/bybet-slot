<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import SeoHeader from '~/components/SeoHeader.vue'
import MobileBlogListing from '~/components/blogs/MobileBlogListing.vue'
import BlogCard from '~/components/blogs/BlogCard.vue'
import type { BlogCategory, BlogPost, BlogSeoSettings } from '~/types/blog'

const props = withDefaults(defineProps<{
  category?: string
}>(), {
  category: 'all',
})

const { fetchBlogCategories, fetchBlogPosts, fetchBlogSeoSettings } = useBloggerist()

const selectedCategory = ref(props.category)
watch(() => props.category, (cat) => {
  selectedCategory.value = cat
})

const featuredTrack = ref<HTMLElement | null>(null)

// Load data with SSR support
const { data: seoSettings } = await useAsyncData<BlogSeoSettings>('blog-seo-settings', () =>
  fetchBlogSeoSettings(),
)

const { data: categoriesData } = await useAsyncData<BlogCategory[]>('blog-categories', () =>
  fetchBlogCategories(),
)

const categories = computed(() => {
  return (categoriesData.value || []).filter(c => (Number(c.postCount) || 0) > 0)
})

const { data: postsData } = await useAsyncData('blog-posts-all', () =>
  fetchBlogPosts({ count: 50 }),
)

const blogs = computed<BlogPost[]>(() => postsData.value?.blogs || [])

const categoryPath = (slug: string): string => slug === 'all' ? '/blogs' : `/blogs/${slug}`

const scrollFeatured = (direction: -1 | 1): void => {
  featuredTrack.value?.scrollBy({
    left: direction * featuredTrack.value.clientWidth * 0.78,
    behavior: 'smooth',
  })
}

// Grouped sections for "All"
const categorySections = computed(() => {
  const allItems = blogs.value
  return categories.value
    .map(cat => ({
      ...cat,
      items: allItems.filter(b => b.category?.slug === cat.slug || b.categoryId === cat.slug),
    }))
    .filter(section => section.items.length > 0)
})

// Featured blogs track (first 6 blogs or sorted)
const featuredBlogs = computed(() => {
  return blogs.value.slice(0, 8)
})

// Active category label
const activeCategoryName = computed(() => {
  if (selectedCategory.value === 'all') return 'Blogs'
  const found = categories.value.find(c => c.slug === selectedCategory.value)
  return found?.name || 'Blogs'
})

// SEO configuration
const websiteName = computed(() => seoSettings.value?.website_name || 'Blog')
const pageTitle = computed(() => `${websiteName.value} — Articles, Guides & News | ByBet`)
const pageDescription = computed(() =>
  `Explore the latest guides, betting strategies, sports analysis, and casino updates on the ByBet ${websiteName.value}.`,
)

useAppSeo({
  title: pageTitle,
  description: pageDescription,
  siteName: websiteName,
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: websiteName.value, path: '/blogs' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `ByBet ${websiteName.value}`,
    url: 'https://bybet.com/blogs',
    description: pageDescription.value,
  },
})

import { buildBloggeristSeoHead } from '~/utils/bloggeristSeoHead'

// Inject Google Analytics, Google Tag ID, and Search Console Verification from api/settings/seo.php
useHead(() => buildBloggeristSeoHead({
  google_analytics_id: seoSettings.value?.google_analytics_id,
  google_tag_id: seoSettings.value?.google_tag_id,
  google_search_console_verification: seoSettings.value?.google_search_console_verification,
}))
</script>

<template>
  <div class="blogs-page light:text-[#14251d]">
    <h1 class="sr-only">{{ activeCategoryName }}</h1>
    <MobileBlogListing
      :category="selectedCategory"
      :categories="categories"
      :blogs="blogs"
    />

    <div class="blogs-desktop">
      <div class="blogs-sticky sticky-header-seal light:bg-[#eef5f1]">
        <SeoHeader
          heading-tag="p"
          title="Blogs"
          :meta-title="pageTitle"
          :description="pageDescription"
          keywords="ByBet blogs, casino guides, sports betting tips, slots strategies, gambling news"
          custom-class="blog-page-header light:bg-white light:border light:border-black/10"
        >
          <template #actions>
            <span class="philippines-badge light:bg-[#edf4f0] light:border-black/10" role="img" aria-label="Philippines">
              <img
                src="/icons/PHP.webp"
                alt="ByBet"
                class="h-7 sm:h-5 w-auto object-contain"
                loading="lazy"
              >
            </span>
          </template>
        </SeoHeader>

        <nav class="category-nav light:bg-white light:border light:border-black/10" aria-label="Blog categories">
          <NuxtLink
            :to="categoryPath('all')"
            :class="{ 'category-nav__button--active': selectedCategory === 'all' }"
            :aria-current="selectedCategory === 'all' ? 'page' : undefined"
          >
            All
          </NuxtLink>
          <NuxtLink
            v-for="cat in categories"
            :key="cat.id"
            :to="categoryPath(cat.slug)"
            :class="{ 'category-nav__button--active': selectedCategory === cat.slug }"
            :aria-current="selectedCategory === cat.slug ? 'page' : undefined"
          >
            {{ cat.name }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Featured Blogs Carousel -->
      <section v-if="featuredBlogs.length" class="featured-blogs" aria-label="Featured blogs">
        <h2 class="sr-only">Featured articles</h2>
        <button
          type="button"
          class="featured-blogs__arrow featured-blogs__arrow--left light:bg-white/90 light:text-[#14251d] light:border light:border-black/10"
          aria-label="Previous blogs"
          @click="scrollFeatured(-1)"
        >
          <ChevronLeft :size="15" />
        </button>

        <div ref="featuredTrack" class="featured-blogs__track">
          <BlogCard
            v-for="blog in featuredBlogs"
            :key="blog.id"
            :blog="blog"
            layout="featured"
            class="featured-card light:bg-white light:border light:border-black/10"
          />
        </div>

        <button
          type="button"
          class="featured-blogs__arrow featured-blogs__arrow--right light:bg-white/90 light:text-[#14251d] light:border light:border-black/10"
          aria-label="Next blogs"
          @click="scrollFeatured(1)"
        >
          <ChevronRight :size="15" />
        </button>
      </section>

      <!-- Category Groups -->
      <div class="blog-groups">
        <section
          v-for="section in categorySections"
          :key="section.id"
          class="blog-group light:bg-white light:border light:border-black/10"
        >
          <NuxtLink
            :to="categoryPath(section.slug)"
            class="blog-group__heading light:text-[#14251d]"
          >
            <h2>{{ section.name }}</h2>
            <ChevronRight :size="16" aria-hidden="true" />
          </NuxtLink>

          <div class="blog-group__list">
            <BlogCard
              v-for="blog in section.items"
              :key="`${section.id}-${blog.id}`"
              :blog="blog"
              layout="row"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 63.99rem) {
  .blogs-desktop { display: none; }
}

.blogs-page {
  width: 100%;
  min-width: 0;
  padding: 0;
  color: #f5f5f5;
}

.blogs-sticky {
  position: sticky;
  z-index: 24;
  top: var(--content-sticky-top);
  margin: 0 -0.05rem 0;
  padding: 0 0.05rem 0.28rem;
  background: #000000;
  border-radius: 50px 50px 0 0;
}

:deep(.blog-page-header) {
  min-height: 2.15rem;
  margin-bottom: 0.28rem;
  padding: 0.26rem 0.45rem;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 0.48rem;
  background: #171817;
}

.philippines-badge {
  display: grid;
  width: 1.2rem;
  height: 1.2rem;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  font-size: 0.7rem;
  line-height: 1;
  background: #272827;
}

.category-nav {
  display: flex;
  align-items: center;
  min-height: 2rem;
  overflow-x: auto;
  padding: 0.22rem 0.38rem;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 0.48rem;
  background: #171817;
  scrollbar-width: none;
  gap: 0.2rem;
}

.category-nav::-webkit-scrollbar,
.featured-blogs__track::-webkit-scrollbar {
  display: none;
}

.category-nav a {
  min-height: 1.45rem;
  flex: 0 0 auto;
  padding: 0 0.62rem;
  border: 0;
  border-radius: 999px;
  color: #c3c5c4;
  font-size: 0.58rem;
  font-weight: 700;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  transition: color 150ms ease, background-color 150ms ease;
  display: inline-flex;
  align-items: center;
}

.category-nav a:hover {
  background: rgba(255, 255, 255, 0.04);
}

.category-nav a.category-nav__button--active {
  color: #ffffff;
  background: #07835c;
}

.featured-blogs {
  position: relative;
  margin-bottom: 0.5rem;
}

.featured-blogs__track {
  display: grid;
  grid-auto-columns: calc((100% - 0.75rem) / 4);
  grid-auto-flow: column;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scrollbar-width: none;
  gap: 0.25rem;
}

.featured-card {
  scroll-snap-align: start;
}

.featured-blogs__arrow {
  display: grid;
  position: absolute;
  z-index: 2;
  top: 34%;
  width: 1.5rem;
  height: 1.5rem;
  place-items: center;
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  background: rgba(7, 10, 8, 0.82);
  box-shadow: 0 0.18rem 0.45rem rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transform: translateY(-50%);
}

.featured-blogs__arrow--left {
  left: 0.34rem;
}

.featured-blogs__arrow--right {
  right: 0.34rem;
}

.blog-groups {
  display: flex;
  flex-direction: column;
  gap: 0.26rem;
}

.blog-group {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 0.48rem;
  background: #151515;
}

.blog-group__heading {
  display: flex;
  width: 100%;
  min-height: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.28rem 0.48rem;
  border: 0;
  color: #f5f5f5;
  font-size: 0.68rem;
  font-weight: 800;
  text-align: left;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
}

.blog-group__heading svg {
  color: #808481;
}

.blog-group__list {
  padding: 0 0.34rem 0.18rem;
}

@media (max-width: 72rem) {
  .featured-blogs__track {
    grid-auto-columns: calc((100% - 0.5rem) / 3);
  }
}

@media (max-width: 54rem) {
  .featured-blogs__track {
    grid-auto-columns: min(72vw, 15rem);
  }
}

/* Light mode support */
:global(html[data-theme='light']) .blogs-page {
  color: #14251d;
}

:global(html[data-theme='light']) .blogs-sticky {
  background: var(--page);
}

:global(html[data-theme='light']) :deep(.blog-page-header) {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .philippines-badge {
  background: #edf4f0;
  border-color: rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .category-nav {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .category-nav a {
  color: #55695e;
}

:global(html[data-theme='light']) .category-nav a:hover {
  color: #14251d;
  background: rgba(3, 98, 66, 0.07);
}

:global(html[data-theme='light']) .category-nav a.category-nav__button--active {
  color: #ffffff;
  background: #07835c;
}

:global(html[data-theme='light']) .featured-blogs__arrow {
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #14251d;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 2px 8px rgba(16, 38, 28, 0.12);
}

:global(html[data-theme='light']) .featured-blogs__arrow:hover {
  color: var(--main-color);
  background: #ffffff;
}

:global(html[data-theme='light']) .blog-group {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .blog-group__heading {
  color: #14251d;
}

:global(html[data-theme='light']) .blog-group__heading svg {
  color: #55695e;
}
</style>
