# Konomic Site

Multilingual premium legal-services site for Tenerife, built as a Next.js MVP for Konomic.

## Current state

- Next.js + TypeScript + Tailwind
- English, German, Russian, and Ukrainian route structure
- Localized service pages for:
  - property
  - immigration / residency
  - business
  - contract review
- SEO base in place:
  - metadata
  - robots.txt
  - sitemap.xml
  - multilingual alternates
- Contact / lead-flow scaffolding in place
- Build passes successfully

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Verify production build

```bash
npm run build
npm run start
```

## Deployment docs

See `DEPLOY.md`.

## What still needs real business input

1. Final public Konomic contact details
2. Final lead destination
3. Legal/company footer details
4. Whether address / phone / WhatsApp can be public
5. Final domain/DNS hookup

## Current deployment recommendation

Deploy on Vercel first, then connect `konomic.es`.
