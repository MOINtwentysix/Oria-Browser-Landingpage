import React from "react";

interface OriaLogoProps {
  className?: string;
  size?: number;
}

export function OriaLogo({ className = "", size = 28 }: OriaLogoProps) {
  // Official Oria Logo Styling:
  // - Rounded square (border-radius ca. 26%)
  // - Diagonal mesh/gradient:
  //   - Top-Left: Soft Blue (#A9C5E8)
  //   - Center: Soft Yellow (#E8D9A2)
  //   - Bottom-Right: Dusty Pink / Muted Red (#DDB2C2)
  const borderRadius = Math.round(size * 0.26);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: `${borderRadius}px`,
      }}
      className={`relative inline-flex items-center justify-center overflow-hidden shrink-0 shadow-sm border border-[#2A2A32] ${className}`}
      aria-label="Oria Logo"
    >
      {/* Mesh Gradient simulation using CSS radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 18% 18%, #A9C5E8 0%, rgba(169, 197, 232, 0.4) 45%, transparent 70%),
            radial-gradient(circle at 50% 50%, #E8D9A2 0%, rgba(232, 217, 162, 0.5) 45%, transparent 75%),
            radial-gradient(circle at 82% 82%, #DDB2C2 0%, rgba(221, 178, 194, 0.6) 50%, #C899AA 100%)
          `,
          backgroundColor: "#19191D",
        }}
      />
      {/* Subtle inner bevel / hairline rim for tactile depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: `${borderRadius}px`,
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.4)",
        }}
      />
      {/* Subtle stylized 'O' subtle glyph overlay for iconic clarity */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#131316"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size * 0.52, height: size * 0.52 }}
        className="relative z-10 opacity-75"
      >
        <circle cx="12" cy="12" r="7.5" />
      </svg>
    </div>
  );
}
