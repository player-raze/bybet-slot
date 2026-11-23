import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()

test('Light mode CSS includes comprehensive Section 11 for Blogs and Articles', () => {
  const css = fs.readFileSync(path.join(rootDir, 'assets/css/light-mode.css'), 'utf-8')

  assert.ok(css.includes('11. Blogs & Articles'), 'Should include Section 11 header')
  assert.ok(css.includes(".blogs-page"), 'Should target .blogs-page')
  assert.ok(css.includes(".blog-category-page"), 'Should target .blog-category-page')
  assert.ok(css.includes(".blog-detail-page"), 'Should target .blog-detail-page')
  assert.ok(css.includes(".blogs-sticky"), 'Should target .blogs-sticky')
  assert.ok(css.includes(".blog-category-sticky"), 'Should target .blog-category-sticky')
  assert.ok(css.includes(".blog-page-header"), 'Should target .blog-page-header')
  assert.ok(css.includes(".blog-category-header"), 'Should target .blog-category-header')
  assert.ok(css.includes(".blog-detail-header"), 'Should target .blog-detail-header')
  assert.ok(css.includes(".blog-group"), 'Should target .blog-group')
  assert.ok(css.includes(".blog-group__heading"), 'Should target .blog-group__heading')
  assert.ok(css.includes(".blog-card--row"), 'Should target .blog-card--row')
  assert.ok(css.includes(".blog-card--grid"), 'Should target .blog-card--grid')
  assert.ok(css.includes(".blog-card--featured"), 'Should target .blog-card--featured')
  assert.ok(css.includes(".blog-article"), 'Should target .blog-article')
  assert.ok(css.includes(".blog-article__breadcrumbs"), 'Should target .blog-article__breadcrumbs')
  assert.ok(css.includes(".blog-article__title"), 'Should target .blog-article__title')
  assert.ok(css.includes(".blog-article__meta"), 'Should target .blog-article__meta')
  assert.ok(css.includes(".blog-article__body"), 'Should target .blog-article__body')
  assert.ok(css.includes(".mobile-blogs"), 'Should target .mobile-blogs')
  assert.ok(css.includes(".mobile-blogs__categories"), 'Should target .mobile-blogs__categories')
  assert.ok(css.includes(".mobile-blog-card"), 'Should target .mobile-blog-card')
  assert.ok(css.includes(".mobile-blog-row"), 'Should target .mobile-blog-row')
})

test('pages/blog/[id].vue has light utility classes and scoped light mode rules', () => {
  const content = fs.readFileSync(path.join(rootDir, 'pages/blog/[id].vue'), 'utf-8')

  assert.ok(content.includes('light:text-[#14251d]'), 'Root and title should have light text utility')
  assert.ok(content.includes('light:bg-white'), 'Article should have light:bg-white')
  assert.ok(content.includes('light:text-[#55695e]'), 'Meta and breadcrumbs should have secondary text utility')
  assert.ok(content.includes('light:text-[#047857]'), 'Links should have emerald utility')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-detail-page"), 'Should style .blog-detail-page in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) :deep(.blog-detail-header)"), 'Should style .blog-detail-header in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-banner"), 'Should style .blog-banner in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-article"), 'Should style .blog-article in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-article__breadcrumbs"), 'Should style breadcrumbs in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-article__meta"), 'Should style meta in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-article__body"), 'Should style body in light mode')
})

test('components/blogs/BlogCard.vue has light utility classes and scoped light styles', () => {
  const content = fs.readFileSync(path.join(rootDir, 'components/blogs/BlogCard.vue'), 'utf-8')

  assert.ok(content.includes('light:text-[#14251d]'), 'Title should have light text utility')
  assert.ok(content.includes('light:text-[#55695e]'), 'Excerpt should have secondary text utility')
  assert.ok(content.includes('light:bg-[#edf4f0]'), 'Action and media should have light background utility')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-card"), 'Should style .blog-card in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-card--row"), 'Should style row layout in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-card--grid"), 'Should style grid layout in light mode')
})

test('components/blogs/BlogListing.vue has light classes and scoped styles', () => {
  const content = fs.readFileSync(path.join(rootDir, 'components/blogs/BlogListing.vue'), 'utf-8')

  assert.ok(content.includes('light:text-[#14251d]'), 'Page and headings should have light text')
  assert.ok(content.includes('light:bg-[#eef5f1]'), 'Sticky seal should have light page bg')
  assert.ok(content.includes('light:bg-white'), 'Nav and groups should have light surface bg')
  assert.ok(content.includes(":global(html[data-theme='light']) .blogs-sticky"), 'Should style .blogs-sticky in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .category-nav"), 'Should style .category-nav in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-group"), 'Should style .blog-group in light mode')
})

test('components/blogs/BlogCategoryListing.vue has light classes and scoped styles', () => {
  const content = fs.readFileSync(path.join(rootDir, 'components/blogs/BlogCategoryListing.vue'), 'utf-8')

  assert.ok(content.includes('light:text-[#14251d]'), 'Page and title should have light text')
  assert.ok(content.includes('light:bg-[#eef5f1]'), 'Sticky seal should have light page bg')
  assert.ok(content.includes('light:bg-white'), 'Nav and empty state should have light bg')
  assert.ok(content.includes(":global(html[data-theme='light']) .blog-category-sticky"), 'Should style sticky seal in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .category-nav"), 'Should style .category-nav in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .category-empty"), 'Should style .category-empty in light mode')
})

test('components/blogs/MobileBlogListing.vue has light classes and scoped styles', () => {
  const content = fs.readFileSync(path.join(rootDir, 'components/blogs/MobileBlogListing.vue'), 'utf-8')

  assert.ok(content.includes('light:bg-[#eef5f1]'), 'Mobile wrapper should have light page bg')
  assert.ok(content.includes('light:text-[#14251d]'), 'Cards and headings should have light text')
  assert.ok(content.includes('light:bg-white'), 'Categories, groups and cards should have light surface bg')
  assert.ok(content.includes(":global(html[data-theme='light']) .mobile-blogs"), 'Should style .mobile-blogs in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .mobile-blogs__categories"), 'Should style categories in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .mobile-blog-card"), 'Should style mobile card in light mode')
  assert.ok(content.includes(":global(html[data-theme='light']) .mobile-blog-row"), 'Should style mobile row in light mode')
})
