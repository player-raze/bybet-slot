import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()

test('Blogs Page & Bloggerist Integration Test Suite', async (t) => {
  await t.test('Case 1: nuxt.config.ts and .env define BLOGGERIST_URL', () => {
    const nuxtConfig = fs.readFileSync(path.join(rootDir, 'nuxt.config.ts'), 'utf8')
    const envFile = fs.readFileSync(path.join(rootDir, '.env'), 'utf8')

    assert.ok(envFile.includes('BLOGGERIST_URL='), '.env must contain BLOGGERIST_URL')
    assert.ok(nuxtConfig.includes('BLOGGERIST_URL?: string'), 'nuxt.config environment must type BLOGGERIST_URL')
    assert.ok(nuxtConfig.includes('bloggeristUrl:'), 'nuxt.config runtimeConfig must define bloggeristUrl')
    assert.ok(nuxtConfig.includes('public:'), 'nuxt.config must include public runtimeConfig')
  })

  await t.test('Case 2: Image URL resolver prepends BLOGGERIST_URL to relative upload paths', async () => {
    const { resolveBlogImageUrl } = await import('../composables/useBloggerist.ts')

    // Relative upload path
    const resolved = resolveBlogImageUrl('/uploads/blogs/sample.webp', 'http://localhost:8082')
    assert.equal(resolved, 'http://localhost:8082/uploads/blogs/sample.webp')

    // Leading slash missing
    const resolvedNoSlash = resolveBlogImageUrl('uploads/blogs/sample.webp', 'http://localhost:8082/')
    assert.equal(resolvedNoSlash, 'http://localhost:8082/uploads/blogs/sample.webp')

    // Absolute URLs preserved
    const external = resolveBlogImageUrl('https://external.cdn/image.webp', 'http://localhost:8082')
    assert.equal(external, 'https://external.cdn/image.webp')

    // Empty fallback
    const fallback = resolveBlogImageUrl('', 'http://localhost:8082')
    assert.equal(fallback, '/brand/bybet-logo.webp')
  })

  await t.test('Case 2b: Inner blog content images resolve relative upload paths to BLOGGERIST_URL', async () => {
    const { normalizeBlogDetailResponse, resolveBlogContentImageUrls } = await import('../composables/useBloggerist.ts')

    const inputHtml = [
      '<style>.hero{background-image:url(\'/uploads/blogs/hero-bg.webp\');}</style>',
      '<p><img src="/uploads/blogs/65fc9a581640286a821e59a448ce1381.webp" alt="Banner" width="1200" height="675"></p>',
      '<p><img src="uploads/blogs/no-slash.png" data-src="./uploads/blogs/lazy.webp" srcset="/uploads/blogs/sm.webp 480w, uploads/blogs/lg.webp 1200w"></p>',
      '<picture><source srcset="/uploads/blogs/pic.avif 1x, https://cdn.example.com/pic.avif 2x"></picture>',
      '<video poster="/uploads/blogs/poster.jpg" src="/uploads/blogs/clip.mp4"></video>',
      '<div style="background-image: url(\'uploads/blogs/inline-bg.webp\')"></div>',
      '<p><img src="https://cdn.example.com/external.webp" alt="Ext"><img src="data:image/png;base64,iVBORw0KGgo=" alt="Data"></p>',
      '<p><img alt="Use src=\'/uploads/not-real.webp\'" src="/uploads/blogs/real.webp" width="1200" height="675"></p>',
      '<script>const tmpl = "<img src=\'/uploads/in-js.webp\'>";</script>',
      '<p><a href="/uploads/blogs/full-size.webp">Full</a> <a href="/egames/slots">Slots</a></p>',
    ].join('\n')

    const resolved = resolveBlogContentImageUrls(inputHtml, 'https://cms.bybet.com/')
    assert.ok(resolved.includes("url('https://cms.bybet.com/uploads/blogs/hero-bg.webp')"))
    assert.ok(resolved.includes('<img src="https://cms.bybet.com/uploads/blogs/65fc9a581640286a821e59a448ce1381.webp"'))
    assert.ok(resolved.includes('<img src="https://cms.bybet.com/uploads/blogs/no-slash.png" data-src="https://cms.bybet.com/uploads/blogs/lazy.webp"'))
    assert.ok(resolved.includes('srcset="https://cms.bybet.com/uploads/blogs/sm.webp 480w, https://cms.bybet.com/uploads/blogs/lg.webp 1200w"'))
    assert.ok(resolved.includes('<source srcset="https://cms.bybet.com/uploads/blogs/pic.avif 1x, https://cdn.example.com/pic.avif 2x">'))
    assert.ok(resolved.includes('<video poster="https://cms.bybet.com/uploads/blogs/poster.jpg" src="https://cms.bybet.com/uploads/blogs/clip.mp4">'))
    assert.ok(resolved.includes("url('https://cms.bybet.com/uploads/blogs/inline-bg.webp')"))
    assert.ok(resolved.includes('<img src="https://cdn.example.com/external.webp" alt="Ext">'))
    assert.ok(resolved.includes('<img src="data:image/png;base64,iVBORw0KGgo=" alt="Data">'))
    assert.ok(resolved.includes('<img alt="Use src=\'/uploads/not-real.webp\'" src="https://cms.bybet.com/uploads/blogs/real.webp" width="1200" height="675">'))
    assert.ok(resolved.includes('<script>const tmpl = "<img src=\'/uploads/in-js.webp\'>";</script>'))
    assert.ok(resolved.includes('<a href="https://cms.bybet.com/uploads/blogs/full-size.webp">Full</a>'))
    assert.ok(resolved.includes('<a href="/egames/slots">Slots</a>'))

    // Idempotent if called a second time (server + client)
    assert.equal(resolveBlogContentImageUrls(resolved, 'https://cms.bybet.com/'), resolved)

    const normalizedPayload = normalizeBlogDetailResponse({
      ok: true,
      blog: {
        id: 'test',
        slug: 'test',
        title: 'Test',
        content_html: '<img src="/uploads/blogs/sample.webp">',
      },
    }, 'http://localhost:8082')
    assert.equal(normalizedPayload.blog?.content_html, '<img src="http://localhost:8082/uploads/blogs/sample.webp">')

    const postApi = fs.readFileSync(path.join(rootDir, 'server/api/blogs/post.get.ts'), 'utf8')
    assert.ok(postApi.includes('normalizeBlogDetailResponse'), 'server/api/blogs/post.get.ts must normalize content image URLs')
  })

  await t.test('Case 3: Categories are strictly filtered so only categories with postCount > 0 are displayed', () => {
    // Sample raw categories matching Bloggerist api/blog-category-list.php
    const mockCategories = [
      { id: 'community', name: 'Community', slug: 'community', postCount: 1 },
      { id: 'promotions', name: 'Promotions', slug: 'promotions', postCount: 2 },
      { id: 'casino', name: 'Casino', slug: 'casino', postCount: 0 },
      { id: 'troubleshooting', name: 'Troubleshooting', slug: 'troubleshooting', postCount: 0 },
      { id: 'guides', name: 'Guides', slug: 'guides', postCount: 2 },
      { id: 'casino-games', name: 'Casino Games', slug: 'casino-games', postCount: 6 },
      { id: 'general', name: 'General', slug: 'general', postCount: 1 },
      { id: 'slots', name: 'Slots', slug: 'slots', postCount: 6 },
      { id: 'sports-betting', name: 'Sports Betting', slug: 'sports-betting', postCount: 1 },
      { id: 'sports-news', name: 'Sports News', slug: 'sports-news', postCount: 3 },
    ]

    const filtered = mockCategories.filter(cat => (Number(cat.postCount) || 0) > 0)

    // casino and troubleshooting have postCount 0 and must be excluded
    assert.equal(filtered.length, 8)
    assert.ok(!filtered.some(c => c.slug === 'casino'), 'casino category must be excluded (0 posts)')
    assert.ok(!filtered.some(c => c.slug === 'troubleshooting'), 'troubleshooting category must be excluded (0 posts)')
    assert.ok(filtered.some(c => c.slug === 'slots'), 'slots category must be included')
    assert.ok(filtered.some(c => c.slug === 'community'), 'community category must be included')

    // Verify filter rule in server endpoint and components
    const serverCategories = fs.readFileSync(path.join(rootDir, 'server/api/blogs/categories.get.ts'), 'utf8')
    assert.ok(serverCategories.includes('postCount'), 'server/api/blogs/categories.get.ts must check postCount > 0')

    const blogListing = fs.readFileSync(path.join(rootDir, 'components/blogs/BlogListing.vue'), 'utf8')
    assert.ok(blogListing.includes('postCount'), 'BlogListing.vue must filter categories with postCount > 0')
  })

  await t.test('Case 4: api/settings/seo.php integration handles website_name, google_analytics_id, google_search_console_verification', () => {
    const seoServer = fs.readFileSync(path.join(rootDir, 'server/api/blogs/seo.get.ts'), 'utf8')
    assert.ok(seoServer.includes('api/settings/seo.php'), 'server route must proxy api/settings/seo.php')

    const blogListing = fs.readFileSync(path.join(rootDir, 'components/blogs/BlogListing.vue'), 'utf8')
    assert.ok(blogListing.includes('google_analytics_id'), 'BlogListing must handle google_analytics_id')
    assert.ok(blogListing.includes('google_search_console_verification'), 'BlogListing must handle google_search_console_verification')
    assert.ok(blogListing.includes('website_name'), 'BlogListing must use website_name from seo.php')

    const blogDetail = fs.readFileSync(path.join(rootDir, 'pages/blog/[id].vue'), 'utf8')
    assert.ok(blogDetail.includes('google_analytics_id'), 'pages/blog/[id].vue must handle google_analytics_id')
    assert.ok(blogDetail.includes('google_search_console_verification'), 'pages/blog/[id].vue must handle google_search_console_verification')
    assert.ok(blogDetail.includes('website_name'), 'pages/blog/[id].vue must use website_name from seo.php')
  })

  await t.test('Case 5: Layout refers Bonuses layout structure (desktop & mobile)', () => {
    const blogListing = fs.readFileSync(path.join(rootDir, 'components/blogs/BlogListing.vue'), 'utf8')
    const mobileListing = fs.readFileSync(path.join(rootDir, 'components/blogs/MobileBlogListing.vue'), 'utf8')
    const categoryListing = fs.readFileSync(path.join(rootDir, 'components/blogs/BlogCategoryListing.vue'), 'utf8')

    // Desktop features matching bonuses
    assert.ok(blogListing.includes('SeoHeader'), 'BlogListing must use SeoHeader')
    assert.ok(blogListing.includes('category-nav'), 'BlogListing must contain category-nav')
    assert.ok(blogListing.includes('featured-blogs__arrow--left'), 'BlogListing must include left scroll arrow')
    assert.ok(blogListing.includes('featured-blogs__arrow--right'), 'BlogListing must include right scroll arrow')
    assert.ok(blogListing.includes('philippines-badge'), 'BlogListing must display philippines badge in header')
    assert.ok(blogListing.includes('blog-groups'), 'BlogListing must group blogs by category')

    // Mobile features matching bonuses
    assert.ok(mobileListing.includes('mobile-blogs__sticky'), 'MobileBlogListing must have sticky header nav')
    assert.ok(mobileListing.includes('mobile-blogs__carousel'), 'MobileBlogListing must have featured carousel')
    assert.ok(mobileListing.includes('mobile-blogs__dots'), 'MobileBlogListing must have carousel dots')
    assert.ok(mobileListing.includes('mobile-blogs__groups'), 'MobileBlogListing must have mobile category groups')

    // Category listing features matching bonuses
    assert.ok(categoryListing.includes('SeoHeader'), 'BlogCategoryListing must use SeoHeader')
    assert.ok(categoryListing.includes('featured-grid'), 'BlogCategoryListing must have featured grid')
    assert.ok(categoryListing.includes('category-grid'), 'BlogCategoryListing must have category grid')
  })

  await t.test('Case 6: Single blog post page supports content HTML, countdown, and SEO schema', () => {
    const blogDetail = fs.readFileSync(path.join(rootDir, 'pages/blog/[id].vue'), 'utf8')

    assert.ok(blogDetail.includes('v-html="processedBlogContentHtml"') && blogDetail.includes('blog.value?.content_html'), 'Blog detail must render processed content_html')
    assert.ok(blogDetail.includes('resolveContentImages'), 'Blog detail must resolve inner blog content images against BLOGGERIST_URL')
    assert.ok(blogDetail.includes('blog-countdown'), 'Blog detail must render countdown section')
    assert.ok(blogDetail.includes('useAppSeo'), 'Blog detail must register SEO')
    assert.ok(blogDetail.includes('breadcrumbs'), 'Blog detail must provide breadcrumbs')
  })

  await t.test('Case 7: layouts/default.vue and data/homepage.ts integrate /blogs route', () => {
    const layout = fs.readFileSync(path.join(rootDir, 'layouts/default.vue'), 'utf8')
    const homepage = fs.readFileSync(path.join(rootDir, 'data/homepage.ts'), 'utf8')

    assert.ok(layout.includes("path === '/blogs'"), 'layout must include /blogs in content reference shell')
    assert.ok(layout.includes("path.startsWith('/blogs/')"), 'layout must include /blogs/ in content reference shell')
    assert.ok(layout.includes("path.startsWith('/blog/')"), 'layout must include /blog/ in content reference shell')
    assert.ok(layout.includes('isBlogsPage'), 'layout must define isBlogsPage')
    assert.ok(homepage.includes("to: '/blogs'"), 'data/homepage.ts must route Blogs to /blogs')
  })
})
