import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { blogCategories } from "@/lib/dashboard";
import { listBlogPosts } from "@/lib/blog-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI receptionists, AI chatbots, AI automation, and business growth from RovixaAI.",
};

export default async function BlogPage() {
  const posts = await listBlogPosts({ status: "published" });

  return (
    <div className="pt-28 sm:pt-32">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem>
          <SectionHeading
            eyebrow="Blog"
            title="Ideas for AI-powered business growth"
            description="Practical guides across AI receptionists, chatbots, automation, and conversion strategy."
          />
        </MotionItem>

        <MotionItem className="mt-8 flex flex-wrap justify-center gap-3">
          {blogCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              {category}
            </span>
          ))}
        </MotionItem>
      </MotionSection>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] transition hover:border-brand-400/40 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-[16/10] bg-white/5">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
                  <span className="rounded-full bg-brand-500/15 px-3 py-1 font-semibold text-brand-200">
                    {post.category}
                  </span>
                  <time dateTime={post.publishedAt || post.createdAt}>
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric", year: "numeric" },
                    )}
                  </time>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-200">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 text-sm font-semibold text-brand-300 hover:text-brand-200"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
        {posts.length === 0 ? (
          <p className="text-center text-sm text-slate-400">
            No published articles yet.
          </p>
        ) : null}
      </section>

      <div className="pb-20">
        <CtaBanner
          title="Want a custom AI roadmap?"
          description="Bring us your current lead flow and we’ll recommend the right receptionist, chatbot, and automation mix."
        />
      </div>
    </div>
  );
}
