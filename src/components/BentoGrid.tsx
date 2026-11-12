"use client";

import React, { useState } from "react";
import { useAccent } from "@/context/AccentContext";
import {
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Command,
  Activity,
  HardDrive,
  Database,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkle,
} from "lucide-react";

export function BentoGrid() {
  const { activeAccent } = useAccent();
  const [tabLayout, setTabLayout] = useState<"vertical" | "horizontal">("vertical");
  const [activeTabSpace, setActiveTabSpace] = useState<number>(0);

  const spacesDemo = [
    { name: "Personal", color: activeAccent.hex, tabs: ["GitHub Dashboard", "News Feed", "Audio"] },
    { name: "Development", color: "#A9C5E8", tabs: ["crates.io", "PR Review #42", "Localhost:3000"] },
    { name: "Research", color: "#AFC7B1", tabs: ["Chromium OSR Docs", "Rust Memory Safety"] },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-xs font-mono text-[#A0A0AA] mb-4">
          <Workflow className="w-3.5 h-3.5" style={{ color: activeAccent.hex }} />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EEEEF2] mb-4">
          Gebaut für Entwickler & Fokus-Worker
        </h2>
        <p className="text-sm sm:text-base text-[#A0A0AA]">
          Jede Schicht von Oria wurde von Grund auf in Rust entworfen, um die Trägheit
          moderner Web-Browser durch kompromisslose native Effizienz zu ersetzen.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Rust-Native Immediate-Mode UI (Spans 2 cols on LG) */}
        <div className="lg:col-span-2 bg-[#202026] hover:bg-[#202026]/90 border border-[#2A2A32] rounded-[8px] p-6 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-8 h-8 rounded-[4px] flex items-center justify-center bg-[#19191D] border border-[#2A2A32]"
              >
                <Cpu className="w-4 h-4" style={{ color: activeAccent.hex }} />
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[#AFC7B1]">
                egui + wgpu
              </span>
            </div>

            <h3 className="text-lg font-semibold text-[#EEEEF2] mb-2">
              Rust-Native Immediate-Mode UI
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0AA] leading-relaxed mb-6">
              Keine HTML/JS-Browser-Shell, kein Electron-Unterbau. Das UI rendert mit 60 FPS
              in reiner Hardware-Beschleunigung direkt über Vulkan/OpenGL. Minimale RAM-Auslastung
              und null Render-Lag.
            </p>
          </div>

          {/* Visual Benchmark Comparison */}
          <div className="bg-[#19191D] border border-[#2A2A32] rounded-[6px] p-4 font-mono text-xs space-y-4">
            <div className="flex items-center justify-between text-[11px] text-[#72727E] pb-2 border-b border-[#2A2A32]">
              <span>Memory Footprint (Idle Startup)</span>
              <span className="text-[#EEEEF2]">Linux x86_64</span>
            </div>

            {/* Oria Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#EEEEF2] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
                  Oria Browser (Rust + CEF OSR)
                </span>
                <span className="text-[#AFC7B1] font-bold">~140 MB</span>
              </div>
              <div className="w-full bg-[#131316] h-2 rounded-full overflow-hidden border border-[#2A2A32]">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: "22%", backgroundColor: activeAccent.hex }}
                />
              </div>
            </div>

            {/* Electron Browser Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#72727E]">Standard Electron / Web-Shell Browser</span>
                <span className="text-[#DDB2C2]">~850 MB</span>
              </div>
              <div className="w-full bg-[#131316] h-2 rounded-full overflow-hidden border border-[#2A2A32]">
                <div className="h-full rounded-full bg-[#DDB2C2]/40" style={{ width: "88%" }} />
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] text-[#72727E]">
              <span>Frametime: &lt; 0.5ms per frame</span>
              <span className="text-[#AFC7B1]">✓ 60.0 FPS locked</span>
            </div>
          </div>
        </div>

        {/* Card 2: Spaces & Vertical Tabs */}
        <div className="bg-[#202026] hover:bg-[#202026]/90 border border-[#2A2A32] rounded-[8px] p-6 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded-[4px] flex items-center justify-center bg-[#19191D] border border-[#2A2A32]">
                <Layers className="w-4 h-4 text-[#A9C5E8]" />
              </div>
              <div className="flex items-center gap-1 bg-[#19191D] p-0.5 rounded-[4px] border border-[#2A2A32] text-[10px] font-mono">
                <button
                  onClick={() => setTabLayout("vertical")}
                  className={`px-1.5 py-0.5 rounded-[3px] transition-colors ${
                    tabLayout === "vertical" ? "bg-[#202026] text-[#EEEEF2]" : "text-[#72727E]"
                  }`}
                >
                  Vertikal
                </button>
                <button
                  onClick={() => setTabLayout("horizontal")}
                  className={`px-1.5 py-0.5 rounded-[3px] transition-colors ${
                    tabLayout === "horizontal" ? "bg-[#202026] text-[#EEEEF2]" : "text-[#72727E]"
                  }`}
                >
                  Horizontal
                </button>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#EEEEF2] mb-2">
              Spaces & Vertikale Tabs
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0AA] leading-relaxed mb-4">
              Vollständige Workspace-Isolation mit getrennten Cookie-Silos. Wechsel mit einem
              Tastenkürzel zwischen Arbeit, Recherche und Freizeit.
            </p>
          </div>

          {/* Interactive Spaces Simulator */}
          <div className="bg-[#19191D] border border-[#2A2A32] rounded-[6px] p-3 text-xs">
            {/* Space pills */}
            <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-[#2A2A32]">
              {spacesDemo.map((space, idx) => (
                <button
                  key={space.name}
                  onClick={() => setActiveTabSpace(idx)}
                  className={`px-2 py-1 rounded-[4px] text-[11px] font-medium transition-all ${
                    activeTabSpace === idx
                      ? "bg-[#202026] text-[#EEEEF2] border border-[#2A2A32]"
                      : "text-[#72727E] hover:text-[#A0A0AA]"
                  }`}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mr-1.5"
                    style={{ backgroundColor: space.color }}
                  />
                  {space.name}
                </button>
              ))}
            </div>

            {/* Tab layout visual */}
            <div className="space-y-1 font-mono text-[11px]">
              {spacesDemo[activeTabSpace].tabs.map((tab, i) => (
                <div
                  key={tab}
                  className={`flex items-center justify-between px-2 py-1 rounded-[4px] ${
                    i === 0
                      ? "bg-[#202026] text-[#EEEEF2] border-l-2"
                      : "text-[#72727E] hover:bg-[#202026]/40"
                  }`}
                  style={{
                    borderLeftColor: i === 0 ? spacesDemo[activeTabSpace].color : "transparent",
                  }}
                >
                  <span className="truncate">{tab}</span>
                  {i === 0 && <span className="text-[9px] text-[#AFC7B1]">Aktiv</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Native AI Companion */}
        <div className="bg-[#202026] hover:bg-[#202026]/90 border border-[#2A2A32] rounded-[8px] p-6 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded-[4px] flex items-center justify-center bg-[#19191D] border border-[#2A2A32]">
                <Sparkles className="w-4 h-4 text-[#E8D9A2]" />
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[#E8D9A2]">
                Built-in Context
              </span>
            </div>

            <h3 className="text-lg font-semibold text-[#EEEEF2] mb-2">
              Native AI Companion
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0AA] leading-relaxed mb-4">
              Keine Add-on-Sammlung nötig. One-Click &apos;Summarize Page&apos;, &apos;Explain Concept&apos; und
              lokale Kontextabfragen direkt im UI integriert – ohne Third-Party Tracking.
            </p>
          </div>

          {/* AI command prompt preview */}
          <div className="bg-[#19191D] border border-[#2A2A32] rounded-[6px] p-3 text-xs space-y-2">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-[4px] bg-[#131316] border border-[#2A2A32] font-mono text-[11px] text-[#EEEEF2]">
              <span className="text-[#E8D9A2]">/</span>
              <span>summarize --key-findings</span>
            </div>
            <div className="text-[11px] text-[#A0A0AA] bg-[#202026] p-2 rounded-[4px] border border-[#2A2A32]/60 leading-relaxed">
              &quot;Erkenntnisse aus Seite extrahiert. 3 Kernpunkte gebildet ohne Server-Logging.&quot;
            </div>
          </div>
        </div>

        {/* Card 4: 100% Local & Privacy by Default */}
        <div className="bg-[#202026] hover:bg-[#202026]/90 border border-[#2A2A32] rounded-[8px] p-6 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded-[4px] flex items-center justify-center bg-[#19191D] border border-[#2A2A32]">
                <ShieldCheck className="w-4 h-4 text-[#AFC7B1]" />
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[#AFC7B1]">
                Zero Cloud Sync
              </span>
            </div>

            <h3 className="text-lg font-semibold text-[#EEEEF2] mb-2">
              100% Local & Privacy by Default
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0AA] leading-relaxed mb-4">
              Lokale SQLite-Speicherung mit WAL-Modus für Sessions, Verlauf und Lesezeichen.
              Keine Zwangs-Accounts, keine Telemetrie, Private-Spaces ohne Schreibvorgänge.
            </p>
          </div>

          {/* SQLite Schema preview */}
          <div className="bg-[#19191D] border border-[#2A2A32] rounded-[6px] p-3 font-mono text-[11px] text-[#A0A0AA] space-y-1">
            <div className="flex items-center gap-1.5 text-[#EEEEF2] pb-1 border-b border-[#2A2A32]">
              <Database className="w-3.5 h-3.5 text-[#AFC7B1]" />
              <span>~/.config/oria/oria.db</span>
            </div>
            <div className="text-[10px] text-[#72727E] pt-1">
              ├── tbl_spaces (isolated cookies)
            </div>
            <div className="text-[10px] text-[#72727E]">
              ├── tbl_history_wal (local search index)
            </div>
            <div className="text-[10px] text-[#72727E]">
              └── tbl_bookmarks (encrypted vault)
            </div>
          </div>
        </div>

        {/* Card 5: Power-User Ergonomie */}
        <div className="bg-[#202026] hover:bg-[#202026]/90 border border-[#2A2A32] rounded-[8px] p-6 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded-[4px] flex items-center justify-center bg-[#19191D] border border-[#2A2A32]">
                <Command className="w-4 h-4 text-[#DDB2C2]" />
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[#DDB2C2]">
                Keybindings
              </span>
            </div>

            <h3 className="text-lg font-semibold text-[#EEEEF2] mb-2">
              Power-User Ergonomie
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0AA] leading-relaxed mb-4">
              Jede Aktion lässt sich ohne Maus ausführen. Vollständige Tastatur-Navigation
              mit reaktionsschnellen Standard-Shortcuts und konfigurierbaren Hooks.
            </p>
          </div>

          {/* Keycaps Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-[#19191D] p-2 rounded-[4px] border border-[#2A2A32] flex items-center justify-between">
              <span className="text-[#72727E] text-[10px]">Neuer Tab</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#202026] text-[#EEEEF2] border border-[#32323C] text-[10px]">
                Ctrl+T
              </kbd>
            </div>
            <div className="bg-[#19191D] p-2 rounded-[4px] border border-[#2A2A32] flex items-center justify-between">
              <span className="text-[#72727E] text-[10px]">Tab schließen</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#202026] text-[#EEEEF2] border border-[#32323C] text-[10px]">
                Ctrl+W
              </kbd>
            </div>
            <div className="bg-[#19191D] p-2 rounded-[4px] border border-[#2A2A32] flex items-center justify-between">
              <span className="text-[#72727E] text-[10px]">AI Prompt</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#202026] text-[#EEEEF2] border border-[#32323C] text-[10px]">
                Ctrl+J
              </kbd>
            </div>
            <div className="bg-[#19191D] p-2 rounded-[4px] border border-[#2A2A32] flex items-center justify-between">
              <span className="text-[#72727E] text-[10px]">Reopen Tab</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#202026] text-[#EEEEF2] border border-[#32323C] text-[10px]">
                Ctrl+Shift+T
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
