# 2. Design system

The living reference is the `/design-system/` page of the site (not indexed),
which renders every token and component in the current theme. The source is one
file: `src/styles/global.css`.

## Principles

- Industrial, confident, heavy: steel, rubber, workshop light.
- One sans family (Barlow), two weights (500 and 700).
- Bandag blue and yellow against dark neutrals. No purple, teal or beige.
- No gradients on chrome, no drop shadows, no glow, no bevels.
- Text never sits directly on a photograph: copy and image are separate panels.
- Full-width, fluid layout. Content is capped at 1200 px, backgrounds bleed.

## Colour tokens

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--ink` | #0F1319 | same | Dark panels, footer, emergency button |
| `--blue` | #0B3D91 | same | Bandag blue |
| `--yellow` | #FFC20E | same | Bandag yellow: emergency bar, primary on dark |
| `--bg` | #F3F4F6 | #0B0E12 | Page |
| `--surface` | #FFFFFF | #181D25 | Cards, header |
| `--surface-2` | #E7EAEF | #222A35 | Tags, bands |
| `--text` | #0F1319 | #F3F4F6 | Text |
| `--text-2` | #4A5563 | #AEB7C4 | Secondary text |
| `--line` | #CBD1DA | #323C49 | Borders |
| `--link` | #0B3D91 | #8DB4F5 | Links, outlines |
| `--primary-bg` / `--primary-fg` | #0B3D91 / #FFFFFF | #FFC20E / #0F1319 | Primary button |
| `--field-bg` / `--field-text` / `--field-border` | #FFFFFF / #0F1319 / #5B6573 | #0B0E12 / #F3F4F6 / #8C96A5 | Form fields |
| `--success` | #1B6B3E | #5FD08B | Positive status |
| `--danger` | #B3261E | #FF8A80 | Errors, rejection |

Dark mode follows the device and can be overridden with the footer toggle; the
choice is remembered. All text pairs meet WCAG 2.2 AA (4.5:1); body text is 16.9:1 or better and
the lowest pair (status labels on their tint) is 5.6:1. The computed ratios
are tabled on the `/design-system/` page.

## Type scale

| Style | Size | Weight / line height |
| --- | --- | --- |
| Display, H1 | clamp(34px, 6vw, 64px) | 700 / 1.02 |
| H2 | clamp(26px, 4vw, 38px) | 700 / 1.1 |
| H3 | 22px | 700 / 1.2 |
| Lede | clamp(17px, 2vw, 20px) | 500 / 1.55 |
| Body | 17px | 500 / 1.6 |
| Small | 15px | 500 / 1.5 |
| Eyebrow | 13px caps, 0.14em tracking | 700 |

## Spacing, shape, targets

4 px base: 4, 8, 12, 16, 24, 32, 48, 64. Radius 6 px. Tap targets at least
48 px (buttons 52 px, large 64 px), sized for gloved thumbs.

## Components

| Component | Class | Notes |
| --- | --- | --- |
| Button | `.btn`, `--secondary`, `--yellow`, `--ink`, `--on-dark`, `--on-yellow`, `--lg`, `--block` | Hover darkens, active shifts 1 px, disabled greys out |
| Focus | global `:focus-visible` | 3 px yellow outline plus ink ring, visible on any background |
| Chip | `.chip` with `aria-pressed` | Filters and single-choice answers |
| Form field | `.field`, `.label`, `.input`, `.hint`, `.error`, `.option`, `.check` | Label always visible above the field; fields are light-on-light or light-text-on-dark, never dark on dark |
| Consent | `Consent.astro` | Required POPIA checkbox stating the purpose, on every form |
| Universal card | `.card` / `Card.astro` | Photo (optional), tag (optional), title, text, CTA. Used for products, services, articles, tools |
| Certification badge | `.cert` / `Certs.astro` | Round mark, title, what it is, what it means for you |
| Proof strip | `.proof` / `Proof.astro` | The four headline claims |
| Emergency bar | `.ebar` in `Base.astro` | Sticky, every page, every breakpoint |
| Status | `.status`, `--good`, `--bad` | Tool results; always carries a text label, never colour alone |
| Photo slot | `Photo.astro` | Responsive, lazy-loaded, fixed aspect ratio so nothing shifts; shows a shot brief until the photo is supplied |
| Resource row | `.resource` | Title, description, category, type, size |
