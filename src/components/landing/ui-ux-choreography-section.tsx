"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Activity,
  Component,
  MousePointer,
  Check,
  Zap,
  Sliders,
  Code2,
  Gauge,
  Workflow,
} from "lucide-react";

export function UiUxChoreographySection() {
  const [activeTab, setActiveTab] = useState<"framer" | "tailwind" | "lenis">("framer");

  return (
    <section id="choreography" className="py-20 md:py-28 bg-[#070709] border-t border-gray-800/60 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean editorial typography without decorative badges */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-[-0.03em] leading-[1.1]"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.65))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            UI/UX{" "}
            <span
              className="font-serif italic font-normal tracking-tight"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Choreography
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            Engineered with a modern frontend stack to deliver sub-frame responsiveness, fluid micro-interactions, and accessible design system dynamics.
          </p>
        </div>

        {/* 3 Core Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Framer Motion & GSAP */}
          <div
            className={`flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 backdrop-blur-md cursor-pointer ${
              activeTab === "framer"
                ? "border-violet-500/60 bg-zinc-950/90 shadow-[0_0_30px_rgba(139,92,246,0.12)] ring-1 ring-violet-500/30"
                : "border-gray-800/80 bg-zinc-950/70 hover:border-gray-700/90 shadow-sm"
            }`}
            onClick={() => setActiveTab("framer")}
          >
            <div>
              {/* Header Icon */}
              <div className="size-11 rounded-xl bg-violet-950/40 text-violet-400 flex items-center justify-center border border-violet-800/40 shadow-xs mb-5">
                <Activity className="size-5" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-medium text-white tracking-tight">
                Framer Motion &amp; GSAP
              </h3>

              {/* Exact Description */}
              <p className="mt-3 text-sm text-gray-400 leading-relaxed font-sans">
                Drives complex, timeline-based choreographies, micro-interactions, and fluid page transitions.
              </p>

              {/* Micro UI Demonstration */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-900/60 border border-gray-800/80 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-gray-400 pb-2 border-b border-gray-800/80">
                  <span className="font-medium text-gray-300">Timeline Orchestration</span>
                  <span className="text-violet-400 font-semibold">60 FPS</span>
                </div>

                {/* Timeline Tracks */}
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-sans">
                      <span>Node Entry (Stagger)</span>
                      <span>180ms</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 rounded-full w-[85%] animate-pulse" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-sans">
                      <span>DAG Path Draw (GSAP)</span>
                      <span>320ms</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-[65%]" />
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-1.5 text-[10px] text-gray-400 font-sans">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>Hardware-accelerated transforms &amp; spring physics</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
              <span>Interpolation</span>
              <span className="font-mono text-gray-300">cubic-bezier(0.16, 1, 0.3, 1)</span>
            </div>
          </div>

          {/* Card 2: Tailwind CSS & Shadcn UI */}
          <div
            className={`flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 backdrop-blur-md cursor-pointer ${
              activeTab === "tailwind"
                ? "border-sky-500/60 bg-zinc-950/90 shadow-[0_0_30px_rgba(56,189,248,0.12)] ring-1 ring-sky-500/30"
                : "border-gray-800/80 bg-zinc-950/70 hover:border-gray-700/90 shadow-sm"
            }`}
            onClick={() => setActiveTab("tailwind")}
          >
            <div>
              {/* Header Icon */}
              <div className="size-11 rounded-xl bg-sky-950/40 text-sky-400 flex items-center justify-center border border-sky-800/40 shadow-xs mb-5">
                <Component className="size-5" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-medium text-white tracking-tight">
                Tailwind CSS &amp; Shadcn UI
              </h3>

              {/* Exact Description */}
              <p className="mt-3 text-sm text-gray-400 leading-relaxed font-sans">
                Provides a scalable, utility-first design system utilizing robust Radix UI accessibility primitives.
              </p>

              {/* Micro UI Demonstration */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-900/60 border border-gray-800/80 space-y-2.5 font-sans text-xs">
                <div className="flex items-center justify-between text-[11px] text-gray-400 pb-2 border-b border-gray-800/80">
                  <span className="font-medium text-gray-300">Radix UI Primitives</span>
                  <span className="text-sky-400 font-semibold font-mono">WAI-ARIA</span>
                </div>

                {/* Badges / Chips */}
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-gray-800 shadow-xs">
                    <Check className="size-3.5 text-sky-400 shrink-0" />
                    <span className="text-[11px] font-medium text-gray-300 truncate">Dialog &amp; Modals</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-gray-800 shadow-xs">
                    <Check className="size-3.5 text-sky-400 shrink-0" />
                    <span className="text-[11px] font-medium text-gray-300 truncate">Dropdown Menu</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-gray-800 shadow-xs">
                    <Check className="size-3.5 text-sky-400 shrink-0" />
                    <span className="text-[11px] font-medium text-gray-300 truncate">Tooltip Overlay</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-gray-800 shadow-xs">
                    <Check className="size-3.5 text-sky-400 shrink-0" />
                    <span className="text-[11px] font-medium text-gray-300 truncate">Keyboard Nav</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-1.5 text-[10px] text-gray-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>Zero runtime CSS overhead • Dark &amp; Light themes</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
              <span>Token System</span>
              <span className="font-mono text-gray-300">HSL Design Variables</span>
            </div>
          </div>

          {/* Card 3: Lenis */}
          <div
            className={`flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 backdrop-blur-md cursor-pointer ${
              activeTab === "lenis"
                ? "border-emerald-500/60 bg-zinc-950/90 shadow-[0_0_30px_rgba(16,185,129,0.12)] ring-1 ring-emerald-500/30"
                : "border-gray-800/80 bg-zinc-950/70 hover:border-gray-700/90 shadow-sm"
            }`}
            onClick={() => setActiveTab("lenis")}
          >
            <div>
              {/* Header Icon */}
              <div className="size-11 rounded-xl bg-emerald-950/40 text-emerald-400 flex items-center justify-center border border-emerald-800/40 shadow-xs mb-5">
                <MousePointer className="size-5" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-medium text-white tracking-tight">
                Lenis
              </h3>

              {/* Exact Description */}
              <p className="mt-3 text-sm text-gray-400 leading-relaxed font-sans">
                Implements smooth, premium scrolling dynamics.
              </p>

              {/* Micro UI Demonstration */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-900/60 border border-gray-800/80 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-gray-400 pb-2 border-b border-gray-800/80">
                  <span className="font-medium text-gray-300 font-sans">Scroll Physics</span>
                  <span className="text-emerald-400 font-semibold">Normalized Delta</span>
                </div>

                {/* Physics Metrics */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <span className="text-gray-400">Inertia Dampening:</span>
                    <span className="font-mono font-medium text-gray-200">1.2s Exponential</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <span className="text-gray-400">Wheel Delta Smoothing:</span>
                    <span className="font-mono font-medium text-emerald-400">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-sans">
                    <span className="text-gray-400">Studio Canvas Sync:</span>
                    <span className="font-mono font-medium text-gray-200">RAF Synchronized</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-1.5 text-[10px] text-gray-400 font-sans">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>Native scroll accessibility preserved</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
              <span>Scroll Engine</span>
              <span className="font-mono text-gray-300">Lenis RAF v1.1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
