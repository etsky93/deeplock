"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Cos'è un servizio di crypto custody?",
    answer:
      "La crypto custody è il servizio di custodia professionale di criptovalute. A differenza di un wallet personale o di un exchange, un custode professionale gestisce la sicurezza delle chiavi private con standard istituzionali.",
  },
  {
    question: "DeepLock è un exchange?",
    answer:
      "No. DeepLock è esclusivamente un servizio di custodia. Non offriamo trading, non prestiamo i tuoi asset, non ti diamo consigli di investimento. Custodiamo e basta — con la massima serietà.",
  },
  {
    question: "Come sono protette le mie criptovalute?",
    answer:
      "Cold storage air-gapped (mai connesso a internet), accesso multi-firma con più chiavi indipendenti. Infrastruttura certificata SOC1/SOC2 e coperta da assicurazione.",
  },
  {
    question: "Posso ritirare le mie crypto in qualsiasi momento?",
    answer:
      "Sì. Le tue crypto sono sempre tue. Il processo di ritiro segue procedure di sicurezza standard che richiedono alcune ore lavorative.",
  },
  {
    question: "Come funziona il processo di verifica dell'identità?",
    answer:
      "Il KYC è obbligatorio per legge ed è gestito in modo semplice e digitale. Richiede un documento d'identità valido e pochi minuti.",
  },
  {
    question: "Come funziona la copertura assicurativa?",
    answer:
      "Il patrimonio custodito è coperto da una polizza assicurativa specifica per asset digitali. Siamo l'unico operatore italiano con questa copertura.",
  },
];

interface FAQProps {
  accentLight?: string;
  cardBorder?: string;
  accentMuted?: string;
  textPrimary?: string;
  textSecondary?: string;
}

export default function FAQ({
  accentLight = "#818cf8",
  cardBorder = "rgba(99,102,241,0.2)",
  accentMuted = "rgba(99,102,241,0.06)",
  textPrimary = "#f4f4f5",
  textSecondary = "#a1a1aa",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: accentLight }}>
            Domande frequenti
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: textPrimary }}>
            Hai domande?
          </h2>
          <p className="mt-4 text-base" style={{ color: textSecondary }}>
            Rispondiamo alle domande più comuni sulla custodia professionale di criptovalute.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl transition-all duration-200"
              style={{
                background: openIndex === i ? accentMuted : "rgba(255,255,255,0.04)",
                border: openIndex === i ? `1px solid ${cardBorder}` : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="pr-4 text-sm font-medium md:text-base" style={{ color: textPrimary }}>
                  {faq.question}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke={openIndex === i ? accentLight : "#71717a"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? "200px" : "0px" }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: textSecondary }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
