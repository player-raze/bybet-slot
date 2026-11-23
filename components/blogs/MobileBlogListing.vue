<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import MobileBlogHeader from './MobileBlogHeader.vue'
import type { BlogCategory, BlogPost } from '~/types/blog'

const props = withDefaults(defineProps<{
  category?: string
  categories: BlogCategory[]
  blogs: BlogPost[]
}>(), {
  category: 'all',
  categories: () => [],
  blogs: () => [],
})

const { resolveImage } = useBloggerist()

const track = ref<HTMLElement | null>(null)
const categoryNav = ref<HTMLElement | null>(null)
const activeSlide = ref(0)

const categoryPath = (slug: string): string => slug === 'all' ? '/blogs' : `/blogs/${slug}`

const activeCategoryLabel = computed(() => {
  if (props.category === 'all') return 'Blogs'
  const found = props.categories.find(c => c.slug === props.category)
  return found?.name || 'Blogs'
})

// Filtered blogs for current category view
const displayedBlogs = computed(() => {
  if (props.category === 'all') {
    return props.blogs
  }
  return props.blogs.filter(b => b.category?.slug === props.category || b.categoryId === props.category)
})

// Grouped sections when viewing 'all'
const groupedSections = computed(() => {
  return props.categories
    .filter(cat => (Number(cat.postCount) || 0) > 0)
    .map(cat => ({
      ...cat,
      items: props.blogs.filter(b => b.category?.slug === cat.slug || b.categoryId === cat.slug),
    }))
    .filter(section => section.items.length > 0)
})

const updateSlide = (): void => {
  const firstCard = track.value?.firstElementChild as HTMLElement | null
  if (track.value && firstCard) {
    activeSlide.value = Math.round(track.value.scrollLeft / (firstCard.offsetWidth + 8))
  }
}

const goToSlide = (index: number): void => {
  const card = track.value?.children[index] as HTMLElement | undefined
  if (card && track.value) {
    track.value.scrollTo({ left: card.offsetLeft - track.value.offsetLeft, behavior: 'smooth' })
  }
}

const revealCategory = async (): Promise<void> => {
  await nextTick()
  const active = categoryNav.value?.querySelector<HTMLElement>('[aria-current="page"]')
  if (active && categoryNav.value) {
    categoryNav.value.scrollLeft = Math.max(0, active.offsetLeft - 64)
  }
  activeSlide.value = 0
}

onMounted(() => {
  revealCategory()
})

watch(() => props.category, revealCategory)
</script>

