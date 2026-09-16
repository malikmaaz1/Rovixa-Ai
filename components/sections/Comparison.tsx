import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { comparisonRows } from "@/lib/content";

export function Comparison() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionItem>
        <SectionHeading
          eyebrow="Why RovixaAI"
          title="A better economics for every conversation"
          description="Compare the cost, coverage, and consistency of traditional staffing with always-on AI employees."
        />
      </MotionItem>

      <MotionItem className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
        <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 bg-navy-900/70 px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 sm:px-6">
          <span>Compare</span>
          <span>Traditional Receptionist</span>
          <span className="text-brand-300">RovixaAI</span>
        </div>
        <div>
          {comparisonRows.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.1fr_1fr_1fr] gap-3 px-4 py-4 text-sm sm:px-6 ${
                index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
              }`}
            >
              <span className="font-medium text-white">{row.label}</span>
              <span className="text-slate-400">{row.traditional}</span>
              <span className="font-medium text-brand-200">{row.rovixa}</span>
            </div>
          ))}
        </div>
      </MotionItem>
    </MotionSection>
  );
}
