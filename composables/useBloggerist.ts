import type {
  BlogCategory,
  BlogPost,
  BlogSeoSettings,
  BlogCategoryListResponse,
  BlogPostListResponse,
  BlogDetailResponse,
  BlogSeoSettingsResponse,
} from '~/types/blog'

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
      : 'http://localhost:8082'
  }
  const normalizedBase = base.replace(/\/+$/, '')
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
  return `${normalizedBase}${normalizedPath}`
}

export const useBloggerist = () => {
  const config = useRuntimeConfig()
  const bloggeristUrl = computed(() => {
    return (config.public?.bloggeristUrl || config.bloggeristUrl || 'http://localhost:8082').replace(/\/+$/, '')
  })

  const resolveImage = (imagePath?: string): string => {
    return resolveBlogImageUrl(imagePath, bloggeristUrl.value)
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
        return res
      }
    } catch {
      // Fallback direct
    }

    try {
      const res = await $fetch<BlogDetailResponse>(
        `${bloggeristUrl.value}/api/blog.php?slug=${encodeURIComponent(slug)}`,
      )
      if (res?.ok && res.blog) {
        return res
      }
    } catch (e) {
      console.warn(`[useBloggerist] Failed to fetch blog ${slug}:`, e)
    }

    return null
  }

  return {
    bloggeristUrl,
    resolveImage,
    fetchBlogSeoSettings,
    fetchBlogCategories,
    fetchBlogPosts,
    fetchBlogPost,
  }
}
