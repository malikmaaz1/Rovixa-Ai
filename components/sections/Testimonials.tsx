import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { stats, testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <MotionItem>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by operators who value their time"
          description="Teams use RovixaAI to capture more consultations, clear voicemail backlogs, and keep after-hours revenue flowing."
        />
      </MotionItem>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <MotionItem key={item.name}>
            <figure className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-200 sm:text-base">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-200">
                  {item.initials}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </MotionItem>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <MotionItem key={stat.label}>
            <div className="rounded-2xl border border-white/10 bg-navy-900/50 px-4 py-5 text-center">
              <p className="text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">
                {stat.label}
              </p>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
