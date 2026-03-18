import React from "react";

const syne = "var(--font-syne), system-ui, sans-serif";

/* ── Reusable app-icon wrapper ─────────────────────────────── */
function AppIcon({ children, bg = "#0a0a0a" }: { children: React.ReactNode; bg?: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="72" height="72" rx="16" fill={bg} />
      {children}
    </svg>
  );
}

/* ── 01: Classic Lockup — mini icon + wordmark ─────────────── */
function Logo01({ dark }: { dark?: boolean }) {
  const fg = dark ? "#ffffff" : "#0a0a0a";
  const ib = dark ? "#ffffff" : "#0a0a0a";
  const ifg = dark ? "#0a0a0a" : "#ffffff";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <svg width="38" height="38" viewBox="0 0 72 72" fill="none">
        <rect width="72" height="72" rx="16" fill={ib} />
        <path d="M23 38 L23 27 A13 13 0 0 0 49 27 L49 38" stroke={ifg} strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <rect x="14" y="37" width="44" height="26" rx="7" fill={ifg} />
        <circle cx="36" cy="48" r="4.5" fill={ib} />
        <rect x="33.5" y="48" width="5" height="6" fill={ib} />
      </svg>
      <span style={{ fontFamily: syne, fontSize: 22, letterSpacing: "-0.04em", lineHeight: 1, color: fg }}>
        <span style={{ fontWeight: 300 }}>Deep</span>
        <span style={{ fontWeight: 800 }}>Lock</span>
      </span>
    </div>
  );
}

