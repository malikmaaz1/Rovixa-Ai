import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore RovixaAI services: AI receptionists, AI chatbots, and AI automation with a clear inquiry-to-launch process.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem>
          <SectionHeading
            eyebrow="Services"
            title="Premium AI systems built for conversion"
            description="From first inquiry to launch, every service is delivered with a structured process and measurable outcomes."
          />
        </MotionItem>
      </MotionSection>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" className="mt-8" size="lg">
                    Start With Inquiry
                  </Button>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-navy-950/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Service Process
                  </p>
                  <div className="mt-5 space-y-4">
                    {service.process.map((step, index) => (
                      <div
                        key={step.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
                          {String(index + 1).padStart(2, "0")} · {step.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="pb-20">
        <CtaBanner />
      </div>
    </div>
  );
}
