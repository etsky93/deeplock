import WaitlistForm from "./WaitlistForm";
import FAQ from "./FAQ";

const T = {
  primary: "#0a0a0a",
  secondary: "#6b6b6b",
  tertiary: "#aaaaaa",
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.62)",
  backdropFilter: "blur(32px)",
  WebkitBackdropFilter: "blur(32px)",
  border: "1px solid rgba(255,255,255,0.92)",
  boxShadow: "0 4px 32px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
};

const iconBg: React.CSSProperties = {
  background: "rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.08)",
};

const eyebrowPill: React.CSSProperties = {
  background: "rgba(0,0,0,0.05)",
  border: "1px solid rgba(0,0,0,0.10)",
  color: T.secondary,
};

function Logo({ size = 34 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
      {/* Mark: clean geometric lockmark, no container — just the shape */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shackle — thick arc, rounded ends */}
        <path
          d="M9 16V10.5C9 6.36 12.13 3 16 3h2c3.87 0 7 3.36 7 7.5V16"
          stroke={T.primary}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lock body — solid, wide, architectural */}
        <rect x="4" y="16" width="26" height="16" rx="5" fill={T.primary} />
        {/* Keyhole — circle + notch, pure white */}
        <circle cx="17" cy="24" r="2.6" fill="white" />
        <rect x="15.7" y="24.8" width="2.6" height="3.4" rx="1.3" fill="white" />
      </svg>

      {/* Wordmark: Syne, heavy weight, super tight tracking */}
      <span
        className="font-display"
        style={{
          fontSize: size * 0.53,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: T.primary,
          lineHeight: 1,
        }}
      >
        DeepLock
      </span>
    </div>
  );
}

