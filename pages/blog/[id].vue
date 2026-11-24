<script setup lang="ts">
import { ChevronRight, Calendar, Clock, User, ArrowLeft } from 'lucide-vue-next'
import SeoHeader from '~/components/SeoHeader.vue'
import MobileBlogHeader from '~/components/blogs/MobileBlogHeader.vue'
import { OG_IMAGE_MANIFEST, resolveOgImageForRoute } from '~/utils/ogImageManifest'
import type { BlogDetailResponse, BlogSeoSettings } from '~/types/blog'

const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = computed(() => String(config.public.siteUrl || 'https://bybet.com').replace(/\/+$/, ''))
const cleanPath = computed(() => route.path.split('?')[0].split('#')[0].replace(/\/+$/, '').toLowerCase() || '/')
const { fetchBlogPost, fetchBlogSeoSettings, resolveImage, resolveContentImages } = useBloggerist()

const slug = computed(() => {
  const id = route.params.id
  return Array.isArray(id) ? id[0] : (id as string) || ''
})

// Fetch blog post and SEO settings
const { data: blogResponse } = await useAsyncData<BlogDetailResponse | null>(
  `blog-detail-${slug.value}`,
  () => fetchBlogPost(slug.value),
)

const { data: seoSettings } = await useAsyncData<BlogSeoSettings>(
  'blog-seo-settings',
  () => fetchBlogSeoSettings(),
)

const blog = computed(() => blogResponse.value?.blog)
const countdown = computed(() => blogResponse.value?.countdown || blog.value?.countdown)
const bannerImageSrc = computed(() => resolveImage(blog.value?.featuredImage))

const websiteName = computed(() => seoSettings.value?.website_name || 'Blog')
const seoTitle = computed(() => blog.value?.seoTitle || `${blog.value?.title || 'Blog Post'} | ByBet ${websiteName.value}`)
const seoDescription = computed(() => blog.value?.excerpt || `Read ${blog.value?.title || 'this article'} on ByBet.`)
const seoImage = computed(() => {
  const manifestImg = OG_IMAGE_MANIFEST[cleanPath.value]
  if (manifestImg) {
    return `${siteUrl.value}${manifestImg}`
  }
  if (bannerImageSrc.value && bannerImageSrc.value !== '/brand/bybet-logo.webp') {
    return bannerImageSrc.value
  }
  return `${siteUrl.value}${resolveOgImageForRoute('/blogs')}`
})

// Countdown timer handling
const targetTime = computed(() => {
  const target = countdown.value?.target || blog.value?.countdownTarget
  return target ? new Date(target).getTime() : 0
})

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
const isExpired = ref(false)

let timer: ReturnType<typeof setInterval> | null = null

const updateCountdown = () => {
  if (!targetTime.value || isNaN(targetTime.value)) return
  const diff = targetTime.value - Date.now()
  if (diff <= 0) {
    isExpired.value = true
    return
  }
  isExpired.value = false
  days.value = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0')
  hours.value = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
  minutes.value = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
  seconds.value = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0')
}

onMounted(() => {
  if (targetTime.value) {
    updateCountdown()
    timer = setInterval(updateCountdown, 1000)
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

useAppSeo({
  title: seoTitle,
  description: seoDescription,
  image: seoImage,
  type: 'article',
  siteName: websiteName,
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: websiteName.value, path: '/blogs' },
    ...(blog.value?.category?.name ? [{ name: blog.value.category.name, path: `/blogs/${blog.value.category.slug}` }] : []),
    { name: blog.value?.title || 'Article', path: `/blog/${slug.value}` },
  ],
  schema: computed(() => {
    if (blogResponse.value?.faq_schema) {
      return blogResponse.value.faq_schema
    }
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blog.value?.title,
      description: seoDescription.value,
      image: seoImage.value,
      author: {
        '@type': 'Person',
        name: blog.value?.author || blog.value?.writer?.name || 'ByBet Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'ByBet',
        logo: {
          '@type': 'ImageObject',
          url: 'https://bybet.com/brand/bybet-logo.webp',
        },
      },
      datePublished: blog.value?.startsAt || (blog.value?.publishedAt ? new Date(blog.value.publishedAt * 1000).toISOString() : undefined),
    }
  }),
})

