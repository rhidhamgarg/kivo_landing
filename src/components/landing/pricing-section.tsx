"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KIVO_LINKS } from "@/lib/config/domains";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#070709] border-t border-gray-800/60 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Automate Without{" "}
            <span
              className="font-serif italic font-normal tracking-tight"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Artificial Limits.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            Run Kivo with zero licensing hurdles. Connect your own Google Gemini or OpenAI API credentials and execute freely.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Community Developer (Highlighted) */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/30 bg-zinc-950 p-8 shadow-[0_0_50px_rgba(255,255,255,0.06)] relative backdrop-blur-md">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-white text-black text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs">
              Free Forever
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-xl font-heading font-medium text-white">Developer Edition</h3>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  Complete visual workflow automation for individual engineers and builders.
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-800/80 flex items-baseline gap-1.5">
                <span
                  className="text-4xl font-black"
                  style={{
                    background: "linear-gradient(to bottom, #ffffff, #dcd4c0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  $0
                </span>
                <span className="text-xs font-mono text-gray-400">/ forever</span>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 font-sans">
                {[
                  "Unlimited visual workflows and DAG canvas",
                  "AI Workflow Generator (Prompt-to-Workflow compiler)",
                  "Bring Your Own Key (Google Gemini & OpenAI with zero markup)",
                  "All 19 built-in triggers, AI actions, and logic nodes",
                  "SSRF network guardrails & AES-256 credentials vault",
                  "Universal AI engine fallback for offline development",
                  "Local test execution and live payload inspection",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="size-4 text-emerald-400 shrink-0 stroke-[2.5]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/80">
              <a href={KIVO_LINKS.signup}>
                <button
                  type="button"
                  className="w-full h-11 bg-gradient-to-b from-white via-white/95 to-white/70 text-black font-semibold text-sm rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Start Building Free</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
            </div>
          </div>

          {/* Card 2: Self-Hosted & Team */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-800/80 bg-zinc-950/70 p-8 backdrop-blur-md">
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-heading font-medium text-white">Team &amp; Infrastructure</h3>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  Production deployment with distributed workers and persistent execution queues.
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-800/80 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-white">Self-Hosted</span>
                <span className="text-xs font-mono text-gray-400">/ Open Architecture</span>
              </div>

              <ul className="space-y-3 text-xs text-gray-400 font-sans">
                {[
                  "BullMQ distributed Redis queue integration",
                  "PostgreSQL schema persistence with Prisma ORM",
                  "Multi-workspace role permissions (Owner, Admin, Member)",
                  "Long-running cron execution background worker",
                  "Inbound webhook routing with cryptographic signatures",
                  "Docker & Docker Compose container deployment",
                  "Comprehensive vitest & playwright test coverage",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="size-4 text-gray-500 shrink-0 stroke-[2.5]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/80">
              <a href={KIVO_LINKS.settings}>
                <Button
                  variant="outline"
                  className="w-full h-11 border-gray-800 bg-zinc-900/80 text-gray-300 hover:bg-zinc-800 hover:text-white font-medium text-sm rounded-xl transition-all cursor-pointer"
                >
                  Configure Security &amp; Keys
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