export default function LightLanding() {
  return (
    <div style={{ background: "#f4f4f6", minHeight: "100vh" }}>

      {/* Fixed blobs + grid */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        {/* Main top glow — more visible */}
        <div style={{ position: "absolute", top: "-15%", left: "50%", width: 1000, height: 1000, borderRadius: "50%", background: "rgba(0,0,0,0.10)", filter: "blur(110px)", transform: "translate(-50%,0)" }} />
        {/* Bottom right */}
        <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: 750, height: 750, borderRadius: "50%", background: "rgba(0,0,0,0.07)", filter: "blur(100px)" }} />
        {/* Bottom left */}
        <div style={{ position: "absolute", bottom: "25%", left: "-8%", width: 650, height: 650, borderRadius: "50%", background: "rgba(0,0,0,0.05)", filter: "blur(90px)" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ─── NAVBAR ─── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
          style={{
            background: "rgba(244,244,246,0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <Logo size={30} />
          <a
            href="#waitlist"
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-80"
            style={{ background: T.primary, letterSpacing: "-0.01em" }}
          >
            Join the waitlist
          </a>
        </nav>

        {/* ─── HERO ─── */}
        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
              style={eyebrowPill}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: T.secondary }} />
              Professional crypto custody
            </div>

            <h1
              className="font-display mb-6 text-5xl font-bold md:text-7xl"
              style={{ lineHeight: "1.04", letterSpacing: "-0.04em", color: T.primary }}
            >
              Your crypto.
              <br />
              <span style={{ color: T.secondary, fontWeight: 400 }}>Safe. Always.</span>
            </h1>

            <p
              className="mx-auto mb-10 max-w-xl text-lg leading-relaxed"
              style={{ color: T.secondary, fontWeight: 300 }}
            >
              DeepLock provides institutional-grade custody for individuals and businesses.
              Cold storage, multi-signature, and insurance coverage — accessible to everyone.
            </p>

            <div id="waitlist" className="flex justify-center">
              <WaitlistForm
                buttonGradient={T.primary}
                buttonTextColor="#ffffff"
                accentBorder="rgba(0,0,0,0.15)"
                accentMuted="rgba(0,0,0,0.04)"
              />
            </div>

            <p className="mt-6 text-xs" style={{ color: T.tertiary }}>
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
                  <div className="text-sm font-semibold" style={{ color: T.primary }}>{s.value}</div>
                  <div className="mt-0.5 text-xs" style={{ color: T.tertiary }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: T.secondary }}>How it works</p>
              <h2 className="font-display text-4xl font-bold md:text-5xl" style={{ letterSpacing: "-0.04em", color: T.primary }}>Three steps to security</h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: T.secondary }}>
                We&apos;ve removed every complexity. Securing your crypto shouldn&apos;t require a technical manual.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  num: "01", title: "Register",
                  desc: "Create your account and complete identity verification in minutes. Guided, simple, MiCA compliant.",
                  icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={T.primary} strokeWidth="1.75" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke={T.primary} strokeWidth="1.75" /></>,
                },
                {
                  num: "02", title: "Deposit",
                  desc: "Transfer your crypto securely. Assets are immediately moved to cold storage.",
                  icon: <><path d="M12 2v14m0 0l-4-4m4 4l4-4" stroke={T.primary} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 17v1a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1" stroke={T.primary} strokeWidth="1.75" strokeLinecap="round" /></>,
                },
                {
                  num: "03", title: "Custody",
                  desc: "Everything offline, insured, monitored. Withdraw whenever you want — your crypto is always yours.",
                  icon: <><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" stroke={T.primary} strokeWidth="1.75" strokeLinecap="round" /><path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.75" strokeLinecap="round" /></>,
                },
              ].map((step) => (
                <div key={step.num} className="rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]" style={card}>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-bold tracking-tighter" style={{ color: "rgba(0,0,0,0.08)" }}>{step.num}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={iconBg}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{step.icon}</svg>
                    </div>
                  </div>
                  <h3 className="font-display mb-3 text-xl font-semibold" style={{ letterSpacing: "-0.03em", color: T.primary }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: T.secondary }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY DEEPLOCK ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: T.secondary }}>Why DeepLock</p>
              <h2 className="font-display text-4xl font-bold md:text-5xl" style={{ letterSpacing: "-0.04em", color: T.primary }}>Not all custodians are equal</h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: T.secondary }}>
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
                <div key={f.t} className="rounded-2xl p-7 transition-all duration-300 hover:scale-[1.01]" style={card}>
                  <div className="mb-4 h-px w-8" style={{ background: `linear-gradient(90deg, ${T.primary}, transparent)` }} />
                  <h3 className="font-display mb-2.5 text-base font-semibold" style={{ letterSpacing: "-0.03em", color: T.primary }}>{f.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: T.secondary }}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOR WHO ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: T.secondary }}>Who it&apos;s for</p>
              <h2 className="font-display text-4xl font-bold md:text-5xl" style={{ letterSpacing: "-0.04em", color: T.primary }}>
                Custody for everyone.<br />
                <span style={{ color: T.tertiary }}>No compromises.</span>
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
                <div key={who.label} className="relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-300 hover:scale-[1.01]" style={card}>
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)", filter: "blur(16px)" }}
                  />
                  <div className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-medium" style={eyebrowPill}>{who.label}</div>
                  <h3 className="font-display mb-4 text-2xl font-bold" style={{ letterSpacing: "-0.04em", color: T.primary }}>{who.headline}</h3>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: T.secondary }}>{who.desc}</p>
                  <ul className="space-y-3">
                    {who.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm" style={{ color: T.primary }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke={T.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: T.secondary }}>Security</p>
              <h2 className="font-display text-4xl font-bold md:text-5xl" style={{ letterSpacing: "-0.04em", color: T.primary }}>Your crypto is invisible to hackers</h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: T.secondary }}>
                The same standards used by the world&apos;s leading institutional funds.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                { sub: "100% offline", t: "Cold Storage", d: "Your crypto never touches an internet-connected network. Air-gapped devices physically isolated at all times." },
                { sub: "Multiple independent signatures", t: "Multi-Signature", d: "Every transaction requires a quorum of independent signatures from separate devices. No single point of failure." },
                { sub: "Assets protected", t: "Insurance Coverage", d: "Italy's only crypto custody with a real insurance policy. Assets protected even in extraordinary scenarios." },
                { sub: "Monthly public verification", t: "Proof of Reserves", d: "Monthly verifiable cryptographic proof. Zero blind trust: verify your crypto is actually there." },
              ].map((p) => (
                <div key={p.t} className="flex gap-5 rounded-2xl p-7 transition-all duration-300 hover:scale-[1.01]" style={card}>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" style={iconBg}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" stroke={T.primary} strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-0.5 text-xs font-medium" style={{ color: T.secondary }}>{p.sub}</div>
                    <h3 className="font-display mb-2 text-lg font-semibold" style={{ letterSpacing: "-0.03em", color: T.primary }}>{p.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: T.secondary }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["SOC 1 Type II", "SOC 2 Type II", "MiCA Compliant", "VASP Registered"].map((b) => (
                <div
                  key={b}
                  className="rounded-full px-4 py-2 text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.70)",
                    border: "1px solid rgba(0,0,0,0.10)",
                    color: T.secondary,
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQ
          accentLight={T.primary}
          cardBorder="rgba(0,0,0,0.12)"
          accentMuted="rgba(0,0,0,0.04)"
          textPrimary={T.primary}
          textSecondary={T.secondary}
        />

        {/* ─── CTA ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                border: "1px solid rgba(255,255,255,0.92)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.07) 0%, transparent 70%)", filter: "blur(24px)" }} />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)", filter: "blur(24px)" }} />
              <div className="relative z-10">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: T.secondary }}>Early access</p>
                <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl" style={{ letterSpacing: "-0.04em", color: T.primary }}>
                  Ready to custody the right way?
                </h2>
                <p className="mx-auto mb-10 max-w-md text-base" style={{ color: T.secondary }}>
                  Join the waitlist. You&apos;ll be among the first to access DeepLock when we open to the public.
                </p>
                <div className="flex justify-center">
                  <WaitlistForm
                    buttonGradient={T.primary}
                    buttonTextColor="#ffffff"
                    accentBorder="rgba(0,0,0,0.15)"
                    accentMuted="rgba(0,0,0,0.04)"
                  />
                </div>
                <p className="mt-6 text-xs" style={{ color: T.tertiary }}>No spam. Just one email when you&apos;re ready.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="px-6 pb-12 pt-16" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3">
                  <Logo size={28} />
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: T.tertiary }}>
                  Professional cryptocurrency custody for individuals and businesses. A Moneyside service.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: T.tertiary }}>Product</p>
                  <ul className="space-y-3">
                    {["How it works", "Security", "Business", "FAQ"].map((l) => (
                      <li key={l}><a href="#" className="text-sm transition-opacity hover:opacity-100" style={{ color: T.secondary, opacity: 0.8 }}>{l}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: T.tertiary }}>Legal</p>
                  <ul className="space-y-3">
                    {["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact"].map((l) => (
                      <li key={l}><a href="#" className="text-sm transition-opacity hover:opacity-100" style={{ color: T.secondary, opacity: 0.8 }}>{l}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="my-8 h-px" style={{ background: "rgba(0,0,0,0.07)" }} />

            <div
              className="mb-6 rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.50)", border: "1px solid rgba(0,0,0,0.06)", backdropFilter: "blur(20px)" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: T.tertiary }}>
                <strong style={{ color: T.secondary }}>Legal notice:</strong> DeepLock is a cryptocurrency custody service. We do not offer financial advice, do not promise returns, and do not guarantee profits. Cryptocurrencies are volatile assets whose value can increase or decrease. DeepLock is not responsible for changes in the value of custodied assets. Service compliant with MiCA (Markets in Crypto-Assets Regulation) and Italian VASP regulations. Operational custody provided by CheckSig S.r.l., a regulated operator. DeepLock is a Moneyside S.r.l. brand.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <p className="text-xs" style={{ color: T.tertiary }}>© {new Date().getFullYear()} Moneyside S.r.l. — deeplock.co</p>
              <p className="text-xs" style={{ color: `${T.tertiary}99` }}>
                Powered by <span style={{ color: T.tertiary }}>CheckSig</span> infrastructure
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
