import { spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import http from 'node:http'
import net from 'node:net'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizeEnvOriginUrl } from './env-loader.mjs'

const ROOT = process.cwd()
const OUTPUT_DIR = path.join(ROOT, 'public', 'og-image')
const MANIFEST_PATH = path.join(ROOT, 'utils', 'ogImageManifest.ts')

const CORE_SPORTS_ROUTES = [
  '/sports/live/basketball',
  '/sports/live/soccer',
  '/sports/basketball/inplay',
  '/sports/basketball/league',
  '/sports/basketball/upcoming',
  '/sports/basketball/pre-match',
  '/sports/basketball/outright',
  '/sports/soccer/inplay',
  '/sports/soccer/league',
  '/sports/soccer/upcoming',
  '/sports/soccer/pre-match',
  '/sports/soccer/outright',
  '/sports/baseball/inplay',
  '/sports/baseball/league',
  '/sports/baseball/upcoming',
  '/sports/baseball/pre-match',
  '/sports/tennis/inplay',
  '/sports/tennis/league',
  '/sports/tennis/upcoming',
  '/sports/tennis/pre-match',
]

function normalizeRoutePath(rawPath = '/') {
  const withoutOrigin = String(rawPath || '/').trim()
  let pathname = withoutOrigin
  if (/^https?:\/\//i.test(pathname)) {
    try {
      pathname = new URL(pathname).pathname
    } catch {
      // keep raw
    }
  }
  pathname = pathname.split('?')[0].split('#')[0].trim()
  if (!pathname.startsWith('/')) pathname = `/${pathname}`
  pathname = pathname.replace(/\/+/g, '/')
  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, '')
  return pathname.toLowerCase() || '/'
}

export function routeToOgImageFilename(routePath = '/') {
  const clean = normalizeRoutePath(routePath)
  if (clean === '/') return 'home.jpg'
  const slug = clean
    .slice(1)
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  return `${slug || 'home'}.jpg`
}

async function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer()
    srv.unref()
    srv.on('error', reject)
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address()
      const port = typeof addr === 'object' && addr ? addr.port : 0
      srv.close(() => resolve(port))
    })
  })
}

async function loadDotEnv(rootDir) {
  const envVars = {}
  try {
    const raw = await fs.readFile(path.join(rootDir, '.env'), 'utf8')
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let val = trimmed.slice(eq + 1).trim()
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      envVars[key] = val
    }
  } catch {
    // .env is optional
  }
  return envVars
}

function localHttpGet(baseUrl, routePath) {
  return new Promise((resolve, reject) => {
    const url = new URL(routePath, baseUrl)
    const req = http.request(
      {
        hostname: url.hostname,
        port: url.port,
        path: url.pathname + url.search,
        method: 'GET',
        maxHeaderSize: 262144,
        agent: false,
        headers: {
          connection: 'close',
          accept: 'text/html,application/xhtml+xml,*/*',
        },
      },
      (res) => {
        const chunks = []
        res.on('data', c => chunks.push(c))
        res.on('end', () => {
          resolve({
            status: res.statusCode || 0,
            headers: res.headers || {},
            body: Buffer.concat(chunks).toString('utf8'),
          })
        })
      },
    )
    req.setTimeout(15000, () => req.destroy(new Error(`HTTP timeout on ${routePath}`)))
    req.on('error', reject)
    req.end()
  })
}

async function waitForHttpServer(baseUrl, timeoutMs = 20000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await localHttpGet(baseUrl, '/')
      if (res.status > 0) return
    } catch {
      // retry
    }
    await new Promise(r => setTimeout(r, 200))
  }
  throw new Error(`Nitro server did not become ready at ${baseUrl} within ${timeoutMs}ms`)
}

async function walkStaticPages(dir, baseDir = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const routes = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      routes.push(...(await walkStaticPages(full, baseDir)))
    } else if (entry.isFile() && entry.name.endsWith('.vue')) {
      const rel = path.relative(baseDir, full).replace(/\\/g, '/')
      if (rel.includes('[') || rel.includes(']')) continue
      if (rel.startsWith('explore/')) continue
      let route = `/${rel.replace(/\.vue$/, '')}`
      if (route === '/index') route = '/'
      else if (route.endsWith('/index')) route = route.slice(0, -'/index'.length) || '/'
      routes.push(normalizeRoutePath(route))
    }
  }
  return routes
}

