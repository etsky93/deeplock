import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepLock — Professional crypto custody",
  description:
    "DeepLock provides institutional-grade custody for your cryptocurrencies. Cold storage, multi-signature, and insurance coverage — accessible to everyone.",
  keywords: ["crypto custody", "bitcoin custody", "cold storage", "secure crypto", "DeepLock"],
  openGraph: {
    title: "DeepLock — Professional crypto custody",
    description:
      "Institutional custody for individuals and businesses. Security, transparency, simplicity.",
    url: "https://deeplock.co",
    siteName: "DeepLock",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
