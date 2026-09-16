import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { MotionItem, MotionSection, SectionHeading } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact RovixaAI to book a free consultation for AI receptionists, chatbots, and business automation.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionItem>
          <SectionHeading
            eyebrow="Contact Us"
            title="Book your discovery call"
            description="Share a few details and we’ll schedule a consultation to design your custom AI solution."
          />
        </MotionItem>
      </MotionSection>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-brand-900/40 to-navy-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            Let’s map your AI journey
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Typical next step: discovery call → custom solution →
            implementation → launch. Tell us about your call volume, website
            traffic, and current tools so we can prepare recommendations.
          </p>

          <ul className="mt-8 space-y-5 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand-300" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.href} className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-300" />
                <a href={phone.href} className="hover:text-white">
                  {phone.label}: {phone.display}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
