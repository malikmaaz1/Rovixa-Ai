"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { cn } from "@/lib/cn";
import { dashboardNav } from "@/lib/dashboard";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/dashboard/login") {
    return null;
  }

  const Nav = (
    <nav className="space-y-1">
      {dashboardNav.map((item) => {
        const Icon = item.icon;
        const active =
          item.href === "/dashboard"
            ? pathname === "/dashboard"
            : item.href === "/dashboard/blogs"
              ? pathname === "/dashboard/blogs" ||
                (pathname.startsWith("/dashboard/blogs/") &&
                  !pathname.startsWith("/dashboard/blogs/new"))
              : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
              active
                ? "bg-brand-500/15 text-white ring-1 ring-brand-400/30"
                : "text-slate-400 hover:bg-white/5 hover:text-white",
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-navy-975/90 p-4 lg:flex lg:flex-col">
        <Link href="/dashboard" className="mb-8 px-1" aria-label="RovixaAI admin">
          <BrandLogo variant="full" imgClassName="h-7 sm:h-7" />
          <p className="mt-2 px-1 text-[11px] text-slate-500">Admin</p>
        </Link>
        {Nav}
        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Content
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Manage blogs and form submissions before connecting a database.
          </p>
        </div>
      </aside>

      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-navy-950/95 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/dashboard" className="flex items-center gap-2" aria-label="RovixaAI admin">
          <BrandLogo variant="icon" className="h-8 w-8" />
          <span className="text-sm font-semibold text-white">Admin</span>
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-b border-white/10 bg-navy-975 p-4 lg:hidden">
          {Nav}
        </div>
      ) : null}
    </>
  );
}
