// Analytics (Google Analytics 4 + Microsoft Clarity) only loads after the
// visitor accepts it. Nothing is requested from either vendor before that.

export type Consent = "granted" | "denied";

const KEY = "am_cookie_consent";
const EVENT = "am-consent-change";

export const getConsent = (): Consent | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

export const setConsent = (value: Consent) => {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked: the choice simply won't persist */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
};

export const onConsentChange = (cb: (value: Consent) => void) => {
  const handler = (e: Event) => cb((e as CustomEvent<Consent>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
};

/** Lets the footer ask the banner to reopen so a choice can be changed. */
export const REOPEN_EVENT = "am-consent-reopen";
export const reopenConsent = () => window.dispatchEvent(new Event(REOPEN_EVENT));

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[] };

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity?: ClarityFn;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined;

let loaded = false;
let lastPageView = "";

/** One page_view per distinct path, so mount order can't double-count. */
export const trackPageView = () => {
  if (!window.gtag) return;
  const path = window.location.pathname + window.location.search;
  if (path === lastPageView) return;
  lastPageView = path;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

// Cookies written by the two analytics tools. Deleted on withdrawal for the
// host and each parent domain, since they may be set on either.
const ANALYTICS_COOKIE = /^(_ga|_gid|_gat|_clck|_clsk|CLID|ANONCHK|MR|MUID|SM)(_.*)?$/;

const clearAnalyticsCookies = () => {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => ANALYTICS_COOKIE.test(n));
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push("; domain=." + parts.slice(i).join("."));
  for (const name of names) {
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
    }
  }
};

const inject = (src: string) => {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
};

export const loadAnalytics = () => {
  if (loaded) {
    if (GA_ID) window[`ga-disable-${GA_ID}`] = false;
    window.clarity?.("consent");
    return;
  }
  loaded = true;

  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag requires the real `arguments` object, not a rest array
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    // Page views are sent per route by <Analytics /> in App.tsx.
    window.gtag("config", GA_ID, { send_page_view: false });
    inject(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
    // Pages viewed before consent aren't counted; this is the first one that is.
    trackPageView();
  }

  if (CLARITY_ID) {
    const clarity: ClarityFn =
      window.clarity ||
      function (...args: unknown[]) {
        (clarity.q = clarity.q || []).push(args);
      };
    window.clarity = clarity;
    inject(`https://www.clarity.ms/tag/${CLARITY_ID}`);
  }
};

/** Stops further collection if a visitor withdraws after having accepted. */
export const disableAnalytics = () => {
  if (GA_ID) window[`ga-disable-${GA_ID}`] = true;
  window.clarity?.("consent", false);
  clearAnalyticsCookies();
};

export const analyticsConfigured = Boolean(GA_ID || CLARITY_ID);
