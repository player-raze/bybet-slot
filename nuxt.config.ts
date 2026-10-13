import { defineNuxtConfig } from 'nuxt/config'

const nodeEnvironment = (
  globalThis as typeof globalThis & {
    process?: {
      env?: {
        NODE_ENV?: string
      }
    }
  }
).process?.env?.NODE_ENV

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  buildDir: nodeEnvironment === 'production' ? 'node_modules/.cache/bybet-nuxt-build' : '.nuxt',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#080D0B' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon.png' },
        {
          rel: 'preload',
          as: 'image',
          href: '/hero/slots-games.png',
          fetchpriority: 'high',
        },
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
