import { NextResponse } from "next/server";
import { createLead, listLeads, updateLeadStatus } from "@/lib/leads-store";

export async function GET() {
  const leads = await listLeads();
  return NextResponse.json({ leads });
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  if (!body.name || !body.email || !body.phone || !body.message) {
    return NextResponse.json(
      { error: "Name, email, phone, and message are required." },
      { status: 400 },
    );
  }

  const lead = await createLead({
    name: body.name,
    company: body.company || "",
    email: body.email,
    phone: body.phone,
    message: body.message,
  });

  return NextResponse.json({ lead }, { status: 201 });
}

export async function PATCH(request: Request) {
  const body = (await request.json()) as {
    id?: string;
    status?: "New" | "Qualified" | "Booked" | "In review" | "Nurture";
  };

  if (!body.id || !body.status) {
    return NextResponse.json(
      { error: "Lead id and status are required." },
      { status: 400 },
    );
  }

  const lead = await updateLeadStatus(body.id, body.status);
  if (!lead) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  return NextResponse.json({ lead });
}
