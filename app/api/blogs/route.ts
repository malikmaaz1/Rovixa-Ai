import { NextResponse } from "next/server";
import {
  createBlogPost,
  listBlogPosts,
  type BlogInput,
} from "@/lib/blog-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as
    | "draft"
    | "published"
    | "all"
    | null;

  const posts = await listBlogPosts({
    status: status ?? "all",
  });

  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BlogInput>;

    if (!body.title || !body.excerpt || !body.content || !body.category) {
      return NextResponse.json(
        { error: "Title, excerpt, content, and category are required." },
        { status: 400 },
      );
    }

    const post = await createBlogPost({
      title: body.title,
      slug: body.slug || body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      coverImage: body.coverImage || "",
      metaTitle: body.metaTitle || body.title,
      metaDescription: body.metaDescription || body.excerpt,
      status: body.status === "published" ? "published" : "draft",
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create post." },
      { status: 400 },
    );
  }
}
