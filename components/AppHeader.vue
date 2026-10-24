<script setup lang="ts">
import { MessageCircle, Bell, Headphones, Menu, UserRound, X } from 'lucide-vue-next'

defineProps<{
  drawerOpen: boolean
}>()

const emit = defineEmits<{
  'toggle-drawer': []
}>()

const { translate } = useSiteLocale()
const { context, openSportsComments, openGameComments, closeComments } = useCommentPanel()
const route = useRoute()

const openPageComments = (): void => {
  if (context.value) {
    closeComments()
    return
  }

  if (route.path.startsWith('/explore/sports/')) {
    openSportsComments()
    void nextTick(() => {
      document.getElementById('comment-panel')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    })
    return
  }

  openGameComments()
}
const externalSiteUrl = useRuntimeConfig().public.bybetRedirectUrl
</script>

<template>
  <header class="app-header-shell">
    <button
      class="menu-button"
      type="button"
      :aria-expanded="drawerOpen"
      aria-controls="mobile-navigation"
      :aria-label="drawerOpen ? translate('Close navigation') : translate('Open navigation')"
      @click="emit('toggle-drawer')"
    >
      <X v-if="drawerOpen" :size="17" />
      <Menu v-else :size="17" />
    </button>

    <NuxtLink class="brand" to="/" aria-label="ByBet home">
      <img
        src="/brand/bybet-logo.webp"
        alt="ByBet"
        width="195"
        height="64"
        fetchpriority="high"
        decoding="async"
      >
    </NuxtLink>

    <div class="header-actions">
    
      <a
        class="header-glass-icon header-glass-icon--utility"
        :href="externalSiteUrl"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Open ByBet notifications in a new tab"
      >
        <Bell :size="15" :stroke-width="2" />
      </a>
      <a
        class="header-glass-icon header-glass-icon--utility"
        :href="externalSiteUrl"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Open ByBet support in a new tab"
      >
        <Headphones :size="15" :stroke-width="2" />
      </a>
      <a
        class="header-glass-button header-glass-button--login"
        :href="externalSiteUrl"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {{ translate('Login') }}
      </a>
      <a
        class="header-glass-button header-glass-button--signup"
        :href="externalSiteUrl"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {{ translate('Sign Up') }}
      </a>
      <a
        class="header-glass-icon header-glass-icon--profile"
        :href="externalSiteUrl"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Open ByBet profile in a new tab"
      >
        <svg id="_圖層_1" data-name="圖層_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 56 56" class="h-full w-full"><path d="M28,0C12.54,0,0,12.54,0,28s12.54,28,28,28,28-12.54,28-28S43.46,0,28,0ZM28,12.26c3.53,0,6.41,2.86,6.41,6.41s-2.86,6.41-6.41,6.41-6.41-2.86-6.41-6.41,2.86-6.41,6.41-6.41ZM28,49.5c-9.97,0-18.03-5.07-18.03-11.28s8.06-11.28,18.03-11.28,18.03,5.07,18.03,11.28-8.06,11.28-18.03,11.28Z" class="fill-theme-header-text"></path><path d="M28,25.09c3.56,0,6.41-2.88,6.41-6.41s-2.88-6.41-6.41-6.41-6.41,2.86-6.41,6.41,2.88,6.41,6.41,6.41Z" class="fill-transparent"></path><path d="M28,26.94c-9.97,0-18.03,5.07-18.03,11.28s8.06,11.28,18.03,11.28,18.03-5.07,18.03-11.28-8.06-11.28-18.03-11.28Z" class="fill-transparent"></path></svg>
      </a>
    </div>
  </header>
</template>

<style scoped>
.app-header-shell {
  --header-control-size: 32px;
  --header-button-radius: 7px;
  --header-action-gap: 6px;

  display: flex;
  position: fixed;
  z-index: 30;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
  align-items: center;
  padding:
    0 max(0.55rem, calc((100vw - var(--site-max-width)) / 2 + 0.55rem))
    0 max(0.85rem, calc((100vw - var(--site-max-width)) / 2 + 0.85rem));
  pointer-events: none;
  background: transparent;
}

.brand,
.header-actions,
.menu-button {
  position: relative;
  z-index: 30;
  pointer-events: auto;
}

.brand {
  display: flex;
  align-items: center;
}

.brand img {
  display: block;
  width: 3.35rem;
  height: auto;
}

.header-actions {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: var(--header-action-gap);
}

.header-glass-icon,
.header-glass-button,
.menu-button {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  flex: 0 0 auto;
  text-decoration: none;
}

.header-glass-icon {
  display: grid;
  width: var(--header-control-size);
  height: var(--header-control-size);
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 50%;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;
}

.header-glass-icon:hover {
  border-color: rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.14);
}

.header-glass-icon--profile {
  border-width: 1.5px;
}

.header-glass-button {
  display: inline-flex;
  min-width: 68px;
  height: var(--header-control-size);
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.46);
  border-radius: var(--header-button-radius);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  transition:
    border-color 160ms ease,
    filter 160ms ease,
    background-color 160ms ease;
}

.header-glass-button--login {
  min-width: 68px;
  background: rgba(255, 255, 255, 0.2);
}

.header-glass-button--signup {
  min-width: 80px;
  border-color: rgba(255, 255, 255, 0.54);
  background: rgba(255, 255, 255, 0.2);
}

.header-glass-button:hover {
  border-color: rgba(255, 255, 255, 0.68);
  filter: brightness(1.04);
}

.menu-button {
  display: none;
  width: var(--header-control-size);
  height: var(--header-control-size);
  place-items: center;
  margin-right: 0.25rem;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 50%;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
}

@media (min-width: 48rem) {
  .app-header-shell {
    --header-control-size: 28px;
    --header-button-radius: 6px;
    --header-action-gap: 6px;
  }

  .brand img {
    width: 85px;
  }

  .header-glass-button {
    font-size: 11px;
  }

  .header-glass-button--login {
    min-width: 68px;
  }

  .header-glass-button--signup {
    min-width: 80px;
  }
}

@media (max-width: 63.99rem) {
  .app-header-shell {
    padding: 0 0.5rem;
  }

  .menu-button {
    display: grid;
  }

  .header-actions > .header-glass-icon--utility,
  .header-actions > .header-glass-button--login {
    display: none;
  }
}
</style>
