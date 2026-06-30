import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'

const root = new URL('../', import.meta.url)

function read(path) {
  return readFileSync(new URL(path, root), 'utf8')
}

function extractArticleSlugs() {
  const source = read('lib/article-content.ts')
  const match = source.match(/export const ARTICLE_SLUGS = \[([\s\S]*?)\] as const/)
  assert.ok(match, 'ARTICLE_SLUGS export should exist')
  return [...match[1].matchAll(/'([^']+)'/g)].map(match => match[1])
}

test('every English article slug has content, editorial metadata, and a page file', () => {
  const slugs = extractArticleSlugs()
  const articleSource = read('lib/article-content.ts')
  const editorialSource = read('lib/editorial-content.ts')

  assert.equal(slugs.length, 8)

  for (const slug of slugs) {
    assert.match(articleSource, new RegExp(`'${slug}':`), `${slug} should be registered in articles map`)
    assert.match(editorialSource, new RegExp(`'${slug}': \\{[\\s\\S]*?lastReviewed:[\\s\\S]*?reviewScope:[\\s\\S]*?sources:`, 'm'), `${slug} should have editorial review metadata`)
    assert.ok(existsSync(new URL(`app/(en)/guide/${slug}/page.tsx`, root)), `${slug} should have a page file`)
  }
})

test('main guide slugs have visible editorial source metadata', () => {
  const editorialSource = read('lib/editorial-content.ts')
  for (const slug of ['camino-de-santiago', 'kumano-kodo', 'shikoku-henro']) {
    assert.match(editorialSource, new RegExp(`'${slug}': \\{[\\s\\S]*?lastReviewed:[\\s\\S]*?reviewScope:[\\s\\S]*?sources:`, 'm'), `${slug} should have guide editorial metadata`)
  }
})

test('sitemap uses shared article slugs and ads.txt contains publisher id', () => {
  const sitemapSource = read('app/sitemap.ts')
  const adsTxt = read('public/ads.txt')

  assert.match(sitemapSource, /getAllArticleSlugs\(\)/)
  assert.doesNotMatch(sitemapSource, /const ARTICLE_SLUGS = \['camino-packing-list'/)
  assert.match(adsTxt, /google\.com, pub-1146347245386603, DIRECT, f08c47fec0942fa0/)
})
