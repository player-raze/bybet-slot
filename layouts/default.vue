<script setup lang="ts">
import { X } from 'lucide-vue-next'
import MobileBottomNav from '~/components/MobileBottomNav.vue'
import CommentPanel from '~/components/comments/CommentPanel.vue'

const { context: commentContext, openSportsComments, closeComments } = useCommentPanel()
const route = useRoute()
const isSportsPage = computed(() => route.path.startsWith('/explore/sports/'))

watch(() => route.path, () => {
  if (isSportsPage.value) {
    openSportsComments()
  } else {
    closeComments()
  }
}, { immediate: true })

const drawerOpen = ref(false)
const railCollapsed = ref(true)
const pageContentElement = ref<HTMLElement | null>(null)
let sectionRevealObserver: IntersectionObserver | undefined
const {
  clearDemoMessage,
  showDemoMessage,
  toastMessage,
} = useDemoInteraction()

const closeDrawer = (): void => {
  drawerOpen.value = false
}

const toggleRailCollapsed = (): void => {
  railCollapsed.value = !railCollapsed.value
}

const handleEscape = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    closeDrawer()
  }
}

const initializeSectionMotion = (): void => {
  if (!pageContentElement.value) {
    return
  }

  const reducedMotionPreferred = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotionPreferred) {
    return
  }

  const sectionElements = Array.from(pageContentElement.value.children) as HTMLElement[]
  pageContentElement.value.classList.add('page-content--motion-ready')
  sectionRevealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue
        }

        entry.target.classList.add('section-reveal--visible')
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -5% 0px',
    },
  )

  sectionElements.forEach((sectionElement, index) => {
    sectionElement.classList.add('section-reveal')
    sectionElement.style.setProperty('--section-reveal-delay', `${(index % 3) * 35}ms`)
    sectionRevealObserver?.observe(sectionElement)
  })
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  initializeSectionMotion()
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
  sectionRevealObserver?.disconnect()
  clearDemoMessage()
})
</script>

<template>
  <div id="home" class="site-shell" :class="{ 'site-shell--rail-collapsed': railCollapsed, 'site-shell--sports-chat': isSportsPage && Boolean(commentContext) }">
    <AppHeader
      :drawer-open="drawerOpen"
      @toggle-drawer="drawerOpen = !drawerOpen"
    />
    <AppSidebar
      :open="drawerOpen"
      :collapsed="railCollapsed"
      @close="closeDrawer"
      @toggle-collapse="toggleRailCollapsed"
      @demo-action="showDemoMessage"
    />

    <div class="content-layout">
      <main ref="pageContentElement" class="page-content pt-0">
        <slot />
      </main>

      <CommentPanel
        v-if="commentContext"
        :key="isSportsPage ? 'sports-sidebar' : 'game-dialog'"
        :docked="isSportsPage"
      />
    </div>

    <AppFooter />
    <MobileBottomNav />

    <Transition name="toast">
      <div v-if="toastMessage" class="demo-toast" role="status">
        <span>{{ toastMessage }}</span>
        <button type="button" aria-label="Dismiss message" @click="clearDemoMessage">
          <X :size="12" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.site-shell {
  --content-gutter: 0.5rem;
  --comment-panel-width: min(375px, 23.4375rem);
  --sidebar-width: 175px;

  position: relative;
  width: 100%;
  max-width: var(--site-max-width);
  min-height: 100vh;
  margin: 0 auto;
  padding-top: var(--header-height);
}

.site-shell--rail-collapsed {
  --sidebar-width: 72px;
}

.content-layout {
  top: -12px;
  z-index: 50;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  overflow: scroll;
  min-width: 0;
  margin-left: var(--sidebar-width);
  transition: margin-left 180ms ease;
}

.page-content {
  min-width: 0;
  min-height: calc(100vh - var(--header-height));
  width: 100%;
  padding: 0 0.62rem 0 var(--content-gutter);
}

.page-content--motion-ready > :deep(.section-reveal) {
  opacity: 0;
  transform: translate3d(0, 0.8rem, 0) scale(0.995);
  transition:
    opacity 460ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 460ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--section-reveal-delay, 0ms);
  will-change: opacity, transform;
}

.page-content--motion-ready > :deep(.section-reveal--visible) {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.demo-toast {
  display: flex;
  position: fixed;
  z-index: 80;
  right: 0.65rem;
  bottom: 0.65rem;
  min-height: 2.3rem;
  align-items: center;
  padding: 0.45rem 0.45rem 0.45rem 0.7rem;
  border: 1px solid rgba(50, 212, 154, 0.25);
  border-radius: 0.4rem;
  color: white;
  font-size: 0.55rem;
  background: #10271d;
  box-shadow: 0 0.7rem 1.8rem rgba(0, 0, 0, 0.42);
  gap: 0.6rem;
}

.demo-toast button {
  display: grid;
  width: 1.55rem;
  height: 1.55rem;
  place-items: center;
  border: 0;
  border-radius: 0.3rem;
  color: var(--secondary);
  background: rgba(255, 255, 255, 0.05);
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 140ms ease, transform 140ms ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(0.35rem);
}

@media (min-width: 1280px) {
  .site-shell--sports-chat .content-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) var(--comment-panel-width);
    align-items: start;
    gap: 8px;
  }
}

@media (max-width: 63.99rem) {
  .content-layout {
    margin-left: 0;
  }

  .page-content {
    padding: 0.5rem var(--page-padding) 0;
    background: #000000;
  }
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .page-content :deep(.promotion-grid a:hover),
  .page-content :deep(.jackpot-grid > a:hover),
  .page-content :deep(.provider-grid a:hover) {
    transform: translateY(-2px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-content--motion-ready > :deep(.section-reveal),
  .page-content--motion-ready > :deep(.section-reveal--visible) {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
@media screen and (max-width: 900px) {
  .content-layout {
    top: 0;
    z-index: 0;
    position: block;
  }
}
</style>
