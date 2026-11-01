import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PricingPreview } from "@/components/sections/PricingPreview";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "RovixaAI AI Receptionist pricing — Starter, Growth, Pro, and Custom plans with monthly minutes in USD.",
};

export default function PricingPage() {
  return (
    <div className="pt-10 sm:pt-14">
      <PricingPreview />
      <div className="pb-20">
        <CtaBanner
          title="Not sure which plan fits?"
          description="Book a quick call and we’ll map the right minute volume and features for your team."
        />
      </div>
    </div>
  );
}
