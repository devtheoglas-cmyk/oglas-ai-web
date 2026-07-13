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

Insights are managed in Sanity Studio at `/studio`. If Sanity is not configured yet, the site keeps using the launch fallback posts from `src/content/site.ts`.

### Adding an Insight

1. Open `/studio` and sign in with a Sanity account that has access to the Oglas AI project.
2. Go to **Insight** and create a new document.
3. Add the title, generate the slug, choose the category, set the publish date, and add a short excerpt.
4. Add a cover image with alt text. This image appears on the insight card, article page, and social preview.
5. Write the article in **Body**. Use headings, lists, links, quotes, and image blocks with alt text/captions.
6. Fill in the SEO tab when needed: meta title, meta description, keywords, and canonical URL.
7. Keep **Visibility** set to **Published on website**, then publish the document.

Published insights refresh on the homepage, `/insights`, article pages, and sitemap within about 60 seconds.
