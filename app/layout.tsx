import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumit Kumar Shakya — Full-Stack Developer",
  description:
    "Portfolio of Sumit Kumar Shakya — Full-Stack & AI/ML Engineer. Building impactful web apps like Labor Connect and Movie Sentiment Analyzer.",
  keywords: ["portfolio", "full-stack", "Next.js", "React", "AI/ML", "developer"],
  authors: [{ name: "Sumit Kumar Shakya" }],
  openGraph: {
    title: "Sumit Kumar Shakya — Full-Stack Developer",
    description: "Full-Stack & AI/ML Engineer building impactful products.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sumitshakya.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Kumar Shakya — Full-Stack Developer",
    description: "Full-Stack & AI/ML Engineer building impactful products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#030712] text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
