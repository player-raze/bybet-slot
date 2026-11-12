import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { generateLlmsContent, generateLlmsFile } from '../scripts/generate-llms.mjs'

describe('LLMs.txt Generation & Build Integration Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: generateLlmsContent produces standard-compliant Markdown with title and blockquote', () => {
    const content = generateLlmsContent('https://bybet.com')

    assert.ok(content.startsWith('# ByBet Philippines'))
    assert.match(content, /> ByBet Philippines is a premier online sports betting/)
    assert.match(content, /## Core Lobbies/)
    assert.match(content, /## Sports Betting & Live Video/)
    assert.match(content, /## Live Plaza & Community/)
    assert.match(content, /## Promotions & VIP Rewards/)
    assert.match(content, /## Game Rules & Betting Guidelines/)
    assert.match(content, /## Tutorials & User Assistance/)
    assert.match(content, /## Trust, Compliance & Legal/)
    assert.match(content, /## Optional/)
  })

  test('Case 2: URLs adapt to custom siteUrl parameter', () => {
    const customUrl = 'https://preview.bybet.ph'
    const content = generateLlmsContent(customUrl)

    assert.ok(content.includes('https://preview.bybet.ph/sports/popular'))
    assert.ok(content.includes('https://preview.bybet.ph/egames/slots'))
    assert.ok(content.includes('https://preview.bybet.ph/sitemap.xml'))
    assert.ok(!content.includes('https://preview.bybet.ph//'))
  })

  test('Case 3: generateLlmsFile writes to public/llms.txt and root llms.txt', async () => {
    const result = await generateLlmsFile('https://bybet.com')
    assert.equal(result.siteUrl, 'https://bybet.com')

    const publicPath = path.join(rootDir, 'public', 'llms.txt')
    const rootPath = path.join(rootDir, 'llms.txt')

    assert.ok(fs.existsSync(publicPath), 'public/llms.txt should exist')
    assert.ok(fs.existsSync(rootPath), 'root llms.txt should exist')

    const publicContent = fs.readFileSync(publicPath, 'utf8')
    assert.ok(publicContent.includes('# ByBet Philippines'))
  })

  test('Case 4: .gitignore includes llms.txt and public/llms.txt to prevent git conflicts', () => {
    const gitignorePath = path.join(rootDir, '.gitignore')
    const gitignore = fs.readFileSync(gitignorePath, 'utf8')

    assert.match(gitignore, /^llms\.txt$/m, '.gitignore should ignore llms.txt')
    assert.match(gitignore, /^public\/llms\.txt$/m, '.gitignore should ignore public/llms.txt')
  })

  test('Case 5: package.json build script executes generate-llms.mjs', () => {
    const pkgPath = path.join(rootDir, 'package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

    assert.ok(
      pkg.scripts.build.includes('node scripts/generate-llms.mjs'),
      'package.json build script must run node scripts/generate-llms.mjs',
    )
  })

  test('Case 6: nuxt.config.ts invokes generateLlmsFile on Nitro compiled hook', () => {
    const nuxtConfigPath = path.join(rootDir, 'nuxt.config.ts')
    const nuxtConfig = fs.readFileSync(nuxtConfigPath, 'utf8')

    assert.ok(
      nuxtConfig.includes("generateLlmsFile"),
      'nuxt.config.ts should import and invoke generateLlmsFile in nitro.hooks.compiled',
    )
  })

  test('Case 7: server/routes/llms.txt.ts provides runtime endpoint handler', () => {
    const routePath = path.join(rootDir, 'server', 'routes', 'llms.txt.ts')
    assert.ok(fs.existsSync(routePath), 'server/routes/llms.txt.ts should exist')

    const routeContent = fs.readFileSync(routePath, 'utf8')
    assert.match(routeContent, /generateLlmsContent/)
    assert.match(routeContent, /text\/plain;\s*charset=utf-8/)
  })
})
