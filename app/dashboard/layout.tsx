import type { Metadata } from "next";
import { DashboardAuthGate } from "@/components/dashboard/AuthGate";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "RovixaAI command center for calls, leads, appointments, chats, and AI agent performance.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardAuthGate>
      <div className="flex min-h-screen bg-navy-950">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </DashboardAuthGate>
  );
}
