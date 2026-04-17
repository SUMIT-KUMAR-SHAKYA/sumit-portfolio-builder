import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AdminProvider } from "@/context/AdminContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased bg-[#030712] text-[#f8fafc] w-full min-h-screen relative overflow-x-hidden">
        {/* Floating Lines Master Background */}
        <div className="fixed inset-0 z-[-10] pointer-events-none floating-lines-bg opacity-30" />
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
