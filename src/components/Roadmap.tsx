"use client";

import React from "react";
import { useAccent } from "@/context/AccentContext";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  GitPullRequest,
  ShieldCheck,
  Scale,
  ArrowUpRight,
  Milestone,
} from "lucide-react";

export function Roadmap() {
  const { activeAccent } = useAccent();

  const milestones = [
    {
      version: "Milestone 0",
      title: "Proof of Concept & OSR Pipeline",
      status: "completed",
      description:
        "Chromium Embedded Framework 156 Off-Screen Rendering Pipeline integriert. Raw BGRA Texture Blit in egui & wgpu mit konstant 60 FPS realisiert.",
      badge: "Abgeschlossen",
    },
    {
      version: "Milestone 1",
      title: "Core Navigation & Local SQLite Storage",
      status: "completed",
      description:
        "Omnibox-URL-Eingabe, Navigationshistorie, Tab-Lifecycle und lokale SQLite-Persistenz im WAL-Modus ohne Cloud-Abhängigkeiten fertiggestellt.",
      badge: "Abgeschlossen",
    },
    {
      version: "Milestone 2",
      title: "Spaces, Workspace Isolation & Presets",
      status: "current",
      description:
        "Multi-Space-Verwaltung mit separaten Cookie-Silos. Die 8 offiziellen oria-core Theme-Presets und vertikale Tab-Listen voll integriert.",
      badge: "Aktuell (v0.1 Pre-Alpha)",
    },
    {
      version: "Milestone 3",
      title: "Embedded AI Companion & Local Context",
      status: "upcoming",
      description:
        "Direkte Kontext-Abfragen über lokale LLMs und sichere API-Provider. In-Browser One-Click 'Summarize' und 'Explain' ohne Drittanbieter-Tracking.",
      badge: "In Arbeit",
    },
    {
      version: "Milestone 4",
      title: "Wayland Hardening & Extension API",
      status: "planned",
      description:
        "Native Wayland-Subsurfaces ohne XWayland-Overhead, sandboxed WebExtensions-Unterstützung und Multi-Window-Architektur.",
      badge: "Geplant",
    },
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-xs font-mono text-[#A0A0AA] mb-4">
          <Milestone className="w-3.5 h-3.5" style={{ color: activeAccent.hex }} />
          <span>Entwicklungsfortschritt</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EEEEF2] mb-4">
          Transparente Roadmap & Meilensteine
        </h2>
        <p className="text-sm sm:text-base text-[#A0A0AA]">
          Oria wird öffentlich und nachvollziehbar entwickelt. Verfolge jeden Schritt
          vom Proof-of-Concept bis zum stabilen Release.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="max-w-3xl mx-auto space-y-4 mb-14">
        {milestones.map((item, idx) => {
          const isDone = item.status === "completed";
          const isCurrent = item.status === "current";

          return (
            <div
              key={item.version}
              className={`p-4 sm:p-5 rounded-[8px] border transition-all ${
                isCurrent
                  ? "bg-[#202026] border-[#32323C] shadow-lg"
                  : "bg-[#19191D]/80 border-[#2A2A32] hover:bg-[#19191D]"
              }`}
              style={{
                borderColor: isCurrent ? `${activeAccent.hex}66` : undefined,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-[#AFC7B1] shrink-0" />
                  ) : isCurrent ? (
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${activeAccent.hex}33` }}
                    >
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: activeAccent.hex }}
                      />
                    </div>
                  ) : (
                    <Clock className="w-4 h-4 text-[#72727E] shrink-0" />
                  )}
                  <span className="font-mono text-xs text-[#72727E]">{item.version}</span>
                  <span className="text-xs text-[#2A2A32]">·</span>
                  <h3 className="text-sm sm:text-base font-semibold text-[#EEEEF2]">
                    {item.title}
                  </h3>
                </div>

                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-[4px] self-start sm:self-auto border ${
                    isDone
                      ? "bg-[#131316] text-[#AFC7B1] border-[#2A2A32]"
                      : isCurrent
                      ? "bg-[#131316] border-[#32323C]"
                      : "bg-[#131316] text-[#72727E] border-[#2A2A32]"
                  }`}
                  style={{
                    color: isCurrent ? activeAccent.hex : undefined,
                    borderColor: isCurrent ? `${activeAccent.hex}44` : undefined,
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <p className="text-xs text-[#A0A0AA] pl-0 sm:pl-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Dual License & Open Source Card */}
      <div className="max-w-3xl mx-auto bg-[#19191D] border border-[#2A2A32] rounded-[8px] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-[4px] bg-[#202026] border border-[#2A2A32] shrink-0">
            <Scale className="w-5 h-5 text-[#E8D9A2]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#EEEEF2]">
              Frei & Open Source: MIT / Apache 2.0 Dual-Lizenz
            </h4>
            <p className="text-xs text-[#A0A0AA] mt-1 leading-relaxed">
              Oria Browser ist und bleibt freie Software. Entwickelt von M26 Software
              für die globale Community ohne proprietäre Lock-ins.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/m26software/oria/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#202026] hover:bg-[#282830] border border-[#2A2A32] text-xs font-mono text-[#EEEEF2] transition-colors whitespace-nowrap"
        >
          <span>Lizenz ansehen</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#A0A0AA]" />
        </a>
      </div>
    </section>
  );
}
