import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { features } from "@/lib/content";

export function FeatureGrid() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionItem>
        <SectionHeading
          eyebrow="Features"
          title="Enterprise-grade capabilities, startup-simple to use"
          description="Everything operators need to answer faster, book more, and stay in control — without hiring more headcount."
        />
      </MotionItem>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <MotionItem key={feature.title}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/40 px-4 py-4 transition hover:border-brand-400/30 hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold text-white">{feature.title}</p>
              </div>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
}
