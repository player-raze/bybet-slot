<script setup lang="ts">
import { gameCategories, mobileQuickCategories } from '~/data/homepage'

const { translate } = useSiteLocale()
</script>

<template>
  <nav class="category-tabs category-tabs--desktop" :aria-label="translate('Game categories')">
    <NuxtLink
      v-for="(category, index) in gameCategories"
      :key="category.label"
      :to="category.to"
      :class="{ 'category-tab--active': index === 0 }"
    >
      <component
        :is="category.icon"
        class="category-icon"
        :style="{ color: category.accentColor }"
        :size="12"
        :stroke-width="2.2"
        fill="none"
        aria-hidden="true"
      />
      <span>{{ translate(category.label) }}</span>
    </NuxtLink>
  </nav>

  <nav class="category-tabs category-tabs--mobile" :aria-label="translate('Quick filters')">
    <NuxtLink
      v-for="(category, index) in mobileQuickCategories"
      :key="`mobile-${category.label}`"
      :to="category.to"
      :class="{ 'category-tab--active': index === 0 }"
    >
      <component
        :is="category.icon"
        class="category-icon"
        :style="{ color: category.accentColor }"
        :size="14"
        :stroke-width="2.2"
        fill="none"
        aria-hidden="true"
      />
      <span>{{ translate(category.label) }}</span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.category-tabs {
  display: flex;
  gap: 0.28rem;
}

.category-tabs--desktop {
  margin-top: 0.22rem;
}

.category-tabs--mobile {
  display: none;
}

.category-tabs a {
  display: flex;
  position: relative;
  isolation: isolate;
  min-width: 0;
  height: 2.3rem;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  padding: 0 0.3rem;
  overflow: hidden;
  border: 1px solid rgba(214, 232, 222, 0.22);
  border-radius: 0.5rem;
  color: #d3dfd9;
  font-size: 0.42rem;
  font-weight: 600;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 48%),
    linear-gradient(135deg, rgba(47, 114, 89, 0.12), rgba(3, 10, 8, 0.62));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.2),
    inset 0 -1px rgba(0, 0, 0, 0.32),
    0 0.2rem 0.55rem rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(18px) saturate(1.45);
  -webkit-backdrop-filter: blur(18px) saturate(1.45);
  white-space: nowrap;
  gap: 0.3rem;
  text-decoration: none;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.category-tabs a > * {
  position: relative;
  z-index: 1;
}

.category-tabs a::before {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 7%;
  left: 7%;
  height: 48%;
  border-radius: 0 0 50% 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent);
  content: '';
  pointer-events: none;
}

.category-tabs a::after {
  position: absolute;
  z-index: 0;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(95% 80% at 0% 0%, rgba(255, 255, 255, 0.34), transparent 58%),
    radial-gradient(70% 55% at 100% 0%, rgba(255, 255, 255, 0.14), transparent 52%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 28%);
  box-shadow:
    inset 1px 1px 0 rgba(255, 255, 255, 0.22),
    inset -1px -1px 0 rgba(255, 255, 255, 0.04);
  content: '';
  pointer-events: none;
}

.category-tabs a:hover {
  border-color: rgba(96, 235, 184, 0.46);
  color: white;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 50%),
    linear-gradient(135deg, rgba(50, 212, 154, 0.2), rgba(4, 42, 30, 0.7));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.26),
    inset 0 -1px rgba(0, 24, 16, 0.34),
    0 0.26rem 0.7rem rgba(0, 0, 0, 0.3),
    0 0 0.5rem rgba(50, 212, 154, 0.08);
  transform: translateY(-1px);
}

.category-tabs a:hover::after {
  background:
    radial-gradient(95% 80% at 0% 0%, rgba(255, 255, 255, 0.42), transparent 58%),
    radial-gradient(70% 55% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 52%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, transparent 30%);
}

.category-icon {
  flex: 0 0 auto;
}

.category-tabs .category-tab--active {
  border-color: rgba(91, 230, 179, 0.5);
  color: white;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.17), transparent 48%),
    linear-gradient(135deg, rgba(50, 212, 154, 0.28), rgba(3, 72, 50, 0.68));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.3),
    inset 0 -1px rgba(0, 28, 19, 0.34),
    0 0.22rem 0.62rem rgba(3, 98, 66, 0.26),
    0 0 0.55rem rgba(50, 212, 154, 0.1);
}

.category-tabs .category-tab--active::after {
  background:
    radial-gradient(95% 80% at 0% 0%, rgba(255, 255, 255, 0.38), transparent 58%),
    radial-gradient(70% 55% at 100% 0%, rgba(255, 255, 255, 0.18), transparent 52%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, transparent 28%);
  box-shadow:
    inset 1px 1px 0 rgba(255, 255, 255, 0.28),
    inset -1px -1px 0 rgba(255, 255, 255, 0.06);
}

@media (min-width: 48rem) {
  .category-tabs a {
    font-size: 0.56rem;
  }

  .category-icon {
    width: 1rem;
    height: 1rem;
  }
}

@media (max-width: 63.99rem) {
  .category-tabs--desktop {
    display: flex;
    margin-top: 0.38rem;
    margin-right: calc(var(--page-padding) * -1);
    padding-right: var(--page-padding);
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    touch-action: pan-x;
    -webkit-overflow-scrolling: touch;
  }

  .category-tabs--desktop::-webkit-scrollbar {
    display: none;
  }

  .category-tabs--desktop a {
    min-width: clamp(6.2rem, 22vw, 9.2rem);
    height: 2.5rem;
    flex: 0 0 auto;
    padding-inline: 0.65rem;
    border-radius: 0.42rem;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  .category-tabs--mobile {
    display: none;
  }
}

</style>
