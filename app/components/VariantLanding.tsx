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

  const btnColor = theme.buttonTextColor ?? "#ffffff";
  const accentLight = theme.accent.light;

  return (
    <div
      style={
        {
          background: theme.bodyBg,
          minHeight: "100vh",
          "--btn-bg": theme.button,
          "--accent-light": accentLight,
          "--accent-muted": theme.accent.muted,
          "--card-border": theme.card.border,
          "--text-primary": theme.text.primary,
          "--text-secondary": theme.text.secondary,
        } as React.CSSProperties
      }
    >
      {/* Fixed background — blobs + grid */}
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

      {/* Content */}
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
            <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={iconBg}>
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
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{
              background: theme.button,
              color: btnColor,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Join the waitlist
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
              Professional crypto custody
            </div>

            <h1
              className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
              style={{ lineHeight: "1.08", color: theme.text.primary }}
            >
              Your crypto.
              <br />
              <span style={{ color: theme.text.secondary }}>Safe. Always.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed" style={{ color: theme.text.secondary }}>
              DeepLock provides institutional-grade custody for individuals and businesses.
              Cold storage, multi-signature, and insurance coverage — accessible to everyone.
            </p>

            <div id="waitlist" className="flex justify-center">
              <WaitlistForm
                buttonGradient={theme.button}
                buttonTextColor={btnColor}
                accentBorder={theme.card.border}
                accentMuted={theme.accent.muted}
              />
            </div>

            <p className="mt-6 text-xs" style={{ color: theme.text.tertiary }}>
              Powered by CheckSig — Italy&apos;s only SOC1/SOC2 certified regulated operator
            </p>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {[
                { value: "Cold Storage", label: "100% offline" },
                { value: "Multi-Sig", label: "Secure access" },
                { value: "Insured", label: "Assets protected" },
              ].map((s) => (
                <div key={s.value} className="rounded-2xl px-6 py-4 text-center" style={card}>
                  <div className="text-sm font-semibold" style={{ color: theme.text.primary }}>{s.value}</div>
                  <div className="mt-0.5 text-xs" style={{ color: theme.text.tertiary }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                How it works
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Three steps to security
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: theme.text.secondary }}>
                We&apos;ve removed every complexity. Securing your crypto shouldn&apos;t require a technical manual.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  num: "01", title: "Register",
                  desc: "Create your account and complete identity verification in minutes. Guided, simple, MiCA compliant.",
                  icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke={accentLight} strokeWidth="2" /></>,
                },
                {
                  num: "02", title: "Deposit",
                  desc: "Transfer your crypto securely. Assets are immediately moved to cold storage.",
                  icon: <><path d="M12 2v14m0 0l-4-4m4 4l4-4" stroke={accentLight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 17v1a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /></>,
                },
                {
                  num: "03", title: "Custody",
                  desc: "Everything offline, insured, monitored. Withdraw whenever you want — your crypto is always yours.",
                  icon: <><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /><path d="M9 12l2 2 4-4" stroke={accentLight} strokeWidth="2" strokeLinecap="round" /></>,
                },
              ].map((step) => (
                <div key={step.num} className="rounded-2xl p-8" style={card}>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-bold tracking-tighter" style={{ color: `${accentLight}33` }}>
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

        {/* ─── WHY DEEPLOCK ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                Why DeepLock
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Not all custodians are equal
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: theme.text.secondary }}>
                We built DeepLock on infrastructure already trusted by institutions, made accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Institutional security", d: "Air-gapped cold storage, multi-signature, certified procedures — same standards as the world's largest funds." },
                { t: "Proof of Reserves", d: "Monthly cryptographic proof published publicly. Zero blind trust: verify it yourself at any time." },
                { t: "MiCA Compliant", d: "Regulated operators under the European MiCA framework. No improvisation, no grey areas." },
                { t: "Insurance coverage", d: "Italy's only crypto custody with a real insurance policy on custodied assets." },
                { t: "Full transparency", d: "SOC1 and SOC2 certified. Independent audits. No assets are ever lent or pledged." },
                { t: "Radical simplicity", d: "Built for non-experts. No seed phrases to manage, no possible mistakes." },
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

        {/* ─── FOR WHO ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                Who it&apos;s for
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Custody for everyone.<br />
                <span style={{ color: theme.text.tertiary }}>No compromises.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  label: "Individuals",
                  headline: "Custody like the institutions",
                  desc: "No technical expertise needed. No seed phrases to manage. DeepLock handles everything with institutional-grade standards.",
                  items: ["No seed phrase to remember", "Simple, intuitive dashboard", "Withdraw at any time", "Tax reporting included"],
                },
                {
                  label: "Business",
                  headline: "Professional digital asset management",
                  desc: "Multi-user access, reporting, fiscal and regulatory compliance. The solution for companies managing crypto seriously.",
                  items: ["Multi-user access with permissions", "Reporting & tax compliance", "MiCA and Italian regulatory compliance", "Dedicated SLA contracts"],
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
                  <div className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-semibold" style={eyebrowPill}>
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

        {/* ─── SECURITY ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
                Security
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                Your crypto is invisible to hackers
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: theme.text.secondary }}>
                The same standards used by the world&apos;s leading institutional funds.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                { sub: "100% offline", t: "Cold Storage", d: "Your crypto never touches an internet-connected network. Air-gapped devices physically isolated at all times." },
                { sub: "Multiple independent signatures", t: "Multi-Signature", d: "Every transaction requires a quorum of independent signatures from separate devices. No single point of failure." },
                { sub: "Assets protected", t: "Insurance Coverage", d: "Italy's only crypto custody with a real insurance policy. Your assets are protected even in extraordinary scenarios." },
                { sub: "Monthly public verification", t: "Proof of Reserves", d: "Monthly verifiable cryptographic proof. Zero blind trust: verify your crypto is actually there." },
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
              {["SOC 1 Type II", "SOC 2 Type II", "MiCA Compliant", "VASP Registered"].map((b) => (
                <div key={b} className="rounded-full px-4 py-2 text-xs font-medium" style={{ color: theme.text.secondary, ...card }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQ
          accentLight={accentLight}
          cardBorder={theme.card.border}
          accentMuted={theme.accent.muted}
          textPrimary={theme.text.primary}
          textSecondary={theme.text.secondary}
        />

        {/* ─── CTA ─── */}
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
                  Early access
                </p>
                <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style={{ color: theme.text.primary }}>
                  Ready to custody the right way?
                </h2>
                <p className="mx-auto mb-10 max-w-md text-base" style={{ color: theme.text.secondary }}>
                  Join the waitlist. You&apos;ll be among the first to access DeepLock when we open to the public.
                </p>
                <div className="flex justify-center">
                  <WaitlistForm
                    buttonGradient={theme.button}
                    buttonTextColor={btnColor}
                    accentBorder={theme.card.border}
                    accentMuted={theme.accent.muted}
                  />
                </div>
                <p className="mt-6 text-xs" style={{ color: theme.text.tertiary }}>
                  No spam. Just one email when you&apos;re ready.
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
                  Professional cryptocurrency custody for individuals and businesses. A Moneyside service.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: theme.text.tertiary }}>Product</p>
                  <ul className="space-y-3">
                    {["How it works", "Security", "Business", "FAQ"].map((l) => (
                      <li key={l}>
                        <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: theme.text.secondary, opacity: 0.8 }}>{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: theme.text.tertiary }}>Legal</p>
                  <ul className="space-y-3">
                    {["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact"].map((l) => (
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
                <strong style={{ color: theme.text.secondary }}>Legal notice:</strong> DeepLock is a cryptocurrency custody service. We do not offer financial advice, do not promise returns, and do not guarantee profits. Cryptocurrencies are volatile assets whose value can increase or decrease. DeepLock is not responsible for changes in the value of custodied assets. Service compliant with MiCA (Markets in Crypto-Assets Regulation) and Italian VASP regulations. Operational custody provided by CheckSig S.r.l., a regulated operator. DeepLock is a Moneyside S.r.l. brand.
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
