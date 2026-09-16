"use client";

import { trustLogos } from "@/lib/content";

export function TrustMarquee() {
  const logos = [...trustLogos, ...trustLogos];

  return (
    <section className="border-y border-white/5 bg-navy-975/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Trusted by modern teams worldwide
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-975 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-975 to-transparent" />
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {logos.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="text-lg font-semibold tracking-tight text-slate-500/90"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
