import React from "react";

const syne = "var(--font-syne), system-ui, sans-serif";

/* ── Shield mark ───────────────────────────────────────────── */
function Shield({ color = "#0a0a0a" }: { color?: string }) {
  return (
    <svg width="21" height="24" viewBox="14 14 44 48" fill="none">
      <path
        fillRule="evenodd"
        d="M17 18 L55 18 L55 38 Q55 56 36 60 Q17 56 17 38 Z M22 23 L50 23 L50 38 Q50 51 36 55 Q22 51 22 38 Z"
        fill={color}
      />
    </svg>
  );
}

/* ── Lockup wrapper ─────────────────────────────────────────── */
function Lockup({
  dark,
  align = "center",
  gap = 9,
  children,
}: {
  dark?: boolean;
  align?: "center" | "flex-start";
  gap?: number;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: align, gap }}>
      <Shield color={dark ? "white" : "#0a0a0a"} />
      {children}
    </div>
  );
}

/* ── 01  Thin + Bold  (Deep/Lock, default split) ───────────── */
function TM01({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  return (
    <Lockup dark={dark}>
      <span style={{ fontFamily: syne, fontSize: 18, letterSpacing: "-0.045em", lineHeight: 1 }}>
        <span style={{ fontWeight: 300, color: c }}>Deep</span>
        <span style={{ fontWeight: 800, color: c }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 02  Bold + Thin  (weight flip) ────────────────────────── */
function TM02({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  return (
    <Lockup dark={dark}>
      <span style={{ fontFamily: syne, fontSize: 18, letterSpacing: "-0.045em", lineHeight: 1 }}>
        <span style={{ fontWeight: 800, color: c }}>Deep</span>
        <span style={{ fontWeight: 200, color: c }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 03  Faded + Bold  (depth contrast) ────────────────────── */
function TM03({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  const dim = dark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.28)";
  return (
    <Lockup dark={dark}>
      <span style={{ fontFamily: syne, fontSize: 18, letterSpacing: "-0.045em", lineHeight: 1 }}>
        <span style={{ fontWeight: 400, color: dim }}>Deep</span>
        <span style={{ fontWeight: 800, color: c }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 04  All caps, luxury tracking ─────────────────────────── */
function TM04({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  return (
    <Lockup dark={dark}>
      <span
        style={{
          fontFamily: syne,
          fontSize: 13,
          letterSpacing: "0.16em",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        <span style={{ fontWeight: 300, color: c }}>Deep</span>
        <span style={{ fontWeight: 700, color: c }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 05  Mid-dot separator ──────────────────────────────────── */
function TM05({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  const dot = dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)";
  return (
    <Lockup dark={dark}>
      <span style={{ fontFamily: syne, fontSize: 18, letterSpacing: "-0.03em", lineHeight: 1 }}>
        <span style={{ fontWeight: 300, color: c }}>Deep</span>
        <span style={{ fontWeight: 400, color: dot, margin: "0 5px", fontSize: 14 }}>·</span>
        <span style={{ fontWeight: 800, color: c }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 06  Monolithic — single word, ultra-tight ──────────────── */
function TM06({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  return (
    <Lockup dark={dark}>
      <span
        style={{
          fontFamily: syne,
          fontSize: 17,
          letterSpacing: "-0.06em",
          fontWeight: 700,
          color: c,
          lineHeight: 1,
        }}
      >
        DEEPLOCK
      </span>
    </Lockup>
  );
}

/* ── 07  Stacked — "DEEP" thin above, "Lock" heavy below ────── */
function TM07({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  return (
    <Lockup dark={dark} align="center" gap={10}>
      <span style={{ fontFamily: syne, lineHeight: 1.1, display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 300,
            color: c,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          Deep
        </span>
        <span style={{ fontSize: 20, fontWeight: 800, color: c, letterSpacing: "-0.05em" }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 08  Italic contrast ────────────────────────────────────── */
function TM08({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  return (
    <Lockup dark={dark}>
      <span style={{ fontFamily: syne, fontSize: 18, letterSpacing: "-0.04em", lineHeight: 1 }}>
        <span style={{ fontWeight: 300, fontStyle: "italic", color: c }}>Deep</span>
        <span style={{ fontWeight: 800, color: c }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 09  Slash separator ────────────────────────────────────── */
function TM09({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  const slash = dark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.22)";
  return (
    <Lockup dark={dark}>
      <span style={{ fontFamily: syne, fontSize: 18, letterSpacing: "-0.03em", lineHeight: 1 }}>
        <span style={{ fontWeight: 300, color: c }}>Deep</span>
        <span style={{ fontWeight: 300, color: slash, margin: "0 5px" }}>/</span>
        <span style={{ fontWeight: 800, color: c }}>Lock</span>
      </span>
    </Lockup>
  );
}

/* ── 10  Wide track — editorial ─────────────────────────────── */
function TM10({ dark }: { dark?: boolean }) {
  const c = dark ? "white" : "#0a0a0a";
  const dim = dark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.32)";
  return (
    <Lockup dark={dark}>
      <span
        style={{
          fontFamily: syne,
          fontSize: 12,
          letterSpacing: "0.22em",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        <span style={{ fontWeight: 300, color: dim }}>Deep</span>
        <span style={{ fontWeight: 700, color: c }}>lock</span>
      </span>
    </Lockup>
  );
}

/* ── Proposals ──────────────────────────────────────────────── */
type TM = React.ComponentType<{ dark?: boolean }>;

const proposals: { name: string; desc: string; TM: TM }[] = [
  { name: "Thin + Bold",       desc: "Split weight, tight tracking",          TM: TM01 },
  { name: "Bold + Thin",       desc: "Reversed weights — unexpected",         TM: TM02 },
  { name: "Faded + Bold",      desc: "Muted lead, dominant lock",             TM: TM03 },
  { name: "Luxury Caps",       desc: "All caps, wide spacing",                TM: TM04 },
  { name: "Dot Separator",     desc: "Mid-dot — classic typographic device",  TM: TM05 },
  { name: "Monolithic",        desc: "Single word, ultra-tight, no split",    TM: TM06 },
  { name: "Stacked",           desc: "Two-line hierarchy — thin/heavy",       TM: TM07 },
  { name: "Italic Contrast",   desc: "Oblique lead, upright bold finish",     TM: TM08 },
  { name: "Slash Separator",   desc: "Slash as a graphic element",            TM: TM09 },
  { name: "Editorial Wide",    desc: "Small, spaced out — magazine style",    TM: TM10 },
];

/* ── Card ───────────────────────────────────────────────────── */
function TMCard({ n, name, desc, TM }: { n: number; name: string; desc: string; TM: TM }) {
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
      <div
        style={{
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <TM />
      </div>
      {/* Dark */}
      <div
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <TM dark />
      </div>
      {/* Caption */}
      <div style={{ padding: "13px 18px 15px" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.09em",
            color: "#86868b",
            textTransform: "uppercase",
          }}
        >
          {String(n).padStart(2, "0")}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", marginTop: 3 }}>
          {name}
        </div>
        <div style={{ fontSize: 12, color: "#86868b", marginTop: 2 }}>{desc}</div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function TrademarkPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f7",
        padding: "80px 40px 100px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        {/* Back */}
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "#6e6e73",
            textDecoration: "none",
            marginBottom: 48,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3 L5 8 L10 13" stroke="#6e6e73" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          DeepLock
        </a>

        {/* Header */}
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "#6e6e73",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Brand Identity
        </p>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#1d1d1f",
            margin: "10px 0 0",
            lineHeight: 1.05,
          }}
        >
          10 Trademark Proposals
        </h1>
        <p
          style={{
            marginTop: 14,
            fontSize: 17,
            color: "#6e6e73",
            maxWidth: 460,
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          Shield mark paired with 10 different wordmark treatments — typography inspired by disdici.com.
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
            <TMCard key={i} n={i + 1} name={p.name} desc={p.desc} TM={p.TM} />
          ))}
        </div>
      </div>
    </div>
  );
}
