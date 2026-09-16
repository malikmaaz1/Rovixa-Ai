import type { BlogInput, BlogPost } from "@/lib/blog-types";
import { ensureDatabaseSchema, getSql } from "@/lib/db";
import { makeSlug } from "@/lib/slug";

export type { BlogInput, BlogPost } from "@/lib/blog-types";

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  cover_image: string;
  meta_title: string;
  meta_description: string;
  status: "draft" | "published";
  published_at: string;
  updated_at: string;
  created_at: string;
};

function mapRow(row: BlogRow): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    coverImage: row.cover_image,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    status: row.status,
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at,
    createdAt: row.created_at,
  };
}

async function ready() {
  await ensureDatabaseSchema();
  return getSql();
}

export async function listBlogPosts(options?: {
  status?: "draft" | "published" | "all";
}) {
  const sql = await ready();
  const status = options?.status ?? "all";

  const rows =
    status === "all"
      ? ((await sql`SELECT * FROM blogs ORDER BY updated_at DESC`) as BlogRow[])
      : ((await sql`
          SELECT * FROM blogs
          WHERE status = ${status}
          ORDER BY updated_at DESC
        `) as BlogRow[]);

  return rows.map(mapRow);
}

export async function getBlogBySlug(slug: string) {
  const sql = await ready();
  const rows = (await sql`
    SELECT * FROM blogs WHERE slug = ${slug} LIMIT 1
  `) as BlogRow[];
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function getBlogById(id: string) {
  const sql = await ready();
  const rows = (await sql`
    SELECT * FROM blogs WHERE id = ${id} LIMIT 1
  `) as BlogRow[];
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function createBlogPost(input: BlogInput) {
  const sql = await ready();
  const now = new Date().toISOString();
  const slug = makeSlug(input.slug || input.title);

  if (!slug) {
    throw new Error("A valid URL slug is required.");
  }

  const existing = await getBlogBySlug(slug);
  if (existing) {
    throw new Error("That URL slug is already in use.");
  }

  const post: BlogPost = {
    id: `b-${Date.now()}`,
    title: input.title.trim(),
    slug,
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    category: input.category.trim(),
    coverImage: input.coverImage.trim(),
    metaTitle: (input.metaTitle || input.title).trim(),
    metaDescription: (input.metaDescription || input.excerpt).trim(),
    status: input.status,
    publishedAt: input.status === "published" ? now.slice(0, 10) : "",
    updatedAt: now,
    createdAt: now,
  };

  await sql`
    INSERT INTO blogs (
      id, title, slug, excerpt, content, category, cover_image,
      meta_title, meta_description, status, published_at, updated_at, created_at
    ) VALUES (
      ${post.id},
      ${post.title},
      ${post.slug},
      ${post.excerpt},
      ${post.content},
      ${post.category},
      ${post.coverImage},
      ${post.metaTitle},
      ${post.metaDescription},
      ${post.status},
      ${post.publishedAt},
      ${post.updatedAt},
      ${post.createdAt}
    )
  `;

  return post;
}

export async function updateBlogPost(id: string, input: BlogInput) {
  const existing = await getBlogById(id);
  if (!existing) return null;

  const sql = await ready();
  const slug = makeSlug(input.slug || input.title);
  if (!slug) {
    throw new Error("A valid URL slug is required.");
  }

  const conflict = await getBlogBySlug(slug);
  if (conflict && conflict.id !== id) {
    throw new Error("That URL slug is already in use.");
  }

  const now = new Date().toISOString();
  const updated: BlogPost = {
    ...existing,
    title: input.title.trim(),
    slug,
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    category: input.category.trim(),
    coverImage: input.coverImage.trim(),
    metaTitle: (input.metaTitle || input.title).trim(),
    metaDescription: (input.metaDescription || input.excerpt).trim(),
    status: input.status,
    publishedAt:
      input.status === "published"
        ? existing.publishedAt || now.slice(0, 10)
        : existing.publishedAt,
    updatedAt: now,
  };

  await sql`
    UPDATE blogs SET
      title = ${updated.title},
      slug = ${updated.slug},
      excerpt = ${updated.excerpt},
      content = ${updated.content},
      category = ${updated.category},
      cover_image = ${updated.coverImage},
      meta_title = ${updated.metaTitle},
      meta_description = ${updated.metaDescription},
      status = ${updated.status},
      published_at = ${updated.publishedAt},
      updated_at = ${updated.updatedAt}
    WHERE id = ${id}
  `;

  return updated;
}

export async function deleteBlogPost(id: string) {
  const sql = await ready();
  const existing = await getBlogById(id);
  if (!existing) return false;
  await sql`DELETE FROM blogs WHERE id = ${id}`;
  return true;
}
