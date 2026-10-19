import { ChevronDown } from "lucide-react";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <MotionSection
      id="faq"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
    >
      <MotionItem>
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you’re wondering, answered"
          description="Clear answers on launch speed, voice quality, integrations, security, and customization."
        />
      </MotionItem>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
              <span className="text-sm font-semibold text-neutral-900 sm:text-base">
                {faq.question}
              </span>
              <ChevronDown className="h-5 w-5 shrink-0 text-brand-300 transition group-open:rotate-180" />
            </summary>
            <p className="border-t border-black/10 px-5 py-4 text-sm leading-relaxed text-neutral-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </MotionSection>
  );
}
