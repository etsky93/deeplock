"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a crypto custody service?",
    answer:
      "Crypto custody is the professional safekeeping of cryptocurrencies. Unlike a personal wallet or exchange, a professional custodian manages private key security with institutional-grade standards.",
  },
  {
    question: "Is DeepLock an exchange?",
    answer:
      "No. DeepLock is exclusively a custody service. We don't offer trading, we don't lend your assets, and we don't give investment advice. We custody — with maximum seriousness.",
  },
  {
    question: "How are my cryptocurrencies protected?",
    answer:
      "Air-gapped cold storage (never connected to the internet), multi-signature access requiring multiple independent keys. SOC1/SOC2 certified infrastructure with full insurance coverage.",
  },
  {
    question: "Can I withdraw my crypto at any time?",
    answer:
      "Yes. Your crypto is always yours. The withdrawal process follows standard security procedures that take a few business hours to complete.",
  },
  {
    question: "How does identity verification work?",
    answer:
      "KYC is legally required and handled digitally. It requires a valid ID and takes just a few minutes. It's guided, simple, and fully compliant with MiCA regulations.",
  },
  {
    question: "How does the insurance coverage work?",
    answer:
      "The custodied assets are covered by an insurance policy specific to digital assets. We are the only Italian operator with this coverage. Full details are available in our documentation.",
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
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: textPrimary }}>
            Have questions?
          </h2>
          <p className="mt-4 text-base" style={{ color: textSecondary }}>
            Answers to the most common questions about professional crypto custody.
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