import { buildBloggeristSeoHead } from '~/utils/bloggeristSeoHead'
import { addNofollowToExternalHtmlLinks } from '~/utils/externalLinkRel'

const processedBlogContentHtml = computed(() =>
  resolveContentImages(addNofollowToExternalHtmlLinks(blog.value?.content_html)),
)

useHead(() => buildBloggeristSeoHead({
  google_analytics_id: seoSettings.value?.google_analytics_id,
  google_tag_id: seoSettings.value?.google_tag_id,
  google_search_console_verification: seoSettings.value?.google_search_console_verification,
}))
</script>

<template>
  <div class="blog-detail-page">
    <MobileBlogHeader back-to="/blogs" :title="blog?.title || 'Blog'" />

    <SeoHeader
      heading-tag="p"
      class="blog-detail-desktop-header"
      sticky
      title="Blogs"
      :meta-title="seoTitle"
      :description="seoDescription"
      :og-image="seoImage"
      back-to="/blogs"
      custom-class="blog-detail-header light:bg-white light:border light:border-black/10"
    >
      <template #actions>
        <span class="philippines-badge light:bg-[#edf4f0] light:border-black/10" role="img" aria-label="Philippines">
          <img src="/icons/PHP.webp" alt="Philippines" loading="lazy">
        </span>
      </template>
    </SeoHeader>

    <main v-if="blog" class="blog-detail-content">
      <!-- Featured Banner -->
      <section class="blog-banner light:bg-[#edf4f0] light:border light:border-black/10" :aria-label="blog.title">
        <img
          :src="bannerImageSrc"
          :alt="blog.title"
          class="blog-banner__image"
          decoding="async"
          @error="($event.target as HTMLImageElement).src = '/brand/bybet-logo.webp'"
        >
        <span v-if="blog.category?.name" class="blog-banner__badge">
          {{ blog.category.name }}
        </span>
      </section>

      <!-- Countdown Banner if enabled -->
      <section
        v-if="countdown?.enabled || blog.countdownEnabled"
        class="blog-countdown"
        aria-label="Event countdown"
      >
        <div class="blog-countdown__inner">
          <p class="blog-countdown__title">
            {{ countdown?.title || blog.countdownTitle || 'Limited Time Offer' }}
          </p>
          <div v-if="!isExpired" class="blog-countdown__timer">
            <div class="cd-box"><span class="cd-num">{{ days }}</span><span class="cd-lbl">DAYS</span></div>
            <span class="cd-sep">:</span>
            <div class="cd-box"><span class="cd-num">{{ hours }}</span><span class="cd-lbl">HOURS</span></div>
            <span class="cd-sep">:</span>
            <div class="cd-box"><span class="cd-num">{{ minutes }}</span><span class="cd-lbl">MINS</span></div>
            <span class="cd-sep">:</span>
            <div class="cd-box"><span class="cd-num">{{ seconds }}</span><span class="cd-lbl">SECS</span></div>
          </div>
          <div v-else class="blog-countdown__expired">
            <p>{{ countdown?.end_text || blog.countdownEndText || 'Offer expired!' }}</p>
          </div>
        </div>
      </section>

      <!-- Article Header & Meta -->
      <article class="blog-article light:bg-white light:text-[#14251d] light:border light:border-black/10">
        <header class="blog-article__header light:border-b-black/10">
          <div class="blog-article__breadcrumbs light:text-[#55695e]">
            <NuxtLink to="/blogs" class="light:text-[#047857]">Blogs</NuxtLink>
            <ChevronRight :size="12" />
            <NuxtLink v-if="blog.category" :to="`/blogs/${blog.category.slug}`" class="light:text-[#047857]">
              {{ blog.category.name }}
            </NuxtLink>
          </div>

          <h1 class="blog-article__title light:text-[#14251d]">{{ blog.title }}</h1>

          <div class="blog-article__meta light:text-[#55695e]">
            <span v-if="blog.author || blog.writer?.name" class="meta-item">
              <User :size="14" />
              {{ blog.author || blog.writer?.name }}
            </span>
            <span v-if="blog.date" class="meta-item">
              <Calendar :size="14" />
              {{ blog.date }}
            </span>
            <span v-if="blog.readTime" class="meta-item">
              <Clock :size="14" />
              {{ blog.readTime }} min read
            </span>
          </div>
        </header>

        <!-- Article HTML Content -->
        <div
          v-if="blog.content_html"
          class="blog-article__body light:text-[#2d3748]"
          v-html="processedBlogContentHtml"
        />
        <div
          v-else-if="blog.content"
          class="blog-article__body light:text-[#2d3748]"
        >
          <p>{{ blog.content }}</p>
        </div>

        <!-- Back to Blogs -->
        <footer class="blog-article__footer light:border-t-black/10">
          <NuxtLink to="/blogs" class="back-link light:text-[#047857]">
            <ArrowLeft :size="16" />
            Back to all blogs
          </NuxtLink>
        </footer>
      </article>
    </main>

    <!-- Not Found state -->
    <main v-else class="blog-not-found light:bg-white light:border-black/10 light:text-[#14251d]">
      <h1 class="light:text-[#14251d]">Article Not Found</h1>
      <p class="light:text-[#55695e]">The requested blog post could not be found or has been removed.</p>
      <NuxtLink to="/blogs" class="back-link light:text-[#047857]">
        <ArrowLeft :size="16" />
        Return to Blogs
      </NuxtLink>
    </main>
  </div>
