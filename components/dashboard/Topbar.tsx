"use client";

import Link from "next/link";
import { Bell, LogOut, Search } from "lucide-react";
import { useDashboardLogout } from "@/components/dashboard/AuthGate";

export function DashboardTopbar({
  title = "Overview",
}: {
  title?: string;
}) {
  const logout = useDashboardLogout();

  return (
    <header className="hidden items-center justify-between gap-4 border-b border-white/10 px-6 py-4 lg:flex">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Live operations
        </p>
        <h1 className="mt-1 text-lg font-semibold text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden xl:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="search"
            placeholder="Search calls, leads, bookings..."
            className="w-72 rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-brand-400/40"
          />
        </div>
        <button
          type="button"
          className="relative rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-400" />
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white"
        >
          Marketing site
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/20 text-xs font-semibold text-brand-200">
            BO
          </span>
          <span className="text-xs font-medium text-white">Bright Ops</span>
        </div>
        <button
          type="button"
          onClick={logout}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white"
          aria-label="Sign out"
          title="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
