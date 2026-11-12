# 1. Sitemap and navigation

## Sitemap

```
/                                   Home
/retreads/                          Retreads hub: range, process, casing management, certification
  /retreads/{tread}/                Nine product pages: B102, BDR-AS, BDR-HT2, BDV, BMS, BTR-SA, ECR-T, UAP, UDR
/new-tyres-repairs/                 New tyres by brand and size, vulcanised repairs, Rema Tip Top consumables
/fleet-solutions/                   Bandag PSI, tyre management, collection, support, training, breakdown
/why-retread/                       Decision hub: FAQs, articles, tools
  /why-retread/is-a-retread-safe/
  /why-retread/new-vs-retread-cost-per-kilometre/
  /why-retread/premium-vs-budget-tyres/
  /why-retread/environmental-case/
/about/                             Facility, certification and audits, warranty, coverage map, team, case studies
/contact/                           Emergency path first, then quote form, hours, directions

Tools (reached from the pages that need them, and from the footer)
/tools/tyre-finder/
/tools/cpk-calculator/
/tools/casing-check/
/collection/                        Four-step collection request

Supporting
/resources/                         Resource library
/account/                           Fleet account (phase 3 preview, not indexed)
/applications/{long-haul|mining|bus|construction}/
/areas/{east-london|northern-eastern-cape}/
/privacy/   /thanks/   /404   /design-system/ (not indexed)
```

36 pages. `sitemap-index.xml` and `robots.txt` are generated at build.

## Why five items

The old site had eight items plus a "More" dropdown. Nobody can predict what is
behind "More", and "BRU Info" means nothing to a transport manager.

The five items are the five questions a visitor arrives with:

| Item | The visitor's question | Intent served |
| --- | --- | --- |
| Retreads | What do you make, and which one is for my truck? | Evaluating |
| New Tyres & Repairs | Can you supply or fix this tyre? | Evaluating, truck down |
| Fleet Solutions | What do I get as an account customer? | Evaluating, existing account |
| Why Retread | Should I switch at all? | Evaluating |
| About | Can I trust you, and where are you? | Evaluating |

Three things are deliberately **not** navigation items:

- **Emergency** is not a page you navigate to. It is a sticky bar on every page.
- **Request a quote** is a button, in the header on every page.
- **Fleet account** is a utility link next to the quote button, for people who already know they want it.

Gallery, Downloads and Videos are gone as destinations. Photographs sit on the
pages they illustrate, downloads are in the resource library (linked from About,
the footer and every page that mentions a document), and video embeds on the
page it explains (the retread process).

Contact lives under About in the navigation highlight, but is reachable from
every page through the quote button, the sub-bar and the footer.

## The three intents, mapped

| Intent | Entry points | Path |
| --- | --- | --- |
| My truck is down right now | Emergency bar (every page), first card on Home, top of Contact | One tap to call 066 190 6725, or WhatsApp location, or ETA 0800 30 40 50 |
| Should I switch to retreads? | Home, Why Retread | FAQs, then CPK calculator, then tread range or tyre finder, then quote |
| I have an account | Header link, third card on Home | Fleet account: casing status, schedule, reorder, documents; or Collection request |

## URLs

Clean, lower-case, hyphenated, with trailing slashes. Likely old Wix addresses
are redirected in `netlify.toml`; check them against the live site's real URLs
before launch and add any that are missing.
