const { neon } = require("@neondatabase/serverless");

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL missing");
  }

  const sql = neon(url);

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
      status TEXT NOT NULL DEFAULT 'draft',
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

  const blogs = await sql`SELECT COUNT(*)::int AS count FROM blogs`;
  const submissions = await sql`SELECT COUNT(*)::int AS count FROM submissions`;

  console.log(
    `OK connected. blogs=${blogs[0].count} submissions=${submissions[0].count}`,
  );
}

main().catch((error) => {
  console.error("FAIL", error.message);
  process.exit(1);
});
