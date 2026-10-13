<script setup lang="ts">
import { Bell, Headphones, Menu, UserRound, X } from 'lucide-vue-next'

defineProps<{
  drawerOpen: boolean
}>()

const emit = defineEmits<{
  'toggle-drawer': []
}>()

const { translate } = useSiteLocale()
const externalSiteUrl = 'https://bybet.com/'
</script>

<template>
  <header class="app-header">
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
        src="/brand/bybet-logo.png"
        alt="ByBet"
        width="195"
        height="64"
        fetchpriority="high"
        decoding="async"
      >
    </NuxtLink>

    <div class="header-actions">
      <a class="header-icon-button" :href="externalSiteUrl" target="_blank" rel="nofollow noopener noreferrer" aria-label="Open ByBet notifications in a new tab">
        <Bell :size="14" />
      </a>
      <a class="header-icon-button" :href="externalSiteUrl" target="_blank" rel="nofollow noopener noreferrer" aria-label="Open ByBet support in a new tab">
        <Headphones :size="14" />
      </a>
      <a class="login-button" :href="externalSiteUrl" target="_blank" rel="nofollow noopener noreferrer">{{ translate('Login') }}</a>
      <a class="signup-button" :href="externalSiteUrl" target="_blank" rel="nofollow noopener noreferrer">{{ translate('Sign Up') }}</a>
      <a class="profile-button" :href="externalSiteUrl" target="_blank" rel="nofollow noopener noreferrer" aria-label="Open ByBet profile in a new tab">
        <UserRound :size="14" fill="currentColor" />
      </a>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
  align-items: center;
  padding:
    0 max(0.45rem, calc((100vw - var(--site-max-width)) / 2 + 0.45rem))
    0 max(0.8rem, calc((100vw - var(--site-max-width)) / 2 + 0.8rem));
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background:
    linear-gradient(180deg, #036242, #036242);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.12),
    0 0.2rem 0.8rem rgba(0, 25, 17, 0.22);
  backdrop-filter: blur(16px) saturate(1.25);
  -webkit-backdrop-filter: blur(16px) saturate(1.25);
}

.brand {
  display: flex;
  align-items: center;
}

.brand img {
  display: block;
  width: 3.5rem;
  height: auto;
}

.header-actions {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0.3rem;
}

.header-actions a,
.menu-button {
  display: grid;
  position: relative;
  min-width: 1.55rem;
  height: 1.45rem;
  place-items: center;
  padding: 0 0.35rem;
  border: 0;
  border-radius: 0.3rem;
  color: #d7e5de;
  font-size: 0.52rem;
  font-weight: 700;
  background: transparent;
}

.header-actions a:hover {
  border-color: rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.18);
}

.header-actions .header-icon-button,
.header-actions .profile-button {
  min-width: 1.35rem;
  width: 1.35rem;
  height: 1.35rem;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 50%;
  color: white;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(0, 35, 24, 0.14));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.2),
    0 0.16rem 0.38rem rgba(0, 33, 23, 0.16);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.header-actions .profile-button {
  border-width: 2px;
}

.header-actions .header-icon-button svg,
.header-actions .profile-button svg {
  width: 0.82rem;
  height: 0.82rem;
}

.header-actions .login-button,
.header-actions .signup-button {
  min-width: 4rem;
  height: 1.35rem;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 0.3rem;
  color: white;
  font-size: 0.50rem;
  font-weight: 600;
}

.header-actions .login-button {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(0, 30, 21, 0.15));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.14),
    0 0.14rem 0.36rem rgba(0, 31, 21, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.header-actions .signup-button {
  min-width: 4.1rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.2),
    0 0.14rem 0.36rem rgba(0, 31, 21, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.header-actions .signup-button:hover {
  background: rgba(255, 255, 255, 0.22);
}

.menu-button {
  display: none;
  margin-right: 0.25rem;
}

@media (min-width: 48rem) {
  .brand img {
    width: 4rem;
  }

  .header-actions a,
  .menu-button {
    font-size: 0.62rem;
  }

}

@media (max-width: 63.99rem) {
  .app-header {
    padding: 0 0.5rem;
  }

  .menu-button {
    display: grid;
  }

  .header-actions > a:first-child,
  .header-actions > a:nth-child(2),
  .login-button {
    display: none;
  }
}
</style>
