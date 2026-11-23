import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'
import { effectScope, nextTick, ref, watch } from 'vue'

const source = fs.readFileSync(new URL('../composables/useJackpotCounter.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
})

const createSharedStorage = (cached = {}) => {
  const values = new Map(Object.entries(cached))
  const tabs = new Set()
  const events = []
  let writes = 0
  return {
    connect: dispatch => {
      const tab = { dispatch }
      tabs.add(tab)
      return tab
    },
    disconnect: tab => tabs.delete(tab),
    getItem: key => values.get(key) ?? null,
    setItem: (origin, key, value) => {
      const oldValue = values.get(key) ?? null
      values.set(key, value)
      writes += 1
      if (oldValue === value) return
      for (const tab of tabs) {
        if (tab !== origin) events.push(() => tab.dispatch({ key, oldValue, newValue: value }))
      }
    },
    flush: () => {
      while (events.length) events.shift()()
    },
    writes: () => writes,
  }
}

const createEventTarget = () => {
  const listeners = new Map()
  return {
    addEventListener: (type, listener) => {
      if (!listeners.has(type)) listeners.set(type, new Set())
      listeners.get(type).add(listener)
    },
    removeEventListener: (type, listener) => listeners.get(type)?.delete(listener),
    dispatch: (type, event = {}) => listeners.get(type)?.forEach(listener => listener(event)),
    count: () => [...listeners.values()].reduce((total, handlers) => total + handlers.size, 0),
  }
}

// Each harness is a separate tab: only its storage service is shared with other tabs.
const createCounterHarness = ({ cached = {}, storage = createSharedStorage(cached), random = 0.5 } = {}) => {
  const states = new Map()
  const timers = new Map()
  const components = new Set()
  const requests = []
  const windowEvents = createEventTarget()
  const documentEvents = createEventTarget()
  const document = { hidden: false, ...documentEvents }
  const tab = storage.connect(event => windowEvents.dispatch('storage', event))
  let currentComponent
  let now = 0
  let nextTimerId = 0
  let resolveInitialGet
  const initialGet = new Promise(resolve => { resolveInitialGet = resolve })
  const deterministicMath = Object.create(Math)
  deterministicMath.random = () => random
  const exports = {}

  vm.runInNewContext(outputText, {
    exports,
    ref,
    watch,
    Math: deterministicMath,
    document,
    window: { cancelAnimationFrame() {}, ...windowEvents },
    localStorage: {
      getItem: storage.getItem,
      setItem: (key, value) => storage.setItem(tab, key, value),
    },
    useState: (key, initial) => {
      if (!states.has(key)) states.set(key, ref(initial()))
      return states.get(key)
    },
    onMounted: callback => currentComponent.mounted.push(callback),
    onBeforeUnmount: callback => currentComponent.beforeUnmount.push(callback),
    setTimeout: (callback, delay) => {
      const id = ++nextTimerId
      timers.set(id, { callback, delay, due: now + delay })
      return id
    },
    clearTimeout: id => timers.delete(id),
    $fetch: (url, options) => {
      requests.push({ url, options })
      return options?.method === 'POST' ? Promise.resolve({ success: true }) : initialGet
    },
  }, { filename: 'useJackpotCounter.js' })

  const settle = async () => {
    await Promise.resolve()
    await Promise.resolve()
    await nextTick()
  }

  const mount = options => {
    const component = { mounted: [], beforeUnmount: [], scope: effectScope() }
    currentComponent = component
    try {
      component.counter = component.scope.run(() => exports.useJackpotCounter(options))
    } finally {
      currentComponent = undefined
    }
    component.scope.run(() => component.mounted.forEach(callback => callback()))
    components.add(component)
    return component
  }

  const unmount = component => {
    if (!components.delete(component)) return
    component.beforeUnmount.forEach(callback => callback())
    component.scope.stop()
  }

  return {
    ...exports,
    mount,
    unmount,
    settle,
    requests,
    listenerCount: () => windowEvents.count() + documentEvents.count(),
    dispatchStorageEvent: async event => {
      windowEvents.dispatch('storage', event)
      await settle()
    },
    setHidden: async hidden => {
      document.hidden = hidden
      documentEvents.dispatch('visibilitychange')
      await settle()
    },
    focus: async () => {
      windowEvents.dispatch('focus')
      await settle()
    },
    tickers: () => [...timers.values()].filter(timer => timer.delay === 3_000).length,
    resolveServer: async data => {
      resolveInitialGet(data)
      await settle()
    },
    advanceBy: async milliseconds => {
      const target = now + milliseconds
      for (;;) {
        const next = [...timers.entries()]
          .filter(([, timer]) => timer.due <= target)
          .sort(([, left], [, right]) => left.due - right.due)[0]
        if (!next) break
        const [id, timer] = next
        now = timer.due
        timers.delete(id)
        timer.callback()
        await settle()
      }
      now = target
      await settle()
    },
    dispose: () => {
      for (const component of components) unmount(component)
      timers.clear()
      storage.disconnect(tab)
    },
  }
}

