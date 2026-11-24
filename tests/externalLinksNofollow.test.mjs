import test, { describe } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  EXTERNAL_LINK_REL,
  addNofollowToExternalHtmlLinks,
  ensureNofollowRel,
  isExternalHref,
} from '../utils/externalLinkRel.ts'

function walkFiles(dir, exts = null, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.nuxt', '.output', '.git', 'bloggerist', 'graphify-out'].includes(entry.name)) continue
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) walkFiles(fullPath, exts, out)
    else if (!exts || exts.some(ext => entry.name.endsWith(ext))) out.push(fullPath)
  }
  return out
}

function walkVueFiles(dir, out = []) {
  return walkFiles(dir, ['.vue'], out)
}

function findTemplateTags(content, tagNames) {
  const results = []
  const templateMatch = content.match(/<template\b[^>]*>([\s\S]*)<\/template>/)
  const template = templateMatch ? templateMatch[1] : content
  const re = new RegExp(`<(${tagNames.join('|')})(?=[\\s/>])`, 'g')
  let m
  while ((m = re.exec(template)) !== null) {
    const start = m.index
    const tag = m[1]
    let i = start + m[0].length
    let quote = null
    while (i < template.length) {
      const ch = template[i]
      if (quote) {
        if (ch === quote && template[i - 1] !== '\\') quote = null
      } else {
        if (ch === '"' || ch === "'") quote = ch
        else if (ch === '>') {
          i++
          break
        }
      }
      i++
    }
    results.push({ tag, raw: template.slice(start, i).replace(/\s+/g, ' ') })
  }
  return results
}

