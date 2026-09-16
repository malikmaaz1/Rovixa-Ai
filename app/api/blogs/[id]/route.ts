import { NextResponse } from "next/server";
import {
  deleteBlogPost,
  getBlogById,
  updateBlogPost,
  type BlogInput,
} from "@/lib/blog-store";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const post = await getBlogById(id);
  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = (await request.json()) as Partial<BlogInput>;

    if (!body.title || !body.excerpt || !body.content || !body.category) {
      return NextResponse.json(
        { error: "Title, excerpt, content, and category are required." },
        { status: 400 },
      );
    }

    const post = await updateBlogPost(id, {
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

    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to update post." },
      { status: 400 },
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  const deleted = await deleteBlogPost(id);
  if (!deleted) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