async function fetchBloggeristRoutes(bloggeristBase) {
  const routes = new Set()
  const base = bloggeristBase.replace(/\/+$/, '')
  let page = 1
  const limit = 50
  const maxPages = 20

  while (page <= maxPages) {
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), 4000)
      const res = await fetch(`${base}/api/blog-post-list.php?page=${page}&limit=${limit}`, {
        signal: controller.signal,
        headers: { connection: 'close' },
      })
      clearTimeout(timer)
      if (!res.ok) break
      const data = await res.json()
      const posts = Array.isArray(data?.blogs) ? data.blogs : Array.isArray(data?.posts) ? data.posts : []
      if (posts.length === 0) break
      for (const post of posts) {
        if (post?.slug) routes.add(normalizeRoutePath(`/blog/${post.slug}`))
        if (post?.category?.slug) routes.add(normalizeRoutePath(`/blogs/${post.category.slug}`))
      }
      if (posts.length < limit) break
      page += 1
    } catch {
      break
    }
  }

  return [...routes]
}

async function discoverRoutes(baseUrl, envFromDotEnv) {
  const candidateSet = new Set()

  // 1. Sitemap seeds
  try {
    const sitemapXml = await fs.readFile(path.join(ROOT, 'public', 'sitemap.xml'), 'utf8')
    for (const m of sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      candidateSet.add(normalizeRoutePath(m[1].trim()))
    }
  } catch {
    // sitemap optional if not generated yet
  }

  // 2. Static Vue pages
  for (const r of await walkStaticPages(path.join(ROOT, 'pages'))) {
    candidateSet.add(r)
  }

  // 3. Core sports routes
  for (const r of CORE_SPORTS_ROUTES) {
    candidateSet.add(normalizeRoutePath(r))
  }

  // 4. Discover /blogs/<cat> and /blog/<slug> from SSR /blogs
  try {
    const blogsRes = await localHttpGet(baseUrl, '/blogs')
    if (blogsRes.status === 200) {
      const domOnly = blogsRes.body
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
      for (const m of domOnly.matchAll(/\bhref=["'](\/(?:blogs?|blog)\/[^"'?#]+)["']/gi)) {
        candidateSet.add(normalizeRoutePath(m[1]))
      }
    }
  } catch {
    // ignore
  }

  // 5. Bloggerist live API routes (best-effort)
  const bloggeristBase = normalizeEnvOriginUrl(
    process.env.BLOGGERIST_URL ||
    envFromDotEnv.BLOGGERIST_URL ||
    envFromDotEnv.NUXT_PUBLIC_BLOGGERIST_API_URL ||
    'http://localhost:8082',
  )
  for (const r of await fetchBloggeristRoutes(bloggeristBase)) {
    candidateSet.add(r)
  }

  // Probe sequentially to separate canonical 200 pages from 301/302 redirect aliases
  const canonicalRoutes = new Set()
  const redirectAliases = new Map() // aliasRoute -> canonicalTargetRoute
  const probed = new Set()
  const queue = [...candidateSet]

  while (queue.length > 0) {
    const routePath = queue.shift()
    if (probed.has(routePath)) continue
    probed.add(routePath)

    let current = routePath
    const chain = []
    let finalCanonical = null

    for (let hop = 0; hop < 6; hop++) {
      let res
      try {
        res = await localHttpGet(baseUrl, current)
      } catch (err) {
        console.warn(`[og:generate] Probe warning for ${current}: ${err.message}`)
        break
      }

      if (res.status >= 300 && res.status < 400) {
        const rawLoc = res.headers.location
        const loc = Array.isArray(rawLoc) ? rawLoc[0] || '' : String(rawLoc || '')
        if (!loc || (/^https?:\/\//i.test(loc) && !loc.startsWith(baseUrl))) {
          break
        }
        const nextRoute = normalizeRoutePath(loc)
        chain.push(current)
        if (chain.includes(nextRoute)) break
        current = nextRoute
        continue
      }

      if (res.status === 200) {
        const isSoft404 =
          res.body.includes('Article Not Found') ||
          res.body.includes('League not available.') ||
          res.body.includes('This page could not be found')
        if (!isSoft404) {
          finalCanonical = current
        }
      }
      break
    }

    if (finalCanonical) {
      canonicalRoutes.add(finalCanonical)
      for (const alias of chain) {
        if (alias !== finalCanonical) {
          redirectAliases.set(alias, finalCanonical)
        }
      }
      if (!probed.has(finalCanonical)) {
        probed.add(finalCanonical)
      }
    }
  }

  return {
    canonicalRoutes: [...canonicalRoutes].sort(),
    redirectAliases,
  }
}

async function resolveChromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean)

  for (const candidate of candidates) {
    try {
      await fs.access(candidate)
      return candidate
    } catch {
      // continue
    }
  }
  throw new Error('Could not find Chrome/Chromium executable. Set CHROME_PATH to a Chrome binary.')
}

