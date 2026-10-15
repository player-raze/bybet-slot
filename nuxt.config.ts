import { defineNuxtConfig } from 'nuxt/config'

const environment = (
  globalThis as typeof globalThis & {
    process?: {
      env?: {
        NODE_ENV?: string
        KADARIO_API?: string
      }
    }
  }
).process?.env

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  buildDir: environment?.NODE_ENV === 'production' ? 'node_modules/.cache/bybet-nuxt-build' : '.nuxt',
  devtools: { enabled: false },
  runtimeConfig: {
    kadarioApi: environment?.KADARIO_API || 'https://live88.eu.cc/',
    kadarioSite: 'YBa-BnymZ6iN8pkfAUFTWIKn',
  },
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
