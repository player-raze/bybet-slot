import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import vm from 'node:vm'
import { parse } from '@vue/compiler-sfc'
import ts from 'typescript'
import { effectScope, nextTick, reactive, ref, watch } from 'vue'

const source = fs.readFileSync(new URL('../components/egames/JackpotDigitReel.vue', import.meta.url), 'utf8')
const { descriptor } = parse(source)
const { outputText } = ts.transpileModule(`${descriptor.scriptSetup.content}\nexport { currentDigit, reelDigits, stripStyle }`, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
})

const createReel = ({ digit = '1', reducedMotion = false, isIncrease = true } = {}) => {
  const props = reactive({ digit, isIncrease, staggerDelay: 100 })
  const frames = new Map()
  const timers = new Map()
  const beforeUnmount = []
  const scope = effectScope()
  const exports = {}
  let nextId = 0
  const context = {
    exports,
    require: name => {
      assert.equal(name, 'vue')
      return { ref, watch, onBeforeUnmount: callback => beforeUnmount.push(callback) }
    },
    defineProps: () => props,
    withDefaults: value => value,
    window: { matchMedia: () => ({ matches: reducedMotion }) },
    requestAnimationFrame: callback => {
      const id = ++nextId
      frames.set(id, callback)
      return id
    },
    cancelAnimationFrame: id => frames.delete(id),
    setTimeout: callback => {
      const id = ++nextId
      timers.set(id, callback)
      return id
    },
    clearTimeout: id => timers.delete(id),
  }
  scope.run(() => vm.runInNewContext(outputText, context, { filename: 'JackpotDigitReel.js' }))

  const flushFrames = () => {
    const batch = [...frames.values()]
    frames.clear()
    batch.forEach(callback => callback())
  }

  const dispose = () => {
    beforeUnmount.forEach(callback => callback())
    scope.stop()
  }

  return {
    ...exports,
    props,
    frames,
    timers,
    dispose,
    setDigit: async digit => {
      props.digit = digit
      await nextTick()
    },
    flushFrames,
    finishAnimation: () => {
      flushFrames()
      flushFrames()
      const batch = [...timers.values()]
      timers.clear()
      batch.forEach(callback => callback())
    },
  }
}

test('returning to the original digit cancels an older animation target', async t => {
  const reel = createReel()
  t.after(reel.dispose)
  await reel.setDigit('2')
  reel.flushFrames()
  reel.flushFrames()
  assert.equal(reel.timers.size, 1)

  await reel.setDigit('1')
  reel.finishAnimation()
  assert.equal(reel.currentDigit.value, 1)
  assert.deepEqual([...reel.reelDigits.value], [1])
  assert.equal(reel.stripStyle.value.transition, 'none')
  assert.equal(reel.timers.size, 0)
})

test('rapid updates before animation frames run keep only the latest target', async t => {
  const reel = createReel()
  t.after(reel.dispose)
  await reel.setDigit('2')
  const staleFrame = [...reel.frames.values()][0]
  await reel.setDigit('3')
  staleFrame()
  assert.equal(reel.frames.size, 1, 'Cancelled callbacks must not queue another frame')
  reel.finishAnimation()
  assert.equal(reel.currentDigit.value, 3)
  assert.deepEqual([...reel.reelDigits.value], [3])
})

test('unmount cancels pending frames and prevents late callbacks from changing the digit', async () => {
  const reel = createReel()
  await reel.setDigit('2')
  const staleFrame = [...reel.frames.values()][0]
  reel.dispose()
  staleFrame()
  assert.equal(reel.frames.size, 0)
  assert.equal(reel.timers.size, 0)
  assert.equal(reel.currentDigit.value, 1)
})

test('descending animation and reduced motion settle on the requested digit', async t => {
  const descending = createReel({ digit: '8', isIncrease: false })
  const reduced = createReel({ reducedMotion: true })
  t.after(descending.dispose)
  t.after(reduced.dispose)
  await descending.setDigit('5')
  descending.finishAnimation()
  assert.equal(descending.currentDigit.value, 5)
  assert.deepEqual([...descending.reelDigits.value], [5])
  await reduced.setDigit('4')
  assert.equal(reduced.currentDigit.value, 4)
  assert.equal(reduced.frames.size, 0)
  assert.equal(reduced.timers.size, 0)
})
