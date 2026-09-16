"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    autoComplete: "organization",
  },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Unable to submit inquiry.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-400/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-300" />
        <h3 className="mt-4 text-2xl font-semibold text-white">
          Inquiry received
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Thanks for reaching out. Your lead is now in the RovixaAI dashboard —
          our team will contact you shortly to schedule your discovery call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm text-slate-300">
            <span className="mb-2 block font-medium text-white">
              {field.label}
            </span>
            <input
              required={field.name !== "company"}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              className="w-full rounded-2xl border border-white/10 bg-navy-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20"
              placeholder={field.label}
            />
          </label>
        ))}
      </div>

      <label className="mt-5 block text-sm text-slate-300">
        <span className="mb-2 block font-medium text-white">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-navy-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20"
          placeholder="Tell us about your business and what you want to automate"
        />
      </label>

      {error ? (
        <p className="mt-4 text-sm text-rose-300">{error}</p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        variant="primary"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
