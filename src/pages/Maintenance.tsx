import { useEffect } from "react";
import heroAccra from "@/assets/hero-accra.jpg";
import { MAINTENANCE_ETA } from "@/lib/maintenance";

const setMeta = (name: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const Maintenance = () => {
  useEffect(() => {
    document.title = "Back soon | Agenda Money";
    setMeta("robots", "noindex");
    setMeta("description", "Agenda Money is briefly unavailable for maintenance. Please check back shortly.");
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center px-6 py-12 text-center"
      style={{ backgroundImage: `url(${heroAccra})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/45 to-primary/65" />
      <div className="absolute inset-0 bg-black/20" />

      <main className="relative z-10 flex max-w-lg flex-col items-center">
        <img src="/logo.png" alt="Agenda Money" className="mb-8 h-14 w-auto rounded-xl" />

        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">We will be back soon</h1>
        <p className="text-lg text-white/90">
          Agenda Money is briefly unavailable while we carry out maintenance.{" "}
          {MAINTENANCE_ETA ? `Expected back: ${MAINTENANCE_ETA}.` : "Please check back shortly."}
        </p>

        <div className="mt-8 w-full rounded-2xl bg-white/15 p-5 text-white backdrop-blur-sm">
          <p className="font-semibold">Already a customer?</p>
          <p className="mt-1 text-white/90">
            Applying for a loan and repaying are not affected.{" "}
            <a href="https://apply.agendamoney.com" className="font-bold underline underline-offset-2">
              Go to the loan application
            </a>
            .
          </p>
        </div>

        <p className="mt-8 text-white/90">
          Need help? Email{" "}
          <a href="mailto:support@agendamoney.com" className="font-bold underline underline-offset-2">
            support@agendamoney.com
          </a>{" "}
          or call{" "}
          <a href="tel:0558587833" className="font-bold underline underline-offset-2">
            0558587833
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default Maintenance;
