"use client";

import React, { useState } from "react";
import { useAccent } from "@/context/AccentContext";
import {
  Terminal,
  Code2,
  FolderTree,
  Copy,
  Check,
  Cpu,
  Layers,
  Shield,
  Box,
  Share2,
} from "lucide-react";

export function ArchitectureSpotlight() {
  const { activeAccent } = useAccent();
  const [activeTab, setActiveTab] = useState<"workspace" | "pipeline" | "build">("workspace");
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-xs font-mono text-[#A0A0AA] mb-4">
          <Terminal className="w-3.5 h-3.5" style={{ color: activeAccent.hex }} />
          <span>System Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EEEEF2] mb-4">
          100% Rust. Null Kompromisse.
        </h2>
        <p className="text-sm sm:text-base text-[#A0A0AA]">
          Oria trennt die Browser-Engine strikt von der Benutzeroberfläche.
          Das Chromium Embedded Framework rendert off-screen direkt in eine egui/wgpu-Textur.
        </p>
      </div>

      {/* Main Terminal / Architecture Box */}
      <div className="max-w-4xl mx-auto bg-[#0F0F11] border border-[#2A2A32] rounded-[8px] overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-[#131316] border-b border-[#2A2A32] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A32]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A32]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A32]" />
            </div>
            <span className="text-xs font-mono text-[#72727E]">oria-workspace/crates/</span>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 bg-[#19191D] p-1 rounded-[4px] border border-[#2A2A32]">
            <button
              onClick={() => setActiveTab("workspace")}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-[3px] transition-colors ${
                activeTab === "workspace"
                  ? "bg-[#202026] text-[#EEEEF2]"
                  : "text-[#72727E] hover:text-[#A0A0AA]"
              }`}
            >
              <FolderTree className="w-3 h-3" />
              <span>Workspace</span>
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-[3px] transition-colors ${
                activeTab === "pipeline"
                  ? "bg-[#202026] text-[#EEEEF2]"
                  : "text-[#72727E] hover:text-[#A0A0AA]"
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>CEF 156 Pipeline</span>
            </button>
            <button
              onClick={() => setActiveTab("build")}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-[3px] transition-colors ${
                activeTab === "build"
                  ? "bg-[#202026] text-[#EEEEF2]"
                  : "text-[#72727E] hover:text-[#A0A0AA]"
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>Build & Run</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Workspace Tree */}
        {activeTab === "workspace" && (
          <div className="p-6 font-mono text-xs text-[#A0A0AA] leading-relaxed">
            <div className="text-[#72727E] mb-3">
              # Rust Cargo Workspace – Klare Trennung von UI, Engine und Persistenz
            </div>
            <pre className="text-[#EEEEF2] overflow-x-auto space-y-1">
              <div>
                <span className="text-[#A9C5E8]">oria-workspace/</span>
              </div>
              <div className="pl-4">├── Cargo.toml</div>
              <div className="pl-4">└── <span className="text-[#A9C5E8]">crates/</span></div>
              <div className="pl-8">
                ├── <span className="text-[#E8D9A2] font-semibold">oria-core/</span>
                <span className="text-[#72727E] ml-4"># Zustandsverwaltung, SQLite-Session-Store, Presets</span>
              </div>
              <div className="pl-8">
                ├── <span className="text-[#AFC7B1] font-semibold">oria-cef/</span>
                <span className="text-[#72727E] ml-5"># Chromium Embedded Framework 156 FFI &amp; OSR Render-Pipeline</span>
              </div>
              <div className="pl-8">
                ├── <span className="text-[#C0B0DD] font-semibold">oria-ui/</span>
                <span className="text-[#72727E] ml-6"># egui / wgpu Benutzeroberfläche, Spaces, Tabs &amp; Keybindings</span>
              </div>
              <div className="pl-8">
                └── <span className="text-[#DDB2C2] font-semibold">oria-app/</span>
                <span className="text-[#72727E] ml-5"># Haupteinstiegspunkt, Linux-Event-Loop (X11 &amp; Wayland)</span>
              </div>
            </pre>

            <div className="mt-6 pt-4 border-t border-[#2A2A32] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
              <div className="bg-[#131316] p-2.5 rounded-[4px] border border-[#2A2A32]">
                <div className="text-[#EEEEF2] font-semibold mb-0.5">Zero-Copy Buffer</div>
                <div className="text-[#72727E]">Direkter BGRA-Pixel-Transfer von Chromium zu GPU.</div>
              </div>
              <div className="bg-[#131316] p-2.5 rounded-[4px] border border-[#2A2A32]">
                <div className="text-[#EEEEF2] font-semibold mb-0.5">Thread Isolation</div>
                <div className="text-[#72727E]">CEF läuft in dedizierten Workern – UI bleibt immer bei 60 FPS.</div>
              </div>
              <div className="bg-[#131316] p-2.5 rounded-[4px] border border-[#2A2A32]">
                <div className="text-[#EEEEF2] font-semibold mb-0.5">SQLite WAL Engine</div>
                <div className="text-[#72727E]">Lokale Session-Wiederherstellung in unter 8 Millisekunden.</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: CEF 156 Pipeline */}
        {activeTab === "pipeline" && (
          <div className="p-6 font-mono text-xs text-[#A0A0AA] leading-relaxed">
            <div className="text-[#72727E] mb-3">
              // oria-cef/src/render_handler.rs — Minimal Overhead Hardware Texture Blit
            </div>
            <pre className="text-[#EEEEF2] bg-[#131316] p-4 rounded-[4px] border border-[#2A2A32] overflow-x-auto text-[11px] leading-normal">
              <span className="text-[#72727E]">// Implementierung des CEF OnPaint Callbacks für OSR</span>{"\n"}
              <span className="text-[#C0B0DD]">impl</span> CefRenderHandler <span className="text-[#C0B0DD]">for</span> OriaBrowserSurface {"{\n"}
              {"    "}<span className="text-[#C0B0DD]">fn</span> <span className="text-[#A9C5E8]">on_paint</span>(&amp;<span className="text-[#C0B0DD]">mut self</span>, _paint_type: PaintElementType, buffer: &amp;[<span className="text-[#E8D9A2]">u8</span>], width: <span className="text-[#E8D9A2]">u32</span>, height: <span className="text-[#E8D9A2]">u32</span>) {"{\n"}
              {"        "}<span className="text-[#72727E]">// Aktualisiere wgpu Texture ohne Zwischenspeicherung</span>{"\n"}
              {"        "}<span className="text-[#C0B0DD]">self</span>.wgpu_queue.<span className="text-[#A9C5E8]">write_texture</span>({"{\n"}
              {"            "}wgpu::ImageCopyTexture {"{\n"}
              {"                "}texture: &amp;<span className="text-[#C0B0DD]">self</span>.gpu_texture,{"\n"}
              {"                "}origin: wgpu::Origin3d::ZERO,{"\n"}
              {"                "}aspect: wgpu::TextureAspect::All,{"\n"}
              {"                "}mip_level: <span className="text-[#E8D9A2]">0</span>,{"\n"}
              {"            "}{"},\n"}
              {"            "}buffer,{"\n"}
              {"            "}wgpu::ImageDataLayout {"{ "}bytes_per_row: <span className="text-[#C0B0DD]">Some</span>(width * <span className="text-[#E8D9A2]">4</span>), ..Default::default() {"},\n"}
              {"            "}wgpu::Extent3d {"{ "}width, height, depth_or_array_layers: <span className="text-[#E8D9A2]">1</span> {"},\n"}
              {"        "}{"});\n"}
              {"    "}{"}\n"}
              {"}"}
            </pre>
          </div>
        )}

        {/* Tab Content 3: Build & Run */}
        {activeTab === "build" && (
          <div className="p-6 font-mono text-xs text-[#A0A0AA] leading-relaxed">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[#72727E]"># Oria aus dem Quellcode bauen (Linux x86_64)</div>
              <button
                onClick={() =>
                  copyToClipboard("cargo run -p oria-app --release")
                }
                className="flex items-center gap-1 px-2 py-1 rounded-[4px] bg-[#19191D] hover:bg-[#202026] text-[#EEEEF2] border border-[#2A2A32] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#AFC7B1]" />
                    <span className="text-[10px]">Kopiert!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span className="text-[10px]">Kopieren</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#131316] p-3.5 rounded-[4px] border border-[#2A2A32] text-[#EEEEF2] space-y-2 mb-4">
              <div className="text-[#72727E]"># 1. System-Abhängigkeiten (Debian/Ubuntu/Arch)</div>
              <div className="text-[#A9C5E8]">$ sudo pacman -S rustup libx11 libxcomposite libxdamage libxrandr</div>
              <div className="text-[#72727E] pt-2"># 2. Workspace kompilieren und starten</div>
              <div className="text-[#EEEEF2] font-semibold flex items-center gap-2">
                <span className="text-[#AFC7B1]">$</span>
                <span>cargo run -p oria-app --release</span>
              </div>
            </div>

            <div className="p-3 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[11px] text-[#A0A0AA] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#AFC7B1]" />
              <span>
                CEF 156 Minimal Distribution wird während des ersten Builds automatisch
                verifiziert und vorbereitet.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
