export interface BlogWriter {
  name: string
  role_name?: string
  profile_image?: string
  bio?: string
  socials?: Array<{ platform: string; url: string }>
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  parent_id?: string | null
  parent_name?: string | null
  description?: string
  postCount?: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  writer?: BlogWriter
  seoTitle?: string
  focusKeyphrase?: string
  category?: {
    name: string
    slug: string
    parent_name?: string | null
    parent?: any
  }
  categoryId?: string
  categoryName?: string
  categoryLabel?: string
  tags?: string[]
  author?: string
  excerpt?: string
  featuredImage?: string
  status?: string
  date?: string
  publishedAt?: number
  scheduledAt?: number | null
  startsAt?: string | null
  endsAt?: string | null
  isPublic?: boolean
  createdAt?: number
  updatedAt?: number
  views?: number
  likes?: number
  dislikes?: number
  readTime?: number
  content?: string
  content_html?: string
  blogUrl?: string
  countdownEnabled?: boolean
  countdownTarget?: string
  countdownTitle?: string
  countdownEndText?: string
  countdown?: {
    enabled?: boolean
    target?: string
    title?: string
    end_text?: string
    html?: string
  }
  countdown_html?: string
  faq_schema?: Record<string, any>
}

export interface BlogPagination {
  total: number
  count: number
  page: number
  category?: string | null
  totalPages: number
}

export interface BlogSeoSettings {
  website_name: string
  website_url?: string
  google_analytics_id?: string
  google_search_console_verification?: string
  default_seo_title?: string
  default_meta_description?: string
  default_og_image?: string
  indexnow_enabled?: boolean
  indexnow_configured?: boolean
  indexnow_key_location?: string
  indexnow_status?: string
}

export interface BlogPostListResponse {
  ok: boolean
  blogs: BlogPost[]
  pagination?: BlogPagination
  error?: string
}

export interface BlogDetailResponse {
  ok: boolean
  blog?: BlogPost
  countdown?: {
    enabled?: boolean
    target?: string
    title?: string
    end_text?: string
    html?: string
  }
  countdown_html?: string
  faq_schema?: Record<string, any>
  error?: string
}

export interface BlogCategoryListResponse {
  ok: boolean
  categories: BlogCategory[]
  total?: number
  error?: string
}

export interface BlogSeoSettingsResponse {
  ok: boolean
  settings: BlogSeoSettings
  error?: string
}
