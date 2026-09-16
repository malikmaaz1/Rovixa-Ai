"use client";

import { useEffect, useMemo, useState } from "react";
import { DashboardTopbar } from "@/components/dashboard/Topbar";
import { PageHeader, Panel, StatusPill } from "@/components/dashboard/ui";
import type { InquiryLead } from "@/lib/leads-store";

const filters = ["All", "New", "Qualified", "Booked", "In review", "Nurture"] as const;

export function SubmissionsWorkspace() {
  const [leads, setLeads] = useState<InquiryLead[]>([]);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadLeads() {
    setLoading(true);
    const response = await fetch("/api/leads", { cache: "no-store" });
    const payload = (await response.json()) as { leads: InquiryLead[] };
    setLeads(payload.leads);
    setSelectedId((current) => current ?? payload.leads[0]?.id ?? null);
    setLoading(false);
  }

  useEffect(() => {
    void loadLeads();
  }, []);

  const visible = useMemo(
    () =>
      filter === "All" ? leads : leads.filter((lead) => lead.status === filter),
    [filter, leads],
  );

  const selected = leads.find((lead) => lead.id === selectedId) ?? visible[0];

  async function updateStatus(status: InquiryLead["status"]) {
    if (!selected) return;
    await fetch("/api/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selected.id, status }),
    });
    await loadLeads();
  }

  return (
    <>
      <DashboardTopbar title="Submissions" />
      <div className="flex-1 px-4 py-6 sm:px-6">
        <PageHeader
          title="Form submissions"
          description="Contact form inquiries from the website. Update status as you follow up."
        />

        <div className="mb-4 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                filter === item
                  ? "bg-brand-500 text-white"
                  : "border border-white/10 bg-white/5 text-slate-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <Panel title={loading ? "Loading..." : "All submissions"}>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-2 py-3 font-semibold">Name</th>
                    <th className="px-2 py-3 font-semibold">Company</th>
                    <th className="px-2 py-3 font-semibold">Source</th>
                    <th className="px-2 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((lead) => (
                    <tr
                      key={lead.id}
                      className={`cursor-pointer border-b border-white/5 ${
                        selected?.id === lead.id ? "bg-brand-500/10" : ""
                      }`}
                      onClick={() => setSelectedId(lead.id)}
                    >
                      <td className="px-2 py-4 font-medium text-white">
                        {lead.name}
                      </td>
                      <td className="px-2 py-4 text-slate-300">{lead.company}</td>
                      <td className="px-2 py-4 text-slate-300">{lead.source}</td>
                      <td className="px-2 py-4">
                        <StatusPill status={lead.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel title="Submission details">
            {selected ? (
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-lg font-semibold text-white">{selected.name}</p>
                  <p className="mt-1 text-slate-400">{selected.company}</p>
                </div>
                <dl className="space-y-3 text-slate-300">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      Email
                    </dt>
                    <dd className="mt-1">{selected.email || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      Phone
                    </dt>
                    <dd className="mt-1">{selected.phone || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      Message
                    </dt>
                    <dd className="mt-1">
                      {selected.message || "No message provided."}
                    </dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-2">
                  {(["Qualified", "Booked", "In review", "Nurture"] as const).map(
                    (status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => void updateStatus(status)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/10"
                      >
                        Mark {status}
                      </button>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-400">No submission selected.</p>
            )}
          </Panel>
        </div>
      </div>
    </>
  );
}
