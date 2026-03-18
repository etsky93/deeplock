import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepLock — Custodia crypto professionale",
  description:
    "DeepLock offre custodia istituzionale per le tue criptovalute. Cold storage, multi-firma e copertura assicurativa — accessibili a tutti.",
  keywords: ["crypto custody", "custodia bitcoin", "cold storage", "crypto sicura", "DeepLock"],
  openGraph: {
    title: "DeepLock — Custodia crypto professionale",
    description:
      "Custodia istituzionale per privati e aziende. Sicurezza, trasparenza, semplicità.",
    url: "https://deeplock.co",
    siteName: "DeepLock",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
