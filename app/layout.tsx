import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