<template>
  <div class="mobile-blogs light:bg-[#eef5f1] light:text-[#14251d]">
    <div class="mobile-blogs__sticky light:bg-[#eef5f1]">
      <MobileBlogHeader
        :title="activeCategoryLabel"
        :back-to="category === 'all' ? '/' : '/blogs'"
      />
      <nav ref="categoryNav" class="mobile-blogs__categories mx-1 light:bg-white light:border light:border-black/10" aria-label="Blog categories">
        <NuxtLink
          :to="categoryPath('all')"
          :aria-current="category === 'all' ? 'page' : undefined"
        >
          All
        </NuxtLink>
        <NuxtLink
          v-for="cat in categories"
          :key="cat.id"
          :to="categoryPath(cat.slug)"
          :aria-current="category === cat.slug ? 'page' : undefined"
        >
          {{ cat.name }}
        </NuxtLink>
      </nav>
    </div>

    <!-- Featured Banners / Carousel -->
    <section
      class="mobile-blogs__banners"
      :aria-label="category === 'all' ? 'Featured blogs' : `${activeCategoryLabel} blogs`"
    >
      <h2 v-if="category === 'all' && displayedBlogs.length" class="sr-only">Featured articles</h2>
      <div
        ref="track"
        :class="category === 'all' ? 'mobile-blogs__carousel' : 'mobile-blogs__stack'"
        @scroll.passive="updateSlide"
      >
        <NuxtLink
          v-for="(blog, index) in displayedBlogs"
          :key="blog.id"
          :to="`/blog/${blog.slug}`"
          class="mobile-blog-card light:bg-white light:border light:border-black/10 light:text-[#14251d]"
        >
          <div class="mobile-blog-card__image light:bg-[#edf4f0]">
            <img
              :src="resolveImage(blog.featuredImage)"
              :alt="blog.title"
              :loading="index < 2 ? 'eager' : 'lazy'"
              decoding="async"
              @error="($event.target as HTMLImageElement).src = '/brand/bybet-logo.webp'"
            >
            <span v-if="blog.category?.name" class="mobile-blog-card__badge">
              {{ blog.category.name }}
            </span>
          </div>
          <div class="mobile-blog-card__copy light:bg-white">
            <component :is="category === 'all' ? 'h3' : 'h2'" class="mobile-blog-title light:text-[#14251d]">{{ blog.title }}</component>
            <span class="light:text-[#55695e]">{{ blog.date }} • {{ blog.readTime || 1 }} min read</span>
          </div>
        </NuxtLink>
      </div>

      <!-- Carousel controls for 'all' -->
      <template v-if="category === 'all' && displayedBlogs.length > 1">
        <button
          v-if="activeSlide < displayedBlogs.length - 1"
          class="mobile-blogs__next light:bg-white light:text-[#14251d] light:border light:border-black/10"
          type="button"
          aria-label="Next featured blog"
          @click="goToSlide(activeSlide + 1)"
        >
          <ChevronRight :size="20" />
        </button>
        <div class="mobile-blogs__dots" aria-label="Featured blog slides">
          <button
            v-for="(blog, index) in displayedBlogs"
            :key="blog.id"
            type="button"
            :aria-label="`Show ${blog.title}`"
            :aria-pressed="activeSlide === index"
            @click="goToSlide(index)"
          />
        </div>
      </template>
    </section>

    <!-- Category Groups (when category === 'all') -->
    <div v-if="category === 'all'" class="mobile-blogs__groups">
      <section
        v-for="section in groupedSections"
        :key="section.id"
        class="mobile-blogs__group light:bg-white light:border light:border-black/10"
      >
        <NuxtLink class="mobile-blogs__heading light:text-[#14251d]" :to="categoryPath(section.slug)">
          <h2>{{ section.name }}</h2>
          <ChevronRight :size="20" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink
          v-for="blog in section.items"
          :key="blog.id"
          :to="`/blog/${blog.slug}`"
          class="mobile-blog-row light:border-black/10 light:text-[#14251d] light:hover:bg-[rgba(3,98,66,0.04)]"
        >
          <img
            :src="resolveImage(blog.featuredImage)"
            :alt="blog.title"
            loading="lazy"
            width="54"
            height="54"
            class="light:bg-[#edf4f0]"
            @error="($event.target as HTMLImageElement).src = '/brand/bybet-logo.webp'"
          >
          <div class="mobile-blog-row__copy">
            <component :is="category === 'all' ? 'h3' : 'h2'" class="mobile-blog-title light:text-[#14251d]">{{ blog.title }}</component>
            <small class="light:text-[#55695e]">{{ blog.excerpt || blog.title }}</small>
          </div>
          <span class="mobile-blog-row__details light:bg-[#edf4f0] light:text-[#3b5247] light:border light:border-[rgba(3,98,66,0.15)]">Read</span>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<style scoped>