describe('External Links Nofollow & Clean Internal Links Suite', () => {
  const rootDir = process.cwd()

  test('Case 1: externalLinkRel helpers add nofollow to external links and leave internal links untouched', () => {
    assert.equal(isExternalHref('https://bybet.com/login?p=xjSD'), true)
    assert.equal(isExternalHref('http://localhost:8082/playnow'), true)
    assert.equal(isExternalHref('//cdn.example.com/offer'), true)
    assert.equal(isExternalHref('mailto:keepitfun@pagcor.ph'), true)
    assert.equal(isExternalHref('tel:+639171234567'), true)
    assert.equal(isExternalHref('/egames/slots'), false)
    assert.equal(isExternalHref('#support'), false)
    assert.equal(isExternalHref(''), false)

    assert.equal(ensureNofollowRel('noopener noreferrer'), 'nofollow noopener noreferrer')
    assert.equal(ensureNofollowRel('nofollow noopener noreferrer'), 'nofollow noopener noreferrer')
    assert.equal(ensureNofollowRel('', false), 'nofollow')
    assert.equal(ensureNofollowRel('noopener', false), 'nofollow noopener')

    const inputHtml = [
      '<p>',
      '<a href="https://phmacao.mobi/slots/" target="_blank" rel="noopener noreferrer">Ext 1</a>',
      '<a href="https://bybet.com/p/xjSD" target="_blank" rel="noopener noreferrer nofollow">Ext 2</a>',
      '<a href="http://localhost:8082/playnow">Ext 3</a>',
      '<a href="mailto:keepitfun@pagcor.ph">Mail</a>',
      '<a href="/egames/slots" class="internal">Internal</a>',
      '<a href="#faq">Anchor</a>',
      '</p>',
    ].join(' ')

    const outputHtml = addNofollowToExternalHtmlLinks(inputHtml)
    assert.match(outputHtml, /<a href="https:\/\/phmacao\.mobi\/slots\/" target="_blank" rel="nofollow noopener noreferrer">/)
    assert.match(outputHtml, /<a href="https:\/\/bybet\.com\/p\/xjSD" target="_blank" rel="noopener noreferrer nofollow">/)
    assert.match(outputHtml, /<a href="http:\/\/localhost:8082\/playnow" rel="nofollow noopener noreferrer">/)
    assert.match(outputHtml, /<a href="mailto:keepitfun@pagcor\.ph" rel="nofollow">/)
    assert.match(outputHtml, /<a href="\/egames\/slots" class="internal">/)
    assert.match(outputHtml, /<a href="#faq">/)
    assert.equal(EXTERNAL_LINK_REL, 'nofollow noopener noreferrer')
  })

  test('Case 2: All Vue templates contain zero /explore/ links and put nofollow on all external anchors', () => {
    const vueFiles = [
      ...walkVueFiles(path.join(rootDir, 'components')),
      ...walkVueFiles(path.join(rootDir, 'pages')),
      ...walkVueFiles(path.join(rootDir, 'layouts')),
      ...(fs.existsSync(path.join(rootDir, 'app.vue')) ? [path.join(rootDir, 'app.vue')] : []),
    ]

    const missingNofollow = []
    const leftoverExploreLinks = []

    for (const file of vueFiles) {
      const relFile = path.relative(rootDir, file)
      const txt = fs.readFileSync(file, 'utf8')
      const tags = findTemplateTags(txt, ['a', 'NuxtLink', 'nuxt-link'])

      for (const { tag, raw } of tags) {
        if (/\b(?:href|to)\s*=\s*["'][^"']*\/explore(?:\/|["'])/i.test(raw)) {
          leftoverExploreLinks.push(`${relFile}: ${raw}`)
        }

        const isStaticExternal = /\b(?:href|to)\s*=\s*["'](?:https?:\/\/|mailto:|tel:)/i.test(raw)
        const isKnownExternalBinding =
          /\b(?:href|to)\s*=\s*["'](?:externalSiteUrl|bybetRedirectUrl|bybetRedirectRegister|bybetRedirectSearch|loginRedirectUrl|resolvedHref|affiliateSystemUrl|part\.href)\b/.test(raw) ||
          /^\s*<NuxtLink\b[^>]*:external\b/.test(raw) ||
          /^\s*<NuxtLink\b[^>]*\bexternal(?:=|\s|>)/.test(raw)

        if (tag === 'a' && (isStaticExternal || isKnownExternalBinding)) {
          if (!/\bnofollow\b|EXTERNAL_LINK_REL/.test(raw)) {
            missingNofollow.push(`${relFile}: ${raw}`)
          }
        } else if ((tag === 'NuxtLink' || tag === 'nuxt-link') && (isStaticExternal || isKnownExternalBinding)) {
          if (!/\bnofollow\b|EXTERNAL_LINK_REL/.test(raw)) {
            missingNofollow.push(`${relFile}: ${raw}`)
          }
        }
      }
    }

    assert.deepEqual(leftoverExploreLinks, [], `Unexpected /explore/ links in templates:\n${leftoverExploreLinks.join('\n')}`)
    assert.deepEqual(missingNofollow, [], `External links missing nofollow:\n${missingNofollow.join('\n')}`)
  })

  test('Case 3: SportsPopular regex and CMS/HTML v-html processors wire clean paths and nofollow', () => {
    const sportsPopular = fs.readFileSync(path.join(rootDir, 'components/SportsPopular.vue'), 'utf8')
    assert.match(sportsPopular, /\/\\\/sports\\\/\(\[\^\/\]\+\)\//, 'SportsPopular activeSportKey must match without requiring /explore/')
    assert.match(sportsPopular, /:rel="redirectsToByBet\(tab\.key\) \? 'nofollow noopener noreferrer' : undefined"/)

    const blogDetail = fs.readFileSync(path.join(rootDir, 'pages/blog/[id].vue'), 'utf8')
    assert.match(blogDetail, /addNofollowToExternalHtmlLinks\(blog\.value\?\.content_html\)/)
    assert.match(blogDetail, /v-html="processedBlogContentHtml"/)

    const bonusDetail = fs.readFileSync(path.join(rootDir, 'pages/bonus/[id].vue'), 'utf8')
    assert.match(bonusDetail, /addNofollowToExternalHtmlLinks\(bonus\.value\.contentHtml\)/)
    assert.match(bonusDetail, /v-html="processedBonusContentHtml"/)

    const appSidebar = fs.readFileSync(path.join(rootDir, 'components/AppSidebar.vue'), 'utf8')
    assert.match(appSidebar, /rel:\s*'nofollow noopener noreferrer'/)

    const mobileBottomNav = fs.readFileSync(path.join(rootDir, 'components/MobileBottomNav.vue'), 'utf8')
    assert.match(mobileBottomNav, /isExternalHref\(cell\.to\)/)
    assert.match(mobileBottomNav, /EXTERNAL_LINK_REL/)
  })

  test('Case 4: Zero /explore/ or (?:explore/) references remain across app source directories', () => {
    const dirs = ['components', 'layouts', 'composables', 'data', 'scripts', 'server', 'pages']
    const textExts = ['.vue', '.ts', '.mts', '.js', '.mjs', '.json']
    const leftoverMatches = []

    for (const dir of dirs) {
      for (const file of walkFiles(path.join(rootDir, dir), textExts)) {
        const relFile = path.relative(rootDir, file).replace(/\\/g, '/')
        if (relFile === 'pages/explore/[...path].vue') continue
        const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
        lines.forEach((line, idx) => {
          if (/\/explore\/|\(\?:explore\/\)|['"]\/explore['"]/.test(line)) {
            leftoverMatches.push(`${relFile}:${idx + 1}: ${line.trim()}`)
          }
        })
      }
    }

    assert.deepEqual(
      leftoverMatches,
      [],
      `Unexpected /explore/ references remaining:\n${leftoverMatches.join('\n')}`,
    )
  })
})
