# 3. How each of the 20 problems is resolved

| # | Problem | Resolution | Where to see it |
| --- | --- | --- | --- |
| 1 | Decade-old look: purple gradients, bevels, glow | New system: flat panels, Bandag blue and yellow on ink and steel neutrals, no gradients on chrome, no shadows, no glow | `/design-system/` |
| 2 | Tiled road wallpaper beside a narrow column | Full-width fluid layout; backgrounds run edge to edge, content capped at 1200 px | Every page |
| 3 | Three stacked headers fill the first screen | One emergency bar and one header. The headline and first action are on the first screen of a 390 px phone | Home |
| 4 | Eight nav items plus an unpredictable "More" | Five items named for what the visitor wants. No dropdowns | Header, `docs/01` |
| 5 | Camera filenames as captions | Every photo slot has written alt text and a human caption. A filename cannot appear: captions are authored in the page, not read from the file | `Photo.astro` |
| 6 | Products & Services is a bare text list | Nine tread product pages with application, axle, duty, strengths and a fit check; separate sections for new tyres, repairs and consumables | `/retreads/`, `/new-tyres-repairs/` |
| 7 | Visibly abandoned: 2015 news, Google+, old promo | No news, no dates, no social icons, no promotions. Articles are evergreen. The year does not appear anywhere on the site | Whole site |
| 8 | Inconsistent typography | One family, two weights, one scale, set once in the stylesheet | `/design-system/` |
| 9 | Contrast failures; dark text in navy fields | No text on photographs. All pairs AA or better. Fields have light backgrounds in light mode and light text in dark mode, with a 2 px border | Contact form, both themes |
| 10 | Differentiators buried in About prose | One week, weekly collection, SANS 20109 and the warranty are a four-part proof strip directly under the hero on Home, Retreads, Fleet, About and every landing page | `Proof.astro` |
| 11 | Emergency number almost invisible | Sticky yellow bar on every page and breakpoint with tap-to-call; first card on Home; the first thing on Contact; repeated as a band on service pages | `.ebar` |
| 12 | No pricing, size lookup, stock indication or cost comparison | Tyre finder (by size or by vehicle, axle, duty), stocked-size indication, and a CPK calculator with shareable results. Live prices and live stock arrive in phase 2 once the client supplies the data | `/tools/` |
| 13 | "BRING IT ON !" headline; contacts as plain text | Headline states the proposition. Every phone number, email and WhatsApp contact is a button or link with a real `tel:`, `mailto:` or WhatsApp action | Home, header, footer |
| 14 | Supplier logos float without context | A brand table states what each brand is used for. Logos can be added to it when licensed files are supplied | Home, New Tyres |
| 15 | Google map twice on the home page | No embedded map on Home. One "Get directions" action on Contact, which opens the visitor's own maps app and costs no page weight | `/contact/` |
| 16 | Orphaned Wix search box | Removed. With five sections and three tools, navigation and the tyre finder do the job | n/a |
| 17 | "Click here" links; spelling errors | Every link says where it goes. All copy rewritten and proofread in South African English | Whole site |
| 18 | Mobile broken by fixed width | Designed at 390 px first; tested with no horizontal scroll at 390 and 1366 px; 48 px tap targets | Whole site |
| 19 | No structured data, thin SEO | Unique title and description per page; LocalBusiness/TireShop on every page; Product on tread pages; Article, FAQPage and BreadcrumbList where relevant; XML sitemap; canonical URLs; four application pages and two area pages | Page source, `/sitemap-index.xml` |
| 20 | Pages that only link out to Bandag corporate | Every page carries the dealer's own content. Supplier documents are hosted in the resource library with title, type and size, not linked away | `/resources/` |

## Non-negotiables, checked

- **Mobile first:** yes; see #18.
- **WCAG 2.2 AA:** semantic headings, one H1 per page, skip link, labelled fields, visible focus, keyboard-operable tools, `aria-live` results, alt text, reduced-motion respected, 48 px targets.
- **Fast:** static HTML, no framework shipped to the browser, two self-hosted font files, responsive lazy-loaded images with reserved space, video loads only on tap.
- **POPIA:** required consent with stated purpose on the quote, collection and mailing list forms; privacy notice; no tracking cookies.
- **Nothing dated:** see #7.
- **Every clickable-looking thing is clickable:** cards are whole-card links; unavailable downloads become "Request by email" rather than dead links.
