import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function CtaBanner({
  title = "Ready to automate your front desk?",
  description = "Book a free demo and see how RovixaAI can answer calls, capture leads, and streamline operations for your business.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-50 px-6 py-12 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-black/[0.04] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-black/[0.03] blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Next Step
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.calendly} size="lg">
              Book a Demo
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