</template>

<style scoped>
.blog-detail-page {
  width: 100%;
  min-width: 0;
  padding-bottom: 2rem;
  color: #f5f5f5;
}

@media (max-width: 63.99rem) {
  .blog-detail-desktop-header { display: none; }
}

:deep(.blog-detail-header) {
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

.philippines-badge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-detail-content {
  display: flex;
  flex-direction: column;
  gap: 0.34rem;
}

.blog-banner {
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 1;
  max-height: 250px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.48rem;
  background: #171817;
}

.blog-banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blog-banner__badge {
  position: absolute;
  top: 0.35rem;
  left: 0.35rem;
  padding: 0.13rem 0.45rem;
  border-radius: 999px;
  background: #07835c;
  color: #ffffff;
  font-size: 0.47rem;
  font-weight: 800;
  box-shadow: 0 0.12rem 0.35rem rgba(0, 0, 0, 0.34);
}

/* Countdown Banner (Green ByBet Theme) */
.blog-countdown,
:deep(.blog-countdown-block) {
  padding: 0.65rem 0.8rem !important;
  border-radius: 0.48rem !important;
  background: linear-gradient(135deg, rgba(8, 38, 26, 0.95), rgba(13, 74, 52, 0.95)) !important;
  border: 1px solid rgba(49, 214, 154, 0.35) !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;
  text-align: center;
  margin: 0.35rem 0 !important;
}

:deep(.blog-countdown-banner) {
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
  border-color: rgba(49, 214, 154, 0.45) !important;
}

.blog-countdown__title,
:deep(.blog-countdown-title) {
  margin: 0 0 0.4rem !important;
  font-weight: 800 !important;
  font-size: 0.62rem !important;
  color: #31d69a !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

.blog-countdown__timer,
:deep(.blog-countdown-timer) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.35rem !important;
  flex-wrap: wrap !important;
}

:deep(.cd-box) {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 2.2rem !important;
  padding: 0.22rem 0.35rem !important;
  border-radius: 0.32rem !important;
  background: rgba(0, 0, 0, 0.6) !important;
  border: 1px solid rgba(49, 214, 154, 0.3) !important;
}

:deep(.cd-num) {
  font-weight: 900 !important;
  font-size: 0.85rem !important;
  color: #ffffff !important;
  line-height: 1 !important;
  font-variant-numeric: tabular-nums !important;
  font-family: ui-monospace, monospace !important;
}

:deep(.cd-lbl) {
  font-size: 0.42rem !important;
  font-weight: 700 !important;
  color: #31d69a !important;
  letter-spacing: 0.5px !important;
  margin-top: 2px !important;
}

:deep(.cd-sep) {
  font-weight: 800 !important;
  font-size: 0.85rem !important;
  color: #31d69a !important;
  line-height: 1 !important;
}

.blog-countdown__expired,
:deep(.blog-countdown-expired) {
  padding: 0.4rem !important;
  background: rgba(220, 38, 38, 0.2) !important;
  border: 1px solid rgba(220, 38, 38, 0.4) !important;
  border-radius: 0.35rem !important;
  margin-top: 0.35rem !important;
}

:deep(.cd-expired-text) {
  margin: 0 !important;
  color: #fca5a5 !important;
  font-weight: 700 !important;
  font-size: 0.55rem !important;
}

:deep(.blog-button-link),
:deep(.blog-slot-demo-link),
.blog-article__body :deep(.blog-button-link),
.blog-article__body :deep(.blog-slot-demo-link),
.blog-article__body :deep(.blog-slot-demo-actions .blog-slot-demo-link) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 0.35rem !important;
  background: linear-gradient(90deg, #07835c, #10b981) !important;
  color: #ffffff !important;
  font-weight: 800 !important;
  padding: 0.32rem 0.75rem !important;
  font-size: 0.55rem !important;
  text-decoration: none !important;
}

:deep(.blog-slot-demo-link:focus-visible),
:deep(.blog-button-link:focus-visible),
.blog-article__body :deep(.blog-slot-demo-link:focus-visible),
.blog-article__body :deep(.blog-button-link:focus-visible) {
  outline: 2px solid #31d69a !important;
  outline-offset: 3px !important;
}

/* Article Container (Matches bonuses/{bonus-slug} .promotion-sheet) */
.blog-article {
  padding: 0.72rem 0.62rem 0.85rem;
  border-radius: 0.48rem;
  background: #151515;
  border: 1px solid rgba(255, 255, 255, 0.035);
}

.blog-article__header {
  margin-bottom: 0.72rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 0.52rem;
}

.blog-article__breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.52rem;
  color: #8e9491;
  margin-bottom: 0.25rem;
}

