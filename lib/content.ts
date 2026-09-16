import {
  Building2,
  CalendarCheck2,
  ClipboardList,
  Headphones,
  Home,
  MessageSquareText,
  PhoneCall,
  Scale,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  UtensilsCrossed,
  Workflow,
  Zap,
} from "lucide-react";

export const homeServices = [
  {
    slug: "ai-receptionists",
    href: "/services#ai-receptionists",
    title: "AI Receptionist",
    description:
      "Never miss another call — pick up, greet, route, qualify, and follow up automatically.",
    icon: Headphones,
  },
  {
    slug: "ai-voice-agents",
    href: "/services#ai-receptionists",
    title: "AI Voice Agents",
    description:
      "Inbound and outbound conversations that sound human, stay on-brand, and convert.",
    icon: PhoneCall,
  },
  {
    slug: "ai-chatbots",
    href: "/services#ai-chatbots",
    title: "AI Chatbots",
    description:
      "Automate website conversations 24/7 with instant, accurate answers and lead capture.",
    icon: MessageSquareText,
  },
  {
    slug: "crm-integrations",
    href: "/services#ai-automation",
    title: "CRM Integrations",
    description:
      "Connect GoHighLevel, HubSpot, Salesforce, Pipedrive, and your existing stack.",
    icon: Workflow,
  },
  {
    slug: "appointment-booking",
    href: "/services#ai-automation",
    title: "Appointment Booking",
    description:
      "Schedule meetings on your calendar in real time — without back-and-forth.",
    icon: CalendarCheck2,
  },
  {
    slug: "lead-qualification",
    href: "/services#ai-receptionists",
    title: "Lead Qualification",
    description:
      "Filter, score, and route high-intent leads before they reach your team.",
    icon: UserRoundCheck,
  },
] as const;

