<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

const props = withDefaults(defineProps<{
  blog: BlogPost
  layout?: 'featured' | 'grid' | 'row'
  headingTag?: 'h2' | 'h3'
}>(), {
  layout: 'grid',
  headingTag: 'h3',
})

const { resolveImage } = useBloggerist()

const imageUrl = computed(() => {
  return resolveImage(props.blog.featuredImage)
})

const metaText = computed(() => {
  const parts: string[] = []
  if (props.blog.category?.name) {
    parts.push(props.blog.category.name)
  }
  if (props.blog.date) {
    parts.push(props.blog.date)
  }
  if (props.blog.readTime) {
    parts.push(`${props.blog.readTime} min read`)
  }
  return parts.join(' • ')
})
</script>

<template>
  <NuxtLink
    :to="`/blog/${blog.slug}`"
    :class="[
      'blog-card',
      `blog-card--${layout}`,
      'light:border-black/10',
      layout !== 'row' ? 'light:bg-white light:shadow-sm' : 'light:hover:bg-[rgba(3,98,66,0.05)]',
    ]"
  >
    <div class="blog-card__media light:bg-[#edf4f0]">
      <img
        :src="imageUrl"
        :alt="blog.title"
        loading="lazy"
        decoding="async"
        @error="($event.target as HTMLImageElement).src = '/brand/bybet-logo.webp'"
      >
      <span v-if="blog.category?.name" class="blog-card__badge">
        {{ blog.category.name }}
      </span>
    </div>

    <div :class="['blog-card__copy', layout !== 'row' ? 'light:bg-white' : '']">
      <component :is="headingTag" class="blog-card__title light:text-[#14251d]">{{ blog.title }}</component>
      <span class="light:text-[#55695e]">{{ metaText }}</span>
      <p v-if="layout === 'row' && blog.excerpt" class="blog-card__excerpt light:text-[#55695e]">
        {{ blog.excerpt }}
      </p>
    </div>

    <span v-if="layout === 'row'" class="blog-card__action light:bg-[#edf4f0] light:text-[#3b5247] light:border light:border-[rgba(3,98,66,0.15)]">
      Read
    </span>
  </NuxtLink>
</template>

<style scoped>
.blog-card {
  display: block;
  overflow: hidden;
  min-width: 0;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 0.5rem;
  color: inherit;
  text-decoration: none;
  background: #064433;
  transition: border-color 150ms ease, transform 150ms ease;
}

.blog-card:hover {
  border-color: rgba(49, 214, 154, 0.42);
  transform: translateY(-1px);
}

.blog-card__media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 2 / 1;
  background: #1b1c1b;
}

.blog-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-card__badge {
  position: absolute;
  top: 0.28rem;
  left: 0.28rem;
  padding: 0.12rem 0.35rem;
  border-radius: 999px;
  color: #ffffff;
  font-size: 0.44rem;
  font-weight: 800;
  background: #07835c;
  box-shadow: 0 0.12rem 0.3rem rgba(0, 0, 0, 0.32);
}

.blog-card__copy {
  display: flex;
  min-width: 0;
  min-height: 2.15rem;
  flex-direction: column;
  justify-content: center;
  padding: 0.28rem 0.42rem 0.34rem;
  background: linear-gradient(180deg, #07543e, #064433);
}

.blog-card__copy .blog-card__title,
.blog-card__copy span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.blog-card__copy .blog-card__title {
  color: #ffffff;
  font-size: 0.6rem;
  font-weight: 800;
  line-height: 1.25;
}

.blog-card__copy span {
  margin-top: 0.08rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.46rem;
}

/* Row layout */
.blog-card--row {
  display: grid;
  min-height: 3.35rem;
  align-items: center;
  padding: 0.25rem 0.16rem;
  border-radius: 0.35rem;
  background: transparent;
  grid-template-columns: 2.35rem minmax(0, 1fr) auto;
  gap: 0.48rem;
  transition: background-color 140ms ease;
}

.blog-card--row:hover {
  background: rgba(255, 255, 255, 0.028);
}

.blog-card--row .blog-card__media {
  width: 2.35rem;
  height: 2.35rem;
  aspect-ratio: 1 / 1;
  border-radius: 0.34rem;
}

.blog-card--row .blog-card__badge {
  display: none;
}

.blog-card--row .blog-card__copy {
  padding: 0;
  background: transparent;
}

.blog-card--row .blog-card__copy .blog-card__title {
  color: #efefef;
  font-size: 0.6rem;
  font-weight: 750;
  line-height: 1.25;
}

.blog-card__excerpt {
  margin: 0.08rem 0 0;
  overflow: hidden;
  color: #959799;
  font-size: 0.45rem;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.blog-card__action {
  min-width: 2.6rem;
  padding: 0.28rem 0.45rem;
  border-radius: 0.32rem;
  color: #a3a6a4;
  font-size: 0.45rem;
  font-weight: 600;
  text-align: center;
  background: #222322;
}

@media (max-width: 63.99rem) {
  .blog-card__copy {
    min-height: 3.2rem;
    padding: 0.45rem 0.7rem 0.55rem;
  }
  .blog-card__copy .blog-card__title {
    font-size: 0.9rem;
  }
  .blog-card__copy span {
    font-size: 0.68rem;
  }
  .blog-card__badge {
    padding: 2px 7px;
    font-size: 11px;
  }
}

/* Light mode support */
:global(html[data-theme='light']) .blog-card {
  border-color: rgba(0, 0, 0, 0.08);
}

:global(html[data-theme='light']) .blog-card--row:hover {
  background: rgba(3, 98, 66, 0.05);
}

:global(html[data-theme='light']) .blog-card--row .blog-card__media {
  background: #edf4f0;
}

:global(html[data-theme='light']) .blog-card--row .blog-card__copy .blog-card__title {
  color: #14251d;
}

:global(html[data-theme='light']) .blog-card--row .blog-card__copy span,
:global(html[data-theme='light']) .blog-card__excerpt {
  color: #55695e;
}

:global(html[data-theme='light']) .blog-card--row .blog-card__action {
  border: 1px solid rgba(3, 98, 66, 0.15);
  color: #3b5247;
  background: #edf4f0;
}

:global(html[data-theme='light']) .blog-card--row .blog-card__action:hover {
  color: var(--main-color);
  background: rgba(3, 98, 66, 0.12);
}

:global(html[data-theme='light']) .blog-card--grid,
:global(html[data-theme='light']) .blog-card--featured {
  border-color: rgba(0, 0, 0, 0.08);
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(16, 38, 28, 0.05);
}

:global(html[data-theme='light']) .blog-card--grid:hover,
:global(html[data-theme='light']) .blog-card--featured:hover {
  border-color: rgba(3, 98, 66, 0.35);
  box-shadow: 0 4px 12px rgba(16, 38, 28, 0.08);
}

:global(html[data-theme='light']) .blog-card--grid .blog-card__media,
:global(html[data-theme='light']) .blog-card--featured .blog-card__media {
  background: #edf4f0;
}

:global(html[data-theme='light']) .blog-card--grid .blog-card__copy,
:global(html[data-theme='light']) .blog-card--featured .blog-card__copy {
  background: #ffffff;
}

:global(html[data-theme='light']) .blog-card--grid .blog-card__title,
:global(html[data-theme='light']) .blog-card--featured .blog-card__title {
  color: #14251d;
}

:global(html[data-theme='light']) .blog-card--grid .blog-card__copy span,
:global(html[data-theme='light']) .blog-card--featured .blog-card__copy span {
  color: #55695e;
}
</style>
