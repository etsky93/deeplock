import WaitlistForm from "./WaitlistForm";
import FAQ from "./FAQ";

const ACCENT = "#6366f1";
const ACCENT_DARK = "#4f46e5";
const BTN = "#0f0f1a";
const TEXT_PRIMARY = "#0f0f1a";
const TEXT_SECONDARY = "#64748b";
const TEXT_TERTIARY = "#94a3b8";

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.60)",
  backdropFilter: "blur(32px)",
  WebkitBackdropFilter: "blur(32px)",
  border: "1px solid rgba(255,255,255,0.90)",
  boxShadow: "0 4px 32px rgba(99,102,241,0.06), 0 1px 4px rgba(0,0,0,0.04)",
};

const eyebrowPill: React.CSSProperties = {
  background: "rgba(99,102,241,0.07)",
  border: "1px solid rgba(99,102,241,0.15)",
  color: ACCENT,
};

const iconBg: React.CSSProperties = {
  background: "rgba(99,102,241,0.08)",
  border: "1px solid rgba(99,102,241,0.14)",
};

export default function LightLanding() {
  return (
    <div style={{ background: "#f7f7fc", minHeight: "100vh" }}>

      {/* Fixed background blobs + grid */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", left: "50%", width: 900, height: 900, borderRadius: "50%", background: "rgba(99,102,241,0.10)", filter: "blur(100px)", transform: "translate(-50%,0)" }} />
        <div style={{ position: "absolute", bottom: "-5%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "rgba(139,92,246,0.08)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "-8%", width: 600, height: 600, borderRadius: "50%", background: "rgba(59,130,246,0.07)", filter: "blur(90px)" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ─── NAVBAR ─── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
          style={{
            background: "rgba(247,247,252,0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={iconBg}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="10" width="18" height="12" rx="3" stroke={ACCENT} strokeWidth="2" />
                <circle cx="12" cy="16" r="1.5" fill={ACCENT} />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight" style={{ color: TEXT_PRIMARY }}>DeepLock</span>
          </div>
          <a
            href="#waitlist"
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
            style={{ background: BTN }}
          >
            Join the waitlist
          </a>
        </nav>

        {/* ─── HERO ─── */}
        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={eyebrowPill}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              Professional crypto custody
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl" style={{ lineHeight: "1.06", color: TEXT_PRIMARY }}>
              Your crypto.{" "}
              <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_DARK} 50%, #7c3aed 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Safe. Always.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed" style={{ color: TEXT_SECONDARY }}>
              DeepLock provides institutional-grade custody for individuals and businesses.
              Cold storage, multi-signature, and insurance coverage — accessible to everyone.
            </p>

            <div id="waitlist" className="flex justify-center">
              <WaitlistForm
                buttonGradient={BTN}
                buttonTextColor="#ffffff"
                accentBorder="rgba(99,102,241,0.2)"
                accentMuted="rgba(99,102,241,0.07)"
              />
            </div>

            <p className="mt-6 text-xs" style={{ color: TEXT_TERTIARY }}>
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
                  <div className="text-sm font-semibold" style={{ color: TEXT_PRIMARY }}>{s.value}</div>
                  <div className="mt-0.5 text-xs" style={{ color: TEXT_TERTIARY }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>How it works</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: TEXT_PRIMARY }}>Three steps to security</h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: TEXT_SECONDARY }}>
                We&apos;ve removed every complexity. Securing your crypto shouldn&apos;t require a technical manual.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  num: "01", title: "Register",
                  desc: "Create your account and complete identity verification in minutes. Guided, simple, MiCA compliant.",
                  icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke={ACCENT} strokeWidth="2" /></>,
                },
                {
                  num: "02", title: "Deposit",
                  desc: "Transfer your crypto securely. Assets are immediately moved to cold storage.",
                  icon: <><path d="M12 2v14m0 0l-4-4m4 4l4-4" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 17v1a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" /></>,
                },
                {
                  num: "03", title: "Custody",
                  desc: "Everything offline, insured, monitored. Withdraw whenever you want — your crypto is always yours.",
                  icon: <><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" /><path d="M9 12l2 2 4-4" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" /></>,
                },
              ].map((step) => (
                <div key={step.num} className="rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]" style={card}>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-bold tracking-tighter" style={{ color: "rgba(99,102,241,0.15)" }}>{step.num}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={iconBg}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{step.icon}</svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ color: TEXT_PRIMARY }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY DEEPLOCK ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Why DeepLock</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: TEXT_PRIMARY }}>Not all custodians are equal</h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: TEXT_SECONDARY }}>
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
                  <div className="mb-4 h-2 w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
                  <h3 className="mb-2.5 text-base font-semibold" style={{ color: TEXT_PRIMARY }}>{f.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOR WHO ─── */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Who it&apos;s for</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: TEXT_PRIMARY }}>
                Custody for everyone.<br />
                <span style={{ color: TEXT_TERTIARY }}>No compromises.</span>
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
                    style={{ background: `radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)`, filter: "blur(16px)" }}
                  />
                  <div className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-semibold" style={eyebrowPill}>{who.label}</div>
                  <h3 className="mb-4 text-2xl font-bold" style={{ color: TEXT_PRIMARY }}>{who.headline}</h3>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>{who.desc}</p>
                  <ul className="space-y-3">
                    {who.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm" style={{ color: TEXT_PRIMARY }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Security</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: TEXT_PRIMARY }}>Your crypto is invisible to hackers</h2>
              <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: TEXT_SECONDARY }}>
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
                      <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-0.5 text-xs font-medium" style={{ color: ACCENT }}>{p.sub}</div>
                    <h3 className="mb-2 text-lg font-semibold" style={{ color: TEXT_PRIMARY }}>{p.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>{p.d}</p>
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
                    border: "1px solid rgba(99,102,241,0.15)",
                    color: TEXT_SECONDARY,
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
          accentLight={ACCENT}
          cardBorder="rgba(99,102,241,0.15)"
          accentMuted="rgba(99,102,241,0.05)"
          textPrimary={TEXT_PRIMARY}
          textSecondary={TEXT_SECONDARY}
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
                border: "1px solid rgba(255,255,255,0.90)",
                boxShadow: "0 8px 48px rgba(99,102,241,0.10), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(24px)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(24px)" }}
              />
              <div className="relative z-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>Early access</p>
                <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style={{ color: TEXT_PRIMARY }}>
                  Ready to custody the right way?
                </h2>
                <p className="mx-auto mb-10 max-w-md text-base" style={{ color: TEXT_SECONDARY }}>
                  Join the waitlist. You&apos;ll be among the first to access DeepLock when we open to the public.
                </p>
                <div className="flex justify-center">
                  <WaitlistForm
                    buttonGradient={BTN}
                    buttonTextColor="#ffffff"
                    accentBorder="rgba(99,102,241,0.2)"
                    accentMuted="rgba(99,102,241,0.07)"
                  />
                </div>
                <p className="mt-6 text-xs" style={{ color: TEXT_TERTIARY }}>No spam. Just one email when you&apos;re ready.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer
          className="px-6 pb-12 pt-16"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={iconBg}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="3" y="10" width="18" height="12" rx="3" stroke={ACCENT} strokeWidth="2" />
                      <circle cx="12" cy="16" r="1.5" fill={ACCENT} />
                    </svg>
                  </div>
                  <span className="text-base font-semibold tracking-tight" style={{ color: TEXT_PRIMARY }}>DeepLock</span>
                </div>
                <p className="max-w-xs text-sm leading-relaxed" style={{ color: TEXT_TERTIARY }}>
                  Professional cryptocurrency custody for individuals and businesses. A Moneyside service.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: TEXT_TERTIARY }}>Product</p>
                  <ul className="space-y-3">
                    {["How it works", "Security", "Business", "FAQ"].map((l) => (
                      <li key={l}><a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: TEXT_SECONDARY, opacity: 0.8 }}>{l}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: TEXT_TERTIARY }}>Legal</p>
                  <ul className="space-y-3">
                    {["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact"].map((l) => (
                      <li key={l}><a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: TEXT_SECONDARY, opacity: 0.8 }}>{l}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="my-8 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />

            <div
              className="mb-6 rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.50)", border: "1px solid rgba(0,0,0,0.05)", backdropFilter: "blur(20px)" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: TEXT_TERTIARY }}>
                <strong style={{ color: TEXT_SECONDARY }}>Legal notice:</strong> DeepLock is a cryptocurrency custody service. We do not offer financial advice, do not promise returns, and do not guarantee profits. Cryptocurrencies are volatile assets whose value can increase or decrease. DeepLock is not responsible for changes in the value of custodied assets. Service compliant with MiCA (Markets in Crypto-Assets Regulation) and Italian VASP regulations. Operational custody provided by CheckSig S.r.l., a regulated operator. DeepLock is a Moneyside S.r.l. brand.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <p className="text-xs" style={{ color: TEXT_TERTIARY }}>© {new Date().getFullYear()} Moneyside S.r.l. — deeplock.co</p>
              <p className="text-xs" style={{ color: `${TEXT_TERTIARY}88` }}>
                Powered by <span style={{ color: TEXT_TERTIARY }}>CheckSig</span> infrastructure
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
