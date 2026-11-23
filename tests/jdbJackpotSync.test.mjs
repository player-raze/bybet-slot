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

// Execute the real composable with Vue reactivity and controlled Nuxt/browser services.
const createCounterHarness = ({ cached = {} } = {}) => {
  const states = new Map()
  const storage = new Map(Object.entries(cached))
  const timers = new Map()
  const components = new Set()
  const requests = []
  let currentComponent
  let now = 0
  let nextTimerId = 0
  let resolveInitialGet
  const initialGet = new Promise(resolve => { resolveInitialGet = resolve })
  const deterministicMath = Object.create(Math)
  deterministicMath.random = () => 0.5
  const exports = {}

  vm.runInNewContext(outputText, {
    exports,
    ref,
    watch,
    Math: deterministicMath,
    document: { hidden: false },
    window: { cancelAnimationFrame() {} },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
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
  const app = createCounterHarness({ cached: { 'bybet-jackpot:jdb': '4200' } })
  t.after(app.dispose)
  const home = app.mount(app.JDB_JACKPOT_COUNTER)
  assert.equal(home.counter.displayAmount.value, 4_200)
  await app.advanceBy(3_000)
  assert.equal(home.counter.displayAmount.value, 4_203.25)

  await app.resolveServer({ jdb: 3_000 })
  assert.equal(home.counter.displayAmount.value, 4_203.25,
    'The old GET response must not replace a newer local tick')
  assert.equal(home.counter.amount.value, 4_203.25)
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
