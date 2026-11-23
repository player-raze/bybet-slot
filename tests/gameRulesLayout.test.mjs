import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

describe('Game Rules Layout, Design & Semantic Headings Suite', () => {
  const rootDir = process.cwd()

  const rulePages = [
    'sports-betting-rules.vue',
    'tennis.vue',
    'football.vue',
    'basketball.vue',
    'baseball.vue',
    'badminton.vue',
    'table-tennis.vue',
    'parlays-multiples.vue',
    'cash-out.vue',
    'outright.vue',
  ]

  const ruleDataFiles = [
    { file: 'sports-betting-rules.ts', expectedBars: 12, expectedSubheaders: 0 },
    { file: 'tennis-rules.ts', expectedBars: 2, expectedSubheaders: 44 },
    { file: 'football-rules.ts', expectedBars: 2, expectedSubheaders: 2 },
    { file: 'basketball-rules.ts', expectedBars: 2, expectedSubheaders: 43 },
    { file: 'baseball-rules.ts', expectedBars: 2, expectedSubheaders: 10 },
    { file: 'badminton-rules.ts', expectedBars: 2, expectedSubheaders: 11 },
    { file: 'table-tennis-rules.ts', expectedBars: 2, expectedSubheaders: 12 },
    { file: 'parlays-rules.ts', expectedBars: 3, expectedSubheaders: 14 },
    { file: 'cash-out-rules.ts', expectedBars: 3, expectedSubheaders: 3 },
    { file: 'outright-rules.ts', expectedBars: 2, expectedSubheaders: 0 },
  ]

  test('Case 1: All 10 game rule pages copy sports-betting-rules card and nav layout', () => {
    for (const pageName of rulePages) {
      const pagePath = path.join(rootDir, 'pages', 'game-rules', pageName)
      assert.ok(fs.existsSync(pagePath), `${pageName} must exist`)

      const content = fs.readFileSync(pagePath, 'utf-8')
      assert.ok(content.includes('<GameRulesNav />'), `${pageName} must include <GameRulesNav />`)
      assert.ok(
        content.includes('bg-[#141414] rounded-2xl p-4 sm:p-8 border border-white/5 shadow-xl mt-4 overflow-x-auto'),
        `${pageName} must include standard card container`
      )
    }
  })

  test('Case 2: All 10 game rule pages eliminate green overrides and preserve sports-betting-rules design', () => {
    for (const pageName of rulePages) {
      const pagePath = path.join(rootDir, 'pages', 'game-rules', pageName)
      const content = fs.readFileSync(pagePath, 'utf-8')

      // Green override styles that broke white bars
      assert.ok(!content.includes('#1a2e22'), `${pageName} must not contain #1a2e22 green background override`)
      assert.ok(!content.includes('#32d49a'), `${pageName} must not contain #32d49a green text override`)

      // Must have clean standard scoped style
      assert.ok(content.includes('opacity: 1 !important;'), `${pageName} must preserve opacity override`)
      assert.ok(content.includes('transform: none !important;'), `${pageName} must preserve transform override`)
      assert.ok(content.includes('word-break: break-word;'), `${pageName} must preserve word-break`)
    }
  })

  test('Case 3: All 10 data rule files have exactly 1 <h1> title tag', () => {
    for (const { file } of ruleDataFiles) {
      const filePath = path.join(rootDir, 'data', file)
      assert.ok(fs.existsSync(filePath), `${file} must exist`)

      const content = fs.readFileSync(filePath, 'utf-8')
      const h1Matches = content.match(/<h1[\s>]/gi) || []
      assert.strictEqual(h1Matches.length, 1, `${file} must contain exactly 1 <h1> tag for title`)
    }
  })

  test('Case 4: All 10 data rule files use <h2> for all white bars (background-color:#e1e1e1)', () => {
    for (const { file, expectedBars } of ruleDataFiles) {
      const filePath = path.join(rootDir, 'data', file)
      const content = fs.readFileSync(filePath, 'utf-8')

      const whiteBars = content.match(/background-color:#e1e1e1/gi) || []
      assert.strictEqual(whiteBars.length, expectedBars, `${file} must have ${expectedBars} white bars`)

      // Every white bar must now be an <h2>
      const h2Matches = content.match(/<h2[\s>]/gi) || []
      assert.strictEqual(h2Matches.length, expectedBars, `${file} must have exactly ${expectedBars} <h2> tags`)
    }
  })

  test('Case 5: Tennis has <h3> for "Winner" and all betting methods subheaders with 0 leftover <h4>', () => {
    const tennisPath = path.join(rootDir, 'data', 'tennis-rules.ts')
    const content = fs.readFileSync(tennisPath, 'utf-8')

    // Winner must be an <h3>
    assert.match(content, /<h3[^>]*>[\s\S]*?Winner[\s\S]*?<\/h3>/i, 'Tennis must have <h3> for Winner')

    // All 44 subheaders are now <h3>
    const h3Matches = content.match(/<h3[\s>]/gi) || []
    assert.strictEqual(h3Matches.length, 44, 'Tennis must contain 44 <h3> subheaders')

    // Zero <h4> tags remain
    const h4Matches = content.match(/<h4[\s>]/gi) || []
    assert.strictEqual(h4Matches.length, 0, 'Tennis must not contain any <h4> tags')
  })

  test('Case 6: Sports Betting Rules has <h1> title and 12 <h2> white bars', () => {
    const sportsRulesPath = path.join(rootDir, 'data', 'sports-betting-rules.ts')
    const content = fs.readFileSync(sportsRulesPath, 'utf-8')

    assert.match(content, /<h1[^>]*>[\s\S]*?SPORTS BETTING RULES[\s\S]*?<\/h1>/i)
    assert.match(content, /<h2[^>]*background-color:#e1e1e1[^>]*>[\s\S]*?Overview[\s\S]*?<\/h2>/i)
    assert.match(content, /<h2[^>]*background-color:#e1e1e1[^>]*>[\s\S]*?GENERAL SPORTS RULES[\s\S]*?<\/h2>/i)
    assert.match(content, /<h2[^>]*background-color:#e1e1e1[^>]*>[\s\S]*?DEAD HEAT RULES[\s\S]*?<\/h2>/i)

    const h2Matches = content.match(/<h2[\s>]/gi) || []
    assert.strictEqual(h2Matches.length, 12, 'sports-betting-rules must have 12 <h2> white bars')
  })
})
