import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { aboutProcess, aboutWhy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RovixaAI helps businesses automate communication, customer support, and operations using AI-powered solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem>
          <SectionHeading
            eyebrow="About Us"
            title="Who We Are"
            description="RovixaAI helps businesses automate communication, customer support, and operations using AI-powered solutions."
          />
        </MotionItem>

        <MotionItem className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            We are an AI automation company focused on production-ready systems —
            AI receptionists that never miss calls, chatbots that convert website
            traffic, and workflows that keep leads moving without manual chase.
            Our work is designed to feel premium, reliable, and easy for teams to
            operate day after day.
          </p>
        </MotionItem>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <MotionItem>
          <SectionHeading
            eyebrow="Our Process"
            title="From understanding to optimization"
          />
        </MotionItem>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {aboutProcess.map((step, index) => (
            <MotionItem key={step.title}>
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-navy-900/50 p-5">
                <p className="text-sm font-semibold text-brand-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <MotionItem>
          <SectionHeading
            eyebrow="Why RovixaAI"
            title="A partner built for long-term growth"
          />
        </MotionItem>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {aboutWhy.map((item) => (
            <MotionItem key={item.title}>
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>

      <div className="pb-20">
        <CtaBanner />
      </div>
    </div>
  );
}
