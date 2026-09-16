import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 bg-navy-975">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" aria-label="RovixaAI home">
            <BrandLogo variant="full" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
            AI employees for modern businesses. Answer, qualify, and book —
            automatically, 24/7.
          </p>
          <Button href="/contact" className="mt-6" size="md">
            Book Free Demo
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/dashboard"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Admin Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-300">
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
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