test('JDB preserves the latest homepage amount when navigating to its jackpot page', async t => {
  const app = createCounterHarness()
  t.after(app.dispose)
  const home = app.mount(app.JDB_JACKPOT_COUNTER)
  await app.resolveServer({ jdb: 4_100.5 })
  assert.equal(home.counter.displayAmount.value, 4_100.5)

  await app.advanceBy(3_000)
  const latestHomeAmount = home.counter.displayAmount.value
  assert.equal(latestHomeAmount, 4_103.75)
  app.unmount(home)

  const provider = app.mount(app.JDB_JACKPOT_COUNTER)
  await app.settle()
  assert.equal(provider.counter.displayAmount.value, latestHomeAmount,
    'Navigation must not replay the stale initial server snapshot')
  assert.equal(provider.counter.amount.value, latestHomeAmount)
  assert.equal(app.requests.filter(request => !request.options?.method).length, 1)

  await app.advanceBy(3_000)
  assert.equal(provider.counter.displayAmount.value, latestHomeAmount + 3.25)
})

test('Overlapping JDB consumers share their amount and a single ticker', async t => {
  const app = createCounterHarness()
  t.after(app.dispose)
  const home = app.mount(app.JDB_JACKPOT_COUNTER)
  await app.resolveServer({ jdb: 4_100.5 })
  const provider = app.mount(app.JDB_JACKPOT_COUNTER)
  await app.settle()
  assert.equal(app.tickers(), 1)
  assert.equal(home.counter.amount, provider.counter.amount)

  await app.advanceBy(3_000)
  assert.equal(home.counter.displayAmount.value, 4_103.75)
  assert.equal(provider.counter.displayAmount.value, 4_103.75)
  app.unmount(home)
  assert.equal(app.tickers(), 1)

  await app.advanceBy(3_000)
  assert.equal(provider.counter.displayAmount.value, 4_107)
  app.unmount(provider)
  assert.equal(app.tickers(), 0)
})

test('A slow initial JDB response cannot overwrite an amount that has already ticked', async t => {
  const app = createCounterHarness()
  t.after(app.dispose)
  const home = app.mount(app.JDB_JACKPOT_COUNTER)
  const initialAmount = home.counter.displayAmount.value
  await app.advanceBy(3_000)
  const latestAmount = initialAmount + 3.25
  assert.equal(home.counter.displayAmount.value, latestAmount)

  await app.resolveServer({ jdb: 3_000 })
  assert.equal(home.counter.displayAmount.value, latestAmount,
    'The old GET response must not replace a newer local tick')
  assert.equal(home.counter.amount.value, latestAmount)
})

test('Separate JDB tabs stay synchronized when the foreground tab changes', async t => {
  const storage = createSharedStorage({ 'bybet-jackpot:jdb': '4100.50' })
  const homeTab = createCounterHarness({ storage, random: 0.2 })
  const jackpotTab = createCounterHarness({ storage, random: 0.9 })
  t.after(homeTab.dispose)
  t.after(jackpotTab.dispose)
  const home = homeTab.mount(homeTab.JDB_JACKPOT_COUNTER)
  const jackpot = jackpotTab.mount(jackpotTab.JDB_JACKPOT_COUNTER)
  assert.notEqual(home.counter.amount, jackpot.counter.amount, 'Tabs must have separate Nuxt state')
  assert.equal(home.counter.displayAmount.value, 4_100.5)
  assert.equal(jackpot.counter.displayAmount.value, 4_100.5)
  await jackpotTab.setHidden(true)

  await homeTab.advanceBy(3_000)
  await jackpotTab.advanceBy(3_000)
  storage.flush()
  await jackpotTab.settle()
  assert.equal(home.counter.displayAmount.value, 4_102.1)
  assert.equal(jackpot.counter.displayAmount.value, 4_102.1,
    'A hidden jackpot tab must receive the homepage amount')
  assert.equal(storage.writes(), 1, 'Receiving a storage event must not save it again')

  await homeTab.setHidden(true)
  await jackpotTab.setHidden(false)
  await jackpotTab.advanceBy(3_000)
  await homeTab.advanceBy(3_000)
  storage.flush()
  await homeTab.settle()
  assert.equal(jackpot.counter.displayAmount.value, 4_098.02)
  assert.equal(home.counter.displayAmount.value, 4_098.02,
    'The homepage must follow ticks from the newly foregrounded jackpot tab')
  assert.equal(storage.writes(), 2)
})

