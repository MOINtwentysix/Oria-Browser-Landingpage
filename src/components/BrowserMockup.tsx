"use client";

import React, { useState } from "react";
import { useAccent } from "@/context/AccentContext";
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Lock,
  Star,
  Sparkles,
  Plus,
  X,
  Compass,
  Briefcase,
  BookOpen,
  Shield,
  Layers,
  Search,
  Code2,
  Terminal,
  Activity,
  Send,
  Sliders,
  ExternalLink,
  ChevronRight,
  GitBranch,
} from "lucide-react";

interface TabItem {
  id: string;
  title: string;
  url: string;
  favicon: string;
  spaceId: "personal" | "work" | "research" | "private";
}

const DEMO_TABS: TabItem[] = [
  {
    id: "tab-1",
    title: "github.com/m26software/oria",
    url: "https://github.com/m26software/oria",
    favicon: "github",
    spaceId: "personal",
  },
  {
    id: "tab-2",
    title: "CEF 156 OSR Pipeline Architecture",
    url: "https://docs.oria.rs/engine/cef-osr",
    favicon: "docs",
    spaceId: "work",
  },
  {
    id: "tab-3",
    title: "Rust 1.84 Async wgpu Texture Binding",
    url: "https://doc.rust-lang.org/book/wgpu-render",
    favicon: "rust",
    spaceId: "research",
  },
];

