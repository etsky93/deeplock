const steps = [
  {
    number: "01",
    title: "Registrati",
    description:
      "Crea il tuo account e completa la verifica dell'identità in pochi minuti. Il processo è guidato, semplice e conforme alle normative MiCA.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="7" r="4" stroke="#818cf8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Deposita",
    description:
      "Trasferisci le tue criptovalute in modo sicuro. Riceviamo il tuo patrimonio e lo spostiamo immediatamente in cold storage.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2v14m0 0l-4-4m4 4l4-4"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17v1a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Custodisci",
    description:
      "Le tue crypto sono al sicuro, offline, assicurate. Monitora il tuo patrimonio dalla dashboard. Ritira quando vuoi.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Come funziona
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Tre passi verso la sicurezza
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-zinc-400">
            Abbiamo eliminato ogni complessità. Custodire le tue crypto non dovrebbe richiedere
            un manuale tecnico.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute -right-2 top-10 hidden h-0.5 w-4 md:block"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
              )}

              {/* Number */}
              <div className="mb-6 flex items-center justify-between">
                <span
                  className="text-4xl font-bold tracking-tighter"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.number}
                </span>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
