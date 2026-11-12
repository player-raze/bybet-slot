import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { generateSitemapFile } from '../scripts/generate-sitemap.mjs'
import { generateLlmsContent } from '../scripts/generate-llms.mjs'

describe('Explore URL Migration & Backward-Compatibility Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: All 9 migrated folders exist directly under pages/', () => {
    const requiredPagesDirs = [
      'account',
      'bonus',
      'bonuses',
      'egames',
      'entertainment',
      'help',
      'legal',
      'live-plaza',
      'sports',
    ]

    for (const dir of requiredPagesDirs) {
      const dirPath = path.join(rootDir, 'pages', dir)
      assert.ok(fs.existsSync(dirPath), `pages/${dir} must exist at top-level`)
      assert.ok(fs.statSync(dirPath).isDirectory(), `pages/${dir} must be a directory`)
    }
  })

  test('Case 2: Global route middleware handles legacy /explore redirects to clean URLs', () => {
    const middlewarePath = path.join(rootDir, 'middleware', 'explore-redirect.global.ts')
    assert.ok(fs.existsSync(middlewarePath), 'middleware/explore-redirect.global.ts must exist')

    const source = fs.readFileSync(middlewarePath, 'utf-8')
    assert.match(source, /to\.path\.startsWith\('\/explore\/'\)/)
    assert.match(source, /redirectCode:\s*301/)
  })

  test('Case 3: Fallback explore catch-all page exists for edge cases', () => {
    const fallbackPath = path.join(rootDir, 'pages', 'explore', '[...path].vue')
    assert.ok(fs.existsSync(fallbackPath), 'pages/explore/[...path].vue must exist')

    const source = fs.readFileSync(fallbackPath, 'utf-8')
    assert.match(source, /redirectCode:\s*301/)
  })

  test('Case 4: Navigation components use clean paths without /explore', () => {
    const mobileNavSource = fs.readFileSync(path.join(rootDir, 'components', 'MobileBottomNav.vue'), 'utf-8')
    assert.ok(mobileNavSource.includes("to: '/sports/popular'"))
    assert.ok(mobileNavSource.includes("to: '/sports/live'"))
    assert.ok(mobileNavSource.includes("to: '/egames/slots'"))
    assert.ok(mobileNavSource.includes("to: '/account/me'"))
    assert.ok(mobileNavSource.includes("to: '/entertainment/live-casino/baccarat'"))

    const appHeaderSource = fs.readFileSync(path.join(rootDir, 'components', 'AppHeader.vue'), 'utf-8')
    assert.ok(appHeaderSource.includes('to="/egames/customer-service"'))
    assert.ok(appHeaderSource.includes('to="/account/me"'))

    const appFooterSource = fs.readFileSync(path.join(rootDir, 'components', 'AppFooter.vue'), 'utf-8')
    assert.ok(appFooterSource.includes('to="/bonuses"'))
    assert.ok(appFooterSource.includes('to="/egames/customer-service"'))
  })

  test('Case 5: data/homepage.ts contains clean links', () => {
    const homepageSource = fs.readFileSync(path.join(rootDir, 'data', 'homepage.ts'), 'utf-8')
    assert.ok(!homepageSource.includes('/explore/egames/slots'))
    assert.ok(!homepageSource.includes('/explore/entertainment/live-casino'))
    assert.ok(!homepageSource.includes('/explore/sports/popular'))
    assert.ok(!homepageSource.includes('/explore/bonuses'))
    assert.ok(!homepageSource.includes('/explore/live-plaza'))
    assert.ok(homepageSource.includes("to: '/egames/slots'"))
    assert.ok(homepageSource.includes("to: '/bonuses'"))
  })

  test('Case 6: Sitemap generator produces clean URLs without /explore', async () => {
    await generateSitemapFile('https://bybet.com')
    const xml = fs.readFileSync(path.join(rootDir, 'public', 'sitemap.xml'), 'utf-8')
    assert.ok(xml.includes('<loc>https://bybet.com/bonuses</loc>'))
    assert.ok(xml.includes('<loc>https://bybet.com/sports/popular</loc>'))
    assert.ok(xml.includes('<loc>https://bybet.com/egames/slots</loc>'))
    assert.ok(xml.includes('<loc>https://bybet.com/entertainment/live-casino/baccarat</loc>'))
    assert.ok(xml.includes('<loc>https://bybet.com/live-plaza/home</loc>'))
    assert.ok(!xml.includes('/explore/bonuses'))
    assert.ok(!xml.includes('/explore/sports/'))
    assert.ok(!xml.includes('/explore/egames/'))
    assert.ok(!xml.includes('/explore/entertainment/'))
    assert.ok(!xml.includes('/explore/live-plaza/'))
  })

  test('Case 7: llms.txt content produces clean URLs without /explore', () => {
    const content = generateLlmsContent('https://bybet.com')
    assert.ok(content.includes('https://bybet.com/bonuses'))
    assert.ok(content.includes('https://bybet.com/sports/popular'))
    assert.ok(content.includes('https://bybet.com/egames/slots'))
    assert.ok(content.includes('https://bybet.com/entertainment/live-casino/baccarat'))
    assert.ok(content.includes('https://bybet.com/live-plaza/home'))
    assert.ok(!content.includes('https://bybet.com/explore/'))
  })
})