.blog-article__breadcrumbs a {
  color: #31d69a;
  text-decoration: none;
}

.blog-article__title {
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0.15rem 0 0.4rem;
  color: #ffffff;
}

.blog-article__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  color: #8e9491;
  font-size: 0.52rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

/* Article Body Typography (Scaled to match bonuses/{bonus-slug}) */
.blog-article__body {
  font-size: 0.55rem;
  line-height: 1.45;
  color: #d0d1d0;
  width: 100%;
}

.blog-article__body :deep(h1) {
  font-size: 0.78rem;
  font-weight: 800;
  color: #ffffff;
  margin-top: 0.85rem;
  margin-bottom: 0.35rem;
  line-height: 1.25;
}

.blog-article__body :deep(h2) {
  font-size: 0.68rem;
  font-weight: 800;
  color: #ffffff;
  margin-top: 0.75rem;
  margin-bottom: 0.32rem;
  line-height: 1.25;
}

.blog-article__body :deep(h3) {
  font-size: 0.60rem;
  font-weight: 800;
  color: #ffffff;
  margin-top: 0.65rem;
  margin-bottom: 0.28rem;
  line-height: 1.25;
}

.blog-article__body :deep(h4),
.blog-article__body :deep(h5),
.blog-article__body :deep(h6) {
  font-size: 0.55rem;
  font-weight: 800;
  color: #ffffff;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  line-height: 1.25;
}

.blog-article__body :deep(p) {
  font-size: 0.55rem;
  line-height: 1.45;
  margin-bottom: 0.55rem;
  color: #d0d1d0;
}

