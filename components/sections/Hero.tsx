"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { easeOutExpo } from "@/lib/motion";

const feed = [
  { title: "Incoming Call", meta: "+1 (469) 468-1474", status: "Live" },
  { title: "Appointment Booked", meta: "Tue · 2:30 PM", status: "Done" },
  { title: "Lead Qualified", meta: "Budget verified", status: "Hot" },
  { title: "CRM Updated", meta: "HubSpot · synced", status: "Sync" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-10 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-[130px]" />
        <div className="absolute right-[-5%] top-32 h-[24rem] w-[24rem] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
            <Sparkles className="h-3.5 w-3.5" />
            Introducing RovixaAI 2.0
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            AI Employees That
            <span className="mt-1 block bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              Never Miss a Call
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            AI Receptionists, Voice Agents, and Chatbots that answer 24/7,
            qualify leads, book appointments, and automate support — so your
            business never loses another customer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.calendly} size="lg">
              Book a Demo
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
            {[
              { value: "24/7", label: "Always on" },
              { value: "<1s", label: "Response" },
              { value: "+38%", label: "Lead capture" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center"
              >
                <p className="text-lg font-semibold text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            {["CRM-ready", "Human-like voice", "Days to launch"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-300" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.12, ease: easeOutExpo }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-brand-500/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-900/85 p-4 shadow-panel backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Live Operations
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  RovixaAI Command Center
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Online
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 via-transparent to-white/5 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    AI Receptionist active
                  </p>
                  <p className="text-xs text-slate-300">
                    Answering · qualifying · booking
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-2.5">
              {feed.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.35 + index * 0.12,
                    duration: 0.55,
                    ease: easeOutExpo,
                  }}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{item.meta}</p>
                  </div>
                  <span className="rounded-full border border-brand-400/20 bg-brand-500/10 px-2.5 py-1 text-[11px] font-semibold text-brand-200">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
