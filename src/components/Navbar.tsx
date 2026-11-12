"use client";

import React, { useState, useEffect } from "react";
import { OriaLogo } from "./OriaLogo";
import { useAccent } from "@/context/AccentContext";
import { Download, Github, Star, Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export function Navbar({ onDownloadClick }: { onDownloadClick?: () => void }) {
  const { activeAccent } = useAccent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0F0F11]/90 backdrop-blur-md border-b border-[#2A2A32] shadow-sm shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <OriaLogo size={30} />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg tracking-tight text-[#EEEEF2] group-hover:text-white transition-colors">
                  Oria
                </span>
                <span className="text-[11px] font-mono tracking-tight px-1.5 py-0.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[#A0A0AA]">
                  v0.1 Pre-Alpha
                </span>
              </div>
            </a>
          </div>

          {/* Middle: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#19191D]/80 border border-[#2A2A32] px-2 py-1 rounded-[6px]">
            <a
              href="#philosophy"
              className="px-3 py-1.5 text-xs font-medium text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#202026] rounded-[4px] transition-colors"
            >
              Philosophie
            </a>
            <a
              href="#features"
              className="px-3 py-1.5 text-xs font-medium text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#202026] rounded-[4px] transition-colors"
            >
              Features
            </a>
            <a
              href="#architecture"
              className="px-3 py-1.5 text-xs font-medium text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#202026] rounded-[4px] transition-colors"
            >
              Architektur
            </a>
            <a
              href="#roadmap"
              className="px-3 py-1.5 text-xs font-medium text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#202026] rounded-[4px] transition-colors"
            >
              Roadmap
            </a>
          </nav>

          {/* Right: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* GitHub Stars */}
            <a
              href="https://github.com/m26software/oria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#A0A0AA] hover:text-[#EEEEF2] bg-[#19191D] hover:bg-[#202026] border border-[#2A2A32] rounded-[4px] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#EEEEF2]" />
              <span>GitHub</span>
              <span className="w-px h-3 bg-[#2A2A32]" />
              <Star className="w-3 h-3 text-[#E8D9A2] fill-[#E8D9A2]/40" />
              <span>1.2k</span>
            </a>

            {/* Download CTA */}
            <button
              onClick={onDownloadClick}
              className="group relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-[4px] bg-[#19191D] text-[#EEEEF2] border border-[#2A2A32] hover:bg-[#202026] transition-all duration-150 overflow-hidden"
              style={{
                borderColor: `${activeAccent.hex}44`,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: activeAccent.hex }}
              />
              <span className="relative z-10">Get Oria for Linux</span>
              <Download className="w-3.5 h-3.5 text-[#A0A0AA] group-hover:text-[#EEEEF2] transition-colors" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-[4px] text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#202026]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F11] border-b border-[#2A2A32] px-4 pt-2 pb-4 space-y-2">
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#19191D] rounded-[4px]"
          >
            Philosophie
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#19191D] rounded-[4px]"
          >
            Features
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#19191D] rounded-[4px]"
          >
            Architektur
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#19191D] rounded-[4px]"
          >
            Roadmap
          </a>
          <div className="pt-2 border-t border-[#2A2A32] flex flex-col gap-2">
            <a
              href="https://github.com/m26software/oria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 text-xs font-mono text-[#A0A0AA] bg-[#19191D] rounded-[4px]"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4 text-[#EEEEF2]" />
                github.com/m26software/oria
              </span>
              <span className="flex items-center gap-1 text-[#E8D9A2]">
                <Star className="w-3 h-3 fill-current" /> 1.2k
              </span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadClick?.();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-[4px] bg-[#19191D] text-[#EEEEF2] border border-[#2A2A32]"
              style={{ borderColor: activeAccent.hex }}
            >
              <Download className="w-3.5 h-3.5" />
              Get Oria for Linux
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
