# Konomic — Deploy Checklist

## Current deployment status

The app is buildable and deployable as a static Next.js site on Vercel.

## Before production deploy

### Required business inputs
1. Final domain confirmation
2. Public contact email
3. Preferred lead destination
   - form endpoint
   - email
   - WhatsApp
   - Telegram
4. Whether office address / phone can be shown publicly
5. Final legal/company footer details

### Recommended first deploy target
- Vercel

## Local verification

```bash
npm install
npm run build
npm run start
```

## Vercel deploy

### Option A — via GitHub (recommended)
1. Push `konomic-site` to a GitHub repo
2. Import repo into Vercel
3. Set production domain to `konomic.es`
4. Add environment variables from `.env.example` if/when used
5. Deploy

### Option B — via Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

## DNS notes
At minimum, connect the root domain and `www` in Vercel using the DNS records Vercel shows during domain setup.

## Production tasks still missing
- real lead submission wiring
- legal footer / privacy / terms / cookies
- final public contact details
- social preview image
- schema.org enrichment beyond current metadata base

## Safe launch order
1. Deploy preview
2. Review all pages on desktop/mobile
3. Add real contacts and lead destination
4. Connect domain
5. Deploy production
