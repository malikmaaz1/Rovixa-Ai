import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { homeServices } from "@/lib/content";

export function WhatWeDo() {
  return (
    <MotionSection
      id="services"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
    >
      <MotionItem>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to answer, qualify, and convert"
          description="A complete AI workforce — voice, chat, and automations — engineered to feel effortless and premium."
        />
      </MotionItem>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {homeServices.map((item) => {
          const Icon = item.icon;
          return (
            <MotionItem key={item.slug}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
}