export const services = [
  {
    slug: "ai-receptionists",
    title: "AI Receptionists",
    short:
      "Never miss a call. Our AI answers, qualifies, books, and syncs every conversation.",
    description:
      "A branded voice AI that greets callers, captures lead details, books appointments, and logs everything into your CRM — 24/7.",
    icon: PhoneCall,
    features: [
      "Answers inbound calls instantly",
      "Captures name, phone, and email",
      "Books appointments in real time",
      "Syncs call logs with your CRM",
      "Custom greetings and brand voice",
    ],
    process: [
      {
        title: "Inquiry",
        description: "Tell us about your call volume, hours, and booking needs.",
      },
      {
        title: "Consultation",
        description: "We map scripts, FAQs, calendars, and handoff rules.",
      },
      {
        title: "Setup",
        description: "We train, brand, and connect your AI receptionist stack.",
      },
      {
        title: "Launch",
        description: "Go live with monitoring, refinements, and ongoing support.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    short:
      "Engage website visitors instantly with human-like conversations that convert.",
    description:
      "Website chat agents that answer FAQs, qualify leads, capture intent, and route high-value conversations to your team.",
    icon: MessageSquareText,
    features: [
      "24/7 website engagement",
      "Instant FAQ and service replies",
      "Lead capture and qualification",
      "CRM and calendar integrations",
      "Brand-aligned tone and workflows",
    ],
    process: [
      {
        title: "Inquiry",
        description: "Share your website goals, common questions, and lead flow.",
      },
      {
        title: "Consultation",
        description: "We design conversation paths and qualification logic.",
      },
      {
        title: "Setup",
        description: "We train the bot on your content and embed it cleanly.",
      },
      {
        title: "Launch",
        description: "Activate, track performance, and optimize conversion.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    short:
      "Connect forms, agents, CRM, and follow-ups into one always-on system.",
    description:
      "Custom workflows that move leads from first touch to booked appointment without manual chasing or missed follow-ups.",
    icon: Workflow,
    features: [
      "Lead capture to CRM automation",
      "Auto follow-ups by email and SMS",
      "Appointment reminders and alerts",
      "Review request workflows",
      "No-code integrations across tools",
    ],
    process: [
      {
        title: "Inquiry",
        description: "Identify bottlenecks across sales, support, and ops.",
      },
      {
        title: "Consultation",
        description: "We blueprint the workflows with clear ROI priorities.",
      },
      {
        title: "Setup",
        description: "We connect your stack and automate the critical paths.",
      },
      {
        title: "Launch",
        description: "Deploy, measure impact, and continuously improve.",
      },
    ],
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Business Discovery",
    description: "We map your calls, workflows, tools, and conversion goals.",
  },
  {
    step: "02",
    title: "AI Setup",
    description: "Configure voices, scripts, integrations, and routing rules.",
  },
  {
    step: "03",
    title: "Training",
    description: "Fine-tune on your services, FAQs, objections, and tone.",
  },
  {
    step: "04",
    title: "Go Live",
    description: "Deploy across phone, web, and the channels your customers use.",
  },
  {
    step: "05",
    title: "Optimization",
    description: "Weekly insights and continuous improvements after launch.",
  },
] as const;

export const features = [
  { title: "24/7 Availability", icon: Headphones },
  { title: "Human-like Conversations", icon: PhoneCall },
  { title: "Multi-language Support", icon: MessageSquareText },
  { title: "CRM Integration", icon: Workflow },
  { title: "Calendar Booking", icon: CalendarCheck2 },
  { title: "Call Summaries", icon: ClipboardList },
  { title: "Analytics Dashboard", icon: Sparkles },
  { title: "Lead Qualification", icon: UserRoundCheck },
  { title: "Instant Notifications", icon: Zap },
  { title: "AI Chatbot", icon: MessageSquareText },
  { title: "Voice Intelligence", icon: PhoneCall },
  { title: "Secure Infrastructure", icon: ShieldCheck },
] as const;

export const whyRovixa = [
  {
    title: "24/7 Availability",
    description: "AI covers nights, weekends, and peak hours without downtime.",
    icon: Headphones,
  },
  {
    title: "Never Miss Leads",
    description: "Every call, chat, and form inquiry is captured and followed up.",
    icon: ClipboardList,
  },
  {
    title: "Faster Response Times",
    description: "Instant replies keep prospects engaged while interest is high.",
    icon: PhoneCall,
  },
  {
    title: "Business Automation",
    description: "Reduce busywork so your team focuses on closing and delivery.",
    icon: Workflow,
  },
] as const;

export const comparisonRows = [
  {
    label: "Cost",
    traditional: "$4,000+ / month",
    rovixa: "From $499 / month",
  },
  {
    label: "Availability",
    traditional: "9 to 5, weekdays",
    rovixa: "24 / 7 / 365",
  },
  {
    label: "Response Time",
    traditional: "Missed calls, voicemail",
    rovixa: "Answers in <1 second",
  },
  {
    label: "Lead Capture",
    traditional: "Depends on staffing",
    rovixa: "Every call captured",
  },
  {
    label: "Appointment Booking",
    traditional: "Manual, error prone",
    rovixa: "Automated, real-time",
  },
  {
    label: "Scalability",
    traditional: "Hire, train, repeat",
    rovixa: "Instant, unlimited",
  },
  {
    label: "Analytics",
    traditional: "None or minimal",
    rovixa: "Full dashboard & insights",
  },
  {
    label: "Consistency",
    traditional: "Varies by person",
    rovixa: "Reliable every time",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "For teams ready to stop missing calls and start booking more.",
    featured: false,
    cta: "Get Started",
    href: "/contact",
    features: [
      "500 AI Voice Minutes",
      "24/7 AI Receptionist",
      "Lead Qualification",
      "Appointment Booking",
      "CRM Integration",
      "POS Integration",
      "Dashboard & Usage Tracking",
      "Call Summaries",
      "Email Notifications",
      "Ongoing Maintenance",
    ],
  },
  {
    name: "Growth",
    price: "$899",
    period: "/month",
    description: "Most popular for growing businesses that need chat + voice.",
    featured: true,
    cta: "Get Started",
    href: "/contact",
    features: [
      "1,000 AI Voice Minutes",
      "AI Chatbot included",
      "Everything in Starter",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    name: "Pro",
    price: "$1,999",
    period: "/month",
    description: "For higher volume operations that need speed and premium support.",
    featured: false,
    cta: "Get Started",
    href: "/contact",
    features: [
      "2,500 AI Voice Minutes",
      "AI Chatbot included",
      "Everything in Growth",
      "Faster Response Time",
      "Premium Support",
    ],
  },
  {
    name: "Custom",
    price: "Custom",
    period: "pricing",
    description: "Tailored infrastructure, minutes, and SLAs for complex teams.",
    featured: false,
    cta: "Talk to Sales",
    href: "/contact",
    features: [
      "Custom AI Voice Minutes",
      "AI Receptionist + Chatbot",
      "CRM & POS Integration",
      "Dedicated Infrastructure",
      "SLA & Priority Support",
      "Custom Pricing Based on Requirements",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "RovixaAI captured 42% more consultations in the first month. It feels like hiring five receptionists overnight.",
    name: "Sarah Chen",
    role: "Owner, Bright Smile Dental",
    initials: "SC",
  },
  {
    quote:
      "Every after-hours call is now qualified and scheduled. The ROI was obvious within two weeks.",
    name: "Marcus Reed",
    role: "COO, Reed & Partners",
    initials: "MR",
  },
  {
    quote:
      "Our team stopped drowning in voicemails. Bookings are up, and customers keep complimenting the assistant.",
    name: "Amelia Torres",
    role: "Founder, Torres HVAC",
    initials: "AT",
  },
] as const;

export const stats = [
  { value: "120+", label: "Businesses" },
  { value: "1.8M+", label: "Calls Handled" },
  { value: "99.9%", label: "Uptime" },
  { value: "38%", label: "More Leads" },
] as const;

export const trustLogos = [
  "Northwind",
  "Aperture",
  "Lumen Labs",
  "Vertex",
  "Helios",
  "Meridian",
  "Cobalt",
  "Kanso",
] as const;

export const faqs = [
  {
    question: "How quickly can we go live?",
    answer:
      "Most teams launch in days, not months. After discovery, we configure scripts, voice, integrations, and routing — then train and deploy across phone and web.",
  },
  {
    question: "Does the AI sound human?",
    answer:
      "Yes. We use natural voice models with custom greetings, pacing, and brand tone so conversations feel polished and professional — not robotic.",
  },
  {
    question: "Which CRMs and calendars are supported?",
    answer:
      "We integrate with GoHighLevel, HubSpot, Salesforce, Pipedrive, Google Calendar, Outlook, and many other tools in your stack.",
  },
  {
    question: "What happens if the AI can't help?",
    answer:
      "It follows your escalation rules — capturing details, creating a task, notifying your team, or transferring to a human when needed.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use secure infrastructure, controlled access, and best practices for call logs, chat history, and CRM sync so your customer data stays protected.",
  },
  {
    question: "Can we customize the voice and script?",
    answer:
      "Absolutely. Every deployment is trained on your services, FAQs, booking rules, and preferred language so it represents your business accurately.",
  },
] as const;

export const industries = [
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: Building2,
    problem:
      "Buyer and seller inquiries arrive after hours, and agents lose deals when response times slip.",
    solution:
      "AI receptionists and chatbots qualify leads, schedule showings, and sync details into your CRM instantly.",
    benefits: [
      "Faster lead response",
      "Automated showing bookings",
      "Cleaner CRM follow-up",
      "Fewer missed after-hours inquiries",
    ],
  },
  {
    slug: "dental-clinics",
    title: "Dental Clinics",
    icon: Stethoscope,
    problem:
      "Front desks are overloaded, appointment lines go unanswered, and no-shows hurt schedule utilization.",
    solution:
      "AI answers patient calls, books appointments, sends reminders, and handles common questions around the clock.",
    benefits: [
      "More booked appointments",
      "Lower front-desk load",
      "Fewer no-shows",
      "Better after-hours coverage",
    ],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    icon: UtensilsCrossed,
    problem:
      "Reservation and catering requests stack up during rush periods, creating missed revenue and staff friction.",
    solution:
      "AI manages reservations, FAQ replies, and lead capture so your team stays focused on service quality.",
    benefits: [
      "Smoother reservation flow",
      "Faster guest responses",
      "Less staff interruption",
      "Better peak-hour handling",
    ],
  },
  {
    slug: "salons",
    title: "Salons",
    icon: Scissors,
    problem:
      "Booking calls interrupt stylists, and last-minute openings go unfilled when follow-up is manual.",
    solution:
      "AI books appointments, confirms visits, and answers service questions without pulling staff off the floor.",
    benefits: [
      "Higher booking conversion",
      "Fewer interrupted services",
      "Automated confirmations",
      "Consistent client communication",
    ],
  },
  {
    slug: "law-firms",
    title: "Law Firms",
    icon: Scale,
    problem:
      "Prospective clients expect immediate attention, but intake teams cannot cover every call and form submission.",
    solution:
      "AI qualifies inquiries, captures case details, books consultations, and routes priority matters to your team.",
    benefits: [
      "Faster intake response",
      "Better lead qualification",
      "Protected attorney focus time",
      "Consistent consultation booking",
    ],
  },
  {
    slug: "home-services",
    title: "Home Services",
    icon: Home,
    problem:
      "Emergency and estimate requests come in at all hours, and delayed replies send jobs to competitors.",
    solution:
      "AI captures job details, books estimates, triggers follow-ups, and keeps your pipeline moving automatically.",
    benefits: [
      "More estimate bookings",
      "Faster emergency triage",
      "Automated follow-ups",
      "Stronger local lead capture",
    ],
  },
] as const;

export const aboutProcess = [
  {
    title: "Understand Business",
    description: "We learn your workflows, tools, customer journey, and growth goals.",
  },
  {
    title: "Create Strategy",
    description: "We prioritize high-ROI automation opportunities and define success metrics.",
  },
  {
    title: "Build Solution",
    description: "We design, train, and integrate AI systems around your brand and ops.",
  },
  {
    title: "Launch & Optimize",
    description: "We deploy, monitor performance, and refine for lasting results.",
  },
] as const;

export const aboutWhy = [
  {
    title: "Tailored Solutions",
    description: "Every deployment is built around your industry, scripts, and systems.",
  },
  {
    title: "Fast Deployment",
    description: "Clear scoping and implementation keep time-to-value short.",
  },
  {
    title: "Reliable Support",
    description: "You get ongoing monitoring, iteration, and practical guidance.",
  },
  {
    title: "Long-Term Partnership",
    description: "We grow with your business as channels, volume, and needs evolve.",
  },
] as const;

