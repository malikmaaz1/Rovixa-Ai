import type { Metadata } from "next";
import { Comparison } from "@/components/sections/Comparison";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} — AI Employees That Never Miss a Call`,
  },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <WhatWeDo />
      <HowItWorks />
      <FeatureGrid />
      <PricingPreview />
      <IndustriesPreview />
      <Comparison />
      <Testimonials />
      <FaqSection />
      <div className="pb-20">
        <CtaBanner
          title="Ready to automate your business?"
          description="Book a free strategy call and discover how AI can answer every call, qualify every lead, and help your business grow."
        />
      </div>
    </>
  );
}
