const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 10V7a5 5 0 0 1 10 0v3"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3" y="10" width="18" height="12" rx="3" stroke="#818cf8" strokeWidth="2" />
        <circle cx="12" cy="16" r="1.5" fill="#818cf8" />
      </svg>
    ),
    title: "Cold Storage",
    subtitle: "100% offline",
    description:
      "Le tue crypto non toccano mai una rete connessa a internet. I dispositivi di firma operano in ambienti air-gapped fisicamente isolati.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="#818cf8" strokeWidth="2" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Multi-Signature",
    subtitle: "Firme multiple indipendenti",
    description:
      "Ogni transazione richiede un quorum di firme indipendenti da dispositivi separati. Nessun singolo punto di fallimento.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    title: "Copertura Assicurativa",
    subtitle: "Patrimonio protetto",
    description:
      "L'unica custody italiana con una reale copertura assicurativa. Il tuo patrimonio è protetto anche in caso di eventi straordinari.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="10" stroke="#818cf8" strokeWidth="2" />
      </svg>
    ),
    title: "Proof of Reserves",
    subtitle: "Verifica mensile pubblica",
    description:
      "Ogni mese pubblichiamo una prova crittografica verificabile. Zero fiducia cieca: puoi verificare che le tue crypto siano davvero lì.",
  },
];

export default function Security() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.8) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Sicurezza
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            La tua crypto non la vede
            <br />
            nessun hacker
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-zinc-400">
            La nostra infrastruttura di sicurezza è costruita sugli stessi standard usati dai
            principali fondi istituzionali al mondo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex gap-5 rounded-2xl p-7 transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                {pillar.icon}
              </div>
              <div>
                <div className="mb-0.5 text-xs font-medium text-indigo-400">{pillar.subtitle}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SOC badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {["SOC 1 Type II", "SOC 2 Type II", "MiCA Compliant", "VASP Registrato"].map((badge) => (
            <div
              key={badge}
              className="rounded-full px-4 py-2 text-xs font-medium text-zinc-400"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
