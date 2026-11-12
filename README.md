# East London Bandag website

The rebuilt eastlondonbandag.com: a fast, static, mobile-first site for East
London Bandag (ELB Tyres), built with [Astro](https://astro.build).

## Run it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` writes the finished site to `dist/`. `netlify.toml` is included,
so connecting the repository to Netlify deploys it and makes the forms work.

## Where things live

| To change | Edit |
| --- | --- |
| Phone numbers, address, hours, WhatsApp number, brands, coverage towns | `src/data/site.ts` |
| The tread range (drives the product pages, tyre finder and fit check) | `src/data/treads.ts` |
| Why Retread articles | `src/data/articles.ts` |
| Application and area landing pages | `src/data/landings.ts` |
| Team, case studies, testimonials (hidden until filled in) | `src/data/people.ts` |
| Resource library entries | `src/data/resources.ts`, files in `public/downloads/` |
| Photographs | drop files into `src/photos/` (see the README there) |
| Colours, type, components | `src/styles/global.css`, rendered at `/design-system/` |

## Project documents

1. [Sitemap and navigation reasoning](docs/01-sitemap-and-navigation.md)
2. [Design system](docs/02-design-system.md)
3. [How the 20 problems are resolved](docs/03-problem-resolution.md)
4. [Phased rollout](docs/04-phased-rollout.md)
5. [What the client must supply before launch](docs/05-client-content-checklist.md)

## Before launch

Read `docs/05-client-content-checklist.md`. Several facts in the data files are
marked `TO CONFIRM` or `PROVISIONAL` and must be checked by the client.
