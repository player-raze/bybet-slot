import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  buildBloggeristSeoHead,
  normalizeGoogleAnalyticsId,
  normalizeGoogleTagId,
  normalizeGscVerificationToken,
} from '../utils/bloggeristSeoHead.ts'

describe('Bloggerist SEO Settings Head Injection Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: Live Bloggerist settings inject Google Search Console verification, GA4, and GTM container + noscript', () => {
    const head = buildBloggeristSeoHead({
      google_analytics_id: 'G-WZNW8LD64F',
      google_tag_id: 'GTM-WNT87BPK',
      google_search_console_verification: 'google-ver',
    })

    assert.deepEqual(head.meta, [
      {
        key: 'google-site-verification',
        name: 'google-site-verification',
        content: 'google-ver',
      },
    ])

    const keys = head.script.map(item => item.key)
    assert.deepEqual(keys, ['ga-gtag-src', 'ga-gtag-init', 'gtm-script'])

    assert.equal(head.script[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-WZNW8LD64F')
    assert.match(head.script[1].innerHTML, /gtag\('config',\s*"G-WZNW8LD64F"\)/)
    assert.match(head.script[2].innerHTML, /"GTM-WNT87BPK"/)

    assert.equal(head.noscript.length, 1)
    assert.equal(head.noscript[0].key, 'gtm-noscript')
    assert.equal(head.noscript[0].tagPosition, 'bodyOpen')
    assert.match(head.noscript[0].innerHTML, /https:\/\/www\.googletagmanager\.com\/ns\.html\?id=GTM-WNT87BPK/)
  })

  test('Case 2: Handles non-GTM google_tag_id variants (GT-/AW-) and deduplicates matching GA4 ID', () => {
    const gtOnly = buildBloggeristSeoHead({
      google_tag_id: 'gt-xxxx1234',
    })
    assert.deepEqual(gtOnly.script.map(s => s.key), ['google-tag-src', 'google-tag-init'])
    assert.equal(gtOnly.script[0].src, 'https://www.googletagmanager.com/gtag/js?id=GT-XXXX1234')
    assert.equal(gtOnly.noscript.length, 0)

    const withBoth = buildBloggeristSeoHead({
      google_analytics_id: 'G-WZNW8LD64F',
      google_tag_id: 'AW-123456789',
    })
    assert.deepEqual(withBoth.script.map(s => s.key), ['ga-gtag-src', 'ga-gtag-init', 'google-tag-init'])
    assert.match(withBoth.script[2].innerHTML, /gtag\('config',\s*"AW-123456789"\)/)

    const duplicateId = buildBloggeristSeoHead({
      google_analytics_id: 'G-WZNW8LD64F',
      google_tag_id: 'G-WZNW8LD64F',
    })
    assert.deepEqual(duplicateId.script.map(s => s.key), ['ga-gtag-src', 'ga-gtag-init'])
  })

  test('Case 3: Normalizes meta-tag GSC tokens, rejects unsafe/invalid IDs, and returns empty arrays for empty settings', () => {
    assert.equal(
      normalizeGscVerificationToken('<meta name="google-site-verification" content="abc_123-XYZ" />'),
      'abc_123-XYZ',
    )
    assert.equal(normalizeGscVerificationToken('valid.token_1'), 'valid.token_1')
    assert.equal(normalizeGscVerificationToken('<script>alert(1)</script>'), null)

    assert.equal(normalizeGoogleAnalyticsId('g-wznw8ld64f'), 'G-WZNW8LD64F')
    assert.equal(normalizeGoogleAnalyticsId('UA-123456-1'), null)
    assert.equal(normalizeGoogleAnalyticsId('<script>'), null)

    assert.equal(normalizeGoogleTagId('gtm-wnt87bpk'), 'GTM-WNT87BPK')
    assert.equal(normalizeGoogleTagId('javascript:alert(1)'), null)

    const empty = buildBloggeristSeoHead({
      google_analytics_id: '',
      google_tag_id: '<script>alert(1)</script>',
      google_search_console_verification: '',
    })
    assert.deepEqual(empty, { meta: [], script: [], noscript: [] })
  })

  test('Case 4: app.vue, blog types, proxy API, composable, and blog views wire google_tag_id & buildBloggeristSeoHead globally', () => {
    const appVue = fs.readFileSync(path.join(rootDir, 'app.vue'), 'utf8')
    assert.match(appVue, /fetchBlogSeoSettings/, 'app.vue must fetch Bloggerist SEO settings')
    assert.match(appVue, /buildBloggeristSeoHead/, 'app.vue must inject global head via buildBloggeristSeoHead')

    const blogTypes = fs.readFileSync(path.join(rootDir, 'types/blog.ts'), 'utf8')
    assert.match(blogTypes, /google_tag_id\?:\s*string/, 'BlogSeoSettings must type google_tag_id')

    const seoApi = fs.readFileSync(path.join(rootDir, 'server/api/blogs/seo.get.ts'), 'utf8')
    assert.match(seoApi, /google_tag_id:\s*''/, 'seo.get.ts fallback must include google_tag_id')
    assert.match(seoApi, /timeout:\s*3000/, 'seo.get.ts must specify timeout')

    const composable = fs.readFileSync(path.join(rootDir, 'composables/useBloggerist.ts'), 'utf8')
    assert.match(composable, /google_tag_id:\s*''/, 'useBloggerist fallback must include google_tag_id')
    assert.match(composable, /timeout:\s*3000/, 'useBloggerist fetchBlogSeoSettings must specify timeout')

    for (const rel of [
      'components/blogs/BlogListing.vue',
      'components/blogs/BlogCategoryListing.vue',
      'pages/blog/[id].vue',
    ]) {
      const content = fs.readFileSync(path.join(rootDir, rel), 'utf8')
      assert.match(content, /buildBloggeristSeoHead/, `${rel} must use shared buildBloggeristSeoHead`)
      assert.match(content, /google_tag_id/, `${rel} must pass google_tag_id`)
    }
  })
})