async function waitForChromeTarget(cdpPort, timeoutMs = 15000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const listRes = await fetch(`http://127.0.0.1:${cdpPort}/json/list`, {
        headers: { connection: 'close' },
      })
      if (listRes.ok) {
        const targets = await listRes.json()
        const page = Array.isArray(targets)
          ? targets.find(t => t.type === 'page' && t.webSocketDebuggerUrl)
          : null
        if (page) return page.webSocketDebuggerUrl
      }
    } catch {
      // retry
    }
    await new Promise(r => setTimeout(r, 150))
  }
  throw new Error(`Chrome CDP target did not become ready on port ${cdpPort}`)
}

class CdpClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl
    this.ws = null
    this.nextId = 1
    this.pending = new Map()
    this.listeners = new Map()
  }

  connect() {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(this.wsUrl)
      this.ws = ws
      const onOpen = () => {
        ws.removeEventListener('error', onError)
        resolve()
      }
      const onError = (ev) => {
        reject(new Error(`CDP WebSocket error: ${ev?.message || 'connection failed'}`))
      }
      ws.addEventListener('open', onOpen, { once: true })
      ws.addEventListener('error', onError, { once: true })
      ws.addEventListener('message', (event) => {
        let msg
        try {
          msg = JSON.parse(String(event.data))
        } catch {
          return
        }
        if (msg.id) {
          const entry = this.pending.get(msg.id)
          if (entry) {
            this.pending.delete(msg.id)
            if (msg.error) {
              entry.reject(new Error(`CDP ${entry.method}: ${msg.error.message}`))
            } else {
              entry.resolve(msg.result)
            }
          }
        } else if (msg.method) {
          const handlers = this.listeners.get(msg.method)
          if (handlers) {
            for (const fn of [...handlers]) {
              fn(msg.params)
            }
          }
        }
      })
    })
  }

  send(method, params = {}, timeoutMs = 20000) {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        reject(new Error(`CDP WebSocket is not open (${method})`))
        return
      }
      const id = this.nextId++
      const timer = setTimeout(() => {
        this.pending.delete(id)
        reject(new Error(`CDP timeout on ${method}`))
      }, timeoutMs)
      this.pending.set(id, {
        method,
        resolve: (res) => {
          clearTimeout(timer)
          resolve(res)
        },
        reject: (err) => {
          clearTimeout(timer)
          reject(err)
        },
      })
      this.ws.send(JSON.stringify({ id, method, params }))
    })
  }

  waitForEvent(method, timeoutMs = 15000) {
    return new Promise((resolve) => {
      let timer = null
      const handler = (params) => {
        if (timer) clearTimeout(timer)
        this.listeners.get(method)?.delete(handler)
        resolve(params)
      }
      if (!this.listeners.has(method)) this.listeners.set(method, new Set())
      this.listeners.get(method).add(handler)
      timer = setTimeout(() => {
        this.listeners.get(method)?.delete(handler)
        resolve(null)
      }, timeoutMs)
    })
  }

  close() {
    try {
      this.ws?.close()
    } catch {
      // ignore
    }
  }
}

const READINESS_EXPRESSION = `
(async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const waitUntil = async (predicate, timeoutMs) => {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      if (predicate()) return true;
      await sleep(80);
    }
    return false;
  };

  await waitUntil(() => document.readyState === 'complete', 8000);

  // Wait for ByBet fullscreen spinner & responsible gaming modal to clear
  await waitUntil(() => !document.querySelector('.bybet-spinner-root--fullscreen'), 9000);
  await waitUntil(() => !document.querySelector('.responsible-gaming-backdrop'), 2500);

  // Ensure any scroll-reveal children inside .page-content are immediately visible
  document.querySelectorAll('.page-content > .section-reveal').forEach((el) => {
    el.classList.add('section-reveal--visible');
  });

  // Wait for sports loading skeletons to finish when present
  await waitUntil(() => !document.querySelector('.sports-skeleton'), 3000);

  // Wait for above-the-fold visible images (top < 630 && bottom > 0)
  await waitUntil(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const visible = imgs.filter((img) => {
      const rect = img.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && rect.top < 630 && rect.bottom > 0;
    });
    return visible.every(img => img.complete);
  }, 3000);

  if (document.fonts && document.fonts.ready) {
    await Promise.race([document.fonts.ready, sleep(1500)]);
  }

  window.scrollTo(0, 0);
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  await sleep(250);
  return {
    title: document.title,
    spinnerPresent: Boolean(document.querySelector('.bybet-spinner-root--fullscreen')),
    gatePresent: Boolean(document.querySelector('.responsible-gaming-backdrop')),
  };
})()
`

