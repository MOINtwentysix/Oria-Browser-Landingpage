"use client";

import React from "react";
import { ACCENT_PRESETS } from "@/lib/theme";
import { useAccent } from "@/context/AccentContext";
import { Palette, Check } from "lucide-react";

export function AccentSwitcher() {
  const { activeAccent, setActiveAccent } = useAccent();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-[#19191D] border border-[#2A2A32] rounded-[8px] p-3 sm:p-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#2A2A32]">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#A0A0AA]" />
            <span className="text-xs font-semibold text-[#EEEEF2] tracking-tight">
              oria-core Theme Preset
            </span>
            <span className="text-[11px] font-mono text-[#72727E]">
              ({ACCENT_PRESETS.length} Farbtöne)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#EEEEF2] font-medium">
              {activeAccent.name}
            </span>
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-[4px] bg-[#202026] text-[#A0A0AA] border border-[#2A2A32]">
              {activeAccent.hex}
            </span>
          </div>
        </div>

        {/* Preset color buttons */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-3">
          {ACCENT_PRESETS.map((preset) => {
            const isSelected = activeAccent.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setActiveAccent(preset)}
                className={`group relative flex flex-col items-center gap-1.5 p-2 rounded-[6px] transition-all duration-150 ${
                  isSelected
                    ? "bg-[#202026] border border-[#32323C] shadow-sm"
                    : "hover:bg-[#202026]/60 border border-transparent"
                }`}
                title={`${preset.name} (${preset.hex})`}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-150 group-hover:scale-105 relative"
                  style={{ backgroundColor: preset.hex }}
                >
                  {isSelected && (
                    <Check
                      className="w-3.5 h-3.5"
                      style={{
                        color:
                          preset.id === "soft-yellow" || preset.id === "peach"
                            ? "#131316"
                            : "#0F0F11",
                      }}
                      strokeWidth={3}
                    />
                  )}
                </div>
                <span
                  className={`text-[10px] tracking-tight font-medium truncate max-w-full ${
                    isSelected ? "text-[#EEEEF2]" : "text-[#72727E] group-hover:text-[#A0A0AA]"
                  }`}
                >
                  {preset.name}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-2.5 text-[11px] text-[#72727E] text-center italic">
          {activeAccent.description}
        </p>
      </div>
    </div>
  );
}
