import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  formatBybetDateParam,
  formatBybetHoursParam,
  getSportsMatchRedirectPath,
  normalizeBybetSportSlug,
  resolveSportsMatchRedirectUrl,
} from '../utils/sportsRedirect.ts'

describe('Winner Match Clickable Sports Redirect Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: Exact 13 user-specified sports routes resolve to expected second URL and full URL', () => {
    const cases = [
      ['sports/popular/upcoming', 'sportEvents/hotGame/incoming', 'https://bybet.com/sportEvents/hotGame/incoming?p=xjSD'],
      ['sports/popular/league', 'sportEvents/hotGame/tournament', 'https://bybet.com/sportEvents/hotGame/tournament?p=xjSD'],
      ['sports/popular/pre-match', 'sportEvents/hotGame/early', 'https://bybet.com/sportEvents/hotGame/early?p=xjSD'],
      ['sports/popular/pre-match/11-23-2026', 'sportEvents/hotGame/early?date=20261123', 'https://bybet.com/sportEvents/hotGame/early?date=20261123&p=xjSD'],
      ['sports/basketball/upcoming', 'sportEvents/incoming/basketball', 'https://bybet.com/sportEvents/incoming/basketball?p=xjSD'],
      ['sports/basketball/upcoming/24hours', 'sportEvents/incoming/basketball?hour=24', 'https://bybet.com/sportEvents/incoming/basketball?hour=24&p=xjSD'],
      ['sports/basketball/pre-match', 'sportEvents/early/basketball/interval/todayAndAll', 'https://bybet.com/sportEvents/early/basketball/interval/todayAndAll?p=xjSD'],
      ['sports/basketball/pre-match/11-23-2026', 'sportEvents/early/basketball/interval/20261123', 'https://bybet.com/sportEvents/early/basketball/interval/20261123?p=xjSD'],
      ['sports/basketball/league', 'sportEvents/tournament/basketball', 'https://bybet.com/sportEvents/tournament/basketball?p=xjSD'],
      ['sports/soccer/inplay', 'sportEvents/inplay/football', 'https://bybet.com/sportEvents/inplay/football?p=xjSD'],
      ['sports/live', 'sportEvents/liveGame/all', 'https://bybet.com/sportEvents/liveGame/all?p=xjSD'],
      ['sports/live/basketball', 'sportEvents/liveGame/basketball', 'https://bybet.com/sportEvents/liveGame/basketball?p=xjSD'],
      ['sports/live/soccer', 'sportEvents/liveGame/football', 'https://bybet.com/sportEvents/liveGame/football?p=xjSD'],
    ]

    for (const [routePath, expectedSecondPath, expectedFullUrl] of cases) {
      assert.equal(
        getSportsMatchRedirectPath(routePath),
        expectedSecondPath,
        `Path mapping mismatch for ${routePath}`,
      )
      assert.equal(
        resolveSportsMatchRedirectUrl(`/${routePath}`, 'https://bybet.com', 'xjSD'),
        expectedFullUrl,
        `Full URL mismatch for ${routePath}`,
      )
      assert.equal(
        resolveSportsMatchRedirectUrl(`/${routePath}`, 'https://custom.bybet.ph/', 'CODE99'),
        expectedFullUrl
          .replace('https://bybet.com', 'https://custom.bybet.ph')
          .replace('p=xjSD', 'p=CODE99'),
        `Custom env/code URL mismatch for ${routePath}`,
      )
    }
  })

  test('Case 2: Dynamic sport substitutions, league subroutes, normalization, and non-sports fallback', () => {
    assert.equal(normalizeBybetSportSlug('soccer'), 'football')
    assert.equal(normalizeBybetSportSlug('Football'), 'football')
    assert.equal(normalizeBybetSportSlug('basketball'), 'basketball')

    assert.equal(formatBybetDateParam('11-23-2026'), '20261123')
    assert.equal(formatBybetDateParam('2026-11-23'), '20261123')
    assert.equal(formatBybetDateParam('20261123'), '20261123')
    assert.equal(formatBybetDateParam('invalid'), null)

    assert.equal(formatBybetHoursParam('24hours'), '24')
    assert.equal(formatBybetHoursParam('3hours'), '3')
    assert.equal(formatBybetHoursParam('bad'), null)

    assert.equal(getSportsMatchRedirectPath('/sports/soccer/upcoming'), 'sportEvents/incoming/football')
    assert.equal(getSportsMatchRedirectPath('/sports/soccer/upcoming/12hours'), 'sportEvents/incoming/football?hour=12')
    assert.equal(getSportsMatchRedirectPath('/sports/soccer/pre-match'), 'sportEvents/early/football/interval/todayAndAll')
    assert.equal(getSportsMatchRedirectPath('/sports/soccer/pre-match/11-23-2026'), 'sportEvents/early/football/interval/20261123')
    assert.equal(getSportsMatchRedirectPath('/sports/soccer/league'), 'sportEvents/tournament/football')
    assert.equal(getSportsMatchRedirectPath('/sports/soccer/league/epl'), 'sportEvents/tournament/football')
    assert.equal(getSportsMatchRedirectPath('/sports/basketball/league/nba'), 'sportEvents/tournament/basketball')
    assert.equal(getSportsMatchRedirectPath('/sports/basketball/inplay'), 'sportEvents/inplay/basketball')
    assert.equal(getSportsMatchRedirectPath('/sports/football/inplay'), 'sportEvents/inplay/football')
    assert.equal(getSportsMatchRedirectPath('/sports/live/football'), 'sportEvents/liveGame/football')
    assert.equal(getSportsMatchRedirectPath('/sports/tennis/upcoming'), 'sportEvents/incoming/tennis')
    assert.equal(getSportsMatchRedirectPath('/sports/baseball/pre-match/11-23-2026'), 'sportEvents/early/baseball/interval/20261123')
    assert.equal(getSportsMatchRedirectPath('/sports/live/tennis'), 'sportEvents/liveGame/tennis')
    assert.equal(getSportsMatchRedirectPath('/sports/live/baseball'), 'sportEvents/liveGame/baseball')
    assert.equal(getSportsMatchRedirectPath('/sports/popular/upcoming/3hours'), 'sportEvents/hotGame/incoming?hour=3')

    assert.equal(
      getSportsMatchRedirectPath('/explore/sports/basketball/upcoming/24hours/?foo=bar#top'),
      'sportEvents/incoming/basketball?hour=24',
    )

    assert.equal(getSportsMatchRedirectPath('/egames/slots'), null)
    assert.equal(
      resolveSportsMatchRedirectUrl('/egames/slots', 'https://bybet.com', 'xjSD'),
      'https://bybet.com/login?p=xjSD',
    )
  })

  test('Case 3: WinnerMatch.vue, InplayMatch.vue, and MatchVideoThumbnail.vue wire clickable redirects safely', () => {
    const winnerMatch = fs.readFileSync(path.join(rootDir, 'components/sports/WinnerMatch.vue'), 'utf8')
    assert.match(winnerMatch, /resolveSportsMatchRedirectUrl/, 'WinnerMatch must use resolveSportsMatchRedirectUrl')
    assert.match(winnerMatch, /@click="openMatchRedirect\(\)"/, 'WinnerMatch article must trigger openMatchRedirect')
    assert.match(winnerMatch, /:data-redirect-url="matchRedirectUrl"/, 'WinnerMatch must expose data-redirect-url for playnow tracking')
    assert.match(winnerMatch, /<Teleport v-if="isShareModalOpen" to="body">/, 'WinnerMatch ShareMatchModal must teleport to body')
    assert.match(winnerMatch, /@click\.stop="openSportsComments\(match\)"/, 'WinnerMatch comments button must stop propagation')
    assert.match(winnerMatch, /@click\.stop="isShareModalOpen = true"/, 'WinnerMatch share button must stop propagation')
    assert.match(winnerMatch, /cursor:\s*pointer;/, 'WinnerMatch card must have pointer cursor')

    const inplayMatch = fs.readFileSync(path.join(rootDir, 'components/sports/InplayMatch.vue'), 'utf8')
    assert.match(inplayMatch, /resolveSportsMatchRedirectUrl/, 'InplayMatch must use resolveSportsMatchRedirectUrl')
    assert.match(inplayMatch, /@click="openMatchRedirect\(\)"/, 'InplayMatch article must trigger openMatchRedirect')
    assert.match(inplayMatch, /:data-redirect-url="matchRedirectUrl"/, 'InplayMatch must expose data-redirect-url for playnow tracking')
    assert.match(inplayMatch, /:href="matchRedirectUrl"/, 'InplayMatch must pass matchRedirectUrl to MatchVideoThumbnail')
    assert.match(inplayMatch, /<Teleport v-if="isShareModalOpen" to="body">/, 'InplayMatch ShareMatchModal must teleport to body')
    assert.match(inplayMatch, /@click\.stop="isShareModalOpen = true"/, 'InplayMatch share button must stop propagation')
    assert.match(inplayMatch, /cursor:\s*pointer;/, 'InplayMatch card must have pointer cursor')

    const videoThumb = fs.readFileSync(path.join(rootDir, 'components/sports/MatchVideoThumbnail.vue'), 'utf8')
    assert.match(videoThumb, /href\?:\s*string/, 'MatchVideoThumbnail must accept optional href prop')
    assert.match(videoThumb, /:href="resolvedHref"/, 'MatchVideoThumbnail anchor must bind resolvedHref')
    assert.match(videoThumb, /@click\.stop/, 'MatchVideoThumbnail anchor must stop propagation')
  })
})
