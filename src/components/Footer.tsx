"use client";

import React from "react";
import { OriaLogo } from "./OriaLogo";
import { useAccent } from "@/context/AccentContext";
import { Github, MessageSquare, Terminal, FileText, Heart, ExternalLink } from "lucide-react";

export function Footer() {
  const { activeAccent } = useAccent();

  return (
    <footer className="bg-[#0F0F11] border-t border-[#2A2A32] pt-14 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <OriaLogo size={26} />
              <span className="font-semibold text-base tracking-tight text-[#EEEEF2]">
                Oria Browser
              </span>
            </div>
            <p className="text-xs text-[#A0A0AA] leading-relaxed">
              Your Browser, Your Rules.
              <br />
              Entwickelt von{" "}
              <span className="text-[#EEEEF2] font-medium">M26 Software</span>.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[10px] font-mono text-[#72727E]">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: activeAccent.hex }}
              />
              <span>100% Rust &amp; CEF 156 (OSR)</span>
            </div>
          </div>

          {/* Links Column 1: Produkt & Architektur */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#72727E]">
              Architektur
            </h4>
            <ul className="space-y-2 text-[#A0A0AA]">
              <li>
                <a href="#philosophy" className="hover:text-[#EEEEF2] transition-colors">
                  Design-Philosophie
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#EEEEF2] transition-colors">
                  Spaces &amp; Vertical Tabs
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#EEEEF2] transition-colors">
                  CEF 156 Off-Screen Rendering
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#EEEEF2] transition-colors">
                  egui &amp; wgpu Immediate-Mode
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Ressourcen & Open Source */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#72727E]">
              Open Source
            </h4>
            <ul className="space-y-2 text-[#A0A0AA]">
              <li>
                <a
                  href="https://github.com/m26software/oria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EEEEF2] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aur.archlinux.org/packages/oria-browser-bin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EEEEF2] transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Arch Linux (AUR)</span>
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="hover:text-[#EEEEF2] transition-colors"
                >
                  Roadmap &amp; Milestones
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/m26software/oria/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EEEEF2] transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>MIT / Apache 2.0 Lizenz</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Community & M26 Software */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#72727E]">
              Community
            </h4>
            <ul className="space-y-2 text-[#A0A0AA]">
              <li>
                <a
                  href="https://discord.gg/m26software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EEEEF2] transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discord Community</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/m26software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EEEEF2] transition-colors"
                >
                  M26 Software Organisation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/m26software/oria/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EEEEF2] transition-colors"
                >
                  Issue Tracker &amp; Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2A2A32] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#72727E] text-[11px]">
          <div>
            © {new Date().getFullYear()} M26 Software. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono">Linux-First · Wayland &amp; X11</span>
            <span className="w-1 h-1 rounded-full bg-[#2A2A32]" />
            <span>Dual-licensed under MIT or Apache-2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
