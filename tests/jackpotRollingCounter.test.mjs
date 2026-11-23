import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

describe('Jackpot Rolling Number & 3-Second Interval Test Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: Jackpot tickers are configured for 3-second (3_000ms) intervals', () => {
    const composableSource = fs.readFileSync(path.join(rootDir, 'composables/useJackpotCounter.ts'), 'utf-8')

    assert.match(composableSource, /DEFAULT_DELAY_MS = \[3_000, 3_000\]/, 'DEFAULT_DELAY_MS must be 3s')
    assert.match(composableSource, /DEFAULT_INITIAL_DELAY_MS = \[3_000, 3_000\]/, 'DEFAULT_INITIAL_DELAY_MS must be 3s')

    assert.match(composableSource, /JDB_JACKPOT_COUNTER: JackpotCounterOptions = \{[\s\S]*?delayMs: \[3_000, 3_000\]/, 'JDB delayMs must be 3s')
    assert.match(composableSource, /MEGA_JACKPOT_COUNTER: JackpotCounterOptions = \{[\s\S]*?delayMs: \[3_000, 3_000\]/, 'Mega delayMs must be 3s')
    assert.match(composableSource, /GRAND_JACKPOT_COUNTER: JackpotCounterOptions = \{[\s\S]*?delayMs: \[3_000, 3_000\]/, 'Grand delayMs must be 3s')
  })

  test('Case 2: JackpotDigitReel component exists and implements vertical scrolling strip', () => {
    const reelPath = path.join(rootDir, 'components/egames/JackpotDigitReel.vue')
    assert.ok(fs.existsSync(reelPath), 'components/egames/JackpotDigitReel.vue must exist')

    const content = fs.readFileSync(reelPath, 'utf-8')
    assert.match(content, /jackpot-reel-viewport/, 'Must have viewport container')
    assert.match(content, /jackpot-reel-strip/, 'Must have scrolling strip')
    assert.match(content, /jackpot-reel-cell/, 'Must have reel cells')
    assert.match(content, /translateY/, 'Must use translateY for vertical scrolling')
    assert.match(content, /cubic-bezier/, 'Must use cubic-bezier for smooth easing')
    assert.match(content, /props\.isIncrease/, 'Must handle scrolling direction (up/down)')
  })

  test('Case 3: pages/egames/jackpot/[provider].vue uses JackpotDigitReel with stable positional IDs', () => {
    const pagePath = path.join(rootDir, 'pages/egames/jackpot/[provider].vue')
    const content = fs.readFileSync(pagePath, 'utf-8')

    assert.match(content, /import JackpotDigitReel from '~\/components\/egames\/JackpotDigitReel\.vue'/, 'Must import JackpotDigitReel')
    assert.match(content, /<JackpotDigitReel/, 'Must render JackpotDigitReel in template')
    assert.match(content, /getJackpotDisplayItems/, 'Must declare getJackpotDisplayItems')
    assert.match(content, /id: `\$\{section\.id\}-int-\$\{place\}`/, 'Must use stable integer positional IDs from right to left')
    assert.match(content, /id: `\$\{section\.id\}-dec-\$\{placeFromRight\}`/, 'Must use stable decimal positional IDs')
    assert.match(content, /:is-increase="getJackpotDirection\(section\) === 'up'"/, 'Must pass is-increase direction to reel')
  })

  test('Case 4: Sequence building logic properly creates ascending and descending sequences', () => {
    const buildSequence = (from, to, isInc) => {
      if (from === to) return [to]
      const list = [from]
      let cur = from
      if (isInc) {
        while (cur !== to) {
          cur = (cur + 1) % 10
          list.push(cur)
        }
      } else {
        while (cur !== to) {
          cur = (cur - 1 + 10) % 10
          list.push(cur)
        }
      }
      return list
    }

    // Ascending: 5 to 8
    assert.deepEqual(buildSequence(5, 8, true), [5, 6, 7, 8], '5 to 8 ascending must include [5, 6, 7, 8]')

    // Ascending wrapping: 8 to 2
    assert.deepEqual(buildSequence(8, 2, true), [8, 9, 0, 1, 2], '8 to 2 ascending wrap must include [8, 9, 0, 1, 2]')

    // Descending: 8 to 5
    assert.deepEqual(buildSequence(8, 5, false), [8, 7, 6, 5], '8 to 5 descending must include [8, 7, 6, 5]')

    // Descending wrapping: 2 to 8
    assert.deepEqual(buildSequence(2, 8, false), [2, 1, 0, 9, 8], '2 to 8 descending wrap must include [2, 1, 0, 9, 8]')
  })
})
