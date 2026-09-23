import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PricingPreview } from "@/components/sections/PricingPreview";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple RovixaAI pricing plans for AI receptionists, chatbots, and automation.",
};

export default function PricingPage() {
  return (
    <div className="pt-10 sm:pt-14">
      <PricingPreview />
      <div className="pb-20">
        <CtaBanner
          title="Need a custom plan?"
          description="Tell us about your business and we’ll map the right AI coverage for your team."
        />
      </div>
    </div>
  );
}
