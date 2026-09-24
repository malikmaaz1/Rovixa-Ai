"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DashboardTopbar } from "@/components/dashboard/Topbar";
import { PageHeader, Panel, StatusPill } from "@/components/dashboard/ui";
import type { BlogPost } from "@/lib/blog-types";

export function BlogsWorkspace() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadPosts() {
    setLoading(true);
    const response = await fetch("/api/blogs", { cache: "no-store" });
    const payload = (await response.json()) as { posts: BlogPost[] };
    setPosts(payload.posts);
    setLoading(false);
  }

  useEffect(() => {
    void loadPosts();
  }, []);

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this blog post?")) return;
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    await loadPosts();
  }

  return (
    <>
      <DashboardTopbar title="Blogs" />
      <div className="flex-1 px-4 py-6 sm:px-6">
        <PageHeader
          title="Blog posts"
          description="Create and edit SEO-ready articles with cover images, meta fields, and custom URLs."
          actions={
            <Link
              href="/dashboard/blogs/new"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
            >
              New post
            </Link>
          }
        />

        <Panel title={loading ? "Loading..." : `${posts.length} posts`}>
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-navy-950/40 p-4 lg:flex-row lg:items-center"
              >
                <div className="relative h-24 w-full overflow-hidden rounded-xl bg-white/5 lg:h-20 lg:w-32">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-slate-500">
                      No image
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-base font-semibold text-white">
                      {post.title}
                    </h3>
                    <StatusPill
                      status={post.status === "published" ? "Published" : "Draft"}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    /blog/{post.slug} · {post.category} · updated{" "}
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300"
                    target="_blank"
                  >
                    View
                  </Link>
                  <Link
                    href={`/dashboard/blogs/${post.id}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => void handleDelete(post.id)}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-neutral-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {!loading && posts.length === 0 ? (
              <p className="text-sm text-slate-400">No blog posts yet.</p>
            ) : null}
          </div>
        </Panel>
      </div>
    </>
  );
}
