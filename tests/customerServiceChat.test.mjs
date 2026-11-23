import test from 'node:test'
import assert from 'node:assert/strict'
import { buildCustomerServiceChatUrl, getChatSessionDeviceId } from '../utils/customerServiceChat.ts'

const uuidV4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const sessionStorage = () => {
  const values = new Map()
  return {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  }
}
const parameters = url => new URLSearchParams(new URL(url).hash.split('?')[1])

test('chat keeps the same UUID when revisited within one session', () => {
  const storage = sessionStorage()
  const first = getChatSessionDeviceId(storage)
  assert.match(first, uuidV4)
  assert.equal(getChatSessionDeviceId(storage), first)
})

test('independent browser sessions receive different UUIDs', () => {
  assert.notEqual(getChatSessionDeviceId(sessionStorage()), getChatSessionDeviceId(sessionStorage()))
})

test('chat theme changes preserve matching deviceCode and deviceId', () => {
  const deviceId = getChatSessionDeviceId(sessionStorage())
  for (const [theme, darkMode] of [['dark', '1'], ['light', '0']]) {
    const params = parameters(buildCustomerServiceChatUrl(theme, deviceId))
    assert.equal(params.get('darkMode'), darkMode)
    assert.equal(params.get('deviceCode'), deviceId)
    assert.equal(params.get('deviceId'), deviceId)
    assert.equal(params.get('source'), 'ByBet')
    assert.equal(params.get('lang'), 'en')
  }
})

test('chat can generate a UUID when browser storage is blocked', () => {
  const blockedStorage = {
    getItem() { throw new Error('Storage blocked') },
    setItem() { throw new Error('Storage blocked') },
  }
  assert.match(getChatSessionDeviceId(blockedStorage), uuidV4)
})

test('chat supports browsers without randomUUID using secure random bytes', () => {
  const fallbackCrypto = { getRandomValues: array => globalThis.crypto.getRandomValues(array) }
  assert.match(getChatSessionDeviceId(sessionStorage(), fallbackCrypto), uuidV4)
})
