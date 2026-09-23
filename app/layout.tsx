import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — AI Employees That Never Miss a Call`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: "/brand/icon.png", type: "image/png" }],
    apple: [{ url: "/brand/icon.png" }],
    shortcut: ["/brand/icon.png"],
  },
  keywords: [
    "AI receptionist",
    "AI voice agents",
    "AI chatbot",
    "AI automation",
    "RovixaAI",
    "appointment booking",
    "lead qualification",
  ],
  openGraph: {
    title: `${site.name} — AI Employees That Never Miss a Call`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/brand/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Employees That Never Miss a Call`,
    description: site.description,
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-navy-950 text-slate-100">{children}</body>
    </html>
  );
}
