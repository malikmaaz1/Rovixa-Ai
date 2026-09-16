import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { pricingPlans } from "@/lib/content";
import { cn } from "@/lib/cn";

export function PricingPreview({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const plans = showAll ? pricingPlans : pricingPlans.slice(0, 3);

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

      <div
        className={cn(
          "mt-12 grid gap-5",
          showAll ? "lg:grid-cols-4" : "lg:grid-cols-3",
        )}
      >
        {plans.map((plan) => (
          <MotionItem key={plan.name}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-[1.75rem] border p-6",
                plan.featured
                  ? "border-brand-400/50 bg-gradient-to-b from-brand-500/20 to-navy-900/80 shadow-glow"
                  : "border-white/10 bg-white/[0.03]",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  Most Popular
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-semibold text-white">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-slate-400">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-300"
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

      <p className="mt-8 text-center text-sm text-slate-400">
        Additional AI Voice Minutes: $0.90 per minute.{" "}
        {!showAll ? (
          <Link href="/pricing" className="font-semibold text-brand-300 hover:text-brand-200">
            View all plans
          </Link>
        ) : null}
      </p>
    </MotionSection>
  );
}
