import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

describe('Playnow Tracker & Env URL Click Counter Test Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: utils/playnowTracker.ts defines isEnvRedirectUrl, buildPlaynowClickPayload, and trackEnvClick', () => {
    const file = fs.readFileSync(path.join(rootDir, 'utils/playnowTracker.ts'), 'utf-8')
    assert.match(file, /export const isEnvRedirectUrl/, 'Must export isEnvRedirectUrl')
    assert.match(file, /export const buildPlaynowClickPayload/, 'Must export buildPlaynowClickPayload')
    assert.match(file, /export const trackEnvClick/, 'Must export trackEnvClick')
  })

  test('Case 2: isEnvRedirectUrl accurately detects env_url and redirect variants', async () => {
    // Dynamic import
    const { isEnvRedirectUrl } = await import('../utils/playnowTracker.ts')

    // Standard env url
    assert.equal(isEnvRedirectUrl('https://bybet.com'), true, 'https://bybet.com is env_url')
    assert.equal(isEnvRedirectUrl('https://bybet.com/login?p=xjSD'), true, 'Bybet login URL is env_url')
    assert.equal(isEnvRedirectUrl('https://bybet.com/slotMachine/main?p=xjSD'), true, 'Slot demo redirect is env_url')
    assert.equal(isEnvRedirectUrl('https://bybet.com/jackpot/18?p=xjSD'), true, 'Jackpot redirect is env_url')
    assert.equal(isEnvRedirectUrl('/playnow'), true, 'Relative /playnow is env_url')

    // Non-env urls
    assert.equal(isEnvRedirectUrl('/egames/slots'), false, 'Internal slot route is not env_url')
    assert.equal(isEnvRedirectUrl('/sports/live'), false, 'Internal sports route is not env_url')
    assert.equal(isEnvRedirectUrl('https://example.com/unrelated'), false, 'External unrelated site is not env_url')
    assert.equal(isEnvRedirectUrl(''), false, 'Empty string is not env_url')
    assert.equal(isEnvRedirectUrl(null), false, 'Null is not env_url')
  })

  test('Case 3: buildPlaynowClickPayload standardizes payload for Playnow Tracker API', async () => {
    const { buildPlaynowClickPayload } = await import('../utils/playnowTracker.ts')

    const payload = buildPlaynowClickPayload({
      targetUrl: 'https://bybet.com/slotMachine/main?p=xjSD',
      buttonText: 'Demo',
      buttonClass: 'game-card-demo-btn',
      buttonId: 'demo-super-ace',
      section: 'GameCard',
      pagePath: '/egames/slots',
    })

    assert.equal(payload.targetUrl, 'https://bybet.com/slotMachine/main?p=xjSD')
    assert.equal(payload.buttonText, 'Demo')
    assert.equal(payload.buttonClass, 'game-card-demo-btn')
    assert.equal(payload.buttonId, 'demo-super-ace')
    assert.equal(payload.section, 'GameCard')
    assert.equal(payload.pagePath, '/egames/slots')
  })

  test('Case 4: server/api/playnow/click.post.ts and clicks.get.ts exist and are implemented', () => {
    const postRoute = path.join(rootDir, 'server/api/playnow/click.post.ts')
    const getRoute = path.join(rootDir, 'server/api/playnow/clicks.get.ts')

    assert.ok(fs.existsSync(postRoute), 'server/api/playnow/click.post.ts must exist')
    assert.ok(fs.existsSync(getRoute), 'server/api/playnow/clicks.get.ts must exist')

    const postContent = fs.readFileSync(postRoute, 'utf-8')
    assert.match(postContent, /playnow-click\.php/, 'Must proxy to playnow-click.php')

    const getContent = fs.readFileSync(getRoute, 'utf-8')
    assert.match(getContent, /envUrlClicks/, 'Must calculate envUrlClicks')
    assert.match(getContent, /isEnvRedirectUrl/, 'Must use isEnvRedirectUrl to count env clicks')
  })

  test('Case 5: GameCard and Slot pages integrate trackEnvClick for Demo and Start Now clicks', () => {
    const gameCard = fs.readFileSync(path.join(rootDir, 'components/game-cards/GameCard.vue'), 'utf-8')
    assert.match(gameCard, /import \{ trackEnvClick \} from '~\/utils\/playnowTracker'/, 'GameCard must import trackEnvClick')
    assert.match(gameCard, /trackEnvClick\(\{[\s\S]*?buttonText: 'Demo'/, 'handleDemoClick must call trackEnvClick')
    assert.match(gameCard, /trackEnvClick\(\{[\s\S]*?buttonText: 'Start Now'/, 'handleReminderOk must call trackEnvClick')

    const slotsIndex = fs.readFileSync(path.join(rootDir, 'pages/egames/slots/index.vue'), 'utf-8')
    assert.match(slotsIndex, /import \{ trackEnvClick \} from '~\/utils\/playnowTracker'/, 'slots/index.vue must import trackEnvClick')
    assert.match(slotsIndex, /trackEnvClick\(\{[\s\S]*?buttonText: `Demo - \$\{game\?\.title \|\| 'Game'\}`,[\s\S]*?section: 'SlotsGrid'/, 'slots handleDemo must call trackEnvClick')
  })

  test('Case 6: plugins/playnow-tracker.client.ts automatically intercepts DOM clicks to env_url', () => {
    const pluginPath = path.join(rootDir, 'plugins/playnow-tracker.client.ts')
    assert.ok(fs.existsSync(pluginPath), 'plugins/playnow-tracker.client.ts must exist')

    const pluginContent = fs.readFileSync(pluginPath, 'utf-8')
    assert.match(pluginContent, /document\.addEventListener\('click'/, 'Must register global click listener')
    assert.match(pluginContent, /isEnvRedirectUrl\(destinationUrl(?:,\s*envRedirectUrl)?\)/, 'Must verify target matches env_url')
    assert.match(pluginContent, /trackEnvClick\(/, 'Must fire trackEnvClick')
  })

  test('Case 7: Clicks to env_url are aggregated correctly from Playnow tracker storage simulation', async () => {
    const { isEnvRedirectUrl } = await import('../utils/playnowTracker.ts')

    const simulatedStorage = {
      totalClicks: 15,
      byTarget: {
        '/playnow': 2,
        '/game/mega-fishing/': 3,
        'https://bybet.com': 4,
        'https://bybet.com/slotMachine/main?p=xjSD': 5,
        'https://unrelated-domain.com': 1,
      },
    }

    let envUrlClicks = 0
    for (const [target, count] of Object.entries(simulatedStorage.byTarget)) {
      if (isEnvRedirectUrl(target)) {
        envUrlClicks += count
      }
    }

    // /playnow (2) + https://bybet.com (4) + https://bybet.com/slotMachine/main?p=xjSD (5) = 11
    assert.equal(envUrlClicks, 11, 'Total env_url clicks must sum to 11')
  })

  test('Case 8: isEnvRedirectUrl matches custom env_redirect domains and plugin/proxy/programmatic gaps are closed', async () => {
    const { isEnvRedirectUrl } = await import('../utils/playnowTracker.ts')

    assert.equal(
      isEnvRedirectUrl('https://custom-env.example.com/sportEvents/hotGame/incoming?p=TEST', 'https://custom-env.example.com'),
      true,
      'Custom env_redirect origin must be recognized when customEnvUrl is passed',
    )
    assert.equal(
      isEnvRedirectUrl('https://unrelated.example.com/path', 'https://custom-env.example.com'),
      false,
      'Unrelated domain must not match custom env_redirect origin',
    )

    const pluginContent = fs.readFileSync(path.join(rootDir, 'plugins/playnow-tracker.client.ts'), 'utf8')
    assert.match(pluginContent, /useRuntimeConfig\(\)/, 'Plugin must read useRuntimeConfig() inside setup')
    assert.match(pluginContent, /isEnvRedirectUrl\(destinationUrl,\s*envRedirectUrl\)/, 'Plugin must pass envRedirectUrl into isEnvRedirectUrl')

    const postContent = fs.readFileSync(path.join(rootDir, 'server/api/playnow/click.post.ts'), 'utf8')
    assert.match(postContent, /X-Forwarded-For/, 'click.post.ts must forward client IP header')
    assert.match(postContent, /User-Agent/, 'click.post.ts must forward client User-Agent header')

    const getsContent = fs.readFileSync(path.join(rootDir, 'server/api/playnow/clicks.get.ts'), 'utf8')
    assert.match(getsContent, /useRuntimeConfig\(event\)/, 'clicks.get.ts must resolve bybetRedirectUrl from runtimeConfig')

    for (const rel of [
      'components/sports/tabs/OutrightInner.vue',
      'components/live-plaza/LivePlazaPredictionCard.vue',
      'pages/live-plaza/home.vue',
      'pages/live-plaza/expert-predictions.vue',
    ]) {
      const content = fs.readFileSync(path.join(rootDir, rel), 'utf8')
      assert.match(content, /:data-redirect-url="bybetRedirectUrl"/, `${rel} must expose data-redirect-url on env_redirect buttons/cards`)
    }

    const bonusPage = fs.readFileSync(path.join(rootDir, 'pages/bonus/[id].vue'), 'utf8')
    assert.match(bonusPage, /trackEnvClick\(/, 'pages/bonus/[id].vue must call trackEnvClick on Join Now OK')

    const liveCasinoPage = fs.readFileSync(path.join(rootDir, 'pages/entertainment/live-casino/[category].vue'), 'utf8')
    assert.match(liveCasinoPage, /trackEnvClick\(/, 'live-casino/[category].vue must call trackEnvClick on OK redirect')
  })
})