/* ── 02: Solid Padlock ─────────────────────────────────────── */
function Logo02({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  return (
    <AppIcon bg={bg}>
      <path d="M23 38 L23 27 A13 13 0 0 0 49 27 L49 38" stroke="white" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <rect x="14" y="37" width="44" height="26" rx="7" fill="white" />
      <circle cx="36" cy="48" r="4.5" fill={bg} />
      <rect x="33.5" y="48" width="5" height="6" fill={bg} />
    </AppIcon>
  );
}

/* ── 03: Fine Line ─────────────────────────────────────────── */
function Logo03({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  return (
    <AppIcon bg={bg}>
      <path d="M25 38 L25 29 A11 11 0 0 0 47 29 L47 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <rect x="17" y="37" width="38" height="22" rx="5.5" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="36" cy="47" r="3" fill="white" />
      <rect x="34.5" y="47.5" width="3" height="4.5" fill="white" />
    </AppIcon>
  );
}

/* ── 04: Shield Mark ───────────────────────────────────────── */
function Logo04({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  return (
    <AppIcon bg={bg}>
      <path
        fillRule="evenodd"
        d="M17 18 L55 18 L55 38 Q55 56 36 60 Q17 56 17 38 Z M22 23 L50 23 L50 38 Q50 51 36 55 Q22 51 22 38 Z"
        fill="white"
      />
    </AppIcon>
  );
}

/* ── 05: Vault Wheel ───────────────────────────────────────── */
function Logo05({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  const angles = [0, 60, 120, 180, 240, 300];
  return (
    <AppIcon bg={bg}>
      <circle cx="36" cy="36" r="22" stroke="white" strokeWidth="2.8" fill="none" />
      {angles.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1="36" y1="36"
            x2={36 + 22 * Math.cos(rad)}
            y2={36 + 22 * Math.sin(rad)}
            stroke="white" strokeWidth="2.5"
          />
        );
      })}
      <circle cx="36" cy="36" r="5" fill="white" />
      <line x1="58" y1="36" x2="58" y2="28" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    </AppIcon>
  );
}

/* ── 06: Chain Links ───────────────────────────────────────── */
function Logo06({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  return (
    <AppIcon bg={bg}>
      <ellipse cx="26" cy="36" rx="11" ry="16" stroke="white" strokeWidth="3.5" fill="none" transform="rotate(-18 26 36)" />
      <ellipse cx="46" cy="36" rx="11" ry="16" stroke="white" strokeWidth="3.5" fill="none" transform="rotate(18 46 36)" />
    </AppIcon>
  );
}

/* ── 07: Geometric Key ─────────────────────────────────────── */
function Logo07({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  return (
    <AppIcon bg={bg}>
      <circle cx="25" cy="30" r="11" stroke="white" strokeWidth="3.5" fill="none" />
      <circle cx="25" cy="30" r="4" fill="white" />
      <line x1="34" y1="30" x2="58" y2="30" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="46" y1="30" x2="46" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="53" y1="30" x2="53" y2="36" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </AppIcon>
  );
}

/* ── 08: DL Monogram ───────────────────────────────────────── */
function Logo08({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  return (
    <AppIcon bg={bg}>
      {/* Shared vertical stem */}
      <line x1="22" y1="14" x2="22" y2="58" stroke="white" strokeWidth="5" strokeLinecap="round" />
      {/* D bowl — upper half */}
      <path d="M22 14 C55 14 55 36 22 36" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* L foot — lower half */}
      <line x1="22" y1="58" x2="48" y2="58" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </AppIcon>
  );
}

/* ── 09: Arc Mark (ultra-minimal lock) ─────────────────────── */
function Logo09({ dark }: { dark?: boolean }) {
  const bg = dark ? "#2c2c2e" : "#0a0a0a";
  return (
    <AppIcon bg={bg}>
      {/* Arch = shackle */}
      <path d="M14 46 A22 22 0 0 0 58 46" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Rectangle = body */}
      <rect x="12" y="46" width="48" height="16" rx="4" fill="white" />
    </AppIcon>
  );
}

/* ── 10: Type Heavy wordmark ───────────────────────────────── */
function Logo10({ dark }: { dark?: boolean }) {
  const fg = dark ? "#ffffff" : "#0a0a0a";
  const dim = dark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.22)";
  return (
    <div style={{ fontFamily: syne, letterSpacing: "-0.05em", lineHeight: 0.88, textAlign: "left" }}>
      <div style={{ fontSize: 28, fontWeight: 200, color: dim, textTransform: "uppercase" }}>Deep</div>
      <div style={{ fontSize: 38, fontWeight: 900, color: fg, textTransform: "uppercase" }}>Lock</div>
    </div>
  );
}

/* ── Proposals data ────────────────────────────────────────── */
type LogoComp = React.ComponentType<{ dark?: boolean }>;

const proposals: { name: string; tag: string; Logo: LogoComp }[] = [
  { name: "Classic Lockup",  tag: "Icon + wordmark",      Logo: Logo01 },
  { name: "Solid Padlock",   tag: "App icon · filled",    Logo: Logo02 },
  { name: "Fine Line",       tag: "App icon · outline",   Logo: Logo03 },
  { name: "Shield Mark",     tag: "App icon · heraldic",  Logo: Logo04 },
  { name: "Vault Wheel",     tag: "App icon · mechanism", Logo: Logo05 },
  { name: "Chain Links",     tag: "App icon · interlock", Logo: Logo06 },
  { name: "Geometric Key",   tag: "App icon · access",    Logo: Logo07 },
  { name: "DL Monogram",     tag: "App icon · letterform",Logo: Logo08 },
  { name: "Arc Mark",        tag: "App icon · abstract",  Logo: Logo09 },
  { name: "Type Heavy",      tag: "Wordmark · type-only", Logo: Logo10 },
];

/* ── Card ──────────────────────────────────────────────────── */
function LogoCard({ n, name, tag, Logo }: { n: number; name: string; tag: string; Logo: LogoComp }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Light */}
      <div style={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <Logo />
      </div>
      {/* Dark */}
      <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a" }}>
        <Logo dark />
      </div>
      {/* Caption */}
      <div style={{ padding: "14px 18px 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", color: "#86868b", textTransform: "uppercase" }}>
          {String(n).padStart(2, "0")}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", marginTop: 3 }}>{name}</div>
        <div style={{ fontSize: 12, color: "#86868b", marginTop: 2 }}>{tag}</div>
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function LogosPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f7",
        padding: "80px 40px 100px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        {/* Header */}
        <a
          href="/"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6e6e73", textDecoration: "none", marginBottom: 48 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3 L5 8 L10 13" stroke="#6e6e73" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          DeepLock
        </a>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "#6e6e73", textTransform: "uppercase", margin: 0 }}>
          Brand Identity
        </p>
        <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", margin: "10px 0 0", lineHeight: 1.05 }}>
          10 Logo Proposals
        </h1>
        <p style={{ marginTop: 14, fontSize: 17, color: "#6e6e73", maxWidth: 440, lineHeight: 1.6, marginBottom: 0 }}>
          Apple-inspired directions for DeepLock. Each concept shown on light and dark.
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: 18,
            marginTop: 48,
          }}
        >
          {proposals.map((p, i) => (
            <LogoCard key={i} n={i + 1} name={p.name} tag={p.tag} Logo={p.Logo} />
          ))}
        </div>
      </div>
    </div>
  );
}
