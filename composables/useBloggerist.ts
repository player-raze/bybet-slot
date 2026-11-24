import type {
  BlogCategory,
  BlogPost,
  BlogSeoSettings,
  BlogCategoryListResponse,
  BlogPostListResponse,
  BlogDetailResponse,
  BlogSeoSettingsResponse,
} from '~/types/blog'

const DEFAULT_BLOGGERIST_URL = 'http://localhost:8082'
const NON_RELATIVE_MEDIA_URL_RE = /^(?:https?:\/\/|\/\/|data:|blob:|mailto:|tel:|javascript:|#)/i
const UPLOAD_PATH_RE = /^(?:\.\/|\/)?uploads\//i

/**
 * Resolves the configured Bloggerist base origin across Nuxt runtime config, process env, and fallback.
 */
export const resolveBloggeristBaseUrl = (baseUrl?: string): string => {
  let base = baseUrl
  if (!base) {
    try {
      const config = useRuntimeConfig()
      base = config?.public?.bloggeristUrl || config?.bloggeristUrl
    } catch {
      // outside Nuxt context fallback
    }
  }
  if (!base) {
    base = typeof process !== 'undefined' && process.env?.BLOGGERIST_URL
      ? process.env.BLOGGERIST_URL
      : DEFAULT_BLOGGERIST_URL
  }
  return base.replace(/\/+$/, '')
}

const resolveRelativeBlogUrl = (rawUrl: string, normalizedBase: string): string => {
  const cleanUrl = rawUrl.trim()
  if (!cleanUrl || NON_RELATIVE_MEDIA_URL_RE.test(cleanUrl)) {
    return rawUrl
  }
  const withoutDotPrefix = cleanUrl.replace(/^\.\//, '')
  const normalizedPath = withoutDotPrefix.startsWith('/') ? withoutDotPrefix : `/${withoutDotPrefix}`
  return `${normalizedBase}${normalizedPath}`
}

const resolveCssUrlReferences = (cssText: string, normalizedBase: string): string => {
  return cssText.replace(
    /url\(\s*(['"]?)([^)'"]+)\1\s*\)/gi,
    (fullMatch, quote: string, target: string) => {
      const trimmed = target.trim()
      if (!trimmed || NON_RELATIVE_MEDIA_URL_RE.test(trimmed)) {
        return fullMatch
      }
      if (!/^(?:\.\/|\/)?(?:uploads|assets)\//i.test(trimmed)) {
        return fullMatch
      }
      return `url(${quote}${resolveRelativeBlogUrl(trimmed, normalizedBase)}${quote})`
    },
  )
}

const resolveSrcsetValue = (srcset: string, normalizedBase: string): string => {
  const entries: string[] = []
  let cursor = 0

  while (cursor < srcset.length) {
    while (cursor < srcset.length && /[\s,]/.test(srcset[cursor])) cursor++
    if (cursor >= srcset.length) break

    const start = cursor
    const rest = srcset.slice(cursor)
    if (/^data:/i.test(rest)) {
      const spaceIdx = srcset.slice(cursor).search(/\s/)
      if (spaceIdx === -1) {
        entries.push(srcset.slice(start).trim())
        break
      }
      const commaAfterDesc = srcset.indexOf(',', cursor + spaceIdx)
      cursor = commaAfterDesc === -1 ? srcset.length : commaAfterDesc
      entries.push(srcset.slice(start, cursor).trim())
      continue
    }

    const commaIdx = srcset.indexOf(',', cursor)
    cursor = commaIdx === -1 ? srcset.length : commaIdx
    const item = srcset.slice(start, cursor).trim()
    const match = /^(\S+)([\s\S]*)$/.exec(item)
    if (!match) continue
    entries.push(`${resolveRelativeBlogUrl(match[1], normalizedBase)}${match[2]}`)
  }

  return entries.join(', ')
}

/**
 * Resolves a single Bloggerist image path (relative upload path or URL) against the Bloggerist origin.
 */
export const resolveBlogImageUrl = (imagePath?: string, baseUrl?: string): string => {
  if (!imagePath || typeof imagePath !== 'string') {
    return '/brand/bybet-logo.webp'
  }
  const cleanPath = imagePath.trim()
  if (!cleanPath) {
    return '/brand/bybet-logo.webp'
  }
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath
  }
  return resolveRelativeBlogUrl(cleanPath, resolveBloggeristBaseUrl(baseUrl))
}

const TAG_ATTR_RE = /(\s+)([a-zA-Z_:][\w:.-]*)(\s*=\s*)(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))|(\s+[^\s=/>]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)/g

const rewriteTagAttributes = (
  rawAttrs: string,
  rewriteAttr: (name: string, value: string) => string | null,
): string => {
  return rawAttrs.replace(
    TAG_ATTR_RE,
    (
      fullMatch,
      ws?: string,
      attrName?: string,
      eq?: string,
      doubleVal?: string,
      singleVal?: string,
      bareVal?: string,
      otherToken?: string,
    ) => {
      if (otherToken !== undefined || !attrName) {
        return fullMatch
      }
      const rawVal = doubleVal ?? singleVal ?? bareVal ?? ''
      const nextVal = rewriteAttr(attrName.toLowerCase(), rawVal)
      if (nextVal === null || nextVal === rawVal) {
        return fullMatch
      }
      const quote = doubleVal !== undefined ? '"' : singleVal !== undefined ? "'" : '"'
      return `${ws}${attrName}${eq}${quote}${nextVal}${quote}`
    },
  )
}

/**
 * Rewrites relative image/media URLs (e.g. /uploads/blogs/...) inside inner blog HTML
 * so they load from the configured BLOGGERIST_URL instead of the Nuxt origin.
 */
export const resolveBlogContentImageUrls = (html?: string | null, baseUrl?: string): string => {
  if (!html || typeof html !== 'string') return ''
  const normalizedBase = resolveBloggeristBaseUrl(baseUrl)

  return html.replace(
    /<script\b[^>]*>[\s\S]*?<\/script>|<style\b([^>]*)>([\s\S]*?)<\/style>|<([a-zA-Z][a-zA-Z0-9:-]*)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi,
    (
      fullMatch,
      styleAttrs?: string,
      cssBody?: string,
      rawTagName?: string,
      rawAttrs?: string,
    ) => {
      if (cssBody !== undefined) {
        return `<style${styleAttrs ?? ''}>${resolveCssUrlReferences(cssBody, normalizedBase)}</style>`
      }
      if (!rawTagName || rawAttrs === undefined) {
        return fullMatch
      }

      const tagName = rawTagName.toLowerCase()
      const isMediaTag = tagName === 'img' || tagName === 'source' || tagName === 'video' || tagName === 'audio'
      const isAnchorTag = tagName === 'a'

      const nextAttrs = rewriteTagAttributes(rawAttrs, (attrName, rawVal) => {
        if (attrName === 'style' && /url\(/i.test(rawVal)) {
          return resolveCssUrlReferences(rawVal, normalizedBase)
        }
        if (isMediaTag) {
          if (attrName === 'src' || attrName === 'data-src' || attrName === 'poster') {
            return rawVal.trim() ? resolveRelativeBlogUrl(rawVal, normalizedBase) : null
          }
          if (attrName === 'srcset' || attrName === 'data-srcset') {
            return rawVal.trim() ? resolveSrcsetValue(rawVal, normalizedBase) : null
          }
        }
        if (isAnchorTag && attrName === 'href' && UPLOAD_PATH_RE.test(rawVal.trim())) {
          return resolveRelativeBlogUrl(rawVal, normalizedBase)
        }
        return null
      })

      return nextAttrs === rawAttrs ? fullMatch : `<${rawTagName}${nextAttrs}>`
    },
  )
}

/**
 * Normalizes inner blog HTML image URLs across a Bloggerist detail API response payload.
 */
export const normalizeBlogDetailResponse = (
  payload: BlogDetailResponse,
  baseUrl?: string,
): BlogDetailResponse => {
  if (!payload?.blog) return payload
  const normalizedBase = resolveBloggeristBaseUrl(baseUrl)
  const countdownHtml = payload.countdown_html
    ? resolveBlogContentImageUrls(payload.countdown_html, normalizedBase)
    : payload.countdown_html

  const blogCountdown = payload.blog.countdown
    ? {
        ...payload.blog.countdown,
        ...(typeof payload.blog.countdown.html === 'string'
          ? { html: resolveBlogContentImageUrls(payload.blog.countdown.html, normalizedBase) }
          : {}),
      }
    : payload.blog.countdown

  const topCountdown = payload.countdown
    ? {
        ...payload.countdown,
        ...(typeof payload.countdown.html === 'string'
          ? { html: resolveBlogContentImageUrls(payload.countdown.html, normalizedBase) }
          : {}),
      }
    : payload.countdown

  return {
    ...payload,
    ...(typeof countdownHtml === 'string' ? { countdown_html: countdownHtml } : {}),
    ...(topCountdown ? { countdown: topCountdown } : {}),
    blog: {
      ...payload.blog,
      ...(typeof payload.blog.content_html === 'string'
        ? { content_html: resolveBlogContentImageUrls(payload.blog.content_html, normalizedBase) }
        : {}),
      ...(typeof payload.blog.countdown_html === 'string'
        ? { countdown_html: resolveBlogContentImageUrls(payload.blog.countdown_html, normalizedBase) }
        : {}),
      ...(blogCountdown ? { countdown: blogCountdown } : {}),
    },
  }
}

export const useBloggerist = () => {
  const config = useRuntimeConfig()
  const bloggeristUrl = computed(() => {
    return (config.public?.bloggeristUrl || config.bloggeristUrl || DEFAULT_BLOGGERIST_URL).replace(/\/+$/, '')
  })

  const resolveImage = (imagePath?: string): string => {
    return resolveBlogImageUrl(imagePath, bloggeristUrl.value)
  }

  const resolveContentImages = (html?: string | null): string => {
    return resolveBlogContentImageUrls(html, bloggeristUrl.value)
  }

  const fetchBlogSeoSettings = async (): Promise<BlogSeoSettings> => {
    try {
      // First try internal server route proxy
      const res = await $fetch<BlogSeoSettingsResponse>('/api/blogs/seo', { timeout: 3000 })
      if (res?.ok && res.settings) {
        return res.settings
      }
    } catch {
      // Fallback direct fetch to Bloggerist URL
    }

    try {
      const res = await $fetch<BlogSeoSettingsResponse>(`${bloggeristUrl.value}/api/settings/seo.php`, { timeout: 3000 })
      if (res?.ok && res.settings) {
        return res.settings
      }
    } catch (e) {
      console.warn('[useBloggerist] Failed to fetch SEO settings:', e)
    }

    return {
      website_name: 'Blog',
      google_analytics_id: '',
      google_tag_id: '',
      google_search_console_verification: '',
    }
  }

  const fetchBlogCategories = async (): Promise<BlogCategory[]> => {
    try {
      const res = await $fetch<BlogCategoryListResponse>('/api/blogs/categories')
      if (res?.ok && Array.isArray(res.categories)) {
        return res.categories.filter(c => (Number(c.postCount) || 0) > 0)
      }
    } catch {
      // Fallback direct
    }

    try {
      const res = await $fetch<BlogCategoryListResponse>(`${bloggeristUrl.value}/api/blog-category-list.php`)
      if (res?.ok && Array.isArray(res.categories)) {
        return res.categories.filter(c => (Number(c.postCount) || 0) > 0)
      }
    } catch (e) {
      console.warn('[useBloggerist] Failed to fetch categories:', e)
    }

    return []
  }

  const fetchBlogPosts = async (params: {
    category?: string
    count?: number
    page?: number
  } = {}): Promise<{ blogs: BlogPost[]; total: number; totalPages: number }> => {
    const count = params.count || 20
    const page = params.page || 1
    const category = params.category && params.category !== 'all' ? params.category : undefined

    const queryParams: Record<string, any> = { count, page }
    if (category) queryParams.category = category

    try {
      const res = await $fetch<BlogPostListResponse>('/api/blogs/posts', {
        params: queryParams,
      })
      if (res?.ok && Array.isArray(res.blogs)) {
        return {
          blogs: res.blogs,
          total: res.pagination?.total ?? res.blogs.length,
          totalPages: res.pagination?.totalPages ?? 1,
        }
      }
    } catch {
      // Fallback direct
    }

    try {
      const searchParams = new URLSearchParams()
      searchParams.set('count', String(count))
      searchParams.set('page', String(page))
      if (category) searchParams.set('category', category)

      const res = await $fetch<BlogPostListResponse>(
        `${bloggeristUrl.value}/api/blog-post-list.php?${searchParams.toString()}`,
      )
      if (res?.ok && Array.isArray(res.blogs)) {
        return {
          blogs: res.blogs,
          total: res.pagination?.total ?? res.blogs.length,
          totalPages: res.pagination?.totalPages ?? 1,
        }
      }
    } catch (e) {
      console.warn('[useBloggerist] Failed to fetch posts:', e)
    }

    return { blogs: [], total: 0, totalPages: 0 }
  }

  const fetchBlogPost = async (slug: string): Promise<BlogDetailResponse | null> => {
    if (!slug) return null

    try {
      const res = await $fetch<BlogDetailResponse>('/api/blogs/post', {
        params: { slug },
      })
      if (res?.ok && res.blog) {
        return normalizeBlogDetailResponse(res, bloggeristUrl.value)
      }
    } catch {
      // Fallback direct
    }

    try {
      const res = await $fetch<BlogDetailResponse>(
        `${bloggeristUrl.value}/api/blog.php?slug=${encodeURIComponent(slug)}`,
      )
      if (res?.ok && res.blog) {
        return normalizeBlogDetailResponse(res, bloggeristUrl.value)
      }
    } catch (e) {
      console.warn(`[useBloggerist] Failed to fetch blog ${slug}:`, e)
    }

    return null
  }

  return {
    bloggeristUrl,
    resolveImage,
    resolveContentImages,
    fetchBlogSeoSettings,
    fetchBlogCategories,
    fetchBlogPosts,
    fetchBlogPost,
  }
}