test('A valid shared JDB cache wins over a stale server snapshot in a new tab', async t => {
  const app = createCounterHarness({ cached: { 'bybet-jackpot:jdb': '4200' } })
  t.after(app.dispose)
  const jackpot = app.mount(app.JDB_JACKPOT_COUNTER)
  await app.resolveServer({ jdb: 3_000 })
  assert.equal(jackpot.counter.displayAmount.value, 4_200)
  assert.equal(jackpot.counter.amount.value, 4_200)
})

test('JDB visibility, focus, and queued storage events read the newest shared value', async t => {
  const storage = createSharedStorage({ 'bybet-jackpot:jdb': '4100' })
  const app = createCounterHarness({ storage })
  t.after(app.dispose)
  const jackpot = app.mount(app.JDB_JACKPOT_COUNTER)
  await app.setHidden(true)
  storage.setItem(null, 'bybet-jackpot:jdb', '4200')
  storage.setItem(null, 'bybet-jackpot:jdb', '4300')

  await app.setHidden(false)
  assert.equal(jackpot.counter.displayAmount.value, 4_300,
    'Visibility recovery must work before queued storage events are delivered')
  await app.dispatchStorageEvent({ key: 'bybet-jackpot:jdb', newValue: '4200' })
  assert.equal(jackpot.counter.displayAmount.value, 4_300,
    'An older queued event must read storage instead of restoring its stale payload')

  storage.setItem(null, 'bybet-jackpot:jdb', '4400')
  await app.focus()
  assert.equal(jackpot.counter.displayAmount.value, 4_400)

  storage.setItem(null, 'bybet-jackpot:jdb', '4500')
  await app.advanceBy(3_000)
  assert.equal(jackpot.counter.displayAmount.value, 4_503.25,
    'A tick must use the newest storage value even before its event arrives')
  storage.flush()
  await app.settle()
  assert.equal(jackpot.counter.displayAmount.value, 4_503.25)
  assert.equal(storage.writes(), 5, 'Four external writes and one tick must not echo-save on sync')
})

test('JDB removes its cross-tab listeners after the last consumer unmounts', async t => {
  const storage = createSharedStorage({ 'bybet-jackpot:jdb': '4100' })
  const app = createCounterHarness({ storage })
  t.after(app.dispose)
  const home = app.mount(app.JDB_JACKPOT_COUNTER)
  const jackpot = app.mount(app.JDB_JACKPOT_COUNTER)
  assert.ok(app.listenerCount() > 0)
  app.unmount(home)
  assert.ok(app.listenerCount() > 0, 'The remaining consumer must still receive updates')
  app.unmount(jackpot)
  assert.equal(app.listenerCount(), 0)
  assert.equal(app.tickers(), 0)

  storage.setItem(null, 'bybet-jackpot:jdb', '4200')
  storage.flush()
  await app.settle()
  assert.equal(jackpot.counter.amount.value, 4_100, 'Unmounted consumers must stop receiving events')
})

test('JILI and CQ9 retain their existing initial sync and counter behavior', async t => {
  const app = createCounterHarness()
  t.after(app.dispose)
  const jili = app.mount(app.JILI_JACKPOT_COUNTER)
  const cq9 = app.mount(app.CQ9_JACKPOT_COUNTER)
  await app.resolveServer({ jili: 7_800, cq9: 6_500 })
  assert.equal(jili.counter.displayAmount.value, 7_800)
  assert.equal(cq9.counter.displayAmount.value, 6_500)
  assert.equal(app.tickers(), 2)

  await app.advanceBy(3_000)
  assert.equal(jili.counter.displayAmount.value, 7_805.5)
  assert.equal(cq9.counter.displayAmount.value, 6_504.5)
})
