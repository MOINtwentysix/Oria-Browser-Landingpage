"use client";

import React from "react";
import { useAccent } from "@/context/AccentContext";
import { BrowserMockup } from "./BrowserMockup";
import { AccentSwitcher } from "./AccentSwitcher";
import { Download, Github, Terminal, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";

export function Hero({ onDownloadClick }: { onDownloadClick?: () => void }) {
  const { activeAccent } = useAccent();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background subtle illumination based on active accent */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[340px] rounded-full blur-[120px] opacity-15 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${activeAccent.hex} 0%, transparent 70%)`,
        }}
      />

      {/* Pill Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-xs font-mono text-[#A0A0AA] shadow-sm">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: activeAccent.hex }}
          />
          <span className="text-[#EEEEF2] font-medium">Native Rust UI + Chromium Engine</span>
          <span className="text-[#2A2A32]">/</span>
          <span className="text-[#72727E]">Zero Electron Overhead</span>
        </div>
      </div>

      {/* Main Headline & Subtitle */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EEEEF2] mb-6 leading-[1.08]">
          Your Browser, <br className="hidden sm:inline" />
          <span
            className="transition-colors duration-500"
            style={{ color: activeAccent.hex }}
          >
            Your Rules.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#A0A0AA] max-w-2xl mx-auto leading-relaxed">
          Ein kompromisslos schneller, lokaler und AI-first Webbrowser. Entwickelt mit
          100% Rust, CEF 156 und SQLite für absolute Kontrolle über deinen Arbeitsbereich.
        </p>

        {/* Dual Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          {/* Primary CTA */}
          <button
            onClick={onDownloadClick}
            className="w-full sm:w-auto relative group flex items-center justify-center gap-2.5 px-6 py-3 rounded-[4px] bg-[#EEEEF2] text-[#0F0F11] font-medium text-sm transition-all duration-150 hover:bg-white shadow-sm"
            style={{
              boxShadow: `0 0 20px -5px ${activeAccent.hex}55`,
            }}
          >
            <Download className="w-4 h-4 text-[#0F0F11]" />
            <span>Download für Linux</span>
            <span className="text-xs px-1.5 py-0.5 rounded-[3px] bg-[#0F0F11]/10 font-mono">
              x86_64
            </span>
          </button>

          {/* Secondary Ghost Button */}
          <a
            href="https://github.com/m26software/oria"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#19191D] hover:bg-[#202026] text-[#EEEEF2] border border-[#2A2A32] font-medium text-sm transition-colors"
          >
            <Github className="w-4 h-4 text-[#A0A0AA]" />
            <span>View Source on GitHub</span>
          </a>
        </div>

        {/* Subtle Specs Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 mt-8 text-xs font-mono text-[#72727E]">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#AFC7B1]" />
            <span>CEF 156 OSR (60 FPS)</span>
          </span>
          <span className="text-[#2A2A32]">·</span>
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#A9C5E8]" />
            <span>Pure Rust egui / wgpu</span>
          </span>
          <span className="text-[#2A2A32]">·</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C0B0DD]" />
            <span>Zero Telemetry / SQLite</span>
          </span>
        </div>
      </div>

      {/* Browser Mockup Container */}
      <div className="mt-8 mb-10">
        <BrowserMockup />
      </div>

      {/* Live Accent Switcher Feature Bar */}
      <div className="mt-6">
        <AccentSwitcher />
      </div>
    </section>
  );
}
