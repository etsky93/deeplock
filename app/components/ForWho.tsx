export default function ForWho() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Per chi è
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Custodia per tutti.
            <br />
            <span className="text-zinc-500">Senza compromessi.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Privati */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Subtle glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 70%)",
              }}
            />

            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-indigo-400"
              style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  stroke="#818cf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7" r="4" stroke="#818cf8" strokeWidth="2.5" />
              </svg>
              Privati
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Custodisci il tuo patrimonio crypto come fanno le istituzioni
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              Non hai bisogno di essere un esperto di sicurezza. Non hai bisogno di custodire seed
              phrase. DeepLock gestisce tutto con gli stessi standard dei fondi professionali.
            </p>

            <ul className="space-y-3">
              {[
                "Nessun seed phrase da memorizzare",
                "Dashboard semplice e intuitiva",
                "Ritiro in qualsiasi momento",
                "Reportistica fiscale inclusa",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Aziende */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 70%)",
              }}
            />

            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-indigo-400"
              style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="#818cf8" strokeWidth="2.5" />
                <path
                  d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
                  stroke="#818cf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              Aziende
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Gestisci le crypto aziendali con strumenti professionali
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              Conformità fiscale, reportistica dettagliata e governance multi-utente. La soluzione
              di custody per aziende che vogliono gestire asset digitali in modo responsabile.
            </p>

            <ul className="space-y-3">
              {[
                "Accesso multi-utente con permessi",
                "Reportistica e sostituto d'imposta",
                "Conformità MiCA e normativa italiana",
                "Contratti SLA dedicati",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
