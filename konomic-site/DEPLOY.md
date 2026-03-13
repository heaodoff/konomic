# Konomic — Deploy Checklist

## Current deployment state

The website is buildable, pushed, and structured as a product-ready multilingual legal lead-generation site for `konomic.es`.

## Current stack

- Next.js
- TypeScript
- Tailwind CSS
- Static generation for the current route set
- Vercel deployment target

## Current product structure

The site now includes across core locales:

- home
- about
- services hub
- core service detail pages
- FAQ
- contact
- book consultation
- how we work
- legal notice
- privacy policy
- terms

Locales currently covered:

- `/en`
- `/es`
- `/ru`
- `/de`
- `/uk`

## Local verification

```bash
npm install
npm run build
npm run start
```

## GitHub + Vercel deployment flow

### Recommended flow
1. Push changes from `konomic-site`
2. GitHub receives the new commits
3. Vercel pulls and deploys automatically
4. Verify the production routes on `https://konomic.es`

## Important Vercel setting

Root Directory must remain:

```bash
konomic-site
```

If the repo root is deployed instead, Vercel can serve the wrong directory and return `404 NOT_FOUND`.

## Production verification checklist

After each important push, verify:

### Core locale routes
- `/en`
- `/es`
- `/ru`
- `/de`
- `/uk`

### Core trust / contact routes
- `/en/contact`
- `/es/contact`
- `/ru/contact`
- `/de/contact`
- `/uk/contact`
- `/en/how-we-work`
- `/es/how-we-work`
- `/ru/how-we-work`
- `/de/how-we-work`
- `/uk/how-we-work`

### Core detail pages
- `/en/services/property-real-estate-lawyer-tenerife`
- `/es/services/abogado-inmobiliario-tenerife`
- `/ru/services/yurist-po-nedvizhimosti-tenerife`
- `/de/services/immobilienanwalt-teneriffa`
- `/uk/services/advokat-z-nerukhomosti-tenerife`

### Legal layer
- `/en/legal-notice`
- `/es/legal-notice`
- `/ru/legal-notice`
- `/de/legal-notice`
- `/uk/legal-notice`

## Public contact layer currently used

- WhatsApp / phone: `+34 643 319 719`
- Email: `nikita.lukashok@gmail.com`
- Telegram: `@nkitl0`
- Company: `Konomic Digital SL.`

## Current lead routing logic

1. Primary: WhatsApp
2. Secondary: Telegram
3. Tertiary: Email

## Product-ready baseline already in place

The following are already implemented:

- multilingual structure
- service hubs
- service detail pages
- trust / process pages
- legal symmetry across locales
- mobile CTA layer
- SEO metadata and sitemap
- analytics-ready CTA hooks via `data-cta-*`

## Next optional layers

Not required for launch, but useful later:

- analytics provider integration
- richer structured data / schema
- guide / insights SEO layer
- social preview image system
- deeper behavioural conversion optimisation
