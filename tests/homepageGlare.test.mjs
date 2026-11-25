import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const read = (relPath) => fs.readFileSync(path.join(process.cwd(), relPath), 'utf8')

const assertHostHasShine = (src, classAttr, closingTag) => {
  const escaped = classAttr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = src.match(new RegExp(`class="${escaped}"[^>]*>([\\s\\S]*?)${closingTag}`))
  assert.ok(match, `Expected element with class="${classAttr}" closed by ${closingTag}`)
  assert.ok(
    match[1].includes('<span class="homepage-glare__shine" aria-hidden="true" />'),
    `Expected <span class="homepage-glare__shine" aria-hidden="true" /> inside class="${classAttr}"`,
  )
}

const makeFakeCard = (id, rect) => ({
  id,
  getBoundingClientRect: () => rect,
})

describe('Homepage Glare Effect Suite', () => {
  test('Case 1: assets/css/main.css defines .home-page glare rules, animations, and reduced-motion guard', () => {
    const css = read('assets/css/main.css')
    assert.match(css, /\.home-page \.homepage-glare\s*\{[^}]*overflow:\s*hidden/)
    assert.match(css, /\.home-page \.homepage-glare__shine\s*\{[^}]*pointer-events:\s*none/)
    assert.match(css, /@keyframes homepage-glare-sweep/)
    assert.match(css, /@keyframes homepage-glare-idle/)
    assert.match(css, /\.home-page \.homepage-glare__shine\s*\{\s*display:\s*none/)
  })

  test('Case 2: homepage auth-primary, game cards, and CTA buttons include glare classes and shine spans', () => {
    assertHostHasShine(
      read('components/ReferenceJackpots.vue'),
      'auth-primary homepage-glare homepage-glare--cta',
      '</a>',
    )
    assertHostHasShine(
      read('components/ReferenceGameSection.vue'),
      'reference-game homepage-glare homepage-glare--card',
      '</a>',
    )

    const hero = read('components/ReferenceHero.vue')
    assertHostHasShine(
      hero,
      'hero-primary homepage-glare homepage-glare--cta homepage-glare--delay-1',
      '</component>',
    )
    assertHostHasShine(
      hero,
      'hero-secondary homepage-glare homepage-glare--cta homepage-glare--delay-2',
      '</component>',
    )

    const info = read('components/ReferenceInfo.vue')
    assertHostHasShine(
      info,
      'app-promotion-cta homepage-glare homepage-glare--cta homepage-glare--delay-1',
      '</NuxtLink>',
    )
    assertHostHasShine(
      info,
      'about-panel-cta homepage-glare homepage-glare--cta homepage-glare--delay-3',
      '</a>',
    )
  })

  test('Case 3: pages/index.vue wires ref="homePageElement" and useHomepageGlare', () => {
    const indexVue = read('pages/index.vue')
    assert.match(indexVue, /import \{ useHomepageGlare \} from '~\/composables\/useHomepageGlare'/)
    assert.match(indexVue, /ref="homePageElement"/)
    assert.match(indexVue, /useHomepageGlare\(homePageElement\)/)
  })

  test('Case 4: composables/useHomepageGlare.ts handles rotation, reduced-motion, and cleanup', () => {
    const composable = read('composables/useHomepageGlare.ts')
    assert.match(composable, /GLARE_INTERVAL_MS = 2000/)
    assert.match(composable, /setInterval\(triggerRandomGlare, GLARE_INTERVAL_MS\)/)
    assert.match(composable, /clearInterval\(glareInterval\)/)
    assert.match(composable, /prefers-reduced-motion: reduce/)
    assert.match(composable, /removeEventListener\('visibilitychange'/)
  })

  test('Case 5: pickNextVisibleGlareTarget selects only visible cards and avoids repeating lastTarget', async () => {
    const { pickNextVisibleGlareTarget } = await import('../composables/useHomepageGlare.ts')
    const viewport = { width: 1000, height: 800 }

    const offBelow = makeFakeCard('off-below', { top: 900, bottom: 1000, left: 20, right: 180, width: 160, height: 100 })
    const offRight = makeFakeCard('off-right', { top: 100, bottom: 200, left: 1200, right: 1300, width: 100, height: 100 })
    const zeroSized = makeFakeCard('zero', { top: 100, bottom: 100, left: 100, right: 100, width: 0, height: 0 })

    assert.equal(pickNextVisibleGlareTarget([offBelow, offRight, zeroSized], viewport, null), null)

    const visibleA = makeFakeCard('vis-a', { top: 100, bottom: 260, left: 40, right: 200, width: 160, height: 160 })
    const visibleB = makeFakeCard('vis-b', { top: 100, bottom: 260, left: 220, right: 380, width: 160, height: 160 })

    for (let i = 0; i < 20; i++) {
      const picked = pickNextVisibleGlareTarget([offBelow, visibleA, offRight, visibleB, zeroSized], viewport, null)
      assert.ok(picked && ['vis-a', 'vis-b'].includes(picked.id))
    }

    assert.equal(
      pickNextVisibleGlareTarget([visibleA, visibleB], viewport, visibleA, () => 0),
      visibleB,
    )

    assert.equal(
      pickNextVisibleGlareTarget([visibleA], viewport, visibleA, () => 0),
      visibleA,
    )
  })
})
