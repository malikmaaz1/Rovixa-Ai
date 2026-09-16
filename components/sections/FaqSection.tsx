"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

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
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <MotionItem key={faq.question}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-300 transition",
                      open && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-300">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
}
