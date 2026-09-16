import { ensureDatabaseSchema, getSql } from "@/lib/db";

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

type SubmissionRow = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  score: number;
  status: InquiryLead["status"];
  source: string;
  value: string;
  owner: string;
  updated: string;
  created_at: string;
};

function mapRow(row: SubmissionRow): InquiryLead {
  return {
    id: row.id,
    name: row.name,
    company: row.company,
    email: row.email,
    phone: row.phone,
    message: row.message,
    score: row.score,
    status: row.status,
    source: row.source,
    value: row.value,
    owner: row.owner,
    updated: row.updated,
    createdAt: row.created_at,
  };
}

async function ready() {
  await ensureDatabaseSchema();
  return getSql();
}

export async function listLeads(): Promise<InquiryLead[]> {
  const sql = await ready();
  const rows = (await sql`
    SELECT * FROM submissions ORDER BY created_at DESC
  `) as SubmissionRow[];
  return rows.map(mapRow);
}

export async function createLead(input: {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}): Promise<InquiryLead> {
  const sql = await ready();
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

  await sql`
    INSERT INTO submissions (
      id, name, company, email, phone, message, score, status,
      source, value, owner, updated, created_at
    ) VALUES (
      ${lead.id},
      ${lead.name},
      ${lead.company},
      ${lead.email},
      ${lead.phone},
      ${lead.message},
      ${lead.score},
      ${lead.status},
      ${lead.source},
      ${lead.value},
      ${lead.owner},
      ${lead.updated},
      ${lead.createdAt}
    )
  `;

  return lead;
}

export async function updateLeadStatus(
  id: string,
  status: InquiryLead["status"],
): Promise<InquiryLead | null> {
  const sql = await ready();
  const rows = (await sql`
    SELECT * FROM submissions WHERE id = ${id} LIMIT 1
  `) as SubmissionRow[];
  if (!rows[0]) return null;

  await sql`
    UPDATE submissions
    SET status = ${status}, updated = ${"Just now"}
    WHERE id = ${id}
  `;

  return {
    ...mapRow(rows[0]),
    status,
    updated: "Just now",
  };
}
