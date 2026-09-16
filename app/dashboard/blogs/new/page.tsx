import { DashboardTopbar } from "@/components/dashboard/Topbar";
import { BlogEditor } from "@/components/dashboard/BlogEditor";
import { PageHeader } from "@/components/dashboard/ui";

export default function NewBlogPage() {
  return (
    <>
      <DashboardTopbar title="New Post" />
      <div className="flex-1 px-4 py-6 sm:px-6">
        <PageHeader
          title="Create blog post"
          description="Add content, cover image, custom URL, meta title, and meta description."
        />
        <BlogEditor mode="create" />
      </div>
    </>
  );
}