export function BrowserMockup() {
  const { activeAccent } = useAccent();
  const [activeTabId, setActiveTabId] = useState<string>("tab-1");
  const [activeSpace, setActiveSpace] = useState<"personal" | "work" | "research" | "private">("personal");
  const [aiPanelOpen, setAiPanelOpen] = useState<boolean>(true);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [aiHistory, setAiHistory] = useState<Array<{ sender: "user" | "oria"; text: string }>>([
    {
      sender: "user",
      text: "Summarize this repository page",
    },
    {
      sender: "oria",
      text: "Oria Browser is a next-generation desktop browser built with 100% Rust and Chromium CEF 156 in Off-Screen Rendering (OSR). Key takeaways:\n• Native 60 FPS egui immediate-mode shell with zero Electron overhead.\n• Workspaces & Spaces for isolated cookie jars and tab management.\n• Local SQLite storage for zero telemetry and instant startup.",
    },
  ]);

  const activeTab = DEMO_TABS.find((t) => t.id === activeTabId) || DEMO_TABS[0];

  const spaces = [
    { id: "personal", name: "Personal", icon: Compass, color: activeAccent.hex },
    { id: "work", name: "Work", icon: Briefcase, color: "#A9C5E8" },
    { id: "research", name: "Research", icon: BookOpen, color: "#AFC7B1" },
    { id: "private", name: "Private", icon: Shield, color: "#B9B5AF" },
  ] as const;

  const handleSendPrompt = (promptText?: string) => {
    const textToSend = promptText || customPrompt;
    if (!textToSend.trim()) return;

    const newHistory = [
      ...aiHistory,
      { sender: "user" as const, text: textToSend },
    ];

    let reply = "";
    if (textToSend.toLowerCase().includes("cef") || textToSend.toLowerCase().includes("osr")) {
      reply =
        "CEF 156 Off-Screen Rendering delivers raw BGRA pixel buffers directly into an egui/wgpu hardware texture at a locked 60 FPS, eliminating DOM-in-DOM shell latency entirely.";
    } else if (textToSend.toLowerCase().includes("sqlite") || textToSend.toLowerCase().includes("privacy")) {
      reply =
        "All data resides locally in `~/.config/oria/oria.db`. Sessions, browsing history, and cookies are stored with SQLite WAL mode. No central servers, no forced accounts.";
    } else {
      reply = `Oria AI Companion: Analyzed "${activeTab.title}". The Rust runtime ensures thread safety across Chromium event loops without garbage collection pauses.`;
    }

    newHistory.push({ sender: "oria", text: reply });
    setAiHistory(newHistory);
    setCustomPrompt("");
  };

  return (
    <div className="w-full relative rounded-[12px] bg-[#0F0F11] border border-[#2A2A32] shadow-2xl overflow-hidden transition-all duration-300">
      {/* Top Browser Chrome Bar */}
      <div className="bg-[#131316] border-b border-[#2A2A32] px-3.5 py-2.5 flex items-center justify-between gap-3 select-none">
        {/* Left window control dots & Nav arrows */}
        <div className="flex items-center gap-3">
          {/* Subtle Linux/Unix dots */}
          <div className="flex items-center gap-1.5 pr-2 border-r border-[#2A2A32]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A32] hover:bg-[#DDB2C2] transition-colors cursor-pointer" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A32] hover:bg-[#E8D9A2] transition-colors cursor-pointer" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A32] hover:bg-[#AFC7B1] transition-colors cursor-pointer" />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1">
            <button
              aria-label="Back"
              className="p-1 rounded-[4px] text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#202026] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              aria-label="Forward"
              className="p-1 rounded-[4px] text-[#72727E] hover:text-[#EEEEF2] hover:bg-[#202026] transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              aria-label="Reload"
              className="p-1 rounded-[4px] text-[#A0A0AA] hover:text-[#EEEEF2] hover:bg-[#202026] transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Slim Pill Address Bar */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="flex items-center justify-between bg-[#19191D] hover:bg-[#202026] border border-[#2A2A32] rounded-[4px] px-3 py-1 transition-all">
            <div className="flex items-center gap-2 overflow-hidden text-xs">
              <Lock className="w-3 h-3 text-[#AFC7B1] shrink-0" />
              <span className="text-[#A0A0AA] select-none text-[11px] font-mono">https://</span>
              <span className="text-[#EEEEF2] font-mono text-[11px] truncate">
                {activeTab.url.replace("https://", "")}
              </span>
            </div>
            <div className="flex items-center gap-1.5 pl-2">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                aria-label="Bookmark"
                className="p-0.5 rounded-[4px] hover:bg-[#282830] transition-colors"
              >
                <Star
                  className={`w-3.5 h-3.5 transition-colors ${
                    isBookmarked
                      ? "text-[#E8D9A2] fill-[#E8D9A2]"
                      : "text-[#72727E] hover:text-[#A0A0AA]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Action: Performance badge & AI Trigger Button */}
        <div className="flex items-center gap-2">
          {/* Native 60 FPS indicator badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32] text-[10px] font-mono text-[#A0A0AA]">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: activeAccent.hex }}
            />
            <span>60.0 FPS</span>
          </div>

          {/* AI Side-Panel Trigger */}
          <button
            onClick={() => setAiPanelOpen(!aiPanelOpen)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-xs font-medium border transition-all ${
              aiPanelOpen
                ? "bg-[#202026] text-[#EEEEF2] border-[#32323C]"
                : "bg-[#19191D] text-[#A0A0AA] hover:text-[#EEEEF2] border-[#2A2A32]"
            }`}
            style={{
              borderColor: aiPanelOpen ? activeAccent.hex : undefined,
            }}
          >
            <Sparkles
              className="w-3.5 h-3.5"
              style={{ color: activeAccent.hex }}
            />
            <span className="hidden sm:inline">AI Panel</span>
          </button>
        </div>
      </div>

      {/* Main Body: Sidebar + Webview + AI Panel */}
      <div className="flex h-[440px] sm:h-[500px] overflow-hidden">
        {/* Left Sidebar (#0F0F11) */}
        <aside className="w-56 sm:w-64 bg-[#0F0F11] border-r border-[#2A2A32] flex flex-col justify-between shrink-0 select-none">
          {/* Top: Space selector tabs */}
          <div className="p-2 border-b border-[#2A2A32]/60">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#72727E] px-2 py-1 flex items-center justify-between">
              <span>Spaces</span>
              <span className="text-[9px] bg-[#19191D] px-1 py-0.5 rounded-[3px] border border-[#2A2A32]">
                Ctrl+1-4
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1 mt-1">
              {spaces.map((space) => {
                const isCurrent = activeSpace === space.id;
                const IconComponent = space.icon;
                return (
                  <button
                    key={space.id}
                    onClick={() => setActiveSpace(space.id)}
                    className={`flex flex-col items-center justify-center py-1.5 rounded-[4px] text-[10px] transition-colors relative ${
                      isCurrent
                        ? "bg-[#19191D] text-[#EEEEF2]"
                        : "text-[#72727E] hover:text-[#A0A0AA] hover:bg-[#19191D]/50"
                    }`}
                  >
                    <IconComponent
                      className="w-3.5 h-3.5 mb-0.5"
                      style={{ color: isCurrent ? space.color : undefined }}
                    />
                    <span className="text-[9px] truncate">{space.name}</span>
                    {isCurrent && (
                      <span
                        className="absolute bottom-0 w-3 h-[2px] rounded-full"
                        style={{ backgroundColor: space.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Middle: Vertical Tabs List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-[#72727E]">
              <span>Tabs ({DEMO_TABS.length})</span>
              <button
                className="hover:text-[#EEEEF2] transition-colors"
                title="Neuer Tab (Ctrl+T)"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>

            {DEMO_TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`group flex items-center justify-between px-2.5 py-1.5 rounded-[4px] text-xs cursor-pointer transition-all ${
                    isActive
                      ? "bg-[#202026] text-[#EEEEF2] border-l-2"
                      : "text-[#A0A0AA] hover:bg-[#19191D] hover:text-[#EEEEF2] border-l-2 border-transparent"
                  }`}
                  style={{
                    borderLeftColor: isActive ? activeAccent.hex : "transparent",
                  }}
                >
                  <div className="flex items-center gap-2 truncate">
                    {tab.favicon === "github" ? (
                      <Code2 className="w-3.5 h-3.5 text-[#EEEEF2] shrink-0" />
                    ) : tab.favicon === "docs" ? (
                      <BookOpen className="w-3.5 h-3.5 text-[#A9C5E8] shrink-0" />
                    ) : (
                      <Terminal className="w-3.5 h-3.5 text-[#E7BBA6] shrink-0" />
                    )}
                    <span className="truncate text-[11px] font-medium">
                      {tab.title}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="opacity-0 group-hover:opacity-100 hover:text-white p-0.5 rounded-[3px] transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              );
            })}

            {/* Quick action button for vertical tabs */}
            <button className="w-full mt-2 flex items-center gap-2 px-2.5 py-1.5 rounded-[4px] text-[11px] text-[#72727E] hover:text-[#A0A0AA] hover:bg-[#19191D] transition-colors border border-dashed border-[#2A2A32]">
              <Plus className="w-3 h-3" />
              <span>Neuer Tab</span>
              <span className="ml-auto font-mono text-[9px]">Ctrl+T</span>
            </button>
          </div>

          {/* Bottom Sidebar: Session & Privacy Status */}
          <div className="p-2 border-t border-[#2A2A32] bg-[#0F0F11]">
            <div className="flex items-center justify-between text-[11px] px-2 py-1 text-[#A0A0AA]">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#AFC7B1]" />
                <span className="text-[10px] font-mono">SQLite Local DB</span>
              </div>
              <span className="text-[9px] font-mono px-1 rounded bg-[#19191D] text-[#72727E] border border-[#2A2A32]">
                Zero Telemetry
              </span>
            </div>
          </div>
        </aside>

        {/* Center: Webview Canvas Area */}
        <main className="flex-1 bg-[#131316] overflow-y-auto flex flex-col">
          {/* Simulated Webpage Content */}
          <div className="p-4 sm:p-6 max-w-3xl">
            {/* Repo Header */}
            <div className="flex items-center gap-2 text-xs text-[#A0A0AA] mb-3">
              <span className="text-[#EEEEF2] font-semibold">m26software</span>
              <span>/</span>
              <span className="text-[#EEEEF2] font-semibold">oria</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[4px] bg-[#19191D] border border-[#2A2A32]">
                Public
              </span>
              <span
                className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-[4px] border"
                style={{
                  borderColor: `${activeAccent.hex}44`,
                  color: activeAccent.hex,
                }}
              >
                v0.1.0-pre
              </span>
            </div>

            {/* Mocked Readme Hero */}
            <div className="bg-[#19191D] border border-[#2A2A32] rounded-[8px] p-4 mb-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A2A32] mb-3">
                <h1 className="text-base font-semibold text-[#EEEEF2] flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeAccent.hex }}
                  />
                  Oria Browser: Native Rust + Chromium CEF 156
                </h1>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A0A0AA]">
                  <GitBranch className="w-3 h-3" />
                  <span>main</span>
                </div>
              </div>

              <p className="text-xs text-[#A0A0AA] leading-relaxed mb-3">
                Ein moderner, nativer Desktop-Webbrowser ohne Web-UI-Shell. Entwickelt mit
                dem Chromium Embedded Framework im Off-Screen Rendering Modus (OSR),
                eingebunden in eine blitzschnelle Rust egui/wgpu Benutzeroberfläche.
              </p>

              {/* Code block inside webview */}
              <div className="bg-[#131316] border border-[#2A2A32] rounded-[4px] p-2.5 font-mono text-[11px] text-[#EEEEF2] overflow-x-auto">
                <div className="text-[#72727E] mb-1"># Clone & Run Oria on Linux</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#A9C5E8]">$</span>
                  <span>git clone https://github.com/m26software/oria.git</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#A9C5E8]">$</span>
                  <span>cargo run -p oria-app --release</span>
                </div>
              </div>

              {/* Benchmark comparison pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#2A2A32]/60 text-[10px] font-mono">
                <div className="bg-[#202026] p-2 rounded-[4px] border border-[#2A2A32]">
                  <div className="text-[#72727E]">UI Latency</div>
                  <div className="text-[#EEEEF2] font-semibold mt-0.5">~0.4ms (60 FPS)</div>
                </div>
                <div className="bg-[#202026] p-2 rounded-[4px] border border-[#2A2A32]">
                  <div className="text-[#72727E]">RAM Footprint</div>
                  <div className="text-[#AFC7B1] font-semibold mt-0.5">~140 MB base</div>
                </div>
                <div className="bg-[#202026] p-2 rounded-[4px] border border-[#2A2A32] col-span-2 sm:col-span-1">
                  <div className="text-[#72727E]">Engine</div>
                  <div className="text-[#EEEEF2] font-semibold mt-0.5">CEF 156 (OSR)</div>
                </div>
              </div>
            </div>

            {/* Quick interactive note */}
            <div className="text-[11px] text-[#72727E] flex items-center justify-between">
              <span>💡 Tipp: Wechsle oben das Akzent-Preset oder frage den AI-Begleiter rechts.</span>
              <span className="font-mono">Linux Wayland/X11</span>
            </div>
          </div>
        </main>

        {/* Right: AI Side Panel (#19191D with 12px radius feel) */}
        {aiPanelOpen && (
          <aside className="w-72 sm:w-80 bg-[#19191D] border-l border-[#2A2A32] flex flex-col justify-between shrink-0 shadow-lg transition-all duration-200">
            {/* Header */}
            <div className="p-3 border-b border-[#2A2A32] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="p-1 rounded-[4px]"
                  style={{ backgroundColor: `${activeAccent.hex}22` }}
                >
                  <Sparkles
                    className="w-3.5 h-3.5"
                    style={{ color: activeAccent.hex }}
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#EEEEF2] flex items-center gap-1.5">
                    Oria Companion
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: activeAccent.hex }}
                    />
                  </div>
                  <div className="text-[10px] text-[#72727E]">
                    Kontext: Aktiver Tab
                  </div>
                </div>
              </div>
              <button
                onClick={() => setAiPanelOpen(false)}
                className="text-[#72727E] hover:text-[#EEEEF2] p-1 rounded-[4px] hover:bg-[#202026]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Chat Conversation */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 text-xs">
              {aiHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    item.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-[8px] p-2.5 leading-relaxed text-[11px] ${
                      item.sender === "user"
                        ? "bg-[#282830] text-[#EEEEF2] border border-[#32323C]"
                        : "bg-[#202026] text-[#EEEEF2] border border-[#2A2A32]"
                    }`}
                  >
                    <div className="whitespace-pre-line">{item.text}</div>
                  </div>
                  <span className="text-[9px] text-[#72727E] mt-1 px-1">
                    {item.sender === "user" ? "Du" : "Oria AI (Local)"}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Quick Chips + Input */}
            <div className="p-2.5 border-t border-[#2A2A32] bg-[#19191D]">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                <button
                  onClick={() => handleSendPrompt("Explain CEF OSR rendering")}
                  className="whitespace-nowrap px-2 py-1 rounded-[4px] bg-[#202026] hover:bg-[#282830] text-[10px] text-[#A0A0AA] hover:text-[#EEEEF2] border border-[#2A2A32] transition-colors"
                >
                  ⚡ Explain CEF OSR
                </button>
                <button
                  onClick={() => handleSendPrompt("Why SQLite instead of cloud?")}
                  className="whitespace-nowrap px-2 py-1 rounded-[4px] bg-[#202026] hover:bg-[#282830] text-[10px] text-[#A0A0AA] hover:text-[#EEEEF2] border border-[#2A2A32] transition-colors"
                >
                  🔒 Why SQLite?
                </button>
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendPrompt();
                }}
                className="flex items-center gap-1.5 bg-[#131316] border border-[#2A2A32] rounded-[4px] px-2.5 py-1.5 focus-within:border-[#A0A0AA] transition-colors"
              >
                <input
                  type="text"
                  placeholder="Frage zur aktuellen Seite... (Ctrl+J)"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="w-full bg-transparent text-xs text-[#EEEEF2] placeholder-[#72727E] outline-none"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="text-[#A0A0AA] hover:text-[#EEEEF2] p-0.5 rounded-[3px] transition-colors"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
