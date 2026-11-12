# 4. Phased rollout

Assumes a limited budget and no in-house web team. Each phase is useful on its
own, and nothing in a later phase is needed for an earlier one to work.

## Phase 1: launch (this repository)

Everything a static site can do with no back-office system behind it.

- All five sections, nine tread pages, four articles, application and area pages
- Emergency bar, click-to-call, WhatsApp, open or closed status
- Tyre finder, CPK calculator, casing check
- Quote, collection and mailing-list forms (delivered by email through Netlify Forms)
- Resource library, privacy notice, structured data, sitemap, redirects
- Light and dark mode

**Running cost:** hosting on Netlify's free or starter tier, plus the domain.
**Maintenance:** none required. Content changes are edits to the files in `src/data/`.

**Needed from the client before launch:** see `docs/05`. In short: photographs,
confirmation of the provisional facts, the documents for the library, and the
Information Officer's name.

**Launch steps**
1. Connect the repository to Netlify; confirm the three forms appear under Forms and set the notification email to sales@eastlondonbandag.com.
2. Check the redirects against the old site's real URLs.
3. Point the domain. Submit the sitemap in Google Search Console.
4. Claim or update the Google Business Profile with the same name, address, phone and hours as the site.

## Phase 2: real data (when the client can supply it)

- **Case studies and testimonials** in CPK terms, from named fleets. The About page section appears as soon as `src/data/people.ts` has entries.
- **Team section**, same mechanism.
- **Stock indication from real data:** a weekly export (spreadsheet) of stocked sizes replaces the provisional list, so the tyre finder can say "in stock" with confidence.
- **Indicative pricing** in the calculator defaults, if the client is willing to publish it.
- **Retread process video**, embedded on the Retreads page by adding one ID.
- **Analytics** that needs no cookie banner (for example Plausible), to see which tools are used.
- **More articles**, only if someone owns writing them. No blog is better than a stale one.

## Phase 3: fleet account (only if customers ask for it)

The `/account/` page is a working preview with sample data. Making it real needs:

- Customer sign-in
- A source of casing data. This is the real cost: the plant must record each casing's stage somewhere the site can read. If the plant already uses Bandag's or another job-tracking system, integrate with that; if it uses paper, start with a shared spreadsheet per customer before building anything
- WhatsApp or SMS "batch ready" notifications through a messaging provider
- Invoices and statements, from the accounting system

**Recommendation:** do not build this until phases 1 and 2 are live and at least
a few fleets have asked for it. In the meantime the same promise is kept
manually: the collection form asks how the customer wants to be told, and the
office sends the WhatsApp.

## Who maintains it

One named person at East London Bandag owns the site: they receive the form
emails, confirm hours and numbers twice a year, and send content changes to
whoever built it. A small monthly retainer with the builder (an hour or two)
covers updates. Nothing on the site decays if nobody touches it.
