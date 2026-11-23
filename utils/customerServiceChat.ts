const SESSION_DEVICE_KEY = 'bybet-customer-service-device-id'
const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

type SessionStorage = Pick<Storage, 'getItem' | 'setItem'>
type RandomSource = Pick<Crypto, 'getRandomValues'> & Partial<Pick<Crypto, 'randomUUID'>>

export const getChatSessionDeviceId = (
  storage: SessionStorage | undefined,
  cryptoSource: RandomSource = globalThis.crypto,
): string => {
  try {
    const saved = storage?.getItem(SESSION_DEVICE_KEY)
    if (saved && UUID_V4.test(saved)) return saved
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }

  let deviceId: string
  if (cryptoSource.randomUUID) {
    deviceId = cryptoSource.randomUUID()
  } else {
    const bytes = cryptoSource.getRandomValues(new Uint8Array(16))
    bytes[6] = (bytes[6]! & 0x0f) | 0x40
    bytes[8] = (bytes[8]! & 0x3f) | 0x80
    const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('')
    deviceId = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
  }

  try {
    storage?.setItem(SESSION_DEVICE_KEY, deviceId)
  } catch {
    // The caller keeps this ID in client state when storage is blocked.
  }
  return deviceId
}

export const buildCustomerServiceChatUrl = (theme: 'light' | 'dark', deviceId: string): string => {
  const params = new URLSearchParams({
    source: 'ByBet', needNav: '1', lang: 'en', vipType: '0', isPC: '1',
    darkMode: theme === 'dark' ? '1' : '0',
    deviceCode: deviceId,
    deviceId,
  })
  return `https://cs14.fkldcs601.com/#/index?${params}`
}