async function captureRouteScreenshot(cdp, targetUrl, destFilePath) {
  const loadedPromise = cdp.waitForEvent('Page.loadEventFired', 15000)
  await cdp.send('Page.navigate', { url: targetUrl })
  await loadedPromise

  const evalRes = await cdp.send('Runtime.evaluate', {
    expression: READINESS_EXPRESSION,
    awaitPromise: true,
    returnByValue: true,
  }, 25000)

  const state = evalRes?.result?.value
  if (state?.gatePresent || state?.spinnerPresent) {
    throw new Error(`Overlay still visible (spinner=${state.spinnerPresent}, gate=${state.gatePresent})`)
  }

  const shot = await cdp.send('Page.captureScreenshot', {
    format: 'jpeg',
    quality: 82,
    fromSurface: true,
  }, 20000)

  const buf = Buffer.from(shot?.data || '', 'base64')
  if (buf.length < 1000 || buf[0] !== 0xff || buf[1] !== 0xd8) {
    throw new Error(`Invalid JPEG capture (${buf.length} bytes) for ${targetUrl}`)
  }

  await fs.writeFile(destFilePath, buf)
  return buf.length
}

function buildManifestTypeScript(routeToOgPath) {
  const entries = Object.entries(routeToOgPath)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([routePath, ogPath]) => `  ${JSON.stringify(routePath)}: ${JSON.stringify(ogPath)},`)
    .join('\n')

  return `// Auto-generated by scripts/generate-og-images.mjs
export const OG_IMAGE_DEFAULT = '/og-image/home.jpg'

export const OG_IMAGE_MANIFEST: Readonly<Record<string, string>> = {
${entries}
}

function normalizeOgLookupPath(routePath?: string): string {
  const clean = (routePath || '/')
    .split('?')[0]
    .split('#')[0]
    .trim()
    .replace(/\\/+/g, '/')
  const normalized = clean.startsWith('/') ? clean : \`/\${clean}\`
  if (normalized.length > 1) {
    return normalized.replace(/\\/+$/, '').toLowerCase() || '/'
  }
  return '/'
}

export function routeToOgImageFilename(routePath?: string): string {
  const clean = normalizeOgLookupPath(routePath)
  if (clean === '/') return 'home.jpg'
  const slug = clean
    .slice(1)
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  return \`\${slug || 'home'}.jpg\`
}

export function resolveOgImageForRoute(routePath?: string): string {
  let candidate = normalizeOgLookupPath(routePath)
  while (candidate) {
    const match = OG_IMAGE_MANIFEST[candidate]
    if (match) return match
    if (candidate === '/') break
    const lastSlash = candidate.lastIndexOf('/')
    candidate = lastSlash > 0 ? candidate.slice(0, lastSlash) : '/'
  }
  return OG_IMAGE_DEFAULT
}
`
}

