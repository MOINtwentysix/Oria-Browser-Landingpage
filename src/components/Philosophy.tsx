"use client";

import React from "react";
import { useAccent } from "@/context/AccentContext";
import { Shield, Sparkles, Feather, EyeOff, Gauge, Zap } from "lucide-react";

export function Philosophy() {
  const { activeAccent } = useAccent();

  const principles = [
    {
      icon: Feather,
      title: "Subtle, Calm Design",
      subtitle: "Keine grellen Neon-Glows. Keine Ablenkung.",
      description:
        "Inspiriert von Werkzeugen wie Linear, Raycast und Arc. Ruhige Neutralgrau-Töne (#131316, #0F0F11) harmonieren mit matten Pastell-Akzenten für absolute Konzentration.",
    },
    {
      icon: Gauge,
      title: "Pure Native 60 FPS",
      subtitle: "Chromium Engine in Rust Immediate-Mode Shell.",
      description:
        "Keine träge Electron-Schicht, kein Web-UI-Bloat. CEF 156 rendert off-screen direkt in eine egui/wgpu-Pipeline mit unspürbaren Latenzen.",
    },
    {
      icon: Shield,
      title: "Lokale Daten-Souveränität",
      subtitle: "Dein Rechner. Deine SQLite-Datenbank.",
      description:
        "Verlauf, Lesezeichen und Cookies verbleiben verschlüsselt auf deiner Festplatte. Kein Cloud-Zwang, keine Profilerstellung, kein Telemetrie-Traffic.",
    },
  ];

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#2A2A32]/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Vision Statement */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-xs font-mono text-[#A0A0AA]">
            <Sparkles className="w-3.5 h-3.5" style={{ color: activeAccent.hex }} />
            <span>Design- &amp; Produktphilosophie</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EEEEF2] leading-tight">
            Gegen die Überfrachtung des modernen Webs.
          </h2>

          <p className="text-sm sm:text-base text-[#A0A0AA] leading-relaxed">
            Moderne Browser sind zu unübersichtlichen Betriebssystemen innerhalb des
            Betriebssystems geworden – vollgestopft mit Telemetrie, Web-UI-Lags und
            Zwangs-Accounts.
          </p>

          <p className="text-sm text-[#72727E] leading-relaxed">
            Oria bringt die Kontrolle zurück: Entwickelt von M26 Software mit dem Ziel,
            einen Desktop-Browser zu schaffen, der sich wie ein präzises, messerscharfes
            Werkzeug anfühlt.
          </p>

          <div className="pt-2">
            <div className="p-4 rounded-[6px] bg-[#19191D] border border-[#2A2A32] text-xs font-mono space-y-1">
              <div className="text-[#EEEEF2] font-semibold">Das M26 Software Versprechen:</div>
              <div className="text-[#A0A0AA]">1. 0% Electron · 100% Rust &amp; CEF</div>
              <div className="text-[#A0A0AA]">2. Lokale SQLite Datenhoheit</div>
              <div className="text-[#A0A0AA]">3. Keine erzwungenen Cloud-Services</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Core Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-4">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-[#202026] hover:bg-[#202026]/90 border border-[#2A2A32] rounded-[8px] p-5 sm:p-6 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[4px] bg-[#19191D] border border-[#2A2A32] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#EEEEF2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-[#EEEEF2]">
                        {p.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#72727E]">
                        #0{idx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#A9C5E8]">
                      {p.subtitle}
                    </div>
                    <p className="text-xs text-[#A0A0AA] pt-1 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
