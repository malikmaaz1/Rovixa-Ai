import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { pricingPlans } from "@/lib/content";
import { cn } from "@/lib/cn";

export function PricingPreview() {
  return (
    <MotionSection
      id="pricing"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
    >
      <MotionItem>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, scalable plans built for growing businesses"
          description="Start with the plan that fits, then scale minutes as your call volume grows."
        />
      </MotionItem>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <MotionItem key={plan.name}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-[1.75rem] border p-6",
                plan.featured
                  ? "border-black/20 bg-neutral-50 shadow-glow"
                  : "border-black/10 bg-white",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-6 rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  Most Popular
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-neutral-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
              <div className="mt-5 flex flex-wrap items-end gap-x-2 gap-y-1">
                {plan.period === "starting from" ? (
                  <>
                    <span className="pb-1 text-sm text-neutral-500">
                      Starting from
                    </span>
                    <span className="text-4xl font-semibold text-neutral-900">
                      {plan.price}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-semibold text-neutral-900">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-neutral-500">
                      {plan.period}
                    </span>
                  </>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-neutral-600"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={plan.href}
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          </MotionItem>
        ))}
      </div>

    </MotionSection>
  );
}
