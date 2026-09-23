# RovixaAI Website

Premium Next.js marketing site for RovixaAI — an AI Automation & AI Receptionist company.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React
- Neon Postgres (`@neondatabase/serverless`)

## Pages

- `/` Home
- `/services` Services
- `/industries` Industries
- `/pricing` Pricing (placeholder)
- `/about` About Us
- `/blog` Blog
- `/dashboard` Admin (blogs + form submissions)

## Getting Started

```bash
npm install
cp .env.example .env.local
# set DATABASE_URL from Neon / Vercel
npm run db:setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If the project is linked to Vercel:

```bash
vercel env pull .env.local
```

## Environment

Required:

- `DATABASE_URL` — pooled Neon connection string (recommended for the app)

Optional:

- `DATABASE_URL_UNPOOLED` — direct Neon URL

On Vercel, these are provided by the Neon integration. Confirm them under Project → Settings → Environment Variables.

## Database

Tables used by the admin dashboard:

- `blogs`
- `submissions`

Create/update them locally with:

```bash
npm run db:setup
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint
- `npm run db:setup` — create Neon tables
