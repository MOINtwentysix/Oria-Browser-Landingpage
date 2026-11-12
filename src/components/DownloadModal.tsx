"use client";

import React, { useState } from "react";
import { useAccent } from "@/context/AccentContext";
import { X, Download, Terminal, Copy, Check, ShieldCheck, Box } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const { activeAccent } = useAccent();
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const options = [
    {
      id: "aur",
      title: "Arch Linux (AUR)",
      desc: "Offizielles Binary-Paket im Arch User Repository",
      command: "yay -S oria-browser-bin",
      tag: "Empfohlen für Arch / Manjaro",
    },
    {
      id: "deb",
      title: "Debian / Ubuntu Package",
      desc: "Signiertes .deb Paket für x86_64 Systeme",
      command: "wget https://github.com/m26software/oria/releases/download/v0.1.0/oria_0.1.0_amd64.deb && sudo dpkg -i oria_0.1.0_amd64.deb",
      tag: "Debian 12+ / Ubuntu 22.04+",
    },
    {
      id: "tar",
      title: "Universal Standalone Binary",
      desc: "Portabler Tarball mit CEF 156 Runtime & Assets",
      command: "curl -LO https://github.com/m26software/oria/releases/download/v0.1.0/oria-linux-x86_64.tar.gz && tar -xzf oria-linux-x86_64.tar.gz",
      tag: "Alle Linux-Distributionen",
    },
    {
      id: "cargo",
      title: "Aus Quellcode via Cargo",
      desc: "Direkte Installation des Rust Workspace binaries",
      command: "cargo install --git https://github.com/m26software/oria oria-app",
      tag: "Rust 1.84+ & C++ Toolchain",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-[#0F0F11] border border-[#2A2A32] rounded-[12px] shadow-2xl overflow-hidden"
        style={{
          boxShadow: `0 20px 40px -15px ${activeAccent.hex}22`,
        }}
      >
        {/* Header */}
        <div className="bg-[#131316] border-b border-[#2A2A32] px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="p-1.5 rounded-[4px]"
              style={{ backgroundColor: `${activeAccent.hex}22` }}
            >
              <Download className="w-4 h-4" style={{ color: activeAccent.hex }} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#EEEEF2]">
                Oria Browser für Linux herunterladen
              </h3>
              <p className="text-[11px] font-mono text-[#72727E]">
                Version v0.1 Pre-Alpha · 64-Bit x86_64
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="p-1 rounded-[4px] text-[#72727E] hover:text-[#EEEEF2] hover:bg-[#202026] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body list of distribution packages */}
        <div className="p-5 space-y-3.5 max-h-[75vh] overflow-y-auto">
          {options.map((opt) => (
            <div
              key={opt.id}
              className="bg-[#19191D] border border-[#2A2A32] rounded-[6px] p-3.5 hover:border-[#32323C] transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-[#EEEEF2] flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-[#A9C5E8]" />
                  {opt.title}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[3px] bg-[#202026] text-[#A0A0AA] border border-[#2A2A32]">
                  {opt.tag}
                </span>
              </div>
              <p className="text-[11px] text-[#A0A0AA] mb-2">{opt.desc}</p>
              <div className="flex items-center justify-between gap-2 bg-[#131316] border border-[#2A2A32] rounded-[4px] px-2.5 py-1.5 font-mono text-[11px] text-[#EEEEF2]">
                <span className="truncate text-[#A9C5E8]">$ {opt.command}</span>
                <button
                  onClick={() => copyText(opt.command, opt.id)}
                  className="shrink-0 p-1 text-[#72727E] hover:text-[#EEEEF2] transition-colors"
                  title="Befehl kopieren"
                >
                  {copiedCmd === opt.id ? (
                    <Check className="w-3.5 h-3.5 text-[#AFC7B1]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}

          {/* Verification info note */}
          <div className="p-3 rounded-[6px] bg-[#19191D] border border-[#2A2A32] flex items-center gap-2.5 text-[11px] text-[#72727E]">
            <ShieldCheck className="w-4 h-4 text-[#AFC7B1] shrink-0" />
            <span>
              Alle Binaries sind mit GPG signiert. SHA-256 Prüfsummen sind im offiziellen
              GitHub Release hinterlegt.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#131316] border-t border-[#2A2A32] px-5 py-3 flex items-center justify-between text-xs">
          <a
            href="https://github.com/m26software/oria/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A0A0AA] hover:text-[#EEEEF2] underline underline-offset-4 font-mono text-[11px]"
          >
            Alle Releases auf GitHub ansehen →
          </a>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-[4px] bg-[#202026] hover:bg-[#282830] text-[#EEEEF2] border border-[#2A2A32] text-xs font-medium transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
