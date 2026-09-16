import Link from "next/link";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { industries } from "@/lib/content";

export function IndustriesPreview() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionItem>
        <SectionHeading
          eyebrow="Industries"
          title="Purpose-built for the businesses we serve"
          description="Real problem → solution → benefit playbooks — not generic one-liners."
        />
      </MotionItem>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <MotionItem key={industry.slug}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group block h-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {industry.solution}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-brand-300">
                  See problem & benefits →
                </span>
              </Link>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
}
