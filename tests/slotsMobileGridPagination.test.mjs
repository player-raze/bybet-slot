import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { SLOTS, isGameInSlotCategory } from '../data/slots.ts'
import {
  MOBILE_SLOTS_BATCH_SIZE,
  MOBILE_SLOTS_INITIAL_COUNT,
  getMobileSectionLimit,
  getVisibleSlotSectionGames,
  hasMoreSlotSectionGames,
  incrementMobileSectionLimit,
} from '../utils/slotSectionPagination.ts'

describe('egames/slots Mobile Grid & Load More Pagination Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: Constants initialize mobile slot categories to 30 games with batches of 30', () => {
    assert.equal(MOBILE_SLOTS_INITIAL_COUNT, 30)
    assert.equal(MOBILE_SLOTS_BATCH_SIZE, 30)
    assert.equal(getMobileSectionLimit({}, 'bonuses'), 30)
  })

  test('Case 2: Desktop mode preserves the 24-card preview slice and never shows mobile pagination', () => {
    const allGames = SLOTS.filter(g => isGameInSlotCategory(g, 'bonus'))
    const desktopGames = allGames.slice(0, 24)
    const visible = getVisibleSlotSectionGames(desktopGames, allGames, false, {}, 'bonuses')

    assert.equal(visible.length, 24)
    assert.deepEqual(visible.map(g => g.id), desktopGames.map(g => g.id))
    assert.equal(hasMoreSlotSectionGames(allGames.length, false, {}, 'bonuses'), false)
  })

  test('Case 3: Mobile mode shows first 30 games per category and advances by 30 independently on Load more', () => {
    const bonusGames = SLOTS.filter(g => isGameInSlotCategory(g, 'bonus'))
    const topPickGames = SLOTS.filter(g => isGameInSlotCategory(g, 'top-pick'))
    assert.ok(bonusGames.length > 90)
    assert.ok(topPickGames.length > 60 && topPickGames.length < 120)

    let limits = {}

    assert.equal(
      getVisibleSlotSectionGames(bonusGames.slice(0, 24), bonusGames, true, limits, 'bonuses').length,
      30,
    )
    assert.equal(hasMoreSlotSectionGames(bonusGames.length, true, limits, 'bonuses'), true)

    limits = incrementMobileSectionLimit(limits, 'bonuses', bonusGames.length)
    assert.equal(
      getVisibleSlotSectionGames(bonusGames.slice(0, 24), bonusGames, true, limits, 'bonuses').length,
      60,
    )
    // Other categories remain at 30 until expanded individually
    assert.equal(
      getVisibleSlotSectionGames(topPickGames.slice(0, 24), topPickGames, true, limits, 'top-pick').length,
      30,
    )

    limits = incrementMobileSectionLimit(limits, 'bonuses', bonusGames.length)
    assert.equal(
      getVisibleSlotSectionGames(bonusGames.slice(0, 24), bonusGames, true, limits, 'bonuses').length,
      90,
    )

    // Exhausting top-pick (92 games: 30 -> 60 -> 90 -> 92) hides Load more
    limits = incrementMobileSectionLimit(limits, 'top-pick', topPickGames.length)
    limits = incrementMobileSectionLimit(limits, 'top-pick', topPickGames.length)
    limits = incrementMobileSectionLimit(limits, 'top-pick', topPickGames.length)
    assert.equal(
      getVisibleSlotSectionGames(topPickGames.slice(0, 24), topPickGames, true, limits, 'top-pick').length,
      topPickGames.length,
    )
    assert.equal(hasMoreSlotSectionGames(topPickGames.length, true, limits, 'top-pick'), false)
  })

  test('Case 4: Categories with <= 30 games show all games on mobile and hide Load more games', () => {
    const smallList = SLOTS.slice(0, 15)
    const visible = getVisibleSlotSectionGames(smallList, smallList, true, {}, 'new')
    assert.equal(visible.length, 15)
    assert.equal(hasMoreSlotSectionGames(smallList.length, true, {}, 'new'), false)
  })

  test('Case 5: pages/egames/slots/index.vue wires mobile grid layout, 30-game pagination, and desktop preservation', () => {
    const slotsIndex = fs.readFileSync(path.join(rootDir, 'pages/egames/slots/index.vue'), 'utf8')

    assert.match(slotsIndex, /from '~\/utils\/slotSectionPagination'/)
    assert.match(slotsIndex, /window\.matchMedia\('\(max-width: 1023px\)'\)/)
    assert.match(slotsIndex, /:layout="isMobileViewport \? 'grid' : 'slider'"/)
    assert.match(slotsIndex, /const GAMES_PER_SECTION = 24/)
    assert.match(slotsIndex, /Load more games/)
    assert.match(slotsIndex, /@media \(max-width: 1023px\)/)
    assert.match(slotsIndex, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/)
    assert.match(slotsIndex, /removeEventListener\('change', syncMobileViewport\)/)
  })
})
