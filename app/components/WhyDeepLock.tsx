const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Sicurezza istituzionale",
    description:
      "Gli stessi protocolli usati dai fondi istituzionali. Cold storage air-gapped, multi-firma e procedure operative certificate.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#818cf8" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Proof of Reserves",
    description:
      "Ogni mese pubblichiamo una prova crittografica che dimostra che ogni crypto custodita è realmente presente e non ipotecata.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Conformità MiCA",
    description:
      "Operatori regolamentati nel rispetto del quadro normativo europeo MiCA. Zero improvvisazione, zero zone grigie.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#818cf8" strokeWidth="2" />
        <path d="M3 9h18M9 21V9" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Copertura assicurativa",
    description:
      "L'unica custody italiana con assicurazione sul patrimonio custodito. Protezione reale, non solo parole.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
          stroke="#818cf8"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3" stroke="#818cf8" strokeWidth="2" />
      </svg>
    ),
    title: "Totale trasparenza",
    description:
      "SOC1 e SOC2 certificati. Audit indipendenti. Nessun fondo custodito viene mai impegnato o prestato.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Semplicità radicale",
    description:
      "Interfaccia pensata per chi non è un esperto. Nessun seed phrase da custodire, nessun errore possibile.",
  },
];

export default function WhyDeepLock() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Perché DeepLock
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Non tutti i custodi sono uguali
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-zinc-400">
            Abbiamo costruito DeepLock su un&apos;infrastruttura già collaudata dalle istituzioni,
            rendendola accessibile a tutti.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl p-7 transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2.5 text-base font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
