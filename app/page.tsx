import Link from "next/link";
import { themes } from "./themes";

export default function GalleryPage() {
  return (
    <div className="min-h-screen px-6 py-16 md:py-24" style={{ background: "#0a0a0a" }}>
      {/* Header */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#a1a1aa",
          }}
        >
          DeepLock · Design Proposals
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          10 proposte di design
        </h1>
        <p className="text-base text-zinc-400">
          Clicca su una proposta per vedere la landing page completa. Poi dimmi il numero che preferisci.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme) => (
          <Link key={theme.id} href={`/v/${theme.id}`} className="group block">
            <div
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: theme.bodyBg,
                border: `1px solid ${theme.card.border}`,
              }}
            >
              {/* Mini blob preview */}
              {theme.blobs.slice(0, 1).map((blob, i) => (
                <div
                  key={i}
                  className="pointer-events-none absolute"
                  style={{
                    top: "-30%",
                    left: "50%",
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: blob.color,
                    filter: "blur(40px)",
                    transform: "translate(-50%, 0)",
                  }}
                />
              ))}

              {/* Content */}
              <div className="relative z-10">
                {/* Number */}
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold"
                  style={{
                    background: theme.accent.muted,
                    border: `1px solid ${theme.card.border}`,
                    color: theme.accent.light,
                  }}
                >
                  {String(theme.id).padStart(2, "0")}
                </div>

                {/* Name */}
                <h2
                  className="mb-1.5 text-base font-semibold"
                  style={{ color: theme.text.primary }}
                >
                  {theme.name}
                </h2>

                {/* Description */}
                <p className="mb-5 text-xs leading-relaxed" style={{ color: theme.text.secondary }}>
                  {theme.description}
                </p>

                {/* Color swatches */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {theme.previewColors.map((color) => (
                      <div
                        key={color}
                        className="h-5 w-5 rounded-full"
                        style={{ background: color, border: "1px solid rgba(255,255,255,0.15)" }}
                      />
                    ))}
                  </div>
                  <span
                    className="text-xs font-medium transition-all group-hover:opacity-100"
                    style={{ color: theme.accent.light, opacity: 0.6 }}
                  >
                    Vedi →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-zinc-600">
        Dimmi il numero e implementiamo quello definitivo come landing page principale.
      </p>
    </div>
  );
}
