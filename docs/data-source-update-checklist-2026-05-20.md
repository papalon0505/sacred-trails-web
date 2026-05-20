# Sacred Trails Data Source Update Checklist

Created: 2026-05-20
Scope: Verify and prepare updates for public route, certification, lodging, and source-disclosure data.

## In Progress

- [ ] Fix lodging update pipeline before applying lodging diffs.
  - Current dry run fetched no usable Gronze or Kumano data.
  - Several configured Gronze stage URLs now return 404.
  - Some live Gronze pages still contain lodging content, so parser selectors are stale.
  - [x] Make `scripts/update-lodging.py` report empty fetches as verification failures instead of "All routes up to date".
  - [ ] Refresh source URLs and parser selectors.
  - Files: `scripts/lodging-sources.yaml`, `scripts/update-lodging.py`, `lib/data/lodging.ts`.

- [x] Apply Shikoku / Saigoku source refresh.
  - Shikoku official site currently shows no new "What's New" posts, but the source metadata had an unsupported `pilgrims_per_year: 150000`.
  - Shikoku official source confirms `Nōkyō-chō` as proof of pilgrimage and basic nōkyō acceptance time as generally 7:00-17:00; it does not confirm a current annual pilgrim count.
  - Saigoku official sites now show 2026 notices, including the Reiwa 8 event schedule, Japan Pilgrimage Culture Day memorial service schedule, and a digital stamp rally notice.
  - Saigoku route copy now says Japan Heritage / 日本遺産, not UNESCO-recognized pilgrimage.
  - Saigoku source list now prefers `saikoku33.gr.jp`, `jh-saikoku33.jp`, and the Japan Heritage portal.
  - WESTER digital stamp rally is treated as a time-limited external campaign, not a replacement for physical nōkyōchō completion.
  - Sources: https://88shikokuhenro.jp/en/news/, https://88shikokuhenro.jp/en/basic-knowledge/understanding-pilgrimage/, https://saikoku33.gr.jp/, https://jh-saikoku33.jp/, https://japan-heritage.bunka.go.jp/ja/stories/story074/, https://www.jr-odekake.net/navi/saigoku_wester/
  - Files: `lib/data/routes.ts`, app `assets/data/sections/shikoku_henro/metadata.json`, app `assets/data/sections/saigoku_33/metadata.json`.

## Applied This Round

- [x] Update Dual Pilgrim qualifying Kumano options.
  - Remove Iseji from qualifying options.
  - Replace generic Ohechi wording with the official Ogigahama Mizugori Site + Tokei-jinja + any two Ohechi sites + all three Grand Shrines condition.
  - Add the Kumano Nachi Taisha to/from Kumano Hongu Taisha option.
  - Source: https://www.tb-kumano.jp/en/kumano-kodo/dual-pilgrim/
  - Files: `lib/dual-pilgrim-content.ts`, `lib/guide-content.ts`, `assets/data/certifications.json` in the app data source.

- [x] Update Kumano Wakayama stamp booklet certificate handling.
  - Remove Tanabe Tourist Information Center as the verification location for Wakayama Prefecture stamp booklets.
  - Point users to the listed tourist information centers and Wakayama Prefecture verification note.
  - Clarify that Wakayama stamp booklet completion does not itself qualify for Dual Pilgrim certification.
  - Source: https://www.tb-kumano.jp/en/2024/03/08/12591/
  - Files: `lib/data/certifications.ts`, app `assets/data/certifications.json`.

- [x] Update Camino annual statistics.
  - Replace 2024 / 499,239 with 2025 / 530,987 where used as "latest completed year" copy.
  - Primary source page for statistics: https://oficinadelperegrino.com/estadisticas/
  - Secondary published references quote the 2025 total from the Pilgrim Office.
  - File: `lib/guide-content.ts`.

- [x] Fix included-route list copy.
  - Current copy lists Camino del Sur, Sanabres, Catalan, Levante, Aragones.
  - Actual bundled route set includes Frances, Portugues, Portugues Coastal, Norte, Primitivo, Ingles, Via de la Plata, Invierno, Fisterra-Muxia, Le Puy, Mozarabe, San Salvador.
  - Files: `app/(en)/page.tsx`, `lib/i18n.ts`.

- [x] Fix Saigoku 33 completion wording.
  - Use Seiganto-ji as temple 1, not Nachi Taisha.
  - Use Kegon-ji as temple 33; avoid "Huganji".
  - Sources: https://saikoku33.gr.jp/place/1 and https://saikoku33.gr.jp/place/33
  - Files: `lib/data/certifications.ts`, app `assets/data/certifications.json`.

- [x] Narrow Kumano lodging source disclosure.
  - The website says Kumano Travel sources lodging for Nakahechi, Kohechi, Ohechi, and Iseji.
  - Current configured lodging source only covers `kumano-nakahechi`.
  - File: `app/(en)/data-sources/page.tsx`.

- [x] Soften unsupported Shikoku annual completion count.
  - The "200,000 pilgrims complete the circuit each year" claim was not confirmed from official sources.
  - Keep 88 temples / 1,200 km / 45-60 days, but avoid the unsupported annual completion count.
  - Files: `lib/data/routes.ts`, app `assets/data/sections/shikoku_henro/metadata.json`.

## Next

- [ ] Refresh Gronze stage URLs and parser selectors.
- [ ] Refresh Kumano Travel accommodation parser or switch to a documented export/source if available.
- [ ] Run a full lodging dry run after parser fixes and only then decide whether to update `lib/data/lodging.ts`.
- [ ] Decide whether to add an in-app advisory/link surface for WESTER and similar temporary campaigns. Current verified WESTER period: 2026-04-01 to 2027-03-31.
- [ ] Keep WESTER outside permanent route/certification logic unless JR/WESTER provides a stable public API, official deep link contract, or explicit integration path.
