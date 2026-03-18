export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
      style={{
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10V7a5 5 0 0 1 10 0v3"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="10"
              width="18"
              height="12"
              rx="3"
              stroke="#818cf8"
              strokeWidth="2"
            />
            <circle cx="12" cy="16" r="1.5" fill="#818cf8" />
          </svg>
        </div>
        <span className="text-base font-semibold tracking-tight text-white">DeepLock</span>
      </div>

      <a
        href="#waitlist"
        className="rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" }}
      >
        Entra in lista d&apos;attesa
      </a>
    </nav>
  );
}
