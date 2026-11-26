import { defineNuxtConfig } from 'nuxt/config'
import { resolveViteAllowedHosts } from './utils/viteAllowedHosts'
import { normalizeBloggeristUrl } from './utils/bloggeristUrl'

const environment = (
  globalThis as typeof globalThis & {
    process?: {
      env?: {
        NODE_ENV?: string
        SPORTS_API?: string
        SPORTS_API_KEY?: string
        USE_ODDS_API?: string
        KADARIO_API?: string
        BYBET_REDIRECT_URL?: string
        BYBET_REDIRECT_CODE?: string
        SITE_NAME?: string
        SITE_URL?: string
        INDEX_FOLLOW?: string
        BLOGGERIST_URL?: string
        PORT?: string
        NITRO_PORT?: string
        NUXT_PORT?: string
        HOST?: string
        NITRO_HOST?: string
        NUXT_HOST?: string
        ALLOWED_HOSTS?: string
        VITE_ALLOWED_HOSTS?: string
      }
    }
  }
).process?.env

const isIndexFollow = environment?.INDEX_FOLLOW === 'true'
const rawDevPort = environment?.NUXT_PORT || environment?.NITRO_PORT || environment?.PORT
const parsedDevPort = rawDevPort ? Number.parseInt(rawDevPort, 10) : NaN
const devHost = (environment?.NUXT_HOST || environment?.NITRO_HOST || environment?.HOST || '').trim()
const viteAllowedHosts = resolveViteAllowedHosts(environment)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  buildDir: environment?.NODE_ENV === 'production' ? 'node_modules/.cache/bybet-nuxt-build' : '.nuxt',
  devtools: { enabled: false },
  ...((Number.isInteger(parsedDevPort) && parsedDevPort > 0) || devHost
    ? {
        devServer: {
          ...(Number.isInteger(parsedDevPort) && parsedDevPort > 0 ? { port: parsedDevPort } : {}),
          ...(devHost ? { host: devHost } : {}),
        },
      }
    : {}),
  vite: {
    server: {
      allowedHosts: viteAllowedHosts,
    },
    preview: {
      allowedHosts: viteAllowedHosts,
    },
  },
  runtimeConfig: {
    bloggeristUrl: normalizeBloggeristUrl(environment?.BLOGGERIST_URL),
    oddsApi: environment?.SPORTS_API || 'https://api.the-odds-api.com/v4',
    oddsApiKey: environment?.SPORTS_API_KEY || '',
    useOddsApi: environment?.USE_ODDS_API === 'true',
    public: {
      bloggeristUrl: normalizeBloggeristUrl(environment?.BLOGGERIST_URL),
      useOddsApi: environment?.USE_ODDS_API === 'true',
      bybetRedirectUrl: environment?.BYBET_REDIRECT_URL || 'https://bybet.com',
      bybetRedirectCode: environment?.BYBET_REDIRECT_CODE || 'xjSD',
      siteName: environment?.SITE_NAME || 'ByBet Slots',
      siteUrl: (environment?.SITE_URL || 'https://bybet.com').replace(/\/+$/, ''),
      indexFollow: isIndexFollow,
    },
    kadarioApi: environment?.KADARIO_API || 'https://live88.eu.cc/',
    kadarioSite: 'YBa-BnymZ6iN8pkfAUFTWIKn',
  },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    hooks: {
      compiled: async (nitro) => {
        // These generators rewrite public assets, which trigger browser reloads in dev.
        if (nitro.options.dev) return

        try {
          const { generateSitemapFile } = await import('./scripts/generate-sitemap.mjs')
          await generateSitemapFile(nitro.options.runtimeConfig?.public?.siteUrl)
        } catch (e) {
          console.warn('[sitemap] Build hook warning:', e)
        }
        try {
          const { generateLlmsFile } = await import('./scripts/generate-llms.mjs')
          await generateLlmsFile(nitro.options.runtimeConfig?.public?.siteUrl)
        } catch (e) {
          console.warn('[llms] Build hook warning:', e)
        }
      },
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/light-mode.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#080D0B' },
        {
          name: 'robots',
          content: isIndexFollow ? 'index, follow' : 'noindex, nofollow',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon.webp' },
        {
          rel: 'preload',
          as: 'image',
          href: '/brand/bybet-loader-logo-dark.webp',
          fetchpriority: 'high',
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/brand/bybet-loader-logo.webp',
          fetchpriority: 'high',
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/hero/slots-games.webp',
          fetchpriority: 'high',
        },
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
      },
    },
  },
})
