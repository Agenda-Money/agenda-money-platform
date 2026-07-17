import heroAccra from "@/assets/hero-accra.jpg";

const UnderConstruction = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: `url(${heroAccra})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/75" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex max-w-lg flex-col items-center">
        <img
          src="/logo.png"
          alt="Agenda Money Logo"
          className="mb-8 h-14 w-auto rounded-xl"
        />

        <span className="mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
          Under Construction
        </span>

        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          We&apos;re building something better
        </h1>
        <p className="text-lg text-white/70">
          Agenda Money is currently undergoing scheduled maintenance.
          We&apos;ll be back online shortly &mdash; thanks for your patience.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
