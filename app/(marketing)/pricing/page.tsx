import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PricingPreview } from "@/components/sections/PricingPreview";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple RovixaAI pricing plans for AI receptionists, chatbots, and automation — Starter, Growth, Pro, and Custom.",
};

export default function PricingPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <PricingPreview showAll />
      <div className="pb-20">
        <CtaBanner
          title="Need a custom minute package?"
          description="Talk to sales and we’ll design a plan around your call volume, channels, and support requirements."
        />
      </div>
    </div>
  );
}
