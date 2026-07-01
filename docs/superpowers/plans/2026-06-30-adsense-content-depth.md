# AdSense Content Depth Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add visible editorial depth and English guide content so Sacred Trails has a stronger AdSense review surface.

**Architecture:** Use the existing Next.js App Router and content-in-TS pattern. Add one editorial metadata module, render it from shared article components, add English article records/pages, update index/sitemap, and verify with a content sync test plus production build.

**Tech Stack:** Next.js 16, React 19, TypeScript content modules, Node test runner.

---

### Task 1: Editorial Metadata Layer

**Files:**
- Create: `lib/editorial-content.ts`
- Create: `components/EditorialReviewPanel.tsx`
- Modify: `components/ArticlePage.tsx`
- Modify: `components/GuideArticle.tsx`
- Modify: `app/(en)/guide/camino-de-santiago/page.tsx`
- Modify: `app/(en)/guide/kumano-kodo/page.tsx`
- Modify: `app/(en)/guide/shikoku-henro/page.tsx`
- Modify: `app/[locale]/guide/camino-de-santiago/page.tsx`
- Modify: `app/[locale]/guide/kumano-kodo/page.tsx`
- Modify: `app/[locale]/guide/shikoku-henro/page.tsx`

- [x] Add `EditorialReview` and source metadata keyed by guide/article slug.
- [x] Render a visible "Editorial review" block with last reviewed date, scope, caveat, and source links.
- [x] Include `dateModified` from editorial metadata in article JSON-LD.
- [x] Pass guide slugs into existing main guide page components.

### Task 2: New English Guide Articles

**Files:**
- Modify: `lib/article-content.ts`
- Create: `app/(en)/guide/camino-routes-compared/page.tsx`
- Create: `app/(en)/guide/kumano-kodo-nakahechi-itinerary/page.tsx`
- Create: `app/(en)/guide/shikoku-henro-planning/page.tsx`
- Create: `app/(en)/guide/dual-pilgrim-certificate/page.tsx`
- Create: `app/(en)/guide/saigoku-33-kannon-pilgrimage/page.tsx`

- [x] Add five article slugs and long-form article bodies.
- [x] Keep variable facts framed as planning ranges and tell readers to verify official sources before booking or relying on current rules.
- [x] Add metadata and keywords to each new page.
- [x] Use the shared `ArticlePage` component for all new pages.

### Task 3: Index, Sitemap, and Internal Links

**Files:**
- Modify: `app/(en)/guide/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `lib/article-content.ts`

- [x] Export the English article slug list.
- [x] Add the new articles to the English guide index with short descriptions.
- [x] Add every new article URL to the sitemap through the shared slug list.
- [x] Keep localized guide indexes unchanged except for shared main-guide editorial blocks.

### Task 4: Content Integrity Test

**Files:**
- Create: `tests/editorial-content.test.mjs`

- [x] Verify every article slug has an English page file.
- [x] Verify every article slug has editorial metadata.
- [x] Verify sitemap references the shared article slug list instead of a stale local copy.
- [x] Verify `public/ads.txt` contains `pub-1146347245386603`.

### Task 5: Verification and Deploy

**Commands:**
- `node --test tests/editorial-content.test.mjs`
- `node --test tests/home-copy.test.mjs tests/route-planning.test.mjs`
- `npm run lint`
- `npm run build`

- [x] Fix failures without touching unrelated worktree changes.
- [x] Deploy a production build using the existing Vercel project configuration.
- [x] Verify production homepage, `/guide`, every new article URL, `/sitemap.xml`, and `/ads.txt`.
