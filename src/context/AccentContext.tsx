"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ACCENT_PRESETS, AccentPreset } from "@/lib/theme";

interface AccentContextType {
  activeAccent: AccentPreset;
  setActiveAccent: (preset: AccentPreset) => void;
}

const AccentContext = createContext<AccentContextType>({
  activeAccent: ACCENT_PRESETS[0],
  setActiveAccent: () => {},
});

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [activeAccent, setActiveAccentState] = useState<AccentPreset>(ACCENT_PRESETS[0]);

  const setActiveAccent = (preset: AccentPreset) => {
    setActiveAccentState(preset);
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--oria-accent", preset.hex);
      document.documentElement.style.setProperty("--oria-accent-rgb", preset.rgb);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--oria-accent", activeAccent.hex);
      document.documentElement.style.setProperty("--oria-accent-rgb", activeAccent.rgb);
    }
  }, [activeAccent]);

  return (
    <AccentContext.Provider value={{ activeAccent, setActiveAccent }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  return useContext(AccentContext);
}