.blog-article__body :deep(ul),
.blog-article__body :deep(ol) {
  margin: 0.35rem 0 0.55rem;
  padding-left: 1rem;
}

.blog-article__body :deep(li) {
  font-size: 0.55rem;
  line-height: 1.45;
  margin-bottom: 0.2rem;
  color: #d0d1d0;
}

.blog-article__body :deep(blockquote) {
  font-size: 0.54rem;
  line-height: 1.45;
  border-left: 3px solid #31d69a;
  padding-left: 0.6rem;
  margin: 0.6rem 0;
  color: #a2a5a3;
}

.blog-article__body :deep(strong),
.blog-article__body :deep(b) {
  color: #ffffff;
  font-weight: 700;
}

.blog-article__body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.4rem;
  margin: 0.6rem 0;
}

.blog-article__body :deep(a) {
  color: #31d69a;
  text-decoration: underline;
}

/* Tables */
.blog-article__body :deep(.blog-table-block) {
  width: 100%;
  overflow-x: auto;
  margin: 0.6rem 0;
}

.blog-article__body :deep(.blog-table-block table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.52rem;
}

.blog-article__body :deep(.blog-table-block th) {
  padding: 0.35rem 0.5rem;
  background-color: #1a1e1b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f4f7f5;
  font-weight: 700;
  text-align: left;
}

.blog-article__body :deep(.blog-table-block td) {
  padding: 0.35rem 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #d0d1d0;
}

/* FAQs Section (Green Theme Override) */
.blog-article__body :deep(.blog-faq-block),
.blog-article__body :deep(.blog-faqs) {
  display: grid !important;
  gap: 0.45rem !important;
  margin: 0.8rem 0 !important;
  padding: 0.65rem 0.75rem !important;
  border: 1px solid rgba(49, 214, 154, 0.35) !important;
  border-radius: 0.48rem !important;
  background: rgba(10, 30, 20, 0.72) !important;
}

.blog-article__body :deep(.blog-faq-item) {
  padding: 0.45rem 0.6rem !important;
  border: 1px solid rgba(19, 122, 91, 0.6) !important;
  border-radius: 0.38rem !important;
  background: rgba(14, 43, 29, 0.75) !important;
}

.blog-article__body :deep(.blog-faq-item summary) {
  cursor: pointer !important;
  color: #31d69a !important;
  font-size: 0.58rem !important;
  font-weight: 700 !important;
  overflow-wrap: anywhere !important;
}

.blog-article__body :deep(.blog-faq-item[open] summary) {
  margin-bottom: 0.35rem !important;
}

.blog-article__body :deep(.blog-faq-item p) {
  margin: 0 !important;
  color: #d1fae5 !important;
  font-size: 0.53rem !important;
  line-height: 1.42 !important;
  overflow-wrap: anywhere !important;
}

.blog-article__body :deep(.blog-faq-item summary:focus-visible) {
  outline: 2px solid #31d69a !important;
  outline-offset: 3px !important;
}

/* Slot demo frame in blog */
.blog-article__body :deep(.blog-slot-demo-frame) {
  border: 1px solid rgba(49, 214, 154, 0.35) !important;
  background: #0c1a13 !important;
  border-radius: 0.48rem !important;
}

.blog-article__body :deep(.blog-slot-demo-header) {
  background: #0f241a !important;
  color: #e2e8f0 !important;
  padding: 0.5rem !important;
  font-size: 0.55rem !important;
}

/* Footer Back Link */
.blog-article__footer {
  margin-top: 1rem;
  padding-top: 0.65rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #31d69a;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.55rem;
}

.back-link:hover {
  text-decoration: underline;
}

/* Not Found state */
.blog-not-found {
  padding: 2rem 1rem;
  text-align: center;
  background: #151515;
  border-radius: 0.48rem;
  border: 1px solid rgba(255, 255, 255, 0.035);
}

