import Link from "next/link";
import { DashboardTopbar } from "@/components/dashboard/Topbar";
import { PageHeader, Panel, StatCard } from "@/components/dashboard/ui";
import { listBlogPosts } from "@/lib/blog-store";
import { listLeads } from "@/lib/leads-store";

export const dynamic = "force-dynamic";

export default async function DashboardOverviewPage() {
  const [posts, submissions] = await Promise.all([
    listBlogPosts(),
    Promise.resolve(listLeads()),
  ]);

  const published = posts.filter((post) => post.status === "published").length;
  const drafts = posts.filter((post) => post.status === "draft").length;
  const newSubmissions = submissions.filter((item) => item.status === "New").length;

  return (
    <>
      <DashboardTopbar title="Overview" />
      <div className="flex-1 px-4 py-6 sm:px-6">
        <PageHeader
          title="Admin overview"
          description="Simple metrics for blog content and website form submissions."
          actions={
            <div className="flex gap-2">
              <Link
                href="/dashboard/blogs/new"
                className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400"
              >
                New blog
              </Link>
              <Link
                href="/dashboard/submissions"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                View submissions
              </Link>
            </div>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Published blogs" value={String(published)} detail="Live on /blog" />
          <StatCard label="Draft blogs" value={String(drafts)} detail="Not public yet" />
          <StatCard
            label="Form submissions"
            value={String(submissions.length)}
            detail="All contact inquiries"
          />
          <StatCard
            label="New submissions"
            value={String(newSubmissions)}
            detail="Awaiting follow-up"
            positive
            change={newSubmissions > 0 ? "Active" : undefined}
          />
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <Panel
            title="Recent blogs"
            action={
              <Link href="/dashboard/blogs" className="text-xs font-semibold text-brand-300">
                Manage
              </Link>
            }
          >
            <div className="space-y-3">
              {posts.slice(0, 5).map((post) => (
                <div
                  key={post.id}
                  className="rounded-xl border border-white/8 bg-navy-950/50 p-3"
                >
                  <p className="text-sm font-medium text-white">{post.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    /blog/{post.slug} · {post.status}
                  </p>
                </div>
              ))}
              {posts.length === 0 ? (
                <p className="text-sm text-slate-400">No posts yet.</p>
              ) : null}
            </div>
          </Panel>

          <Panel
            title="Recent submissions"
            action={
              <Link
                href="/dashboard/submissions"
                className="text-xs font-semibold text-brand-300"
              >
                Open inbox
              </Link>
            }
          >
            <div className="space-y-3">
              {submissions.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/8 bg-navy-950/50 p-3"
                >
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.company} · {item.status} · {item.source}
                  </p>
                </div>
              ))}
              {submissions.length === 0 ? (
                <p className="text-sm text-slate-400">No submissions yet.</p>
              ) : null}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}
