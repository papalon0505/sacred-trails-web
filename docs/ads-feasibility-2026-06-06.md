# Sacred Trails Website Ads Feasibility

Status: feasibility note only. Do not add third-party ads, change privacy copy, or publish ad-related claims until the iOS route-pack launch is approved and the owner approves the ad model.

Date: 2026-06-06

## Short Answer

Website ads are technically possible, but they should not be enabled before the iOS route-pack release is approved and live.

The current best path is:

1. Keep the app itself ad-free.
2. Do not add third-party ads during App Review.
3. After the free-to-start route-pack launch is live, test low-risk website monetization first with owned placements that promote Sacred Trails route packs.
4. Only consider AdSense after privacy, consent, and brand-copy changes are ready.

## Current Site Fit

The site is a Next.js App Router marketing and route-information site deployed as a normal web property. From an engineering perspective, it can support:

- Google AdSense script loading through a client-side component.
- Static `ads.txt` in `public/`.
- Route-level ad slots on guide, comparison, and long route pages.
- Feature flags so ad code can stay disabled unless explicitly enabled.

The current site should not receive ad code immediately because it contains no-ad positioning in public copy and privacy language:

- The privacy page says the site does not set advertising cookies or run ad networks.
- Multilingual app copy positions Sacred Trails as no ads.
- Screenshot-generation copy includes a `no ads` claim.

Those claims are currently useful for App Review and user trust. Adding ads without updating them would create public inconsistency.

## Policy And Compliance Notes

Google AdSense requires the publisher to have original content, access to the site's HTML source, and compliance with AdSense Program policies before sign-up.

If AdSense is used, the privacy policy must disclose data collection, sharing, and use caused by Google products and services, including cookies, web beacons, IP addresses, or other identifiers.

For users in the EEA, UK, and Switzerland, Google requires a certified Consent Management Platform integrated with IAB TCF when serving ads through AdSense, Ad Manager, or AdMob.

Google Publisher Policies also restrict pages where ads or paid promotional material exceed publisher content. That means Sacred Trails should avoid aggressive auto-ads on thin pages and keep ads away from utility-critical content like map/planning sections.

## Recommended Rollout

### P0: Before App Review Approval

- Do not add third-party ad scripts.
- Do not change the site's no-ad privacy claim yet.
- Keep public copy focused on App Store approval and route-pack trust.
- Use App Store approval as the next gate before changing monetization language.

Acceptance: no new third-party ad network requests are present in production.

### P1: After iOS Route-Pack Launch Is Live

- Add owned website placements only:
  - route-pack CTA on long route pages,
  - App Store CTA on guide articles,
  - "unlock offline route data" placement on comparison pages.
- Keep them first-party: no cookies, no external ad scripts, no consent banner required for the ad itself.
- Measure only with existing privacy posture or a separately approved analytics plan.

Acceptance: website monetizes by sending users to the approved route-pack app, while the "app has no ads" claim remains true.

### P2: Third-Party Ads Test

Only after owner approval:

- Update privacy policy for ad network data use.
- Add a Google-certified CMP for EEA, UK, and Switzerland users.
- Add `public/ads.txt`.
- Add a feature-flagged AdSense loader.
- Use manual ad slots on long editorial pages instead of site-wide auto ads.
- Exclude homepage hero, privacy/legal pages, app-download CTA blocks, and route-planning utility panels.

Acceptance: third-party ads are disabled by default, can be enabled by config, and do not contradict public privacy or no-ad copy.

## Business Recommendation

For Sacred Trails, third-party website ads are a lower-priority monetization path than route-pack conversion. The brand promise is offline pilgrimage guidance with no subscriptions and no app ads; intrusive web ads would dilute that trust before the route-pack model has real conversion data.

Use first-party route-pack CTAs first. Revisit AdSense only if the website starts receiving enough organic traffic that ad revenue can be meaningful without hurting App Store conversion.
