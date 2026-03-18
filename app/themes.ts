export interface ThemeBlob {
  color: string;
  top: string;
  left: string;
  size: number;
}

export interface Theme {
  id: number;
  name: string;
  description: string;
  previewColors: string[];
  bodyBg: string;
  blobs: ThemeBlob[];
  card: { bg: string; border: string; blur: number };
  accent: { primary: string; light: string; muted: string };
  button: string;
  eyebrow: string;
  text: { primary: string; secondary: string; tertiary: string };
}

export const themes: Theme[] = [
  {
    id: 1,
    name: "Indigo Cosmos",
    description: "Sfondo quasi nero, blob indigo, glass viola. Diretto, tech-premium.",
    previewColors: ["#07070f", "#6366f1", "#818cf8"],
    bodyBg: "#07070f",
    blobs: [
      { color: "rgba(99,102,241,0.40)", top: "-8%", left: "50%", size: 750 },
      { color: "rgba(79,70,229,0.22)", top: "65%", left: "80%", size: 520 },
    ],
    card: { bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.18)", blur: 30 },
    accent: { primary: "#6366f1", light: "#818cf8", muted: "rgba(99,102,241,0.15)" },
    button: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    eyebrow: "#818cf8",
    text: { primary: "#f4f0ff", secondary: "#a1a1aa", tertiary: "#71717a" },
  },
  {
    id: 2,
    name: "Gold Vault",
    description: "Nero caldo, blob oro, glass dorato. Lusso, wealth management, Ramify-style.",
    previewColors: ["#0a0a06", "#d4af37", "#e8c84a"],
    bodyBg: "#0a0a06",
    blobs: [
      { color: "rgba(212,175,55,0.30)", top: "-8%", left: "50%", size: 700 },
      { color: "rgba(180,130,20,0.18)", top: "70%", left: "20%", size: 460 },
    ],
    card: { bg: "rgba(212,175,55,0.06)", border: "rgba(212,175,55,0.20)", blur: 25 },
    accent: { primary: "#d4af37", light: "#e8c84a", muted: "rgba(212,175,55,0.12)" },
    button: "linear-gradient(135deg, #d4af37 0%, #b8960c 100%)",
    eyebrow: "#d4af37",
    text: { primary: "#fafaf0", secondary: "#a3a390", tertiary: "#6b6b55" },
  },
  {
    id: 3,
    name: "Electric Blue",
    description: "Navy scuro, blob azzurro elettrico, glass blu. Fintech moderno.",
    previewColors: ["#060b14", "#3b82f6", "#60a5fa"],
    bodyBg: "#060b14",
    blobs: [
      { color: "rgba(59,130,246,0.38)", top: "-8%", left: "50%", size: 750 },
      { color: "rgba(37,99,235,0.22)", top: "70%", left: "78%", size: 520 },
    ],
    card: { bg: "rgba(59,130,246,0.07)", border: "rgba(59,130,246,0.18)", blur: 30 },
    accent: { primary: "#3b82f6", light: "#60a5fa", muted: "rgba(59,130,246,0.12)" },
    button: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    eyebrow: "#60a5fa",
    text: { primary: "#f0f4ff", secondary: "#94a3b8", tertiary: "#64748b" },
  },
  {
    id: 4,
    name: "Emerald Trust",
    description: "Verde quasi nero, blob smeraldo, glass verde. Fiducia, Disdici DNA scuro.",
    previewColors: ["#050e08", "#10b981", "#34d399"],
    bodyBg: "#050e08",
    blobs: [
      { color: "rgba(16,185,129,0.35)", top: "-8%", left: "50%", size: 730 },
      { color: "rgba(5,150,105,0.20)", top: "68%", left: "18%", size: 500 },
    ],
    card: { bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.18)", blur: 30 },
    accent: { primary: "#10b981", light: "#34d399", muted: "rgba(16,185,129,0.12)" },
    button: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    eyebrow: "#34d399",
    text: { primary: "#f0faf5", secondary: "#9fbfaf", tertiary: "#6b8f7a" },
  },
  {
    id: 5,
    name: "Aurora",
    description: "Blob viola sinistra + teal destra, glass neutro puro. Etereo, premium.",
    previewColors: ["#070610", "#8b5cf6", "#14b8a6"],
    bodyBg: "#070610",
    blobs: [
      { color: "rgba(139,92,246,0.38)", top: "15%", left: "18%", size: 620 },
      { color: "rgba(20,184,166,0.28)", top: "40%", left: "78%", size: 600 },
      { color: "rgba(99,102,241,0.15)", top: "-5%", left: "50%", size: 400 },
    ],
    card: { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.10)", blur: 40 },
    accent: { primary: "#a78bfa", light: "#c4b5fd", muted: "rgba(167,139,250,0.15)" },
    button: "linear-gradient(135deg, #8b5cf6 0%, #0d9488 100%)",
    eyebrow: "#a78bfa",
    text: { primary: "#faf5ff", secondary: "#b0a0c8", tertiary: "#7c6a8f" },
  },
  {
    id: 6,
    name: "Steel",
    description: "Nero puro, glass bianco neutro, zero colore. Minimalismo Apple estremo.",
    previewColors: ["#0a0a0a", "#ffffff", "#a1a1aa"],
    bodyBg: "#0a0a0a",
    blobs: [
      { color: "rgba(255,255,255,0.04)", top: "-5%", left: "50%", size: 800 },
      { color: "rgba(255,255,255,0.025)", top: "70%", left: "70%", size: 500 },
    ],
    card: { bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.14)", blur: 40 },
    accent: { primary: "#ffffff", light: "#f4f4f5", muted: "rgba(255,255,255,0.08)" },
    button: "rgba(255,255,255,0.14)",
    eyebrow: "#a1a1aa",
    text: { primary: "#ffffff", secondary: "#a1a1aa", tertiary: "#52525b" },
  },
  {
    id: 7,
    name: "Deep Crimson",
    description: "Nero rossato, blob rosso, glass carminio. Esclusivo, audace, impattante.",
    previewColors: ["#0c0505", "#ef4444", "#f87171"],
    bodyBg: "#0c0505",
    blobs: [
      { color: "rgba(239,68,68,0.32)", top: "-8%", left: "50%", size: 720 },
      { color: "rgba(185,28,28,0.20)", top: "68%", left: "78%", size: 480 },
    ],
    card: { bg: "rgba(239,68,68,0.06)", border: "rgba(239,68,68,0.16)", blur: 30 },
    accent: { primary: "#ef4444", light: "#f87171", muted: "rgba(239,68,68,0.12)" },
    button: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    eyebrow: "#f87171",
    text: { primary: "#fff5f5", secondary: "#b09797", tertiary: "#7a6363" },
  },
  {
    id: 8,
    name: "Violet Abyss",
    description: "Violetto quasi nero, blob viola saturo, glass profondo. Crypto-native premium.",
    previewColors: ["#060410", "#8b5cf6", "#c4b5fd"],
    bodyBg: "#060410",
    blobs: [
      { color: "rgba(139,92,246,0.42)", top: "-10%", left: "50%", size: 780 },
      { color: "rgba(109,40,217,0.25)", top: "65%", left: "22%", size: 520 },
    ],
    card: { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.22)", blur: 30 },
    accent: { primary: "#8b5cf6", light: "#c4b5fd", muted: "rgba(139,92,246,0.15)" },
    button: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    eyebrow: "#c4b5fd",
    text: { primary: "#faf5ff", secondary: "#b0a0c8", tertiary: "#7c6a8f" },
  },
  {
    id: 9,
    name: "Copper",
    description: "Nero caldo, blob ambra/rame, glass bronzato. Caldo, accessibile, moderno.",
    previewColors: ["#0d0807", "#fb923c", "#fdba74"],
    bodyBg: "#0d0807",
    blobs: [
      { color: "rgba(251,146,60,0.32)", top: "-8%", left: "50%", size: 720 },
      { color: "rgba(217,119,6,0.20)", top: "70%", left: "75%", size: 480 },
    ],
    card: { bg: "rgba(251,146,60,0.06)", border: "rgba(251,146,60,0.18)", blur: 30 },
    accent: { primary: "#fb923c", light: "#fdba74", muted: "rgba(251,146,60,0.12)" },
    button: "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
    eyebrow: "#fdba74",
    text: { primary: "#fff8f0", secondary: "#b09880", tertiary: "#7a6555" },
  },
  {
    id: 10,
    name: "Arctic",
    description: "Navy freddo, blob celeste ghiaccio, glass azzurro. Preciso, clinico, Apple crypto.",
    previewColors: ["#050c14", "#38bdf8", "#7dd3fc"],
    bodyBg: "#050c14",
    blobs: [
      { color: "rgba(125,211,252,0.28)", top: "-8%", left: "50%", size: 730 },
      { color: "rgba(56,189,248,0.18)", top: "68%", left: "22%", size: 520 },
    ],
    card: { bg: "rgba(125,211,252,0.06)", border: "rgba(125,211,252,0.16)", blur: 35 },
    accent: { primary: "#38bdf8", light: "#7dd3fc", muted: "rgba(56,189,248,0.12)" },
    button: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    eyebrow: "#7dd3fc",
    text: { primary: "#f0f9ff", secondary: "#93b8c8", tertiary: "#5a7888" },
  },
];
