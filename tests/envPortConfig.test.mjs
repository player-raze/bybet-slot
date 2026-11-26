import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

import { findDotEnvPath, loadEnvIntoProcess, parseEnvContent } from '../scripts/env-loader.mjs'

describe('aaPanel Editable Env Port Configuration Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: parseEnvContent handles quotes, export prefixes, CRLF, and comments', () => {
    const parsed = parseEnvContent([
      '# Header comment',
      'PORT=3105',
      "SITE_NAME='ByBet Slots'",
      'HOST="127.0.0.1"',
      'export NUXT_PORT=3109',
      'INLINE_COMMENT=3200 # per-site port',
      '',
    ].join('\r\n'))

    assert.equal(parsed.PORT, '3105')
    assert.equal(parsed.SITE_NAME, 'ByBet Slots')
    assert.equal(parsed.HOST, '127.0.0.1')
    assert.equal(parsed.NUXT_PORT, '3109')
    assert.equal(parsed.INLINE_COMMENT, '3200')
  })

  test('Case 2: loadEnvIntoProcess loads .env PORT without overriding explicit shell overrides', () => {
    const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'bybet-env-test-'))
    const nestedDir = path.join(tmpRoot, '.output', 'server')
    fs.mkdirSync(nestedDir, { recursive: true })
    fs.writeFileSync(path.join(tmpRoot, '.env'), 'PORT=4105\nHOST=127.0.0.1\n', 'utf8')

    try {
      const detected = findDotEnvPath([nestedDir, path.resolve(nestedDir, '..'), path.resolve(nestedDir, '../..')])
      assert.equal(detected, path.join(tmpRoot, '.env'))

      // Without explicit shell PORT -> uses .env PORT for PORT, NITRO_PORT, and NUXT_PORT
      const target1 = {}
      const loaded1 = loadEnvIntoProcess({ envPath: detected, targetEnv: target1 })
      assert.equal(loaded1.port, '4105')
      assert.equal(target1.PORT, '4105')
      assert.equal(target1.NITRO_PORT, '4105')
      assert.equal(target1.NUXT_PORT, '4105')
      assert.equal(target1.HOST, '127.0.0.1')
      assert.equal(target1.NITRO_HOST, '127.0.0.1')

      // With explicit shell/aaPanel override -> keeps override intact
      const target2 = { PORT: '4999', NITRO_PORT: '4999' }
      const loaded2 = loadEnvIntoProcess({ envPath: detected, targetEnv: target2 })
      assert.equal(loaded2.port, '4999')
      assert.equal(target2.PORT, '4999')
      assert.equal(target2.NITRO_PORT, '4999')
    } finally {
      fs.rmSync(tmpRoot, { recursive: true, force: true })
    }
  })

  test('Case 2b: loadEnvIntoProcess normalizes scheme-less BLOGGERIST_URL and bridges NUXT_* vars', () => {
    const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'bybet-bloggerist-env-'))
    const envFile = path.join(tmpRoot, '.env')
    fs.writeFileSync(envFile, 'PORT=3005\nBLOGGERIST_URL=bybet-all-bloggerist.chickenkiller.com\n', 'utf8')

    try {
      const target = {}
      const loaded = loadEnvIntoProcess({ envPath: envFile, targetEnv: target })
      assert.equal(loaded.bloggeristUrl, 'http://bybet-all-bloggerist.chickenkiller.com')
      assert.equal(target.BLOGGERIST_URL, 'http://bybet-all-bloggerist.chickenkiller.com')
      assert.equal(target.NUXT_BLOGGERIST_URL, 'http://bybet-all-bloggerist.chickenkiller.com')
      assert.equal(target.NUXT_PUBLIC_BLOGGERIST_URL, 'http://bybet-all-bloggerist.chickenkiller.com')
    } finally {
      fs.rmSync(tmpRoot, { recursive: true, force: true })
    }
  })

  test('Case 3: Project config, scripts, Nitro plugin, and env files expose editable PORT', () => {
    const envExample = fs.readFileSync(path.join(rootDir, '.env.example'), 'utf8')
    assert.match(envExample, /^PORT=3000$/m, '.env.example must define default PORT=3000')

    const envPath = path.join(rootDir, '.env')
    if (fs.existsSync(envPath)) {
      const dotEnv = fs.readFileSync(envPath, 'utf8')
      assert.match(dotEnv, /^PORT=\d+$/m, '.env must define numeric PORT=')
    }

    const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'))
    assert.equal(pkg.scripts?.start, 'node scripts/start-server.mjs')
    assert.equal(pkg.scripts?.preview, 'nuxt preview')

    const nitroPlugin = fs.readFileSync(path.join(rootDir, 'server/plugins/00.loadEnv.ts'), 'utf8')
    assert.match(nitroPlugin, /loadEnvIntoProcess/)

    const startScript = fs.readFileSync(path.join(rootDir, 'scripts/start-server.mjs'), 'utf8')
    assert.match(startScript, /loadEnvIntoProcess/)

    const nuxtConfig = fs.readFileSync(path.join(rootDir, 'nuxt.config.ts'), 'utf8')
    assert.match(nuxtConfig, /devServer:/)
    assert.match(nuxtConfig, /NUXT_PORT \|\| environment\?\.NITRO_PORT \|\| environment\?\.PORT/)

    const cronScript = fs.readFileSync(path.join(rootDir, 'scripts/refresh-daily-predictions.mjs'), 'utf8')
    assert.match(cronScript, /loadEnvIntoProcess/)
  })
})