async function main() {
  const argBase = process.argv.find(a => a.startsWith('--base-url='))?.slice('--base-url='.length)
  const envFromDotEnv = await loadDotEnv(ROOT)

  let serverProc = null
  let baseUrl = argBase ? argBase.replace(/\/+$/, '') : ''

  if (!baseUrl) {
    const serverEntry = path.join(ROOT, '.output', 'server', 'index.mjs')
    try {
      await fs.access(serverEntry)
    } catch {
      throw new Error('.output/server/index.mjs not found. Run `npm run build` first or pass --base-url=http://127.0.0.1:3000')
    }

    const serverPort = await getFreePort()
    baseUrl = `http://127.0.0.1:${serverPort}`
    serverProc = spawn('node', [serverEntry], {
      cwd: ROOT,
      env: {
        ...envFromDotEnv,
        ...process.env,
        PORT: String(serverPort),
        HOST: '127.0.0.1',
        NITRO_PORT: String(serverPort),
        NITRO_HOST: '127.0.0.1',
        NODE_ENV: 'production',
      },
      stdio: ['ignore', 'ignore', 'pipe'],
    })
    serverProc.stderr.on('data', () => {
      // drain stderr
    })
    await waitForHttpServer(baseUrl)
  }

  let chromeProc = null
  let cdp = null
  const chromeProfileDir = await fs.mkdtemp(path.join(os.tmpdir(), 'bybet-og-chrome-'))

  try {
    console.log(`[og:generate] Discovering routes from ${baseUrl}...`)
    const { canonicalRoutes, redirectAliases } = await discoverRoutes(baseUrl, envFromDotEnv)
    console.log(
      `[og:generate] Found ${canonicalRoutes.length} canonical routes and ${redirectAliases.size} redirect aliases.`,
    )

    if (!canonicalRoutes.includes('/')) {
      canonicalRoutes.unshift('/')
    }

    await fs.mkdir(OUTPUT_DIR, { recursive: true })

    const chromeBin = await resolveChromeExecutable()
    const cdpPort = await getFreePort()
    chromeProc = spawn(
      chromeBin,
      [
        '--headless=new',
        `--remote-debugging-port=${cdpPort}`,
        `--user-data-dir=${chromeProfileDir}`,
        '--no-first-run',
        '--no-default-browser-check',
        '--hide-scrollbars',
        '--window-size=1200,630',
        '--disable-background-timer-throttling',
        '--disable-renderer-backgrounding',
        '--disable-dev-shm-usage',
        'about:blank',
      ],
      { stdio: ['ignore', 'ignore', 'ignore'] },
    )

    const wsUrl = await waitForChromeTarget(cdpPort)
    cdp = new CdpClient(wsUrl)
    await cdp.connect()

    await cdp.send('Page.enable')
    await cdp.send('Runtime.enable')
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1200,
      height: 630,
      deviceScaleFactor: 1,
      mobile: false,
    })
    await cdp.send('Emulation.setEmulatedMedia', {
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
    })
    await cdp.send('Page.addScriptToEvaluateOnNewDocument', {
      source: "try { window.sessionStorage.setItem('bybet-responsible-gaming-accepted-v1', '1'); } catch {}",
    })

    const generatedFilenames = new Set()
    const routeToOgPath = {}

    for (let i = 0; i < canonicalRoutes.length; i++) {
      const routePath = canonicalRoutes[i]
      const filename = routeToOgImageFilename(routePath)
      const destPath = path.join(OUTPUT_DIR, filename)
      const targetUrl = `${baseUrl}${routePath}`

      let bytes = 0
      let lastErr = null
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          bytes = await captureRouteScreenshot(cdp, targetUrl, destPath)
          lastErr = null
          break
        } catch (err) {
          lastErr = err
          await new Promise(r => setTimeout(r, 300))
        }
      }
      if (lastErr) {
        throw new Error(`Failed capturing ${routePath}: ${lastErr.message}`)
      }

      generatedFilenames.add(filename)
      routeToOgPath[routePath] = `/og-image/${filename}`
      console.log(`[og:generate] [${i + 1}/${canonicalRoutes.length}] ${routePath} -> /og-image/${filename} (${bytes} B)`)
    }

    for (const [aliasRoute, canonicalTarget] of redirectAliases.entries()) {
      if (routeToOgPath[canonicalTarget]) {
        routeToOgPath[aliasRoute] = routeToOgPath[canonicalTarget]
      }
    }

    // Remove any stale generated .jpg files no longer in the manifest
    const existingFiles = await fs.readdir(OUTPUT_DIR)
    for (const existing of existingFiles) {
      if (existing.endsWith('.jpg') && !generatedFilenames.has(existing)) {
        await fs.unlink(path.join(OUTPUT_DIR, existing))
      }
    }

    await fs.writeFile(MANIFEST_PATH, buildManifestTypeScript(routeToOgPath), 'utf8')
    console.log(
      `[og:generate] Wrote ${generatedFilenames.size} screenshots to public/og-image/ and ${Object.keys(routeToOgPath).length} manifest entries to utils/ogImageManifest.ts.`,
    )
  } finally {
    cdp?.close()
    if (chromeProc) {
      chromeProc.kill('SIGTERM')
      await new Promise((resolve) => {
        const timer = setTimeout(() => {
          chromeProc.kill('SIGKILL')
          resolve()
        }, 2000)
        chromeProc.once('exit', () => {
          clearTimeout(timer)
          resolve()
        })
      })
    }
    await fs.rm(chromeProfileDir, { recursive: true, force: true }).catch(() => {})
    if (serverProc) {
      serverProc.kill('SIGTERM')
      await new Promise((resolve) => {
        const timer = setTimeout(() => {
          serverProc.kill('SIGKILL')
          resolve()
        }, 2000)
        serverProc.once('exit', () => {
          clearTimeout(timer)
          resolve()
        })
      })
    }
  }
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isCli) {
  main().catch((err) => {
    console.error('[og:generate] FATAL:', err)
    process.exit(1)
  })
}
