import { neon } from "@neondatabase/serverless";

function getDatabaseUrl() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set. Add it to .env.local.");
  }
  return url;
}

export function getSql() {
  return neon(getDatabaseUrl());
}

export async function ensureDatabaseSchema() {
  const sql = getSql();

  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT NOT NULL DEFAULT '',
      content TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL DEFAULT '',
      cover_image TEXT NOT NULL DEFAULT '',
      meta_title TEXT NOT NULL DEFAULT '',
      meta_description TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
      published_at TEXT NOT NULL DEFAULT '',
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      company TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL,
      phone TEXT NOT NULL DEFAULT '',
      message TEXT NOT NULL DEFAULT '',
      score INTEGER NOT NULL DEFAULT 70,
      status TEXT NOT NULL DEFAULT 'New',
      source TEXT NOT NULL DEFAULT 'Contact Form',
      value TEXT NOT NULL DEFAULT 'TBD',
      owner TEXT NOT NULL DEFAULT 'Unassigned',
      updated TEXT NOT NULL DEFAULT 'Just now',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}
