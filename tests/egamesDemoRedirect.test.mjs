import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import {
  DEMO_REDIRECT_MAP,
  getDemoRedirectPath,
  resolveDemoRedirectUrl,
} from '../utils/egamesRedirect.ts'

describe('Egames Demo Button Redirect Test Suite', () => {
  const envRedirect = 'https://bybet.com'
  const code = 'xjSD'

  test('Case 1: All 17 exact mappings match user specifications', () => {
    const expected = {
      'egames/slots': 'slotMachine/main',
      'egames/slots/bonus': 'slotMachine/promotion',
      'egames/slots/top-pick': 'slotMachine/recommend',
      'egames/slots/top': 'slotMachine/popular',
      'egames/slots/new': 'slotMachine/new',
      'egames/slots/hot': 'slotMachine/hot',
      'egames/slots/cold': 'slotMachine/cold',
      'egames/slots/max-rpt': 'slotMachine/high',
      'egames/bingo': 'bingoMachine/main',
      'egames/bingo/top': 'bingoMachine/popular',
      'egames/bingo/hot': 'bingoMachine/hot',
      'egames/bingo/cold': 'bingoMachine/cold',
      'egames/bingo/max-rpt': 'bingoMachine/high',
      'egames/jackpot/all': 'jackpot/list',
      'egames/jackpot/jili': 'jackpot/38',
      'egames/jackpot/jdb': 'jackpot/18',
      'egames/jackpot/cq9': 'jackpot/15',
    }

    for (const [route, target] of Object.entries(expected)) {
      assert.equal(DEMO_REDIRECT_MAP[route], target, `Mapping for ${route} must be ${target}`)
      assert.equal(getDemoRedirectPath(route), target, `Path resolution for ${route} must be ${target}`)
      const fullUrl = resolveDemoRedirectUrl(route, null, envRedirect, code)
      assert.equal(fullUrl, `https://bybet.com/${target}?p=xjSD`, `Full redirect for ${route} must include env_redirect + 2nd url + code`)
    }
  })

  test('Case 2: Leading slashes and /explore prefix are stripped cleanly', () => {
    assert.equal(getDemoRedirectPath('/egames/slots'), 'slotMachine/main')
    assert.equal(getDemoRedirectPath('/explore/egames/slots/bonus'), 'slotMachine/promotion')
    assert.equal(getDemoRedirectPath('/explore/egames/bingo/top'), 'bingoMachine/popular')
    assert.equal(getDemoRedirectPath('/explore/egames/jackpot/jili'), 'jackpot/38')
  })

  test('Case 3: Base routes with separate category parameters resolve correctly', () => {
    // Slots
    assert.equal(getDemoRedirectPath('/egames/slots', 'bonus'), 'slotMachine/promotion')
    assert.equal(getDemoRedirectPath('/egames/slots', 'top-pick'), 'slotMachine/recommend')
    assert.equal(getDemoRedirectPath('/egames/slots', 'top'), 'slotMachine/popular')
    assert.equal(getDemoRedirectPath('/egames/slots', 'new'), 'slotMachine/new')
    assert.equal(getDemoRedirectPath('/egames/slots', 'hot'), 'slotMachine/hot')
    assert.equal(getDemoRedirectPath('/egames/slots', 'cold'), 'slotMachine/cold')
    assert.equal(getDemoRedirectPath('/egames/slots', 'max-rpt'), 'slotMachine/high')

    // Aliases
    assert.equal(getDemoRedirectPath('/egames/slots', 'max-rtp'), 'slotMachine/high')
    assert.equal(getDemoRedirectPath('/egames/slots', 'top-picks'), 'slotMachine/recommend')
    assert.equal(getDemoRedirectPath('/egames/slots', 'toppick'), 'slotMachine/recommend')
    assert.equal(getDemoRedirectPath('/egames/slots', 'bonuses'), 'slotMachine/promotion')

    // Bingo
    assert.equal(getDemoRedirectPath('/egames/bingo', 'top'), 'bingoMachine/popular')
    assert.equal(getDemoRedirectPath('/egames/bingo', 'hot'), 'bingoMachine/hot')
    assert.equal(getDemoRedirectPath('/egames/bingo', 'cold'), 'bingoMachine/cold')
    assert.equal(getDemoRedirectPath('/egames/bingo', 'max-rpt'), 'bingoMachine/high')
    assert.equal(getDemoRedirectPath('/egames/bingo', 'max-rtp'), 'bingoMachine/high')

    // Jackpot
    assert.equal(getDemoRedirectPath('/egames/jackpot', 'all'), 'jackpot/list')
    assert.equal(getDemoRedirectPath('/egames/jackpot', 'jili'), 'jackpot/38')
    assert.equal(getDemoRedirectPath('/egames/jackpot', 'jdb'), 'jackpot/18')
    assert.equal(getDemoRedirectPath('/egames/jackpot', 'cq9'), 'jackpot/15')
  })

  test('Case 4: resolveDemoRedirectUrl constructs env_redirect + 2nd url + code', () => {
    const url1 = resolveDemoRedirectUrl('egames/slots', null, 'https://bybet.com/', 'xjSD')
    assert.equal(url1, 'https://bybet.com/slotMachine/main?p=xjSD')

    const url2 = resolveDemoRedirectUrl('egames/slots/hot', null, 'https://bybet.com', 'PROMO123')
    assert.equal(url2, 'https://bybet.com/slotMachine/hot?p=PROMO123')

    const url3 = resolveDemoRedirectUrl('egames/jackpot/cq9', null, 'https://staging.bybet.com', 'testCode')
    assert.equal(url3, 'https://staging.bybet.com/jackpot/15?p=testCode')
  })

  test('Case 5: GameCard and consumer pages use redirect instead of message popup', () => {
    const rootDir = process.cwd()
    const gameCardContent = fs.readFileSync(path.join(rootDir, 'components/game-cards/GameCard.vue'), 'utf-8')
    assert.match(gameCardContent, /resolveDemoRedirectUrl/, 'GameCard must import and use resolveDemoRedirectUrl')
    assert.match(gameCardContent, /handleDemoClick/, 'GameCard must handle demo click')
    assert.match(gameCardContent, /@click\.stop="handleDemoClick"/, 'Demo button must trigger handleDemoClick')

    const consumerPages = [
      'pages/egames/slots/index.vue',
      'pages/egames/slots/[category].vue',
      'pages/egames/bingo/index.vue',
      'pages/egames/bingo/[category].vue',
      'pages/egames/jackpot/[provider].vue',
      'pages/egames/history.vue',
    ]

    for (const pageRel of consumerPages) {
      const pageContent = fs.readFileSync(path.join(rootDir, pageRel), 'utf-8')
      assert.match(pageContent, /resolveDemoRedirectUrl/, `${pageRel} must import resolveDemoRedirectUrl`)
      assert.match(pageContent, /window\.open\(targetUrl, '_blank'\)/, `${pageRel} must redirect via window.open on demo click`)
      assert.doesNotMatch(pageContent, /showDemoMessage\(`Launching Demo mode/, `${pageRel} must not use demo message popup`)
    }
  })

  test('Case 6: utils/egamesRedirect.ts does not duplicate sportsRedirect exports or auto-imports', async () => {
    const egamesModule = await import('../utils/egamesRedirect.ts')
    for (const symbol of [
      'DEFAULT_BYBET_REDIRECT_URL',
      'DEFAULT_BYBET_REDIRECT_CODE',
      'getEnvRedirectUrl',
      'getEnvRedirectCode',
      'buildBybetRedirectUrl',
    ]) {
      assert.equal(symbol in egamesModule, false, `utils/egamesRedirect.ts must not export duplicate symbol ${symbol}`)
    }

    const rootDir = process.cwd()
    const seenExports = new Map()
    for (const dir of ['utils', 'composables']) {
      const fullDir = path.join(rootDir, dir)
      for (const file of fs.readdirSync(fullDir).filter(name => name.endsWith('.ts'))) {
        const src = fs.readFileSync(path.join(fullDir, file), 'utf-8')
        for (const match of src.matchAll(/^export\s+(?:const|let|var|function|async\s+function|class)\s+([A-Za-z0-9_$]+)/gm)) {
          const exportName = match[1]
          if (!seenExports.has(exportName)) seenExports.set(exportName, [])
          seenExports.get(exportName).push(`${dir}/${file}`)
        }
      }
    }

    const duplicates = [...seenExports.entries()].filter(([, files]) => files.length > 1)
    assert.deepEqual(
      duplicates,
      [],
      `Duplicate auto-import exports found across utils/ and composables/: ${JSON.stringify(duplicates)}`,
    )
  })
})
