import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  REOPEN_EVENT,
  analyticsConfigured,
  disableAnalytics,
  getConsent,
  loadAnalytics,
  setConsent,
} from "@/lib/consent";

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!analyticsConfigured) return;
    const saved = getConsent();
    if (saved === "granted") loadAnalytics();
    else if (saved === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    if (value === "granted") loadAnalytics();
    else disableAnalytics();
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-2xl shadow-black/20 sm:p-6 select-text"
    >
      <p className="text-sm font-medium leading-relaxed text-[#4A4A4A]">
        We use analytics cookies (Google Analytics and Microsoft Clarity) to see how the site is used and improve it.
        They stay off unless you accept. See our{" "}
        <Link to="/cookie-policy" className="font-bold text-primary underline-offset-2 hover:underline">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-bold text-[#1A1A1A] transition-colors hover:bg-black/5"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90"
        >
          Accept analytics
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
