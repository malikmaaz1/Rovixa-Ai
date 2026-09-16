export type InquiryLead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  score: number;
  status: "New" | "Qualified" | "Booked" | "In review" | "Nurture";
  source: string;
  value: string;
  owner: string;
  updated: string;
  createdAt: string;
};

declare global {
  // eslint-disable-next-line no-var
  var __rovixaLeads: InquiryLead[] | undefined;
}

function store(): InquiryLead[] {
  if (!globalThis.__rovixaLeads) {
    globalThis.__rovixaLeads = [];
  }
  return globalThis.__rovixaLeads;
}

export function listLeads(): InquiryLead[] {
  return [...store()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function createLead(input: {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}): InquiryLead {
  const lead: InquiryLead = {
    id: `l-${Date.now()}`,
    name: input.name.trim(),
    company: input.company.trim() || "Website inquiry",
    email: input.email.trim(),
    phone: input.phone.trim(),
    message: input.message.trim(),
    score: 70,
    status: "New",
    source: "Contact Form",
    value: "TBD",
    owner: "Unassigned",
    updated: "Just now",
    createdAt: new Date().toISOString(),
  };

  store().unshift(lead);
  return lead;
}

export function updateLeadStatus(
  id: string,
  status: InquiryLead["status"],
): InquiryLead | null {
  const lead = store().find((item) => item.id === id);
  if (!lead) return null;
  lead.status = status;
  lead.updated = "Just now";
  return lead;
}
