import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { buildBybetRedirectUrl } from '../utils/sportsRedirect.ts'
import { isEnvRedirectUrl } from '../utils/playnowTracker.ts'

describe('Sports TV Play Button Redirect Suite', () => {
  const rootDir = process.cwd()
  const sportsPreviewPath = path.join(rootDir, 'components/comments/SportsPreview.vue')

  test('Case 1: buildBybetRedirectUrl builds env_redirect + login + code and satisfies isEnvRedirectUrl', () => {
    const defaultLoginUrl = buildBybetRedirectUrl('login', 'https://bybet.com', 'xjSD')
    assert.equal(defaultLoginUrl, 'https://bybet.com/login?p=xjSD')
    assert.equal(isEnvRedirectUrl(defaultLoginUrl, 'https://bybet.com'), true)

    const customLoginUrl = buildBybetRedirectUrl('login', 'https://example.com///', 'abc123')
    assert.equal(customLoginUrl, 'https://example.com/login?p=abc123')
    assert.equal(isEnvRedirectUrl(customLoginUrl, 'https://example.com///'), true)
  })

  test('Case 2: SportsPreview.vue uses buildBybetRedirectUrl("login", ...) to define bybetRedirectUrl', () => {
    const source = fs.readFileSync(sportsPreviewPath, 'utf8')
    assert.match(
      source,
      /import\s*\{\s*buildBybetRedirectUrl\s*\}\s*from\s*['"]~\/utils\/sportsRedirect['"]/,
      'SportsPreview must import buildBybetRedirectUrl from ~/utils/sportsRedirect',
    )
    assert.match(
      source,
      /const\s+bybetRedirectUrl\s*=\s*buildBybetRedirectUrl\(\s*['"]login['"]\s*,\s*rawRedirectUrl\s*,\s*bybetRedirectCode\s*\)/,
      'SportsPreview must build bybetRedirectUrl for login using runtime config',
    )
  })

  test('Case 3: Sports TV play preview renders a trackable anchor to bybetRedirectUrl without nested button or inline isPlaying playback', () => {
    const source = fs.readFileSync(sportsPreviewPath, 'utf8')
    const anchorMatch = source.match(/<a\b[^>]*v-if="selectedStream"[^>]*>[\s\S]*?<\/a>/)
    assert.ok(anchorMatch, 'SportsPreview must render an <a v-if="selectedStream"> play preview')

    const playAnchor = anchorMatch[0]
    assert.match(playAnchor, /:href="bybetRedirectUrl"/, 'Play preview anchor must bind :href="bybetRedirectUrl"')
    assert.match(playAnchor, /target="_blank"/, 'Play preview anchor must open in a new tab')
    assert.match(playAnchor, /rel="nofollow noopener noreferrer"/, 'Play preview anchor must set rel="nofollow noopener noreferrer"')
    assert.match(playAnchor, /data-section="SportsTV"/, 'Play preview anchor must expose data-section="SportsTV" for Playnow tracker')
    assert.match(playAnchor, /<Play\b/, 'Play preview anchor must wrap the Play icon')
    assert.doesNotMatch(playAnchor, /<button\b/, 'Play preview anchor must not nest <button> inside <a>')
    assert.doesNotMatch(source, /@click="isPlaying\s*=\s*true"/, 'SportsPreview must redirect instead of toggling isPlaying on click')
  })
})
