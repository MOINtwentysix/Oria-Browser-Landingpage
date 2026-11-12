"use client";

import React, { useState } from "react";
import { AccentProvider } from "@/context/AccentContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { BentoGrid } from "@/components/BentoGrid";
import { ArchitectureSpotlight } from "@/components/ArchitectureSpotlight";
import { Roadmap } from "@/components/Roadmap";
import { Footer } from "@/components/Footer";
import { DownloadModal } from "@/components/DownloadModal";

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <AccentProvider>
      <div className="min-h-screen bg-[#131316] text-[#EEEEF2] flex flex-col selection:bg-[var(--oria-accent)] selection:text-[#0F0F11]">
        {/* Navigation */}
        <Navbar onDownloadClick={() => setDownloadModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onDownloadClick={() => setDownloadModalOpen(true)} />
          <Philosophy />
          <BentoGrid />
          <ArchitectureSpotlight />
          <Roadmap />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Download Modal */}
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />
      </div>
    </AccentProvider>
  );
}
