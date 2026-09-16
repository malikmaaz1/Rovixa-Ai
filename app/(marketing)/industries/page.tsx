import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "See how RovixaAI helps real estate, dental clinics, restaurants, salons, law firms, and home services automate communication.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem>
          <SectionHeading
            eyebrow="Industries"
            title="Industry-ready AI for high-intent customer conversations"
            description="Each deployment is tailored to the intake, booking, and follow-up realities of your market."
          />
        </MotionItem>
      </MotionSection>

      <div className="mx-auto max-w-7xl space-y-6 px-4 py-14 sm:px-6 lg:px-8">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <section
              key={industry.slug}
              id={industry.slug}
              className="scroll-mt-28 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  {industry.title}
                </h2>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-navy-950/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-300">
                    Problem
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {industry.problem}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-navy-950/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
                    Solution
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {industry.solution}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-navy-950/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    Benefits
                  </p>
                  <ul className="mt-3 space-y-2">
                    {industry.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="pb-20">
        <CtaBanner
          title="See how AI fits your industry"
          description="Book a free consultation and we’ll map the highest-ROI automation opportunities for your business."
        />
      </div>
    </div>
  );
}
