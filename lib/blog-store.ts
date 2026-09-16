import { promises as fs } from "fs";
import path from "path";
import type { BlogInput, BlogPost } from "@/lib/blog-types";
import { makeSlug } from "@/lib/slug";

export type { BlogInput, BlogPost } from "@/lib/blog-types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "blogs.json");

const seedPosts: BlogPost[] = [
  {
    id: "b-1",
    title: "How AI Receptionists Help Growing Teams Never Miss Another Call",
    slug: "never-miss-another-call",
    excerpt:
      "A practical look at after-hours coverage, lead qualification, and appointment booking with voice AI.",
    content:
      "After-hours calls are often the highest-intent conversations a business receives. An AI receptionist answers instantly, captures lead details, qualifies the request, and books the next step so nothing sits in voicemail overnight.",
    category: "AI Receptionists",
    coverImage: "",
    metaTitle: "AI Receptionists That Never Miss a Call | RovixaAI",
    metaDescription:
      "Learn how AI receptionists capture after-hours leads, qualify callers, and book appointments automatically.",
    status: "published",
    publishedAt: "2026-08-12",
    updatedAt: "2026-08-12T10:00:00.000Z",
    createdAt: "2026-08-12T10:00:00.000Z",
  },
  {
    id: "b-2",
    title: "Website Chatbots That Convert: What High-Performing Businesses Get Right",
    slug: "website-chatbots-that-convert",
    excerpt:
      "Design conversation flows that answer FAQs, capture intent, and hand off qualified leads cleanly.",
    content:
      "High-converting chatbots are trained on real FAQs, pricing rules, and booking logic. They answer instantly, qualify visitors, and only escalate conversations that need a human.",
    category: "AI Chatbots",
    coverImage: "",
    metaTitle: "Website Chatbots That Convert | RovixaAI",
    metaDescription:
      "See how AI chatbots answer FAQs, qualify website visitors, and convert traffic into booked conversations.",
    status: "published",
    publishedAt: "2026-07-28",
    updatedAt: "2026-07-28T10:00:00.000Z",
    createdAt: "2026-07-28T10:00:00.000Z",
  },
];

async function ensureStore() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(seedPosts, null, 2), "utf8");
  }
}

async function readPosts(): Promise<BlogPost[]> {
  await ensureStore();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw) as BlogPost[];
}

async function writePosts(posts: BlogPost[]) {
  await ensureStore();
  await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), "utf8");
}

export async function listBlogPosts(options?: {
  status?: "draft" | "published" | "all";
}) {
  const posts = await readPosts();
  const status = options?.status ?? "all";
  const filtered =
    status === "all" ? posts : posts.filter((post) => post.status === status);

  return filtered.sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}

export async function getBlogBySlug(slug: string) {
  const posts = await readPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getBlogById(id: string) {
  const posts = await readPosts();
  return posts.find((post) => post.id === id) ?? null;
}

export async function createBlogPost(input: BlogInput) {
  const posts = await readPosts();
  const now = new Date().toISOString();
  const slug = makeSlug(input.slug || input.title);

  if (!slug) {
    throw new Error("A valid URL slug is required.");
  }

  if (posts.some((post) => post.slug === slug)) {
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

  posts.unshift(post);
  await writePosts(posts);
  return post;
}

export async function updateBlogPost(id: string, input: BlogInput) {
  const posts = await readPosts();
  const index = posts.findIndex((post) => post.id === id);
  if (index < 0) return null;

  const slug = makeSlug(input.slug || input.title);
  if (!slug) {
    throw new Error("A valid URL slug is required.");
  }

  if (posts.some((post) => post.slug === slug && post.id !== id)) {
    throw new Error("That URL slug is already in use.");
  }

  const existing = posts[index];
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

  posts[index] = updated;
  await writePosts(posts);
  return updated;
}

export async function deleteBlogPost(id: string) {
  const posts = await readPosts();
  const next = posts.filter((post) => post.id !== id);
  if (next.length === posts.length) return false;
  await writePosts(next);
  return true;
}
