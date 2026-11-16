"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Network,
  Cpu,
  Clock,
  Blocks,
  ArrowRight,
  CheckCircle2,
  Mail,
  Webhook,
  Database,
  Shield,
} from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function FeaturesSection() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".features-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const samplePrompts = [
    {
      prompt: "Summarize inbound customer emails with Gemini and notify Slack",
      flow: ["Email Trigger", "Gemini 1.5 Flash", "Slack Notification"],
    },
    {
      prompt: "Process new Stripe invoices, extract line items, and sync to Postgres",
      flow: ["Stripe Webhook", "AI Extractor", "Postgres Sync"],
    },
    {
      prompt: "Daily 9 AM health check on production API with incident alerts",
      flow: ["Schedule 9 AM", "HTTP Check", "If/Else Alert"],
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-28 md:py-36 bg-black text-white border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Typography */}
        <div className="features-header max-w-3xl mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-[-0.035em] leading-[1.08] mb-5"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.75))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Everything you need to build{" "}
            <span
              className="font-serif italic font-normal tracking-[-0.02em]"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reliable workflows.
            </span>
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed font-sans max-w-xl">
            No brittle scripts or wiring diagrams. Turn high-level intent into resilient, production-grade automations in minutes.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="features-grid space-y-6">
          {/* 1. Hero Feature: AI Workflow Generation (Full-width showcase) */}
          <div className="feature-card rounded-2xl border border-neutral-800/90 bg-[#09090b] p-8 sm:p-12 transition-all duration-300 hover:border-neutral-700">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  <Sparkles className="size-3.5" />
                  <span>01 / Core Capability</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white tracking-tight">
                  Prompt to Executable DAG
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400 font-sans">
                  Describe what you need in plain language. Kivo deduces required triggers, reasoning steps, and actions, then automatically wires ports with validated parameters.
                </p>

                {/* Example Selector */}
                <div className="pt-2">
                  <p className="text-xs font-mono text-neutral-500 mb-2">Select prompt example:</p>
                  <div className="flex flex-wrap gap-2">
                    {samplePrompts.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePromptIndex(idx)}
                        className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          activePromptIndex === idx
                            ? "bg-white text-black font-medium border-white"
                            : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white"
                        }`}
                      >
                        Example #{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Compilation View */}
              <div className="lg:col-span-7 bg-neutral-950/80 rounded-xl border border-neutral-800/90 p-5 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] pb-3 border-b border-neutral-800/80">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    Interactive Prompt Compiler
                  </span>
                  <span className="text-emerald-400 font-semibold">Valid Graph (0 Cycles)</span>
                </div>

                <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-neutral-200 text-xs leading-relaxed">
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider mb-1">Input Prompt</span>
                  &quot;{samplePrompts[activePromptIndex].prompt}&quot;
                </div>

                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase tracking-wider mb-2">Compiled Topology</span>
                  <div className="flex items-center gap-2 overflow-x-auto py-1">
                    {samplePrompts[activePromptIndex].flow.map((node, nIdx, arr) => (
                      <React.Fragment key={nIdx}>
                        <div className="shrink-0 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-400" />
                          <span className="font-medium text-[11.5px]">{node}</span>
                        </div>
                        {nIdx < arr.length - 1 && (
                          <ArrowRight className="size-3.5 text-neutral-600 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Asymmetric Split (7 cols / 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Feature 2: Visual Workflow Editor (7 cols) */}
            <div className="feature-card lg:col-span-7 rounded-2xl border border-neutral-800/90 bg-[#09090b] p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  <Network className="size-3.5" />
                  <span>02 / Canvas</span>
                </div>
                <h3 className="text-2xl font-heading font-medium text-white tracking-tight">
                  Visual Workflow Editor
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-xl">
                  Direct manipulation of nodes, conditional branches, and parameter mappings. Adjust thresholds and inspect connections with type-safe handles.
                </p>
              </div>

              {/* Realistic Node Wiring Visual */}
              <div className="pt-4 border-t border-neutral-800/60 font-mono text-xs">
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/90 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="w-full sm:w-auto px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 flex items-center justify-between sm:justify-start gap-2.5">
                    <span className="size-2 rounded-full bg-blue-400" />
                    <span>Inbound Webhook</span>
                  </div>
                  <div className="hidden sm:flex items-center text-neutral-600">
                    <div className="h-[2px] w-8 bg-neutral-800" />
                    <ArrowRight className="size-3.5 -ml-1 text-neutral-600" />
                  </div>
                  <div className="w-full sm:w-auto px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 flex items-center justify-between sm:justify-start gap-2.5">
                    <span className="size-2 rounded-full bg-purple-400" />
                    <span>AI Reasoning Node</span>
                  </div>
                  <div className="hidden sm:flex items-center text-neutral-600">
                    <div className="h-[2px] w-8 bg-neutral-800" />
                    <ArrowRight className="size-3.5 -ml-1 text-neutral-600" />
                  </div>
                  <div className="w-full sm:w-auto px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 flex items-center justify-between sm:justify-start gap-2.5">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span>Postgres / Slack</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-2 px-1">
                  <span>Type-safe handle resolution</span>
                  <span>Parameter interpolation: &#123;&#123;trigger.data&#125;&#125;</span>
                </div>
              </div>
            </div>

            {/* Feature 3: AI Model Integrations (5 cols) */}
            <div className="feature-card lg:col-span-5 rounded-2xl border border-neutral-800/90 bg-[#09090b] p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                  <Cpu className="size-3.5" />
                  <span>03 / Intelligence</span>
                </div>
                <h3 className="text-2xl font-heading font-medium text-white tracking-tight">
                  Multi-Model Reasoning
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  Native integrations with Gemini 1.5 Flash, Pro, and GPT-4o. Extract structured JSON data and execute multi-step logic.
                </p>
              </div>

              {/* Model Specs & JSON Schema Preview */}
              <div className="pt-4 border-t border-neutral-800/60 font-mono text-xs space-y-2">
                <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800/90 flex items-center justify-between">
                  <span className="text-neutral-300">Google Gemini 1.5 Flash</span>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">114ms Latency</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800/90 flex items-center justify-between">
                  <span className="text-neutral-300">OpenAI GPT-4o</span>
                  <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Deep Schema Extraction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Asymmetric Split (5 cols / 7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Feature 4: Workflow Automation (5 cols) */}
            <div className="feature-card lg:col-span-5 rounded-2xl border border-neutral-800/90 bg-[#09090b] p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  <Clock className="size-3.5" />
                  <span>04 / Engine</span>
                </div>
                <h3 className="text-2xl font-heading font-medium text-white tracking-tight">
                  Background Automation
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  High-throughput BullMQ queue workers. Run cron schedules, process webhooks, and recover from transient failures automatically.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 font-mono text-xs space-y-2">
                <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
                  <span className="text-neutral-500">Scheduler:</span>
                  <span className="text-emerald-400">Cron 0 9 * * * (Daily)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
                  <span className="text-neutral-500">Retry Mechanism:</span>
                  <span className="text-neutral-200">Exponential 3x Backoff</span>
                </div>
              </div>
            </div>

            {/* Feature 5: Execution Monitoring & Observability (7 cols) */}
            <div className="feature-card lg:col-span-7 rounded-2xl border border-neutral-800/90 bg-[#09090b] p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
                  <Shield className="size-3.5" />
                  <span>05 / Observability</span>
                </div>
                <h3 className="text-2xl font-heading font-medium text-white tracking-tight">
                  Execution Telemetry
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-xl">
                  Inspect granular payload inputs, step execution latency, and exit statuses with real-time audit tracing.
                </p>
              </div>

              {/* Waterfall Execution Trace Visual */}
              <div className="pt-4 border-t border-neutral-800/60 font-mono text-xs space-y-2">
                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">Step 1: Webhook Trigger</span>
                    <span className="text-emerald-400">2ms • 200 OK</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[8%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-neutral-400">Step 2: Gemini 1.5 AI Reasoning</span>
                    <span className="text-emerald-400">114ms • 200 OK</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-400 h-full w-[78%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-neutral-400">Step 3: Resend Email Delivery</span>
                    <span className="text-emerald-400">26ms • 200 OK</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[14%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
