<script setup lang="ts">
import SeoHeader from '~/components/SeoHeader.vue'
import MobileBlogListing from '~/components/blogs/MobileBlogListing.vue'
import BlogCard from '~/components/blogs/BlogCard.vue'
import type { BlogCategory, BlogPost, BlogSeoSettings } from '~/types/blog'

const props = defineProps<{
  category: string
}>()

const { fetchBlogCategories, fetchBlogPosts, fetchBlogSeoSettings } = useBloggerist()

const categoryPath = (slug: string): string => slug === 'all' ? '/blogs' : `/blogs/${slug}`

// SEO Settings
const { data: seoSettings } = await useAsyncData<BlogSeoSettings>('blog-seo-settings', () =>
  fetchBlogSeoSettings(),
)

// Categories
const { data: categoriesData } = await useAsyncData<BlogCategory[]>('blog-categories', () =>
  fetchBlogCategories(),
)

const categories = computed(() => {
  return (categoriesData.value || []).filter(c => (Number(c.postCount) || 0) > 0)
})

// Current category object
const currentCategory = computed(() => {
  return categories.value.find(c => c.slug === props.category)
})

const categoryLabel = computed(() => {
  return currentCategory.value?.name || (props.category.charAt(0).toUpperCase() + props.category.slice(1))
})

// Blogs for this category
const { data: postsData } = await useAsyncData(`blog-posts-${props.category}`, () =>
  fetchBlogPosts({ category: props.category, count: 50 }),
)

const blogs = computed<BlogPost[]>(() => postsData.value?.blogs || [])

const featuredBlogs = computed(() => {
  return blogs.value.slice(0, 2)
})

const remainingBlogs = computed(() => {
  return blogs.value.slice(2)
})

// SEO metadata
const websiteName = computed(() => seoSettings.value?.website_name || 'Blog')
const seoTitle = computed(() => `${categoryLabel.value} — ByBet ${websiteName.value}`)
const seoDescription = computed(() =>
  `Read the latest ${categoryLabel.value.toLowerCase()} articles, tips, and insights on ByBet ${websiteName.value}.`,
)

useAppSeo({
  title: seoTitle,
  description: seoDescription,
  siteName: websiteName,
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: websiteName.value, path: '/blogs' },
    { name: categoryLabel.value, path: categoryPath(props.category) },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryLabel.value} | ByBet ${websiteName.value}`,
    url: `https://bybet.com/blogs/${props.category}`,
    description: seoDescription.value,
  },
})

// Inject Google Analytics and Search Console Verification
useHead(() => {
  const meta: any[] = []
  const script: any[] = []

  const gsc = seoSettings.value?.google_search_console_verification
  if (gsc) {
    meta.push({
      name: 'google-site-verification',
      content: gsc,
    })
  }

  const gaId = seoSettings.value?.google_analytics_id
  if (gaId) {
    script.push(
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `,
      },
    )
  }

  return {
    meta,
    script,
  }
})
</script>

<template>
  <div class="blog-category-page light:text-[#14251d]">
    <h1 class="sr-only">{{ categoryLabel }} — Blogs</h1>
    <MobileBlogListing
      :category="category"
      :categories="categories"
      :blogs="blogs"
    />

    <div class="blog-category-desktop">
      <div class="blog-category-sticky sticky-header-seal light:bg-[#eef5f1]">
        <SeoHeader
          heading-tag="p"
          title="Blogs"
          :meta-title="seoTitle"
          :description="seoDescription"
          keywords="ByBet blogs, casino guides, sports betting tips, slots strategies, gambling news"
          back-to="/blogs"
          custom-class="blog-category-header light:bg-white light:border light:border-black/10"
        >
          <template #actions>
            <span class="philippines-badge light:bg-[#edf4f0] light:border-black/10" role="img" aria-label="Philippines">
              <img src="/icons/PHP.webp" alt="Philippines" loading="lazy">
            </span>
          </template>
        </SeoHeader>

        <nav class="category-nav light:bg-white light:border light:border-black/10" aria-label="Blog categories">
          <NuxtLink
            :to="categoryPath('all')"
            :aria-current="category === 'all' ? 'page' : undefined"
          >
            All
          </NuxtLink>
          <NuxtLink
            v-for="item in categories"
            :key="item.id"
            :to="categoryPath(item.slug)"
            :aria-current="item.slug === category ? 'page' : undefined"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Featured grid (first 2 blogs) -->
      <section v-if="featuredBlogs.length" class="featured-grid" :aria-label="`Featured ${categoryLabel} blogs`">
        <BlogCard
          v-for="blog in featuredBlogs"
          :key="blog.id"
          :blog="blog"
          heading-tag="h2"
          layout="grid"
          class="category-card light:bg-white light:border light:border-black/10"
        />
      </section>

      <!-- Remaining blogs grid -->
      <section v-if="remainingBlogs.length" class="category-grid" :aria-label="`${categoryLabel} blogs`">
        <BlogCard
          v-for="blog in remainingBlogs"
          :key="blog.id"
          :blog="blog"
          heading-tag="h2"
          layout="grid"
          class="category-card light:bg-white light:border light:border-black/10"
        />
      </section>

      <!-- Empty state if no blogs in this category -->
      <div v-if="!blogs.length" class="category-empty light:bg-white light:border light:border-black/10 light:text-[#55695e]">
        <p>No blogs found in {{ categoryLabel }} at this time.</p>
        <NuxtLink to="/blogs" class="category-empty__link light:text-[#047857]">
          Browse all blogs
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 63.99rem) {
  .blog-category-desktop { display: none; }
}

.blog-category-page {
  width: 100%;
  min-width: 0;
  padding-bottom: 1rem;
  color: #f5f5f5;
}

.blog-category-sticky {
  position: sticky;
  z-index: 24;
  top: var(--content-sticky-top);
  margin: 0 -0.05rem;
  padding: 0 0.05rem 0.28rem;
  border-radius: 1.2rem 1.2rem 0 0;
  background: #000000;
}

:deep(.blog-category-header) {
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
  background: #272827;
}

.philippines-badge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-nav {
  display: flex;
  min-height: 2rem;
  align-items: center;
  overflow-x: auto;
  padding: 0.22rem 0.38rem;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 0.48rem;
  background: #1a1b1a;
  scrollbar-width: none;
  gap: 0.2rem;
}

.category-nav::-webkit-scrollbar {
  display: none;
}

.category-nav a {
  min-height: 1.45rem;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 0 0.62rem;
  border-radius: 999px;
  color: #f1f1f1;
  font-size: 0.58rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 150ms ease;
}

.category-nav a:hover {
  background: rgba(255, 255, 255, 0.05);
}

.category-nav a[aria-current='page'] {
  background: #087653;
}

.featured-grid,
.category-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.28rem;
  margin-bottom: 0.5rem;
}

.category-empty {
  margin: 1.5rem 0;
  padding: 2rem;
  border-radius: 0.48rem;
  color: #a6a8a7;
  text-align: center;
  background: #151515;
}

.category-empty__link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #31d69a;
  text-decoration: underline;
  font-weight: 700;
}

/* Light mode support */
:global(html[data-theme='light']) .blog-category-page {
  color: #14251d;
}

:global(html[data-theme='light']) .blog-category-sticky {
  background: var(--page);
}

:global(html[data-theme='light']) :deep(.blog-category-header) {
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

:global(html[data-theme='light']) .category-nav a[aria-current='page'] {
  color: #ffffff;
  background: #07835c;
}

:global(html[data-theme='light']) .category-empty {
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #55695e;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .category-empty__link {
  color: var(--main-color);
}
</style>
