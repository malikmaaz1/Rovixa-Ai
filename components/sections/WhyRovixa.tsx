import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { whyRovixa } from "@/lib/content";

export function WhyRovixa() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionItem>
        <SectionHeading
          eyebrow="Why RovixaAI"
          title="Built for businesses that cannot afford missed opportunities"
          description="We combine premium AI systems with practical implementation so your team gains coverage, speed, and consistency."
        />
      </MotionItem>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyRovixa.map((item) => {
          const Icon = item.icon;
          return (
            <MotionItem key={item.title}>
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
}
