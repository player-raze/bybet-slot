import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  DEFAULT_VITE_ALLOWED_HOSTS,
  normalizeHostEntry,
  resolveViteAllowedHosts,
} from '../utils/viteAllowedHosts.ts'

describe('Vite AllowedHosts Configuration Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: normalizeHostEntry strips schemes, ports, paths and translates *.domain wildcards', () => {
    assert.equal(normalizeHostEntry('thechikin.chickenkiller.com'), 'thechikin.chickenkiller.com')
    assert.equal(normalizeHostEntry('https://TheChikin.ChickenKiller.com:3000/'), 'thechikin.chickenkiller.com')
    assert.equal(normalizeHostEntry('*.chickenkiller.com'), '.chickenkiller.com')
    assert.equal(normalizeHostEntry('.bybet.com'), '.bybet.com')
    assert.equal(normalizeHostEntry(''), '')
  })

  test('Case 2: Test/site domains come from env config with no hardcoded test domain in source', () => {
    assert.deepEqual(DEFAULT_VITE_ALLOWED_HOSTS, [])
    assert.deepEqual(resolveViteAllowedHosts({}), [])

    const withTestDomain = resolveViteAllowedHosts({
      ALLOWED_HOSTS: 'thechikin.chickenkiller.com',
      SITE_URL: 'https://bybet.com/',
    })
    assert.deepEqual(withTestDomain, ['thechikin.chickenkiller.com', 'bybet.com'])

    const swappedDomain = resolveViteAllowedHosts({
      ALLOWED_HOSTS: 'preview.bybet.ph, https://staging.bybet.com:3001, *.demo.local',
      SITE_URL: 'http://localhost:3000',
    })
    assert.deepEqual(swappedDomain, ['preview.bybet.ph', 'staging.bybet.com', '.demo.local'])

    assert.equal(resolveViteAllowedHosts({ ALLOWED_HOSTS: 'true' }), true)
    assert.equal(resolveViteAllowedHosts({ ALLOWED_HOSTS: '*' }), true)
    assert.equal(resolveViteAllowedHosts({ VITE_ALLOWED_HOSTS: 'true' }), true)
  })

  test('Case 3: nuxt.config.ts, utils/viteAllowedHosts.ts, .env.example, and .env wire ALLOWED_HOSTS cleanly', () => {
    const helperSrc = fs.readFileSync(path.join(rootDir, 'utils/viteAllowedHosts.ts'), 'utf8')
    assert.ok(!helperSrc.includes('thechikin.chickenkiller.com'), 'Test domain must not be hardcoded in utils/viteAllowedHosts.ts')

    const nuxtConfig = fs.readFileSync(path.join(rootDir, 'nuxt.config.ts'), 'utf8')
    assert.ok(!nuxtConfig.includes('thechikin.chickenkiller.com'), 'Test domain must not be hardcoded in nuxt.config.ts')
    assert.match(nuxtConfig, /resolveViteAllowedHosts/)
    assert.match(nuxtConfig, /vite:\s*\{[\s\S]*?server:\s*\{[\s\S]*?allowedHosts:\s*viteAllowedHosts/)
    assert.match(nuxtConfig, /preview:\s*\{[\s\S]*?allowedHosts:\s*viteAllowedHosts/)

    const envExample = fs.readFileSync(path.join(rootDir, '.env.example'), 'utf8')
    assert.match(envExample, /^ALLOWED_HOSTS=$/m)
    assert.ok(!envExample.includes('thechikin.chickenkiller.com'), 'Test domain should not be baked into .env.example')

    const envPath = path.join(rootDir, '.env')
    if (fs.existsSync(envPath)) {
      const dotEnv = fs.readFileSync(envPath, 'utf8')
      assert.match(dotEnv, /^ALLOWED_HOSTS=/m)
    }
  })
})
