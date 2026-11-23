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
    assert.match(pluginContent, /isEnvRedirectUrl\(destinationUrl\)/, 'Must verify target matches env_url')
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
})
