// Per-route <title>, description and social tags. The static defaults live in
// index.html (what a crawler that doesn't run JS, like WhatsApp's, will see);
// this keeps them in step as the visitor moves around the SPA.

export const SITE_URL = "https://agendamoney.com";
const SUFFIX = "Agenda Money";

type Meta = { title: string; description: string };

export const ROUTE_META: Record<string, Meta> = {
  "/": {
    title: "Instant Mobile Money Micro-Loans in Ghana",
    description:
      "Agenda Money gives everyday Ghanaians fast, collateral-free micro-loans paid straight to mobile money. Apply on your phone, 24/7. Fees and interest are shown up front.",
  },
  "/how-it-works": {
    title: "How It Works",
    description:
      "Register, verify, get approved and receive your loan on MoMo. Repay on time to unlock higher limits and lower fees.",
  },
  "/who-we-serve": {
    title: "Who We Serve",
    description:
      "Traders, drivers, seamstresses and MoMo agents: Agenda Money lends working capital to micro-entrepreneurs the banks overlook.",
  },
  "/careers": {
    title: "Careers",
    description: "Join Agenda Money and help close the credit gap for Africa's micro-entrepreneurs.",
  },
  "/faqs": {
    title: "FAQs",
    description:
      "Answers on eligibility, interest, processing fees, repayment, late payment and how your loan limit grows.",
  },
  "/about": {
    title: "About Us",
    description:
      "Our mission is to build and manage a loan book of $100 million for 3 million+ Africans by 2035.",
  },
  "/contact": {
    title: "Contact Us",
    description: "Reach Agenda Money support by phone, email or WhatsApp, or send us a message.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "How Agenda Money collects, uses and protects your personal data.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions",
    description: "The terms that apply when you use Agenda Money's loan services.",
  },
  "/cookie-policy": {
    title: "Cookie Policy",
    description: "Which cookies Agenda Money uses, why, and how to control them.",
  },
};

const NOT_FOUND: Meta = {
  title: "Page not found",
  description: "That page doesn't exist. Head back to the Agenda Money home page.",
};

export const metaFor = (pathname: string): { meta: Meta; known: boolean } => {
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const hit = ROUTE_META[key];
  return hit ? { meta: hit, known: true } : { meta: NOT_FOUND, known: false };
};

export const fullTitle = (title: string, home: boolean) =>
  home ? `${SUFFIX} | ${title}` : `${title} | ${SUFFIX}`;
