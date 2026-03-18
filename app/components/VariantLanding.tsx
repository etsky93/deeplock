import type { Theme } from "../themes";
import WaitlistForm from "./WaitlistForm";
import FAQ from "./FAQ";

export default function VariantLanding({ theme }: { theme: Theme }) {
  const card = {
    background: theme.card.bg,
    border: `1px solid ${theme.card.border}`,
    backdropFilter: `blur(${theme.card.blur}px)`,
    WebkitBackdropFilter: `blur(${theme.card.blur}px)`,
  } as React.CSSProperties;

  const iconBg = {
    background: theme.accent.muted,
    border: `1px solid ${theme.card.border}`,
  };

  const eyebrowPill = {
    background: theme.accent.muted,
    border: `1px solid ${theme.card.border}`,
    color: theme.eyebrow,
  };

  const accentLight = theme.accent.light;

  return (
    <div
      style={
        {
          background: theme.bodyBg,
          minHeight: "100vh",
          "--btn-bg": theme.button,
          "--accent-light": theme.accent.light,
          "--accent-muted": theme.accent.muted,
          "--card-border": theme.card.border,
          "--text-primary": theme.text.primary,
          "--text-secondary": theme.text.secondary,
        } as React.CSSProperties
      }
    >
      {/* Fixed background layer — blobs + grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {theme.blobs.map((blob, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: blob.top,
              left: blob.left,
              width: blob.size,
              height: blob.size,
              borderRadius: "50%",
              background: blob.color,
              filter: "blur(80px)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* All content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ─── NAVBAR ─── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
          style={{
            background: `${theme.bodyBg}cc`,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={iconBg}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke={accentLight} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="10" width="18" height="12" rx="3" stroke={accentLight} strokeWidth="2" />
                <circle cx="12" cy="16" r="1.5" fill={accentLight} />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight" style={{ color: theme.text.primary }}>
              DeepLock
            </span>
          </div>
          <a
            href="#waitlist"
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
            style={{ background: theme.button }}
          >
            Entra in lista d&apos;attesa
          </a>
        </nav>

        {/* ─── HERO ─── */}
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
              style={eyebrowPill}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: accentLight, boxShadow: `0 0 6px ${accentLight}` }}
              />
              Custodia crypto professionale
            </div>

            <h1
              className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
              style={{ lineHeight: "1.08", color: theme.text.primary }}
            >
              Le tue crypto.
              <br />
              <span style={{ color: theme.text.secondary }}>Al sicuro. Sempre.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed" style={{ color: theme.text.secondary }}>
              DeepLock offre custodia istituzionale per privati e aziende. Cold storage, multi-firma
              e copertura assicurativa — finalmente accessibili a tutti.
            </p>

            <div id="waitlist" className="flex justify-center">
              <WaitlistForm />
            </div>

            <p className="mt-6 text-xs" style={{ color: theme.text.tertiary }}>
              In partnership con CheckSig — l&apos;unico operatore italiano SOC1/SOC2
            </p>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {[
                { value: "Cold Storage", label: "100% offline" },
                { value: "Multi-firma", label: "Accesso sicuro" },
                { value: "Assicurato", label: "Patrimonio coperto" },
              ].map((s) => (
                <div key={s.value} className="rounded-2xl px-6 py-4 text-center" style={card}>
                  <div className="text-sm font-semibold" style={{ color: theme.text.primary }}>{s.value}</div>
                  <div className="mt-0.5 text-xs" style={{ color: theme.text.tertiary }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COME FUNZIONA ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                Come funziona
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Tre passi verso la sicurezza
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: theme.text.secondary }}>
                Abbiamo eliminato ogni complessità. Custodire le tue crypto non dovrebbe richiedere un manuale.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  num: "01", title: "Registrati",
                  desc: "Crea il tuo account e completa la verifica in pochi minuti. Guidato, semplice, conforme MiCA.",
                  icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke={accentLight} strokeWidth="2" /></>,
                },
                {
                  num: "02", title: "Deposita",
                  desc: "Trasferisci le tue crypto in modo sicuro. Il patrimonio viene spostato immediatamente in cold storage.",
                  icon: <><path d="M12 2v14m0 0l-4-4m4 4l4-4" stroke={accentLight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 17v1a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /></>,
                },
                {
                  num: "03", title: "Custodisci",
                  desc: "Tutto offline, assicurato, monitorato. Ritira quando vuoi — le tue crypto sono sempre tue.",
                  icon: <><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /><path d="M9 12l2 2 4-4" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /></>,
                },
              ].map((step) => (
                <div key={step.num} className="rounded-2xl p-8" style={card}>
                  <div className="mb-6 flex items-center justify-between">
                    <span
                      className="text-4xl font-bold tracking-tighter"
                      style={{ color: `${accentLight}33` }}
                    >
                      {step.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={iconBg}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{step.icon}</svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ color: theme.text.primary }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PERCHÉ DEEPLOCK ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                Perché DeepLock
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Non tutti i custodi sono uguali
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Sicurezza istituzionale", d: "Cold storage air-gapped, multi-firma, procedure certificate — gli stessi standard dei fondi istituzionali." },
                { t: "Proof of Reserves", d: "Ogni mese pubblichiamo una prova crittografica. Zero fiducia cieca: puoi verificare tu stesso." },
                { t: "Conformità MiCA", d: "Operatori regolamentati nel rispetto del quadro normativo europeo. Zero improvvisazione." },
                { t: "Copertura assicurativa", d: "L'unica custody italiana con assicurazione reale sul patrimonio custodito." },
                { t: "Trasparenza totale", d: "SOC1 e SOC2 certificati. Audit indipendenti. Nessun fondo viene mai prestato o ipotecato." },
                { t: "Semplicità radicale", d: "Interfaccia per chi non è un esperto. Nessun seed phrase, nessun errore possibile." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl p-7" style={card}>
                  <div
                    className="mb-4 h-2 w-8 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${accentLight}, transparent)` }}
                  />
                  <h3 className="mb-2.5 text-base font-semibold" style={{ color: theme.text.primary }}>{f.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PER CHI È ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                Per chi è
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Custodia per tutti.<br />
                <span style={{ color: theme.text.tertiary }}>Senza compromessi.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  label: "Privati",
                  headline: "Custodisci come le istituzioni",
                  desc: "Non servono competenze tecniche. Nessun seed phrase. DeepLock gestisce tutto con gli standard dei fondi professionali.",
                  items: ["Nessun seed phrase da custodire", "Dashboard semplice e intuitiva", "Ritiro in qualsiasi momento", "Reportistica fiscale inclusa"],
                },
                {
                  label: "Aziende",
                  headline: "Gestione professionale degli asset digitali",
                  desc: "Multi-utente, reportistica, conformità fiscale e normativa. La soluzione per aziende che gestiscono crypto in modo serio.",
                  items: ["Accesso multi-utente con permessi", "Reportistica e sostituto d'imposta", "Conformità MiCA e normativa italiana", "Contratti SLA dedicati"],
                },
              ].map((who) => (
                <div
                  key={who.label}
                  className="relative overflow-hidden rounded-3xl p-8 md:p-10"
                  style={card}
                >
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20"
                    style={{ background: `radial-gradient(circle, ${theme.accent.primary} 0%, transparent 70%)`, filter: "blur(20px)" }}
                  />
                  <div
                    className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    style={eyebrowPill}
                  >
                    {who.label}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold" style={{ color: theme.text.primary }}>{who.headline}</h3>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: theme.text.secondary }}>{who.desc}</p>
                  <ul className="space-y-3">
                    {who.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm" style={{ color: theme.text.primary }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke={accentLight} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SICUREZZA ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                Sicurezza
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Le tue crypto non le vede nessun hacker
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: theme.text.secondary }}>
                Stessi standard dei principali fondi istituzionali al mondo.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                { sub: "100% offline", t: "Cold Storage", d: "Le tue crypto non toccano mai una rete connessa a internet. Dispositivi air-gapped fisicamente isolati." },
                { sub: "Firme multiple", t: "Multi-Signature", d: "Ogni transazione richiede un quorum di firme indipendenti da dispositivi separati. Nessun singolo punto di fallimento." },
                { sub: "Patrimonio protetto", t: "Copertura Assicurativa", d: "L'unica custody italiana con polizza assicurativa reale. Il patrimonio è protetto anche in scenari straordinari." },
                { sub: "Verifica mensile pubblica", t: "Proof of Reserves", d: "Ogni mese una prova crittografica verificabile. Zero fiducia cieca: verifica che le tue crypto siano davvero lì." },
              ].map((p) => (
                <div key={p.t} className="flex gap-5 rounded-2xl p-7" style={card}>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" style={iconBg}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" stroke={accentLight} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-0.5 text-xs font-medium" style={{ color: accentLight }}>{p.sub}</div>
                    <h3 className="mb-2 text-lg font-semibold" style={{ color: theme.text.primary }}>{p.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {["SOC 1 Type II", "SOC 2 Type II", "MiCA Compliant", "VASP Registrato"].map((b) => (
                <div key={b} className="rounded-full px-4 py-2 text-xs font-medium" style={{ color: theme.text.secondary, ...card }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQ accentLight={theme.accent.light} cardBorder={theme.card.border} accentMuted={theme.accent.muted} textPrimary={theme.text.primary} textSecondary={theme.text.secondary} />

        {/* ─── CTA FINALE ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16" style={card}>
              <div
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-25"
                style={{ background: `radial-gradient(circle, ${theme.accent.primary} 0%, transparent 70%)`, filter: "blur(30px)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-20"
                style={{ background: `radial-gradient(circle, ${theme.accent.primary} 0%, transparent 70%)`, filter: "blur(30px)" }}
              />
              <div className="relative z-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                  Accesso anticipato
                </p>
                <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                  Pronto a custodire come si deve?
                </h2>
                <p className="mx-auto mb-10 max-w-md text-base" style={{ color: theme.text.secondary }}>
                  Entra in lista d&apos;attesa. Sarai tra i primi ad accedere quando apriremo al pubblico.
                </p>
                <div className="flex justify-center">
                  <WaitlistForm />
                </div>
                <p className="mt-6 text-xs" style={{ color: theme.text.tertiary }}>
                  Nessuno spam. Solo un&apos;email quando sei pronto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="px-6 pb-12 pt-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={iconBg}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke={accentLight} strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="3" y="10" width="18" height="12" rx="3" stroke={accentLight} strokeWidth="2" />
                      <circle cx="12" cy="16" r="1.5" fill={accentLight} />
                    </svg>
                  </div>
                  <span className="text-base font-semibold tracking-tight" style={{ color: theme.text.primary }}>DeepLock</span>
                </div>
                <p className="max-w-xs text-sm leading-relaxed" style={{ color: theme.text.tertiary }}>
                  Custodia professionale di criptovalute per privati e aziende. Un servizio Moneyside.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: theme.text.tertiary }}>Prodotto</p>
                  <ul className="space-y-3">
                    {["Come funziona", "Sicurezza", "Aziende", "FAQ"].map((l) => (
                      <li key={l}>
                        <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: theme.text.secondary, opacity: 0.8 }}>{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: theme.text.tertiary }}>Legale</p>
                  <ul className="space-y-3">
                    {["Privacy Policy", "Termini", "Cookie", "Contatti"].map((l) => (
                      <li key={l}>
                        <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: theme.text.secondary, opacity: 0.8 }}>{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="my-8 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

            <div
              className="mb-6 rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: theme.text.tertiary }}>
                <strong style={{ color: theme.text.secondary }}>Avvertenza legale:</strong> DeepLock è un servizio di custodia di criptovalute. Non offriamo consulenza finanziaria, non promettiamo rendimenti e non garantiamo guadagni. Le criptovalute sono asset volatili il cui valore può aumentare o diminuire. Servizio conforme alle normative MiCA e VASP italiano. Custodia operativa fornita da CheckSig S.r.l. DeepLock è un brand Moneyside S.r.l.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <p className="text-xs" style={{ color: theme.text.tertiary }}>© {new Date().getFullYear()} Moneyside S.r.l. — deeplock.co</p>
              <p className="text-xs" style={{ color: `${theme.text.tertiary}88` }}>
                Powered by <span style={{ color: theme.text.tertiary }}>CheckSig</span> infrastructure
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
