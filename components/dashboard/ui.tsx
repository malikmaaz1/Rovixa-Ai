import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function StatCard({
  label,
  value,
  change,
  positive,
  detail,
}: {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          {label}
        </p>
        {change ? (
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[11px] font-semibold",
              positive
                ? "bg-emerald-400/15 text-emerald-300"
                : "bg-rose-400/15 text-rose-300",
            )}
          >
            {change}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
        {value}
      </p>
      {detail ? <p className="mt-2 text-sm text-slate-400">{detail}</p> : null}
    </div>
  );
}

export function Panel({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-5",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function StatusPill({
  status,
}: {
  status: string;
}) {
  const tone =
    status === "Booked" ||
    status === "Confirmed" ||
    status === "Connected" ||
    status === "Online" ||
    status === "Resolved" ||
    status === "Qualified" ||
    status === "Published"
      ? "bg-emerald-400/15 text-emerald-300"
      : status === "Transferred" ||
          status === "In review" ||
          status === "Pending" ||
          status === "Escalated" ||
          status === "New" ||
          status === "Draft"
        ? "bg-amber-400/15 text-amber-300"
        : status === "Missed follow-up" || status === "Available"
          ? "bg-rose-400/15 text-rose-300"
          : "bg-slate-400/15 text-slate-300";

  return (
    <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", tone)}>
      {status}
    </span>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-slate-400">{description}</p>
      </div>
      {actions}
    </div>
  );
}
