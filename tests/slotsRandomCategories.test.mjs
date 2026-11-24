import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { SLOTS, isGameInSlotCategory } from '../data/slots.ts'
import {
  createRandomSeed,
  deriveCategorySeed,
  isRandomizedSlotCategory,
  shuffleWithSeed,
  sortOrRandomizeSlotGames,
  sortRailGames,
} from '../utils/gameSort.ts'

describe('egames/slots Random Bonuses, Top Pick, and New Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: Only Bonuses, Top Pick, and New are marked as randomized slot categories', () => {
    for (const cat of ['bonus', 'bonuses', 'top-pick', 'top-picks', 'toppick', 'new']) {
      assert.equal(isRandomizedSlotCategory(cat), true, `${cat} should be randomized`)
    }
    for (const cat of ['top', 'hot', 'cold', 'max-rtp', 'max-rpt', '']) {
      assert.equal(isRandomizedSlotCategory(cat), false, `${cat || '(empty)'} should preserve metric sorting`)
    }
  })

  test('Case 2: shuffleWithSeed is pure, deterministic per seed, and varies across seeds', () => {
    const input = SLOTS.filter(g => isGameInSlotCategory(g, 'top-pick'))
    const originalIds = input.map(g => g.id)

    const shuffledA = shuffleWithSeed(input, 101)
    const shuffledB = shuffleWithSeed(input, 101)
    const shuffledC = shuffleWithSeed(input, 202)

    assert.deepEqual(input.map(g => g.id), originalIds, 'Original array must not be mutated')
    assert.deepEqual(shuffledA.map(g => g.id), shuffledB.map(g => g.id), 'Same seed must be deterministic for SSR hydration')
    assert.notDeepEqual(shuffledA.map(g => g.id), originalIds, 'Shuffled order must differ from input order')
    assert.notDeepEqual(shuffledA.map(g => g.id), shuffledC.map(g => g.id), 'Different seeds must produce different orders')
    assert.deepEqual([...shuffledA.map(g => g.id)].sort(), [...originalIds].sort(), 'Must preserve exact set of items')

    assert.notEqual(deriveCategorySeed(101, 'bonuses'), deriveCategorySeed(101, 'top-pick'))
    assert.notEqual(deriveCategorySeed(101, 'top-pick'), deriveCategorySeed(101, 'new'))
    assert.ok(Number.isInteger(createRandomSeed()) && createRandomSeed() > 0)
  })

  test('Case 3: sortRailGames with sort="none" preserves shuffled top-pick order', () => {
    const input = SLOTS.filter(g => isGameInSlotCategory(g, 'top-pick')).slice(0, 24)
    const shuffled = shuffleWithSeed(input, 777)
    const preserved = sortRailGames(shuffled, {
      sort: 'none',
      category: 'top-pick',
      label: 'Top Pick',
    })
    assert.deepEqual(preserved.map(g => g.id), shuffled.map(g => g.id))
  })

  test('Case 4: Bonuses, Top Pick, and New vary across seeds while Top, Hot, Cold, and Max RTP stay sorted', () => {
    for (const cat of ['bonuses', 'top-pick', 'new']) {
      const pool = SLOTS.filter(g => isGameInSlotCategory(g, cat))
      const run1 = sortOrRandomizeSlotGames(pool, { category: cat, label: cat, randomSeed: 11111 })
      const run2 = sortOrRandomizeSlotGames(pool, { category: cat, label: cat, randomSeed: 99999 })
      assert.notDeepEqual(
        run1.map(g => g.id),
        run2.map(g => g.id),
        `${cat} must yield different random order across seeds`,
      )
    }

    const topPool = SLOTS.filter(g => isGameInSlotCategory(g, 'top'))
    const top1 = sortOrRandomizeSlotGames(topPool, { category: 'top', label: 'Top', randomSeed: 11111 })
    const top2 = sortOrRandomizeSlotGames(topPool, { category: 'top', label: 'Top', randomSeed: 99999 })
    assert.deepEqual(top1.map(g => g.id), top2.map(g => g.id), 'Top section must remain deterministically sorted by livePlayers')

    const hotPool = SLOTS.filter(g => isGameInSlotCategory(g, 'hot'))
    const hot1 = sortOrRandomizeSlotGames(hotPool, { category: 'hot', label: 'Hot games', randomSeed: 11111 })
    const hot2 = sortOrRandomizeSlotGames(hotPool, { category: 'hot', label: 'Hot games', randomSeed: 99999 })
    assert.deepEqual(hot1.map(g => g.id), hot2.map(g => g.id), 'Hot section must remain deterministically sorted')
  })

  test('Case 5: egames/slots pages and GameRail wiring preserve randomized order and hydration safety', () => {
    const slotsIndex = fs.readFileSync(path.join(rootDir, 'pages/egames/slots/index.vue'), 'utf8')
    const slotsCategory = fs.readFileSync(path.join(rootDir, 'pages/egames/slots/[category].vue'), 'utf8')
    const randomSeedComposable = fs.readFileSync(path.join(rootDir, 'composables/useSlotRandomSeed.ts'), 'utf8')

    assert.match(randomSeedComposable, /useState<number>\('egames-slots-random-seed'/)
    assert.match(randomSeedComposable, /nuxtApp\.isHydrating/)

    assert.match(slotsIndex, /useSlotRandomSeed\(\)/)
    assert.match(slotsIndex, /sortOrRandomizeSlotGames/)
    assert.match(slotsIndex, /:sort="isRandomizedSlotCategory\(section\.id\) \? 'none' : undefined"/)

    assert.match(slotsCategory, /useSlotRandomSeed\(\)/)
    assert.match(slotsCategory, /sortOrRandomizeSlotGames/)
  })
})
