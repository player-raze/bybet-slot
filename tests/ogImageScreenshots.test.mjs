import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  OG_IMAGE_DEFAULT,
  OG_IMAGE_MANIFEST,
  resolveOgImageForRoute,
  routeToOgImageFilename,
} from '../utils/ogImageManifest.ts'

function readJpegDimensions(buf) {
  assert.ok(buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8, 'Expected valid JPEG SOI header')
  let offset = 2
  while (offset + 8 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset += 1
      continue
    }
    const marker = buf[offset + 1]
    if (marker === 0xd8 || marker === 0xd9 || marker === 0x00) {
      offset += 2
      continue
    }
    const segmentLength = buf.readUInt16BE(offset + 2)
    const isSofMarker =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc
    if (isSofMarker) {
      return {
        height: buf.readUInt16BE(offset + 5),
        width: buf.readUInt16BE(offset + 7),
      }
    }
    if (segmentLength < 2) break
    offset += 2 + segmentLength
  }
  throw new Error('Could not find JPEG SOF frame header')
}

describe('Generated Screenshot OG Images Suite', () => {
  const rootDir = process.cwd()
  const publicDir = path.join(rootDir, 'public')

  test('Case 1: Every manifest entry points to an existing 1200x630 JPEG in public/og-image/', () => {
    const entries = Object.entries(OG_IMAGE_MANIFEST)
    assert.ok(entries.length >= 100, `Expected at least 100 manifest entries, got ${entries.length}`)
    assert.equal(OG_IMAGE_DEFAULT, '/og-image/home.jpg')
    assert.equal(routeToOgImageFilename('/'), 'home.jpg')
    assert.equal(routeToOgImageFilename('/egames/slots/bonus'), 'egames-slots-bonus.jpg')

    for (const [routePath, ogUrlPath] of entries) {
      assert.ok(ogUrlPath.startsWith('/og-image/') && ogUrlPath.endsWith('.jpg'), `Unexpected OG path for ${routePath}: ${ogUrlPath}`)
      const diskPath = path.join(publicDir, ogUrlPath.replace(/^\/+/, ''))
      assert.ok(fs.existsSync(diskPath), `Missing OG screenshot file for ${routePath}: ${diskPath}`)
      const buf = fs.readFileSync(diskPath)
      assert.ok(buf.length > 15000, `Screenshot for ${routePath} looks suspiciously small (${buf.length} B): ${ogUrlPath}`)
      const dims = readJpegDimensions(buf)
      assert.deepEqual(dims, { width: 1200, height: 630 }, `Unexpected JPEG dimensions for ${routePath}: ${JSON.stringify(dims)}`)
    }
  })

  test('Case 2: Every sitemap URL and dynamic subroute resolves to an existing screenshot file', () => {
    const sitemapXml = fs.readFileSync(path.join(publicDir, 'sitemap.xml'), 'utf8')
    const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
    assert.ok(locs.length >= 90, `Expected at least 90 sitemap URLs, found ${locs.length}`)

    for (const loc of locs) {
      const routePath = new URL(loc).pathname
      const resolved = resolveOgImageForRoute(routePath)
      assert.ok(resolved.startsWith('/og-image/') && resolved.endsWith('.jpg'), `Bad OG image for sitemap URL ${loc}: ${resolved}`)
      const diskPath = path.join(publicDir, resolved.replace(/^\/+/, ''))
      assert.ok(fs.existsSync(diskPath), `Missing sitemap OG screenshot on disk for ${routePath}: ${diskPath}`)
    }

    const dynamicFallbackSamples = [
      '/sports/basketball/league/nba',
      '/sports/popular/upcoming/3hours',
      '/blog/future-unpublished-slug',
    ]
    for (const sample of dynamicFallbackSamples) {
      const resolved = resolveOgImageForRoute(sample)
      assert.ok(resolved.startsWith('/og-image/') && resolved.endsWith('.jpg'))
      const diskPath = path.join(publicDir, resolved.replace(/^\/+/, ''))
      assert.ok(fs.existsSync(diskPath), `Missing fallback OG image on disk for ${sample}: ${diskPath}`)
    }
  })

  test('Case 3: SEO composables, headers, and pages wire manifest/route OG images instead of hardcoded logo defaults', () => {
    const useAppSeoSrc = fs.readFileSync(path.join(rootDir, 'composables/useAppSeo.ts'), 'utf8')
    assert.match(useAppSeoSrc, /resolveOgImageForRoute/)
    assert.match(useAppSeoSrc, /ogImageWidth/)
    assert.match(useAppSeoSrc, /ogImageHeight/)

    const seoHeaderSrc = fs.readFileSync(path.join(rootDir, 'components/SeoHeader.vue'), 'utf8')
    assert.match(seoHeaderSrc, /resolveOgImageForRoute/)
    assert.doesNotMatch(seoHeaderSrc, /ogImage:\s*'\/brand\/bybet-logo\.webp'/)

    const indexSrc = fs.readFileSync(path.join(rootDir, 'pages/index.vue'), 'utf8')
    assert.doesNotMatch(indexSrc, /useAppSeo\(\{[\s\S]*?image:\s*'\/brand\/bybet-logo\.webp'/)

    const bonusDetailSrc = fs.readFileSync(path.join(rootDir, 'pages/bonus/[id].vue'), 'utf8')
    assert.match(bonusDetailSrc, /OG_IMAGE_MANIFEST/)

    const blogDetailSrc = fs.readFileSync(path.join(rootDir, 'pages/blog/[id].vue'), 'utf8')
    assert.match(blogDetailSrc, /OG_IMAGE_MANIFEST/)
    assert.match(blogDetailSrc, /resolveOgImageForRoute/)
    assert.match(blogDetailSrc, /:og-image="seoImage"/)

    const comingSoonSrc = fs.readFileSync(path.join(rootDir, 'components/ComingSoonFallback.vue'), 'utf8')
    assert.match(comingSoonSrc, /resolveOgImageForRoute/)
    assert.match(comingSoonSrc, /ogImage/)
    assert.match(comingSoonSrc, /twitterImage/)
  })
})
