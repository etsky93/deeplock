"use client";

import { useState } from "react";

interface WaitlistFormProps {
  buttonGradient?: string;
  accentBorder?: string;
  accentMuted?: string;
}

export default function WaitlistForm({
  buttonGradient = "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
  accentBorder = "rgba(99,102,241,0.25)",
  accentMuted = "rgba(99,102,241,0.1)",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const btnBg = (
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue("--btn-bg").trim() || buttonGradient
      : buttonGradient
  );
  // Use CSS variable if set by parent theme, fallback to prop
  const buttonStyle = { background: `var(--btn-bg, ${buttonGradient})` };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div
        className="flex items-center gap-3 rounded-2xl px-6 py-4 text-sm"
        style={{
          background: `var(--accent-muted, ${accentMuted})`,
          border: `1px solid var(--card-border, ${accentBorder})`,
          color: "var(--text-primary, #f4f4f5)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17L4 12" stroke="var(--accent-light, #818cf8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>
          Perfetto. Ti contatteremo presto a{" "}
          <span className="font-medium">{email}</span>.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="La tua email"
        required
        className="flex-1 rounded-full px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all duration-200 focus:ring-2"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
        style={buttonStyle}
      >
        {loading ? "..." : "Entra in lista d'attesa"}
      </button>
    </form>
  );
}
