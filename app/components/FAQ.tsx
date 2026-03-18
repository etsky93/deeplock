"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Cos'è un servizio di crypto custody?",
    answer:
      "La crypto custody è il servizio di custodia professionale di criptovalute. A differenza di un wallet personale o di un exchange, un custode professionale gestisce la sicurezza delle chiavi private per conto del cliente, con standard di sicurezza istituzionali.",
  },
  {
    question: "DeepLock è un exchange?",
    answer:
      "No. DeepLock è esclusivamente un servizio di custodia. Non offriamo trading, non prestiamo i tuoi asset, non ti diamo consigli di investimento. Custodiamo e basta — con la massima serietà.",
  },
  {
    question: "Come sono protette le mie criptovalute?",
    answer:
      "Le tue crypto sono custodite in cold storage air-gapped (mai connesso a internet), con accesso multi-firma che richiede più chiavi indipendenti. L'infrastruttura è certificata SOC1/SOC2 e coperta da assicurazione.",
  },
  {
    question: "Posso ritirare le mie crypto in qualsiasi momento?",
    answer:
      "Sì. Le tue crypto sono sempre tue e puoi ritirarle in qualsiasi momento. Il processo di ritiro segue procedure di sicurezza standard che richiedono alcune ore lavorative per essere completate.",
  },
  {
    question: "Come funziona il processo di verifica dell'identità?",
    answer:
      "Il KYC (Know Your Customer) è obbligatorio per legge ed è gestito in modo semplice e digitale. Richiede un documento d'identità valido e pochi minuti. È necessario per la conformità normativa MiCA.",
  },
  {
    question: "Come funziona la copertura assicurativa?",
    answer:
      "Il patrimonio custodito è coperto da una polizza assicurativa specifica per asset digitali. In partnership con CheckSig, siamo l'unico operatore italiano con questa copertura. I dettagli completi sono disponibili nella documentazione.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Domande frequenti
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Hai domande?
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Rispondiamo alle domande più comuni sulla custodia professionale di criptovalute.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl transition-all duration-200"
              style={{
                background:
                  openIndex === i ? "rgba(99,102,241,0.06)" : "rgba(255,255,255,0.04)",
                border:
                  openIndex === i
                    ? "1px solid rgba(99,102,241,0.2)"
                    : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="pr-4 text-sm font-medium text-white md:text-base">
                  {faq.question}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke={openIndex === i ? "#818cf8" : "#71717a"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
