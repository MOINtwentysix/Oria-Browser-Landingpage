export interface AccentPreset {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  description: string;
}

export const ACCENT_PRESETS: AccentPreset[] = [
  {
    id: "lavender",
    name: "Lavender",
    hex: "#C0B0DD",
    rgb: "192, 176, 221",
    description: "Der Standard-Akzent von Oria – ruhig, fokussiert und elegant.",
  },
  {
    id: "soft-blue",
    name: "Soft Blue",
    hex: "#A9C5E8",
    rgb: "169, 197, 232",
    description: "Kühles Pastell-Blau für tiefen Fokus und Code-Reviews.",
  },
  {
    id: "dusty-pink",
    name: "Dusty Pink",
    hex: "#DDB2C2",
    rgb: "221, 178, 194",
    description: "Sanftes, mattes Rosenholz für angenehmen Kontrast.",
  },
  {
    id: "soft-yellow",
    name: "Soft Yellow",
    hex: "#E8D9A2",
    rgb: "232, 217, 162",
    description: "Warmes, unaufdringliches Lichtgelb für Notizen und Recherche.",
  },
  {
    id: "sage-green",
    name: "Sage Green",
    hex: "#AFC7B1",
    rgb: "175, 199, 177",
    description: "Natürliches Salbeigrün für ruhige Arbeitsumgebungen.",
  },
  {
    id: "peach",
    name: "Peach",
    hex: "#E7BBA6",
    rgb: "231, 187, 166",
    description: "Subtiles, sanftes Pfirsich für kreative Spaces.",
  },
  {
    id: "muted-cyan",
    name: "Muted Cyan",
    hex: "#A9CFD1",
    rgb: "169, 207, 209",
    description: "Gedämpftes Cyan für technologische Klarheit.",
  },
  {
    id: "warm-gray",
    name: "Warm Gray",
    hex: "#B9B5AF",
    rgb: "185, 181, 175",
    description: "Zeitloses, warmes Grau für maximale visuelle Reduktion.",
  },
];

export const THEME_COLORS = {
  main: "#131316",
  chrome: "#0F0F11",
  surface: "#19191D",
  card: "#202026",
  hover: "#282830",
  active: "#32323C",
  border: "#2A2A32",
  textPrimary: "#EEEEF2",
  textSecondary: "#A0A0AA",
  textMuted: "#72727E",
};
