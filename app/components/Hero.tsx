import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Indigo glow */}
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.6) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Fade out grid at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(transparent, #0a0a0a)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-indigo-400 animate-fade-in-up"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-indigo-400"
            style={{ boxShadow: "0 0 6px rgba(129,140,248,0.8)" }}
          />
          Custodia crypto professionale
        </div>

        {/* Headline */}
        <h1
          className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl animate-fade-in-up animate-delay-100"
          style={{ lineHeight: "1.08" }}
        >
          Le tue crypto.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #a1a1aa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Al sicuro. Sempre.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-zinc-400 animate-fade-in-up animate-delay-200">
          DeepLock offre un&apos;infrastruttura di custodia istituzionale per privati e aziende.
          Cold storage, multi-firma e copertura assicurativa — finalmente accessibili a tutti.
        </p>

        {/* Waitlist form */}
        <div
          id="waitlist"
          className="flex justify-center animate-fade-in-up animate-delay-300"
        >
          <WaitlistForm />
        </div>

        {/* Trust line */}
        <p className="mt-6 text-xs text-zinc-600 animate-fade-in-up animate-delay-400">
          Operato in partnership con CheckSig — l&apos;unico operatore italiano con copertura SOC1/SOC2
        </p>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animate-delay-500">
          {[
            { value: "Cold Storage", label: "100% offline" },
            { value: "Multi-firma", label: "Accesso sicuro" },
            { value: "Assicurato", label: "Patrimonio coperto" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl px-6 py-4 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="text-sm font-semibold text-white">{stat.value}</div>
              <div className="mt-0.5 text-xs text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
