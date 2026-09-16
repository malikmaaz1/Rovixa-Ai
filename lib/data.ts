export const services = [
  {
    slug: "ai-receptionists",
    title: "AI Receptionists",
    eyebrow: "Voice & intake",
    summary:
      "A branded voice agent that answers every call, qualifies the inquiry, and books the next step — day or night.",
    description:
      "RovixaAI receptionists greet callers in your brand voice, capture contact details, answer service questions, and schedule appointments directly on your calendar.",
    outcomes: [
      "Instant pickup on inbound calls",
      "Lead capture with name, phone, and intent",
      "Appointment booking and calendar blocking",
      "CRM logging with call summaries",
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    eyebrow: "Website & messaging",
    summary:
      "On-site and messaging chat that answers questions, qualifies visitors, and converts traffic into booked conversations.",
    description:
      "Our chatbots are trained on your services, pricing rules, and FAQs so they can handle support, qualify leads, and hand off only the conversations your team should see.",
    outcomes: [
      "24/7 website and messaging coverage",
      "FAQ resolution without staff interruption",
      "Lead qualification before human handoff",
      "Conversation history stored in your CRM",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    eyebrow: "Operations",
    summary:
      "Custom workflows that move leads, reminders, and follow-ups through your business without manual work.",
    description:
      "We connect your forms, voice agent, chatbot, CRM, and calendar so every inquiry triggers the right next action — automatically.",
    outcomes: [
      "Lead routing from every channel",
      "Follow-up email and SMS sequences",
      "Internal alerts for hot opportunities",
      "Review requests and status updates",
    ],
  },
] as const;

export const serviceProcess = [
  {
    step: "01",
    title: "Inquiry",
    description: "Tell us how calls, chats, and operations currently run — and where leads are dropping.",
  },
  {
    step: "02",
    title: "Consultation",
    description: "We map the customer journey, recommend the right stack, and define success metrics.",
  },
  {
    step: "03",
    title: "Setup",
    description: "We train the agent, connect your tools, and test real conversations before go-live.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Your system goes live with monitoring, refinements, and a dedicated support path.",
  },
] as const;

export const homeProcess = [
  {
    step: "01",
    title: "Submit Inquiry",
    description: "Share your industry, volume, and the channels you want covered.",
  },
  {
    step: "02",
    title: "Discovery Call",
    description: "We audit missed calls, response times, and the handoff into your CRM.",
  },
  {
    step: "03",
    title: "Custom Solution",
    description: "You receive a tailored receptionist, chatbot, or automation blueprint.",
  },
  {
    step: "04",
    title: "Implementation",
    description: "We configure voice, chat, workflows, and integrations around your brand.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Go live with ongoing optimization, reporting, and a long-term partner.",
  },
] as const;

export const whyPoints = [
  {
    title: "24/7 Availability",
    description: "Every call and chat is answered after hours, on weekends, and during peak volume.",
  },
  {
    title: "Never Miss Leads",
    description: "Inquiries are captured, qualified, and logged before they bounce to a competitor.",
  },
  {
    title: "Faster Response Times",
    description: "First response in seconds — not hours — so intent is still high when you follow up.",
  },
  {
    title: "Business Automation",
    description: "Booking, reminders, routing, and follow-ups run without adding headcount.",
  },
] as const;

export const aboutProcess = [
  {
    title: "Understand Business",
    description: "We learn your services, intake rules, peak hours, and what a qualified lead looks like.",
  },
  {
    title: "Create Strategy",
    description: "We design the conversation flows, tooling, and rollout plan around measurable outcomes.",
  },
  {
    title: "Build Solution",
    description: "Agents, chat, and automations are trained on your brand and connected to live systems.",
  },
  {
    title: "Launch & Optimize",
    description: "We monitor real conversations, tighten answers, and expand coverage as you grow.",
  },
] as const;

export const aboutWhy = [
  {
    title: "Tailored Solutions",
    description: "No generic scripts. Every deployment is built around your industry, voice, and workflow.",
  },
  {
    title: "Fast Deployment",
    description: "Most teams go from discovery to live coverage in days, not a quarter-long IT project.",
  },
  {
    title: "Reliable Support",
    description: "You get a named team for changes, monitoring, and conversation quality reviews.",
  },
  {
    title: "Long-Term Partnership",
    description: "We stay after launch to expand automation as your volume and locations grow.",
  },
] as const;

export const industries = [
  {
    slug: "real-estate",
    title: "Real Estate",
    problem:
      "Listing inquiries arrive after hours and on weekends. Agents are in showings, so buyers hang up and call the next brokerage.",
    solution:
      "An AI receptionist answers every property call, captures buyer details, qualifies budget and timeline, and books the showing on the right agent's calendar.",
    benefits: [
      "After-hours listing coverage",
      "Buyer qualification before callback",
      "Showing requests booked instantly",
      "Lead source and notes in your CRM",
    ],
  },
  {
    slug: "dental-clinics",
    title: "Dental Clinics",
    problem:
      "The front desk is already on the phone. New-patient calls go to voicemail, and hygiene appointments stay unfilled.",
    solution:
      "RovixaAI answers overflow and after-hours calls, books cleanings, collects insurance basics, and sends the patient a confirmation.",
    benefits: [
      "Fewer missed new-patient calls",
      "Self-serve booking for routine visits",
      "Reduced front-desk interruption",
      "Reminder and follow-up automation",
    ],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    problem:
      "Dinner rush buries the reservation line. Guests cannot get through, takeout orders are incomplete, and no-shows stay high.",
    solution:
      "Voice and chat agents take reservations, answer hours and menu questions, and confirm parties without pulling staff off the floor.",
    benefits: [
      "Reservations captured during peak hours",
      "Consistent answers on hours and events",
      "Fewer no-shows with confirmations",
      "Staff stay focused on guests in-house",
    ],
  },
  {
    slug: "salons",
    title: "Salons",
    problem:
      "Stylists cannot answer the phone mid-appointment. Last-minute openings go unfilled and walk-in questions never convert.",
    solution:
      "An AI receptionist books color and cut appointments, offers open slots, and handles reschedules according to your rules.",
    benefits: [
      "Books while chairs are occupied",
      "Fills cancellations automatically",
      "Service menus answered 24/7",
      "Client details stored for the next visit",
    ],
  },
  {
    slug: "law-firms",
    title: "Law Firms",
    problem:
      "Intake happens after court hours. Prospective clients leave a voicemail and hire the firm that called back first.",
    solution:
      "A confidential AI intake agent captures matter type, urgency, and contact details, then books a consultation with the right attorney.",
    benefits: [
      "After-hours legal intake",
      "Matter-type routing to the right desk",
      "Faster consultation booking",
      "Cleaner notes for the first meeting",
    ],
  },
  {
    slug: "home-services",
    title: "Home Services",
    problem:
      "Emergency and quote requests come in while crews are on-site. Missed calls become lost jobs for HVAC, plumbing, and cleaning teams.",
    solution:
      "RovixaAI answers the line, qualifies the job, books an estimate or emergency slot, and alerts dispatch in real time.",
    benefits: [
      "Emergency call coverage 24/7",
      "Job details captured before dispatch",
      "Estimate slots booked automatically",
      "Fewer leaked leads to competitors",
    ],
  },
] as const;

export const stats = [
  { value: "24/7", label: "Coverage" },
  { value: "<3s", label: "First response" },
  { value: "0", label: "Missed after-hours calls" },
  { value: "5", label: "Steps from inquiry to launch" },
] as const;
