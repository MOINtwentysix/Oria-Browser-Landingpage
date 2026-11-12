import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oria Browser — Your Browser, Your Rules",
  description:
    "Ein schneller, datenschutzorientierter, AI-first Desktop-Browser, entwickelt in 100% Rust mit Chromium Embedded Framework (CEF 156) in Off-Screen Rendering (OSR). Entwickelt von M26 Software.",
  keywords: [
    "Oria Browser",
    "Rust Browser",
    "Chromium CEF 156",
    "Off-Screen Rendering",
    "egui",
    "wgpu",
    "M26 Software",
    "Privacy Browser",
    "AI-first Browser",
  ],
  authors: [{ name: "M26 Software" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#131316] text-[#EEEEF2] antialiased selection:bg-[#C0B0DD] selection:text-[#0F0F11]">
        {children}
      </body>
    </html>
  );
}
