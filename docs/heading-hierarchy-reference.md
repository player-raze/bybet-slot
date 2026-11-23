# Heading hierarchy reference

Audited **21 November 2026**. Reference: [2betbr.lat](https://2betbr.lat/).

This records the semantic structure used by the reference site so Bybet can follow the same concept with its own English content. It is a source audit, not a requirement to duplicate the reference's wording or every structural flaw.

## Scope and method

Fetched and parsed server-rendered HTML for **107 distinct public URLs**: 65 from the page sitemap, 7 from the blog sitemap, and 35 additional matching routes. All returned HTTP 200 and each contained exactly one H1. The H1 was visually hidden using `sr-only` on 55 routes, fully hidden using `hidden` on 6 tutorial routes, and visible on 46 routes.

Sources: [sitemap index](https://2betbr.lat/sitemap-index.xml), [page sitemap](https://2betbr.lat/sitemap-pages.xml), [blog sitemap](https://2betbr.lat/sitemap-blog.php). Fourteen additional checks are recorded below separately.

Inspected actual H1–H6 tags, text, classes, and surrounding elements. Raw HTML and parsed JSON are retained temporarily under `/tmp/2bet-heading-audit/`; they are not repository artifacts. Web search's page reader could not access this domain; direct HTTPS retrieval succeeded.

## Concepts to apply

- Use one descriptive H1 for the page's main topic. A visible title can provide it; compact catalog layouts use a visually hidden H1.
- Use H2 for sections directly below that topic, then H3 for items inside those sections. A card's level depends on its parent: H3 under a category H2, H2 when directly below the page H1.
- Preserve the visible design when converting existing title elements to headings. Hidden headings should use `sr-only` so assistive technology can still read them; the reference's tutorial `hidden` H1 is an implementation detail to improve, not reproduce.
- Give route variants meaningful topics, such as a sport and active tab, a selected category, or a provider. Reusable cards and league headings need a configurable heading level.
- Do not create headings for navigation labels, arbitrary interface text, or nonexistent sections just to reach H3.

## Bybet implementation and verification

Applied this concept to the matching Bybet page families using English headings. Shared navigation headers can render a paragraph when the page or article already owns its H1. Catalog card and league headings adapt to their parent section. Custom promotion content now uses native headings; tutorial titles use accessible `sr-only` headings.

Live Plaza home uses H1 “Live Plaza”, H2 “Popular Games”, and a visually hidden H2 “Expert Predictions”, matching its two existing content sections. A fresh reference check confirmed one H1 on all 107 URLs after following aliases, and a fresh production audit confirmed all 564 Bybet URL variants pass.

The production build passed on 21 November 2026. A read-only audit of the built server checked **564 URL variants, representing 563 distinct destinations**: every destination returned HTML with exactly one page H1, no empty headings, and no skipped heading levels. Coverage included all route-file families, catalog categories/providers, 19 promotions, 20 published blog articles, seven live blog categories, and sports tabs, tournaments, dates, and time filters. Redirect-only page sources were classified separately. Dialog headings were inspected separately from the page outline because modal titles have their own context.

The audit covered server-rendered public content, including visually hidden headings and both responsive DOM variants. Interactive states and visual browser checks were not verified because the browser-control connection was unavailable. The test suite passed 116 of 117 tests; the remaining pre-existing rules-layout test expects an exact CSS class sequence that no longer matches its light-theme classes. Latest raw local audit results are temporarily available at `/tmp/bybet-heading-recheck.json`.

## Observed outlines by page family

| Page family | Reference outline | Visibility and context |
| --- | --- | --- |
| Home | H1 page message → H2 major sections → H3 fixtures, games, casino categories, promotions | H1 visible. Desktop/mobile variants repeat some sections in HTML. |
| Slots landing | H1 slots topic → H2 categories → H3 game titles | H1 `sr-only`. |
| Slots category | H1 selected category → H2 game titles | H1 `sr-only`; no extra category H2 above the grid. |
| Bingo landing / category | H1 topic → H2 category sections on landing | H1 `sr-only`; the sampled category has no game headings in its response. |
| Jackpot | H1 all/provider topic → H2 provider → H3 game titles; H2 winners | H1 and provider H2 `sr-only`; auxiliary sections use H2. |
| Live casino featured | H1 featured topic → H2 casino categories → H3 table names | H1 `sr-only`. |
| Live casino category | H1 category → H2 tables or subgroups | H1 `sr-only`; baccarat uses subgroup H2s, other categories use table H2s. |
| Poker catalog (reference-only) | H1 catalog/category topic → H2 groups → H3 games | H1 `sr-only`; category pages retain a hidden group H2. |
| Popular sports | H1 active tab topic → H2 sport → H3 league | H1 `sr-only`; live, leagues, upcoming, and pre-match have distinct topics. |
| Specific sport / live sports | H1 sport/tab topic → H2 league | H1 `sr-only`; remove the sport grouping level when the page already selects it. |
| Sport league directory | H1 sport leagues topic → H2 directory groups → H3 league cards | H1 `sr-only`. |
| Bonuses landing | H1 bonuses topic → H2 featured/category groups → H3 promotion cards | H1 and featured-group H2 `sr-only`; responsive variants repeat content in HTML. |
| Bonuses category | H1 category + bonuses topic → H2 promotion cards | H1 `sr-only`. |
| Promotion detail | H1 promotion title → H2 event information and rules → H3 nested VIP benefits where present | H1 visible. |
| Bonus terms | H1 page topic → H2 article title | H1 `sr-only`. |
| Game rules | H1 selected rules topic → H2 major rule groups → H3 individual markets/examples | H1 visible; overview-only pages need no H3. |
| Betting tutorial | H1 tutorial topic → H2 handicap examples → H3 score examples | Reference H1 uses `hidden`. |
| Mock betting | H1 simulator topic → H2 market panel title | Reference H1 uses `hidden`. |
| Transaction tutorial | H1 deposit/withdrawal guide topic → H2 individual steps | Reference H1 uses `hidden`. |
| About | H1 page title → H2 informational sections | H1 visible. |
| Affiliate | H1 page title → H2 main sections → H3 content/FAQ groups → H4 products/questions | H1 visible; deeper levels follow actual nested content. |
| Download app | H1 download topic → H2 native app section | H1 `sr-only`. |
| Customer service | H1 support title → H2 greeting on landing | H1 visible; numbered subpages have H1 only in sampled responses. |
| Account overview | H1 account title → H2 settings groups | H1 visible. |
| Account settings / placeholder pages | H1 page title | Visible title only where no substantive sections exist. |
| Live plaza home | H1 plaza topic → H2 popular events and expert predictions | H1 `sr-only`. |
| Predictions / streamer | H1 page topic → H2 content sections | H1 `sr-only`. |
| Experts / all streamers / funds | H1 page topic | H1 `sr-only`; no extra headings in sampled responses. |
| Blogs landing | H1 blog title → H2 categories → H3 article titles | H1 visible. |
| Blog article | H1 article title → H2/H3 article structure; H3 support blocks → H4 author name; H2 related articles | H1 visible; article content determines its internal headings. |
| Privacy / terms / responsible gaming | H1 page header → H2 document title → H3 numbered sections | H1 visible; legal aliases return the same canonical content. |

## Limits and differences to account for

This covers anonymous server-rendered responses. It does not verify authenticated account states, headings loaded only after interaction, or computed CSS and responsive visibility in a running browser. Explicit `sr-only` and `hidden` classes establish intended visibility; responsive duplicate markup must also be checked in Bybet's rendered UI.

Do not infer unavailable content from HTTP 200 alone: several public routes are placeholders or empty states. The extra `/egames/history` response skips from H1 to an empty-state H3; use H2 for the corresponding Bybet title when it directly follows H1. Four sampled date/hour sports paths returned 404, so their outlines cannot be copied from live evidence. Dynamic fixtures, games, and blog content can change.

## Audited public URLs (main 107)

### Page sitemap (65)

- <https://2betbr.lat/>
- <https://2betbr.lat/egames/slots>
- <https://2betbr.lat/egames/jackpot/all>
- <https://2betbr.lat/entertainment/live-casino/baccarat>
- <https://2betbr.lat/entertainment/poker>
- <https://2betbr.lat/sports/popular/inplay>
- <https://2betbr.lat/sports/popular/league>
- <https://2betbr.lat/sports/popular/upcoming>
- <https://2betbr.lat/sports/popular/pre-match>
- <https://2betbr.lat/sports/live>
- <https://2betbr.lat/bonuses>
- <https://2betbr.lat/bonuses/most-popular>
- <https://2betbr.lat/bonuses/slots>
- <https://2betbr.lat/bonuses/live-casino>
- <https://2betbr.lat/bonuses/sports>
- <https://2betbr.lat/bonuses/others>
- <https://2betbr.lat/bonuses/deposit>
- <https://2betbr.lat/bonuses/new-member>
- <https://2betbr.lat/bonuses/terms-and-condition>
- <https://2betbr.lat/game-rules/sports-betting-rules>
- <https://2betbr.lat/game-rules/football>
- <https://2betbr.lat/game-rules/basketball>
- <https://2betbr.lat/game-rules/tennis>
- <https://2betbr.lat/game-rules/baseball>
- <https://2betbr.lat/game-rules/badminton>
- <https://2betbr.lat/game-rules/table-tennis>
- <https://2betbr.lat/game-rules/parlays-multiples>
- <https://2betbr.lat/game-rules/cash-out>
- <https://2betbr.lat/game-rules/outright>
- <https://2betbr.lat/tutorial>
- <https://2betbr.lat/tutorial/mock-betting>
- <https://2betbr.lat/about-us>
- <https://2betbr.lat/download-app>
- <https://2betbr.lat/affiliate>
- <https://2betbr.lat/egames/customer-service>
- <https://2betbr.lat/live-plaza/home>
- <https://2betbr.lat/live-plaza/streamer/all>
- <https://2betbr.lat/live-plaza/expert-predictions>
- <https://2betbr.lat/live-plaza/experts>
- <https://2betbr.lat/egames/slots/top-pick>
- <https://2betbr.lat/egames/slots/new>
- <https://2betbr.lat/egames/slots/hot>
- <https://2betbr.lat/egames/slots/cold>
- <https://2betbr.lat/egames/slots/max-rpt>
- <https://2betbr.lat/egames/jackpot/jdb>
- <https://2betbr.lat/entertainment/live-casino/featured>
- <https://2betbr.lat/entertainment/live-casino/good-road>
- <https://2betbr.lat/entertainment/live-casino/live-show>
- <https://2betbr.lat/entertainment/live-casino/dragon-tiger>
- <https://2betbr.lat/entertainment/live-casino/roulette>
- <https://2betbr.lat/entertainment/live-casino/sicbo>
- <https://2betbr.lat/entertainment/live-casino/evolution>
- <https://2betbr.lat/entertainment/poker/all>
- <https://2betbr.lat/entertainment/poker/fishing>
- <https://2betbr.lat/entertainment/poker/mahjong>
- <https://2betbr.lat/entertainment/poker/poker>
- <https://2betbr.lat/entertainment/poker/bullbull>
- <https://2betbr.lat/entertainment/poker/baccarat>
- <https://2betbr.lat/entertainment/poker/other>
- <https://2betbr.lat/bonus/bonus-da-virada-8-x-9>
- <https://2betbr.lat/bonus/programa-vip>
- <https://2betbr.lat/bonus/seu-primeiro-deposito>
- <https://2betbr.lat/bonus/bonus-diario-de-recuperacao>
- <https://2betbr.lat/bonus/share-and-earn>
- <https://2betbr.lat/bonus/vip-privileges>

### Blog sitemap (7)

- <https://2betbr.lat/blogs/>
- <https://2betbr.lat/blog/serie-a-2026-tudo-sobre-a-12-jornada-do-campeonato/>
- <https://2betbr.lat/blog/o-que-o-link-alternativo-2bet-e-por-que-usar/>
- <https://2betbr.lat/blog/2bet-ag-live-betting-saiba-como-fazer-apostas-ao-vivo/>
- <https://2betbr.lat/blog/como-entrar-no-grupo-2bet-telegram/>
- <https://2betbr.lat/blog/vantagens-do-rpt-2bet-para-usu-rios/>
- <https://2betbr.lat/blog/2bet-apk-download-guia-r-pido-para-iniciantes/>

### Additional matching routes (35)

- <https://2betbr.lat/privacy-policy>
- <https://2betbr.lat/terms-of-use>
- <https://2betbr.lat/responsible-gaming>
- <https://2betbr.lat/sports/soccer>
- <https://2betbr.lat/sports/soccer/inplay>
- <https://2betbr.lat/sports/basketball>
- <https://2betbr.lat/sports/popular>
- <https://2betbr.lat/account/me>
- <https://2betbr.lat/account/deposit>
- <https://2betbr.lat/account/withdraw>
- <https://2betbr.lat/account/vip>
- <https://2betbr.lat/account/history>
- <https://2betbr.lat/account/language>
- <https://2betbr.lat/account/timezone>
- <https://2betbr.lat/egames/slots/top>
- <https://2betbr.lat/egames/bingo>
- <https://2betbr.lat/egames/bingo/top>
- <https://2betbr.lat/entertainment/gaming>
- <https://2betbr.lat/entertainment/lottery>
- <https://2betbr.lat/entertainment/live-casino>
- <https://2betbr.lat/live-plaza/streamer>
- <https://2betbr.lat/live-plaza/all-streamers>
- <https://2betbr.lat/live-plaza/funds>
- <https://2betbr.lat/tutorial/game>
- <https://2betbr.lat/tutorial/transactions>
- <https://2betbr.lat/tutorial/transactions/deposit>
- <https://2betbr.lat/tutorial/transactions/withdraw>
- <https://2betbr.lat/help/contact-us>
- <https://2betbr.lat/help/responsible-gaming>
- <https://2betbr.lat/legal/terms-of-service>
- <https://2betbr.lat/legal/betting-rules>
- <https://2betbr.lat/legal/general-terms>
- <https://2betbr.lat/legal/bonus-terms>
- <https://2betbr.lat/legal/privacy-policy>
- <https://2betbr.lat/legal/cookie-policy>

## Supplemental checks (14)

These were inspected after the main audit; 10 returned HTTP 200 and four returned HTTP 404.

- 200 — <https://2betbr.lat/sports/soccer/league>
- 200 — <https://2betbr.lat/sports/soccer/upcoming>
- 200 — <https://2betbr.lat/sports/soccer/pre-match>
- 404 — <https://2betbr.lat/sports/soccer/upcoming/3>
- 404 — <https://2betbr.lat/sports/soccer/pre-match/2026-11-21>
- 404 — <https://2betbr.lat/sports/popular/upcoming/3>
- 404 — <https://2betbr.lat/sports/popular/pre-match/2026-11-21>
- 200 — <https://2betbr.lat/sports/live/soccer>
- 200 — <https://2betbr.lat/sports/live/basketball>
- 200 — <https://2betbr.lat/egames/history>
- 200 — <https://2betbr.lat/egames/customer-service/1>
- 200 — <https://2betbr.lat/egames/customer-service/2>
- 200 — <https://2betbr.lat/bonuses/deposits>
- 200 — <https://2betbr.lat/game-rules>
