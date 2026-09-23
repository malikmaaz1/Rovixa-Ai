import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/blog/BlogContent";
import { Button } from "@/components/ui/Button";
import { getBlogBySlug, listBlogPosts } from "@/lib/blog-store";
import { site } from "@/lib/site";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export async function generateStaticParams() {
  try {
    const posts = await listBlogPosts({ status: "published" });
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post || post.status !== "published") {
    return { title: "Article not found" };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    keywords: [
      post.category,
      "AI receptionist",
      "AI chatbot",
      "AI automation",
      "RovixaAI",
      "lead qualification",
      "appointment booking",
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt,
      siteName: site.name,
      images: post.coverImage
        ? [{ url: post.coverImage, alt: post.title }]
        : [{ url: "/brand/logo.png", alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.coverImage ? [post.coverImage] : ["/brand/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post || post.status !== "published") notFound();

  const minutes = readingTime(post.content);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/logo.png`,
      },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <article className="pt-28 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <span className="mx-2 text-slate-600">·</span>
          {minutes} min read
        </p>
        {post.coverImage ? (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        ) : null}
        <p className="mt-8 text-lg leading-relaxed text-slate-200">
          {post.excerpt}
        </p>
        <BlogContent content={post.content} />
        <div className="mt-12 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">
            Ready to put this into practice?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Book a RovixaAI demo and we will map the right receptionist,
            chatbot, and automation mix for your lead flow.
          </p>
          <Button href={site.calendly} className="mt-5" size="lg">
            Book a Demo
          </Button>
        </div>
      </div>
    </article>
  );
}
