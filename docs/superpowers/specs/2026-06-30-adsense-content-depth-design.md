# Sacred Trails AdSense Content Depth Design

## Goal

Increase Sacred Trails' public content depth so the site is easier for Google AdSense reviewers to classify as a useful original travel-planning resource, not a thin app landing page.

## Scope

- Prioritize the English public site because it is the default AdSense review surface.
- Keep existing multilingual guide pages working, but do not translate every new article in this pass.
- Add editorial trust signals to guide/article pages: last reviewed date, review scope, source notes, and official source links.
- Add several high-depth English planning articles for route choice, Japan pilgrimage planning, certification, and Saigoku coverage.
- Keep ads technical readiness in scope by ensuring `public/ads.txt` ships and live `/ads.txt` is rechecked after deployment.

## Current State

- The site has 18 route detail pages, 3 multilingual main guide pages, and 3 English planning articles.
- Route pages already expose official resources and lodging source disclosures.
- Article pages do not show a visible last-reviewed/source block.
- English guide index links to the 3 planning articles; localized guide indexes only link to the 3 main guide pages.
- Live `https://sacredtrails.evelyn-ai.com/ads.txt` returned a 500 before this work even though local `public/ads.txt` contained the AdSense publisher line.
- The worktree contains unrelated existing modifications, so this pass must avoid cleanup or resets.

## Content Architecture

- Add a focused editorial metadata module instead of duplicating source data inside every article body.
- Render that module in both `GuideArticle` and `ArticlePage`.
- Add English-only article slugs to the existing article content module and route them under `/guide/<slug>`.
- Keep sitemap and the English guide index in sync with the article list.

## New Articles

1. `camino-routes-compared`
   - Helps pilgrims choose between major Camino routes.
   - Emphasizes difficulty, time, social density, lodging, and credential implications.

2. `kumano-kodo-nakahechi-itinerary`
   - Practical Nakahechi planning guide with stages, lodging cautions, buses, weather, and source checks.

3. `shikoku-henro-planning`
   - Full-circuit planning guide for walking, section walking, temple etiquette, lodging, and resupply.

4. `dual-pilgrim-certificate`
   - Explains the Camino + Kumano Dual Pilgrim path, documentation, qualifying choices, and where to verify.

5. `saigoku-33-kannon-pilgrimage`
   - Adds depth for the Saigoku route already present in the app/site data but thin in article form.

## Trust Signals

Each guide/article page should expose:

- Last reviewed date.
- Review scope.
- Practical caveat that prices, opening days, transport, lodging, and certification rules can change.
- At least two official or primary source links where possible.
- JSON-LD `dateModified` aligned to the visible review date for article pages.

## Validation

- Add a lightweight content integrity test that verifies new article slugs, source metadata, and page files stay in sync.
- Run lint and production build.
- Verify locally that guide index, new article pages, sitemap, privacy/legal/data-source links, and `/ads.txt` work.
- Deploy and verify the production homepage, sitemap, new article URLs, and `/ads.txt`.

## Non-Goals

- Do not submit the site to AdSense in this implementation step unless separately requested.
- Do not redesign the site.
- Do not translate the five new articles yet.
- Do not modify existing unrelated worktree changes.
