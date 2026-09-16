import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog-store";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post || post.status !== "published") {
    return { title: "Article not found" };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post || post.status !== "published") notFound();

  return (
    <article className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm font-semibold text-brand-300 hover:text-brand-200"
        >
          ← Back to blog
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
          {post.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          {new Date(post.publishedAt || post.createdAt).toLocaleDateString(
            "en-US",
            { month: "long", day: "numeric", year: "numeric" },
          )}
        </p>
        {post.coverImage ? (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        ) : null}
        <p className="mt-8 text-lg leading-relaxed text-slate-300">{post.excerpt}</p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-300 whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </article>
  );
}
