import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

function read(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), 'utf8')
}

test('SportsSkeleton.vue contains light mode utility classes for container, banner, and bones', () => {
  const content = read('components/sports/SportsSkeleton.vue')
  assert.ok(content.includes('light:bg-white'), 'Article should have light:bg-white')
  assert.ok(content.includes('light:border-black/10'), 'Article should have light:border-black/10')
  assert.ok(content.includes('light:bg-[#e4ede8]'), 'Category banner skeleton should have light:bg-[#e4ede8]')
  assert.ok(content.includes('light:bg-[#cbd9d1]'), 'Banner bones and dots should have light:bg-[#cbd9d1]')
  assert.ok(content.includes('light:bg-[#d6e2dc]'), 'Header and team bones should have light:bg-[#d6e2dc]')
  assert.ok(content.includes('light:bg-[#edf4f0]'), 'Odds buttons bones should have light:bg-[#edf4f0]')
  assert.ok(content.includes('light:divide-black/5'), 'Rows container should have light:divide-black/5')
})

test('Inline skeletons in LeagueMatches, LeagueDirectory, and OutrightInner have light mode classes', () => {
  const lm = read('components/sports/LeagueMatches.vue')
  assert.ok(lm.includes('light:bg-[#d6e2dc]'), 'LeagueMatches pulse bones should have light:bg-[#d6e2dc]')
  assert.ok(lm.includes('light:bg-[#edf4f0]'), 'LeagueMatches odds bones should have light:bg-[#edf4f0]')

  const ld = read('components/sports/LeagueDirectory.vue')
  assert.ok(ld.includes('light:bg-white'), 'LeagueDirectory skeleton container should have light:bg-white')
  assert.ok(ld.includes('light:bg-[#d6e2dc]'), 'LeagueDirectory header bone should have light:bg-[#d6e2dc]')
  assert.ok(ld.includes('light:bg-[#edf4f0]'), 'LeagueDirectory item bones should have light:bg-[#edf4f0]')

  const oi = read('components/sports/tabs/OutrightInner.vue')
  assert.ok(!oi.includes('bg-[##141414]'), 'Typo bg-[##141414] must be fixed')
  assert.ok(oi.includes('light:bg-[#edf4f0]'), 'OutrightInner odds skeleton should have light:bg-[#edf4f0]')
})

test('SportsPopular.vue and MobileSportsNav.vue have light mode classes for tab containers', () => {
  const sp = read('components/SportsPopular.vue')
  assert.ok(sp.includes('light:bg-[#edf4f0]'), 'SportsPopular tabs should have light:bg-[#edf4f0]')
  assert.ok(sp.includes('light:border-black/10'), 'SportsPopular tabs should have light:border-black/10')

  const msn = read('components/sports/MobileSportsNav.vue')
  assert.ok(msn.includes('light:bg-[#edf4f0]'), 'MobileSportsNav should have light:bg-[#edf4f0]')
  assert.ok(msn.includes('light:border-black/10'), 'MobileSportsNav should have light:border-black/10')
})

test('InplayMatches, Upcoming, and Prematch tabs have light mode card and filter classes', () => {
  const im = read('components/sports/InplayMatches.vue')
  assert.ok(im.includes('light:bg-white'), 'InplayMatches league-preview should have light:bg-white')
  assert.ok(im.includes('light:border-black/10'), 'InplayMatches league-preview should have light:border-black/10')
  assert.ok(im.includes('light:text-[#4d5f56]'), 'InplayMatches league-name should have light:text-[#4d5f56]')

  const uc = read('components/sports/tabs/Upcoming.vue')
  assert.ok(uc.includes('light:bg-[#edf4f0]'), 'Upcoming time-filter should have light:bg-[#edf4f0]')
  assert.ok(uc.includes('light:text-[#14251d]'), 'Upcoming time-filter should have light:text-[#14251d]')
  assert.ok(uc.includes('light:bg-white'), 'Upcoming league-preview should have light:bg-white')

  const pm = read('components/sports/tabs/Prematch.vue')
  assert.ok(pm.includes('light:bg-[#edf4f0]'), 'Prematch time-filter should have light:bg-[#edf4f0]')
  assert.ok(pm.includes('light:text-[#14251d]'), 'Prematch time-filter should have light:text-[#14251d]')
  assert.ok(pm.includes('light:bg-white'), 'Prematch league-preview should have light:bg-white')
})

test('WinnerMatch.vue and InplayMatch.vue have clean light mode styles', () => {
  const wm = read('components/sports/WinnerMatch.vue')
  assert.ok(wm.includes('background: var(--surface, #131313)'), 'WinnerMatch compact should use var(--surface)')
  assert.ok(wm.includes('light:border-black/10'), 'WinnerMatch borders should have light:border-black/10')
  assert.ok(wm.includes('light:text-[#14251d]'), 'WinnerMatch team names should have light:text-[#14251d]')
  assert.ok(wm.includes('light:text-[#55695e]'), 'WinnerMatch market labels should have light:text-[#55695e]')

  const im = read('components/sports/InplayMatch.vue')
  assert.ok(im.includes('light:border-black/10'), 'InplayMatch borders should have light:border-black/10')
  assert.ok(im.includes('light:text-[#14251d]'), 'InplayMatch team names should have light:text-[#14251d]')
  assert.ok(im.includes('light:text-[#55695e]'), 'InplayMatch market labels should have light:text-[#55695e]')
})

test('light-mode.css includes comprehensive sports overrides for popular, previews, and filters', () => {
  const css = read('assets/css/light-mode.css')
  assert.ok(css.includes('.sports-page--popular .sports-tabs'), 'light-mode.css must override popular sports-tabs')
  assert.ok(css.includes('.sports-page--popular .time-filter'), 'light-mode.css must override popular time-filter')
  assert.ok(css.includes('.sports-page--popular .league-preview'), 'light-mode.css must override popular league-preview')
  assert.ok(css.includes('.sports-page--popular .league-preview-heading'), 'light-mode.css must override popular league-preview-heading')
  assert.ok(css.includes('.winner-match--compact'), 'light-mode.css must override winner-match--compact')
  assert.ok(css.includes('.mobile-sports-nav'), 'light-mode.css must override mobile-sports-nav')
})
