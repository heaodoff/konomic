# Konomic Site

Multilingual legal-services website for Tenerife, built with Next.js for `konomic.es`.

## Current state

The site is now a product-ready multilingual lead-generation website with:

- Next.js + TypeScript + Tailwind
- Full locale structure for:
  - English (`/en`)
  - Spanish (`/es`)
  - Russian (`/ru`)
  - German (`/de`)
  - Ukrainian (`/uk`)
- Core service hubs in every locale
- Core service detail pages in every locale for:
  - property / real estate
  - immigration / residency / relocation
  - business / corporate
  - contract review
- Trust / process pages (`how-we-work`) in every locale
- Legal pages in every locale:
  - legal notice
  - privacy policy
  - terms
- WhatsApp-first lead flow
- Telegram secondary contact flow
- Email tertiary contact flow
- Mobile navigation and sticky contact CTA layer
- SEO base in place:
  - metadata
  - robots.txt
  - sitemap.xml
  - multilingual alternates
- Analytics-ready CTA hooks via `data-cta-*` attributes on key call-to-action links
- Successful production build

## Run locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Verify production build

```bash
npm run build
npm run start
```

## Deployment

See `DEPLOY.md`.

## Current live setup assumptions

- Primary domain: `https://konomic.es`
- GitHub deploy flow is already in use
- Vercel is the active deployment target
- Root directory on Vercel should remain: `konomic-site`

## Public contact layer currently used on the site

- WhatsApp: `https://wa.me/34643319719`
- Telegram: `https://t.me/nkitl0`
- Email: `mailto:nikita.lukashok@gmail.com`
- Company: `Konomic Digital SL.`

## Next growth layers

These are no longer required to make the site viable, but are the best next improvements:

1. Analytics / conversion tracking implementation
2. SEO guide / insights layer
3. Behavioural conversion optimisation based on real traffic
4. Optional deeper authority / trust content
5. Social preview image refinement and richer structured data
