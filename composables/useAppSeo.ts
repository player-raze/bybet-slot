import { computed, type ComputedRef } from 'vue'

export interface BreadcrumbItem {
  name: string
  path?: string
}

export interface AppSeoOptions {
  title: string | ComputedRef<string> | (() => string)
  description: string | ComputedRef<string> | (() => string)
  keywords?: string | ComputedRef<string> | (() => string)
  image?: string | ComputedRef<string> | (() => string)
  type?: 'website' | 'article'
  breadcrumbs?: BreadcrumbItem[] | ComputedRef<BreadcrumbItem[]> | (() => BreadcrumbItem[])
  schema?: Record<string, any> | Record<string, any>[] | ComputedRef<any> | (() => any)
}

const resolveVal = <T>(val: T | ComputedRef<T> | (() => T) | undefined): T | undefined => {
  if (val === undefined) return undefined
  if (typeof val === 'function') {
    return (val as () => T)()
  }
  if (val && typeof val === 'object' && 'value' in val) {
    return (val as ComputedRef<T>).value
  }
  return val as T
}

export const useAppSeo = (options: AppSeoOptions) => {
  const route = useRoute()

  const title = computed(() => {
    const raw = resolveVal(options.title) || 'ByBet'
    return raw.includes('ByBet') ? raw : `${raw} | ByBet`
  })

  const description = computed(() => {
    return (
      resolveVal(options.description) ||
      'ByBet — Premier Online Gaming, Live Casino, Sports Betting, and Slots in the Philippines.'
    )
  })

  const keywords = computed(() => {
    return (
      resolveVal(options.keywords) ||
      'ByBet, sports betting, online casino, slots, live casino, Philippines gaming'
    )
  })

  const image = computed(() => {
    return resolveVal(options.image) || '/brand/bybet-logo.webp'
  })

  const canonicalUrl = computed(() => {
    const p = route.path || '/'
    return `https://bybet.com${p}`
  })

  useSeoMeta({
    title,
    ogTitle: title,
    twitterTitle: title,
    description,
    ogDescription: description,
    twitterDescription: description,
    keywords,
    ogImage: image,
    twitterImage: image,
    twitterCard: 'summary_large_image',
    ogType: options.type || 'website',
  })

  useHead(() => {
    const scripts: Array<{ type: string; children: string }> = []

    const breadcrumbs = resolveVal(options.breadcrumbs)
    if (breadcrumbs && breadcrumbs.length > 0) {
      const itemListElement = breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.path
          ? item.path.startsWith('http')
            ? item.path
            : `https://bybet.com${item.path.startsWith('/') ? item.path : `/${item.path}`}`
          : `https://bybet.com${route.path}`,
      }))

      scripts.push({
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement,
        }),
      })
    }

    const customSchema = resolveVal(options.schema)
    if (customSchema) {
      if (Array.isArray(customSchema)) {
        customSchema.forEach((s) => {
          scripts.push({
            type: 'application/ld+json',
            children: JSON.stringify(s),
          })
        })
      } else {
        scripts.push({
          type: 'application/ld+json',
          children: JSON.stringify(customSchema),
        })
      }
    }

    return {
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl.value,
        },
      ],
      script: scripts,
    }
  })
}

