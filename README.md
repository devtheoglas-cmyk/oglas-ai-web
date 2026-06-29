# Oglas AI Website

Premium B2B website for Oglas AI, a Dubai-based custom software and AI solutions company.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Sanity CMS schemas and embedded Studio at `/studio`
- Resend-ready contact form API
- Vercel-ready production build

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Check

```bash
npm run lint
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-29

RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=md@oglasglobal.com
CONTACT_FROM_EMAIL=Oglas AI <hello@yourdomain.com>
```

Without `RESEND_API_KEY`, the contact form UI loads but the API returns a provider configuration error.

## Content

Launch content is currently code-backed in `src/content/site.ts` for speed and reliability. Sanity schemas are ready for services, industries, anonymous case studies, insights, and authors, including Arabic fields for the later translation pass.
