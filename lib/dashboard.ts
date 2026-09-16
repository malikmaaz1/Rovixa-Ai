import {
  FileText,
  Inbox,
  LayoutDashboard,
  PenSquare,
} from "lucide-react";

export const dashboardNav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/blogs", label: "Blogs", icon: FileText },
  { href: "/dashboard/blogs/new", label: "New Post", icon: PenSquare },
  { href: "/dashboard/submissions", label: "Submissions", icon: Inbox },
] as const;

export const blogCategories = [
  "AI Receptionists",
  "AI Chatbots",
  "AI Automation",
  "Business Growth",
] as const;
