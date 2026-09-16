import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionItem>
        <SectionHeading
          eyebrow="How it works"
          title="From discovery to deployment in days, not months"
          description="A clear path from first conversation to live AI employees — with optimization after launch."
        />
      </MotionItem>

      <div className="relative mt-12 grid gap-4 lg:grid-cols-5">
        <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent lg:block" />
        {howItWorks.map((item) => (
          <MotionItem key={item.step}>
            <div className="relative h-full rounded-[1.5rem] border border-white/10 bg-navy-900/60 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/15 text-sm font-semibold text-brand-200">
                {item.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
