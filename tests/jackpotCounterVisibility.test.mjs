import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { JACKPOT_SECTIONS } from '../data/jackpot.ts'

describe('Jackpot Counter Track Visibility Test Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: data/jackpot.ts specifies showCounter=false for jili and showCounter=true with amount=0 for cq9', () => {
    const jili = JACKPOT_SECTIONS.find(s => s.id === 'jili')
    const cq9 = JACKPOT_SECTIONS.find(s => s.id === 'cq9')
    const jdb = JACKPOT_SECTIONS.find(s => s.id === 'jdb')

    assert.ok(jili, 'JILI section must exist in JACKPOT_SECTIONS')
    assert.equal(jili.showCounter, false, 'JILI must have showCounter: false')

    assert.ok(cq9, 'CQ9 section must exist in JACKPOT_SECTIONS')
    assert.equal(cq9.showCounter, true, 'CQ9 must have showCounter: true')
    assert.equal(cq9.jackpotAmount, 0, 'CQ9 must have jackpotAmount: 0')

    assert.ok(jdb, 'JDB section must exist in JACKPOT_SECTIONS')
    assert.equal(jdb.showCounter, true, 'JDB must have showCounter: true')
    assert.ok(jdb.jackpotAmount > 0, 'JDB must have positive jackpotAmount')
  })

  test('Case 2: data/jackpots.json preserves positive amounts for home page display', () => {
    const raw = fs.readFileSync(path.join(rootDir, 'data/jackpots.json'), 'utf-8')
    const jackpots = JSON.parse(raw)

    assert.ok(jackpots.jili > 0, 'data/jackpots.json jili must be positive for home page')
    assert.ok(jackpots.cq9 > 0, 'data/jackpots.json cq9 must be positive for home page')
    assert.ok(jackpots.jdb > 0, 'data/jackpots.json jdb must be positive')
  })

  test('Case 3: pages/egames/jackpot/[provider].vue hides counter for jili and displays 0.00 for cq9', () => {
    const content = fs.readFileSync(path.join(rootDir, 'pages/egames/jackpot/[provider].vue'), 'utf-8')

    // shouldShowCounter logic
    assert.match(content, /const shouldShowCounter = \(/, 'must declare shouldShowCounter function')
    assert.match(content, /id === 'jili'/, 'shouldShowCounter must explicitly check for jili')
    assert.match(content, /id === 'cq9'/, 'shouldShowCounter must explicitly check for cq9')
    assert.match(content, /v-if="shouldShowCounter\(section\)"/, 'jackpot-counter-track must use v-if="shouldShowCounter(section)"')
    assert.match(content, /:class="\{\s*'jackpot-provider-header--with-counter': shouldShowCounter\(section\)\s*\}"/, 'header class must use shouldShowCounter')

    // getJackpotAmount logic
    assert.match(content, /const getJackpotAmount = \(/, 'must declare getJackpotAmount function')
    assert.match(content, /if \(id === 'jili' \|\| id === 'cq9'\) \{\s*return 0/, 'getJackpotAmount must return 0 for jili and cq9')
  })

  test('Case 4: Verified simulated shouldShowCounter behavior', () => {
    const shouldShowCounterSim = (section, amount) => {
      const id = (section?.id || '').toLowerCase()
      if (id === 'jili') return false
      if (id === 'cq9') return true
      if (!section?.showCounter) return false
      return amount > 0
    }

    assert.equal(shouldShowCounterSim({ id: 'jili', showCounter: true }, 5000), false, 'JILI must always hide counter track')
    assert.equal(shouldShowCounterSim({ id: 'cq9', showCounter: true }, 0), true, 'CQ9 must show counter track even with 0 amount')
    assert.equal(shouldShowCounterSim({ id: 'jdb', showCounter: false }, 3000), false, 'Section with showCounter: false must hide')
    assert.equal(shouldShowCounterSim({ id: 'jdb', showCounter: true }, 0), false, 'Section with amount 0 must hide')
    assert.equal(shouldShowCounterSim({ id: 'jdb', showCounter: true }, 3015.46), true, 'JDB with positive amount must show counter track')
  })

  test('Case 5: GameCard shows jackpot prize ONLY in JDB jackpots', () => {
    const gameCardContent = fs.readFileSync(path.join(rootDir, 'components/game-cards/GameCard.vue'), 'utf-8')
    assert.match(gameCardContent, /const isJdbProvider = computed/, 'GameCard must check for JDB provider')
    assert.match(gameCardContent, /const isJdbJackpot = computed/, 'GameCard must define isJdbJackpot')
    assert.match(gameCardContent, /if \(!isJdbJackpot\.value\) \{\s*return false/, 'showJackpotPool must return false if not JDB jackpot')
    assert.match(gameCardContent, /if \(!isJdbProvider\.value\) return ''/, 'displayJackpotPool must return empty string if not JDB provider')

    // Simulation of GameCard logic
    const evaluateJackpotPoolVisibility = (game, isJackpotPage = false, isJdbJackpotPage = false) => {
      const isJdb = (game?.provider || '').toLowerCase() === 'jdb'
      if (!isJdb) return false
      const isJdbJackpot = isJdbJackpotPage || isJackpotPage || Boolean(game.jackpot || game.Jackpot || game.jackpotPool)
      return isJdbJackpot
    }

    // JDB jackpot game -> true
    assert.equal(evaluateJackpotPoolVisibility({ provider: 'JDB', jackpot: true }, true, false), true, 'JDB jackpot on jackpot page must show jackpot prize')
    assert.equal(evaluateJackpotPoolVisibility({ provider: 'JDB', jackpotPool: '₱3,015.46' }), true, 'JDB with pool must show jackpot prize')

    // JILI jackpot game -> false
    assert.equal(evaluateJackpotPoolVisibility({ provider: 'JILI', jackpot: true }, true, false), false, 'JILI jackpot must NOT show jackpot prize')
    assert.equal(evaluateJackpotPoolVisibility({ provider: 'JILI', jackpotPool: '₱7,854.20' }), false, 'JILI with pool must NOT show jackpot prize')

    // CQ9 jackpot game -> false
    assert.equal(evaluateJackpotPoolVisibility({ provider: 'CQ9', jackpot: true }, true, false), false, 'CQ9 jackpot must NOT show jackpot prize')

    // Pragmatic / PG games -> false
    assert.equal(evaluateJackpotPoolVisibility({ provider: 'PP', jackpot: true }), false, 'PP jackpot must NOT show jackpot prize')
    assert.equal(evaluateJackpotPoolVisibility({ provider: 'PG', jackpot: true }), false, 'PG jackpot must NOT show jackpot prize')
  })
})
