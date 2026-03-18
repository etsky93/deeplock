export default function Footer() {
  return (
    <footer
      className="px-6 pb-12 pt-16"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.3)",
                }}
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
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Custodia professionale di criptovalute per privati e aziende. Un servizio Moneyside.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-600">
              Prodotto
            </p>
            <ul className="space-y-3">
              {["Come funziona", "Sicurezza", "Per le aziende", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-600">
              Legale
            </p>
            <ul className="space-y-3">
              {["Privacy Policy", "Termini di Servizio", "Cookie Policy", "Contatti"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Disclaimer */}
        <div className="mb-6 rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)" }}>
          <p className="text-xs leading-relaxed text-zinc-600">
            <strong className="font-medium text-zinc-500">Avvertenza legale:</strong> DeepLock è
            un servizio di custodia di criptovalute. Non offriamo consulenza finanziaria, non
            promettiamo rendimenti e non garantiamo guadagni. Le criptovalute sono asset volatili
            e il loro valore può aumentare o diminuire. DeepLock non è responsabile delle variazioni
            di valore del patrimonio custodito. Il servizio è conforme alle normative MiCA
            (Markets in Crypto-Assets Regulation) e alla normativa VASP italiana. La custodia
            operativa è fornita da CheckSig S.r.l., operatore regolamentato. DeepLock è un brand
            Moneyside S.r.l.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Moneyside S.r.l. — deeplock.co
          </p>
          <p className="text-xs text-zinc-700">
            Powered by{" "}
            <a
              href="https://checksig.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              CheckSig
            </a>{" "}
            infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
