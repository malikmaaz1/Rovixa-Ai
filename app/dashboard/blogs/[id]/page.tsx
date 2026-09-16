import { notFound } from "next/navigation";
import { DashboardTopbar } from "@/components/dashboard/Topbar";
import { BlogEditor } from "@/components/dashboard/BlogEditor";
import { PageHeader } from "@/components/dashboard/ui";
import { getBlogById } from "@/lib/blog-store";

type Props = { params: Promise<{ id: string }> };

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogById(id);
  if (!post) notFound();

  return (
    <>
      <DashboardTopbar title="Edit Post" />
      <div className="flex-1 px-4 py-6 sm:px-6">
        <PageHeader
          title="Edit blog post"
          description="Update content and SEO fields for this article."
        />
        <BlogEditor mode="edit" initial={post} />
      </div>
    </>
  );
}
