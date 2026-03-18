"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        className="flex items-center gap-3 rounded-2xl px-6 py-4 text-sm text-zinc-300"
        style={{
          background: "rgba(99,102,241,0.1)",
          border: "1px solid rgba(99,102,241,0.25)",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 6L9 17L4 12"
            stroke="#818cf8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>
          Perfetto. Ti contatteremo presto a{" "}
          <span className="font-medium text-white">{email}</span>.
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
        className="flex-1 rounded-full px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/50"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
        style={{ background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" }}
      >
        {loading ? "..." : "Entra in lista d'attesa"}
      </button>
    </form>
  );
}
