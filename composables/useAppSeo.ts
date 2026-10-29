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

// Edit segment display names here to customize URL-based breadcrumb labels
const BREADCRUMB_SEGMENT_LABELS: Record<string, string> = {
  explore: 'Explore',
  egames: 'E-Games',
  entertainment: 'Entertainment',
  'live-casino': 'Live Casino',
  'live-plaza': 'Live Plaza',
  'customer-service': 'Customer Service',
  'max-rpt': 'Max RTP',
  'top-pick': 'Top Pick',
  inplay: 'In-Play',
  'pre-match': 'Pre-Match',
  'smart-pick': 'Smart Pick',
  jili: 'JILI',
  jdb: 'JDB',
  cq9: 'CQ9',
  fc: 'FC',
  vip: 'VIP',
  faq: 'FAQ',
}

const formatBreadcrumbSegment = (segment: string): string => {
  const decoded = decodeURIComponent(segment).trim()
  const lower = decoded.toLowerCase()
  if (BREADCRUMB_SEGMENT_LABELS[lower]) {
    return BREADCRUMB_SEGMENT_LABELS[lower]
  }
  return decoded
    .split('-')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const buildBreadcrumbsFromUrl = (routePath: string): BreadcrumbItem[] => {
  const cleanPath = (routePath || '/').split('?')[0].split('#')[0].replace(/\/+$/, '') || '/'
  if (cleanPath === '/') {
    return []
  }

  const segments = cleanPath.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = [{ name: 'Home', path: '/' }]

  let currentPath = ''
  for (const segment of segments) {
    currentPath += `/${segment}`
    items.push({
      name: formatBreadcrumbSegment(segment),
      path: currentPath,
    })
  }

  return items
}

const escapeRegExp = (str: string): string => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const formatSeoTitle = (rawTitle: string | undefined, siteName: string): string => {
  const cleanSiteName = (siteName || 'ByBet Slots').trim().replace(/^['"]+|['"]+$/g, '')
  const raw = (rawTitle || '').trim()
  if (!raw) {
    return cleanSiteName
  }

  const escapedSite = escapeRegExp(cleanSiteName)
  const trailingBrandRegex = new RegExp(
    `\\s*\\|\\s*(?:${escapedSite}(?:\\s+[^|]*)?|ByBet(?:\\s+[^|]*)?)\\s*$`,
    'i',
  )
  const baseTitle = raw.replace(trailingBrandRegex, '').trim()

  if (!baseTitle || baseTitle.toLowerCase() === cleanSiteName.toLowerCase()) {
    return cleanSiteName
  }

  return `${baseTitle} | ${cleanSiteName}`
}

export const useAppSeo = (options: AppSeoOptions) => {
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteName = computed(() =>
    String(config.public.siteName || 'ByBet Slots')
      .trim()
      .replace(/^['"]+|['"]+$/g, ''),
  )
  const siteUrl = computed(() => String(config.public.siteUrl || 'https://bybet.com').replace(/\/+$/, ''))

  const title = computed(() => {
    const raw = resolveVal(options.title)
    return formatSeoTitle(raw, siteName.value)
  })

  const description = computed(() => {
    return (
      resolveVal(options.description) ||
      `${siteName.value} — Premier Online Gaming, Live Casino, Sports Betting, and Slots in the Philippines.`
    )
  })

  const keywords = computed(() => {
    return (
      resolveVal(options.keywords) ||
      `${siteName.value}, sports betting, online casino, slots, live casino, Philippines gaming`
    )
  })

  const image = computed(() => {
    return resolveVal(options.image) || '/brand/bybet-logo.webp'
  })

  const canonicalUrl = computed(() => {
    const p = route.path || '/'
    return `${siteUrl.value}${p}`
  })

  useSeoMeta({
    title,
    ogTitle: title,
    ogSiteName: siteName,
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
    const scripts: Array<{ key: string; type: string; children: string }> = []

    // Always follow the current URL path as the single BreadcrumbList schema
    const urlBreadcrumbs = buildBreadcrumbsFromUrl(route.path)
    if (urlBreadcrumbs.length > 0) {
      const itemListElement = urlBreadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.path
          ? item.path.startsWith('http')
            ? item.path
            : `${siteUrl.value}${item.path.startsWith('/') ? item.path : `/${item.path}`}`
          : `${siteUrl.value}${route.path}`,
      }))

      scripts.push({
        key: 'schema-breadcrumb',
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
      const schemaList = Array.isArray(customSchema) ? customSchema : [customSchema]
      schemaList
        .filter((s) => s && s['@type'] !== 'BreadcrumbList')
        .forEach((s, index) => {
          const schemaType = typeof s['@type'] === 'string' ? s['@type'].toLowerCase() : `item-${index}`
          scripts.push({
            key: `schema-custom-${schemaType}-${index}`,
            type: 'application/ld+json',
            children: JSON.stringify(s),
          })
        })
    }

    return {
      link: [
        {
          key: 'canonical',
          rel: 'canonical',
          href: canonicalUrl.value,
        },
      ],
      script: scripts,
    }
  })
}

