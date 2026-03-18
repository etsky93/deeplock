import WaitlistForm from "./WaitlistForm";

export default function CTASection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Background glows */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(79,70,229,1) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <div className="relative z-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Accesso anticipato
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Pronto a custodire le tue crypto
              <br />
              come si deve?
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base text-zinc-400">
              Entra in lista d&apos;attesa. Sarai tra i primi a accedere a DeepLock quando apriremo
              al pubblico.
            </p>

            <div className="flex justify-center">
              <WaitlistForm />
            </div>

            <p className="mt-6 text-xs text-zinc-600">
              Nessuno spam. Solo un&apos;email quando sei pronto ad accedere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