.blog-not-found h1 {
  font-size: 0.82rem;
  color: #ffffff;
  margin-bottom: 0.3rem;
  font-weight: 800;
}

.blog-not-found p {
  color: #8e9491;
  font-size: 0.55rem;
  margin-bottom: 1rem;
}

/* Mobile Breakpoint (<= 35rem) matching bonuses/{bonus-slug} */
@media (max-width: 35rem) {
  .blog-banner {
    aspect-ratio: 3.3 / 1;
    max-height: 220px;
    border-radius: 0;
  }

  .blog-banner__badge {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }

  .blog-article {
    padding: 0.8rem 0.68rem 0.95rem;
  }

  .blog-article__breadcrumbs {
    font-size: 0.8rem;
  }

  .blog-article__title {
    font-size: 1.3rem;
  }

  .blog-article__meta {
    font-size: 0.8rem;
  }

  .blog-article__body {
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .blog-article__body :deep(h1) {
    font-size: 1.25rem;
    margin-top: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .blog-article__body :deep(h2) {
    font-size: 1.15rem;
    margin-top: 1rem;
    margin-bottom: 0.45rem;
  }

  .blog-article__body :deep(h3) {
    font-size: 1.0rem;
    margin-top: 0.85rem;
    margin-bottom: 0.4rem;
  }

  .blog-article__body :deep(h4),
  .blog-article__body :deep(h5),
  .blog-article__body :deep(h6) {
    font-size: 0.95rem;
  }

  .blog-article__body :deep(p),
  .blog-article__body :deep(li) {
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .blog-article__body :deep(.blog-table-block table) {
    font-size: 0.85rem;
  }

  .blog-article__body :deep(.blog-table-block th),
  .blog-article__body :deep(.blog-table-block td) {
    padding: 0.45rem 0.55rem;
  }

  /* Mobile FAQs */
  .blog-article__body :deep(.blog-faq-block),
  .blog-article__body :deep(.blog-faqs) {
    padding: 0.8rem 0.9rem !important;
    gap: 0.55rem !important;
    margin: 1rem 0 !important;
  }

  .blog-article__body :deep(.blog-faq-item) {
    padding: 0.65rem 0.75rem !important;
  }

  .blog-article__body :deep(.blog-faq-item summary) {
    font-size: 0.95rem !important;
  }

  .blog-article__body :deep(.blog-faq-item p) {
    font-size: 0.88rem !important;
  }

  /* Mobile Countdown */
  .blog-countdown,
  :deep(.blog-countdown-block) {
    padding: 0.9rem 1rem !important;
  }

  .blog-countdown__title,
  :deep(.blog-countdown-title) {
    font-size: 1.05rem !important;
  }

  :deep(.cd-box) {
    min-width: 3.4rem !important;
    padding: 0.4rem 0.5rem !important;
  }

  :deep(.cd-num) {
    font-size: 1.35rem !important;
  }

  :deep(.cd-lbl) {
    font-size: 0.65rem !important;
  }

  :deep(.cd-sep) {
    font-size: 1.35rem !important;
  }

  :deep(.blog-button-link),
  :deep(.blog-slot-demo-link) {
    font-size: 0.9rem !important;
    padding: 0.55rem 1rem !important;
  }

  .back-link {
    font-size: 0.88rem;
  }

  .blog-not-found h1 {
    font-size: 1.2rem;
  }

  .blog-not-found p {
    font-size: 0.9rem;
  }
}

/* Light Mode Support */
:global(html[data-theme='light']) .blog-detail-page {
  color: #14251d;
}

:global(html[data-theme='light']) :deep(.blog-detail-header) {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .philippines-badge {
  background: #edf4f0;
  border-color: rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .blog-banner {
  background: #edf4f0;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .blog-article {
  background: #ffffff;
  color: #14251d;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .blog-article__header {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .blog-article__breadcrumbs {
  color: #55695e;
}

:global(html[data-theme='light']) .blog-article__breadcrumbs a {
  color: #047857;
}

:global(html[data-theme='light']) .blog-article__breadcrumbs a:hover {
  color: #065f46;
  text-decoration: underline;
}

:global(html[data-theme='light']) .blog-article__title {
  color: #14251d;
}

:global(html[data-theme='light']) .blog-article__meta {
  color: #55695e;
}

:global(html[data-theme='light']) .blog-article__body {
  color: #2d3748;
}

:global(html[data-theme='light']) .blog-article__body :deep(h1),
:global(html[data-theme='light']) .blog-article__body :deep(h2),
:global(html[data-theme='light']) .blog-article__body :deep(h3),
:global(html[data-theme='light']) .blog-article__body :deep(h4),
:global(html[data-theme='light']) .blog-article__body :deep(strong),
:global(html[data-theme='light']) .blog-article__body :deep(b) {
  color: #14251d;
}

:global(html[data-theme='light']) .blog-article__body :deep(p),
:global(html[data-theme='light']) .blog-article__body :deep(li) {
  color: #2d3748;
}

:global(html[data-theme='light']) .blog-article__body :deep(a) {
  color: #047857;
}

:global(html[data-theme='light']) .blog-article__body :deep(blockquote) {
  background: #f0fdf4;
  border-left-color: #07835c;
  color: #374151;
}

:global(html[data-theme='light']) .blog-article__body :deep(hr) {
  border-color: rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .blog-article__body :deep(code) {
  background: #edf4f0;
  color: #047857;
}

:global(html[data-theme='light']) .blog-article__body :deep(pre) {
  background: #f8fafc;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #1e293b;
}

:global(html[data-theme='light']) .blog-article__body :deep(.blog-table-block table) {
  border-color: rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .blog-article__body :deep(.blog-table-block th) {
  background-color: #f0fdf4;
  border-color: rgba(0, 0, 0, 0.1);
  color: #14251d;
}

:global(html[data-theme='light']) .blog-article__body :deep(.blog-table-block td) {
  border-color: rgba(0, 0, 0, 0.08);
  color: #2d3748;
}

:global(html[data-theme='light']) .blog-article__body :deep(.blog-faq-block),
:global(html[data-theme='light']) .blog-article__body :deep(.blog-faqs) {
  background: #f0fdf4 !important;
  border-color: rgba(16, 185, 129, 0.3) !important;
}

:global(html[data-theme='light']) .blog-article__body :deep(.blog-faq-item) {
  background: #ffffff !important;
  border-color: rgba(16, 185, 129, 0.22) !important;
}

:global(html[data-theme='light']) .blog-article__body :deep(.blog-faq-item summary) {
  color: #047857 !important;
}

:global(html[data-theme='light']) .blog-article__body :deep(.blog-faq-item p) {
  color: #1f2937 !important;
}

:global(html[data-theme='light']) .blog-countdown,
:global(html[data-theme='light']) :deep(.blog-countdown-block) {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5) !important;
  border-color: rgba(16, 185, 129, 0.35) !important;
}

:global(html[data-theme='light']) .blog-countdown__title,
:global(html[data-theme='light']) :deep(.blog-countdown-title) {
  color: #065f46 !important;
}

:global(html[data-theme='light']) :deep(.cd-box) {
  background: #ffffff !important;
  border-color: rgba(16, 185, 129, 0.28) !important;
}

:global(html[data-theme='light']) :deep(.cd-num) {
  color: #047857 !important;
}

:global(html[data-theme='light']) :deep(.cd-lbl),
:global(html[data-theme='light']) :deep(.cd-sep) {
  color: #059669 !important;
}

:global(html[data-theme='light']) .blog-countdown__expired {
  color: #065f46 !important;
}

:global(html[data-theme='light']) .blog-article__footer {
  border-top-color: rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .back-link {
  color: #047857;
}

:global(html[data-theme='light']) .blog-not-found {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .blog-not-found h1 {
  color: #14251d;
}

:global(html[data-theme='light']) .blog-not-found p {
  color: #64748b;
}
</style>