.mobile-blogs { display: none; }
@media (max-width: 63.99rem) {
  .mobile-blogs {
    display: block;
    color: #f5f5f5;
    background: #000;
    padding-bottom: 8px;
  }
  .mobile-blogs__sticky {
    position: sticky;
    top: 0;
    z-index: 40;
    background: #000;
  }
  .mobile-blogs__categories {
    position: relative;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    align-items: center;
    height: 48px;
    padding: 8px;
    scrollbar-width: none;
    background: #111;
    border-radius: 12px;
  }
  .mobile-blogs__categories::-webkit-scrollbar,
  .mobile-blogs__carousel::-webkit-scrollbar {
    display: none;
  }
  .mobile-blogs__categories a {
    flex: 0 0 auto;
    padding: 6px 12px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    text-decoration: none;
    color: #c3c5c4;
  }
  .mobile-blogs__categories a[aria-current="page"] {
    background: var(--main-color);
    color: #ffffff;
  }
  .mobile-blogs__banners {
    position: relative;
    margin-top: 8px;
  }
  .mobile-blogs__carousel {
    position: relative;
    display: flex;
    gap: 8px;
    padding: 0 10px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 10px;
    scrollbar-width: none;
  }
  .mobile-blog-card {
    display: block;
    overflow: hidden;
    min-width: 0;
    border-radius: 16px;
    background: #003e2b;
    scroll-snap-align: start;
    text-decoration: none;
    color: inherit;
  }
  .mobile-blogs__carousel .mobile-blog-card {
    flex: 0 0 68%;
  }
  .mobile-blog-card__image {
    position: relative;
    aspect-ratio: 2 / 1;
    overflow: hidden;
    background: #141414;
  }
  .mobile-blog-card__image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mobile-blog-card__badge {
    position: absolute;
    top: 8px;
    left: 8px;
    padding: 2px 7px;
    border-radius: 20px;
    background: #07835c;
    font-size: 11px;
    font-weight: 700;
    color: #fff;
  }
  .mobile-blog-card__copy {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 8px 12px 10px;
  }
  .mobile-blog-card__copy .mobile-blog-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 800;
    line-height: 22px;
  }
  .mobile-blog-card__copy span {
    font-size: 12px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.7);
  }
  .mobile-blogs__next {
    position: absolute;
    top: 32%;
    right: 14px;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #141414;
    color: #fff;
    border: 0;
    cursor: pointer;
  }
  .mobile-blogs__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    height: 20px;
  }
  .mobile-blogs__dots button {
    position: relative;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background: #292929;
    border: 0;
    padding: 0;
  }
  .mobile-blogs__dots button::after {
    position: absolute;
    content: '';
    inset: -7px -1px;
  }
  .mobile-blogs__dots button[aria-pressed="true"] {
    width: 12px;
    background: #777;
  }
  .mobile-blogs__stack {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 10px;
  }
  .mobile-blogs__groups {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 10px;
    margin-top: 8px;
  }
  .mobile-blogs__group {
    background: #141414;
    border-radius: 12px;
    overflow: hidden;
  }
  .mobile-blogs__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    text-decoration: none;
    color: #fff;
  }
  .mobile-blogs__heading h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
  }
  .mobile-blogs__heading svg {
    color: #888;
  }
  .mobile-blog-row {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
    min-height: 78px;
    padding: 12px;
    text-decoration: none;
    color: inherit;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  .mobile-blog-row > img {
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 8px;
  }
  .mobile-blog-row__copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
  }
  .mobile-blog-row__copy .mobile-blog-title,
  .mobile-blog-row__copy small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mobile-blog-row__copy .mobile-blog-title {
    font-size: 15px;
    font-weight: 800;
    line-height: 22px;
    color: #fff;
  }
  .mobile-blog-row__copy small {
    color: #999;
    font-size: 12px;
    line-height: 18px;
  }
  .mobile-blog-row__details {
    padding: 7px 8px;
    border-radius: 8px;
    background: #242424;
    font-size: 12px;
    color: #ccc;
  }
}

/* Light mode support */
:global(html[data-theme='light']) .mobile-blogs {
  background: var(--page);
  color: #14251d;
}

:global(html[data-theme='light']) .mobile-blogs__sticky {
  background: var(--page);
}

:global(html[data-theme='light']) .mobile-blogs__categories {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .mobile-blogs__categories a {
  color: #55695e;
}

:global(html[data-theme='light']) .mobile-blogs__categories a[aria-current="page"] {
  background: var(--main-color);
  color: #ffffff;
}

:global(html[data-theme='light']) .mobile-blog-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
  color: #14251d;
}

:global(html[data-theme='light']) .mobile-blog-card__image {
  background: #edf4f0;
}

:global(html[data-theme='light']) .mobile-blog-card__copy {
  background: #ffffff;
}

:global(html[data-theme='light']) .mobile-blog-card__copy .mobile-blog-title {
  color: #14251d;
}

:global(html[data-theme='light']) .mobile-blog-card__copy span {
  color: #55695e;
}

:global(html[data-theme='light']) .mobile-blogs__next {
  background: #ffffff;
  color: #14251d;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .mobile-blogs__dots button {
  background: #cbd9d1;
}

:global(html[data-theme='light']) .mobile-blogs__dots button[aria-pressed="true"] {
  background: #07835c;
}

:global(html[data-theme='light']) .mobile-blogs__group {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .mobile-blogs__heading {
  color: #14251d;
}

:global(html[data-theme='light']) .mobile-blogs__heading svg {
  color: #55695e;
}

:global(html[data-theme='light']) .mobile-blog-row {
  border-top-color: rgba(0, 0, 0, 0.08);
  color: #14251d;
}

:global(html[data-theme='light']) .mobile-blog-row:hover {
  background: rgba(3, 98, 66, 0.04);
}

:global(html[data-theme='light']) .mobile-blog-row > img {
  background: #edf4f0;
}

:global(html[data-theme='light']) .mobile-blog-row__copy .mobile-blog-title {
  color: #14251d;
}

:global(html[data-theme='light']) .mobile-blog-row__copy small {
  color: #55695e;
}

:global(html[data-theme='light']) .mobile-blog-row__details {
  border: 1px solid rgba(3, 98, 66, 0.15);
  color: #3b5247;
  background: #edf4f0;
}
</style>
