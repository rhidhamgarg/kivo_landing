"use client";

import React, { useState } from "react";
import {
  Sparkles,
  GitBranch,
  Cpu,
  Activity,
  CheckCircle2,
  Check,
  Shield,
  Clock,
  Play,
  ArrowRight,
  Database,
  Mail,
  Webhook,
  FileText,
  Filter,
  Layers,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CoreFeaturesSection() {
  const [activeAiTab, setActiveAiTab] = useState<"gemini" | "openai">("gemini");

  return (
    <section id="features" className="py-20 md:py-28 bg-black border-t border-gray-800/60 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-[-0.03em] leading-[1.1]"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.65))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Engineered for Precision &amp;{" "}
            <span
              className="font-serif italic font-normal tracking-tight"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Flow.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            Everything you need to orchestrate multi-step intelligence, from prompt-driven DAG compilation to sub-second production execution.
          </p>
        </div>

        {/* Feature 1: AI Workflow Generator */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-heading font-medium tracking-tight text-white">
              AI Workflow Generator
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm sm:text-base font-sans">
              Turn natural language goals into fully connected, production-ready directed acyclic graphs. Kivo analyzes your requirements and automatically wires up triggers, AI models, and APIs.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Describe your task in plain language",
                "AI understands the requirement and context",
                "Automatically creates connected workflow nodes",
                "Review and customize in draft mode before execution",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 font-sans">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-950/40 text-blue-400 border border-blue-800/40 mt-0.5">
                    <Check className="size-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-2xl border border-gray-800/80 bg-zinc-950/80 shadow-2xl p-5 sm:p-6 overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-800/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white">
                    Prompt-to-DAG Compiler
                  </span>
                </div>
                <span className="text-[10.5px] font-mono text-gray-400 bg-zinc-900 border border-gray-800 px-2 py-0.5 rounded">
                  auto-layout: horizontal
                </span>
              </div>

              {/* Input Prompt Card */}
              <div className="bg-zinc-900/60 rounded-xl p-3.5 border border-gray-800/80 mb-4">
                <span className="text-[10px] uppercase font-mono text-gray-400 tracking-wider block mb-1">
                  Natural Language Prompt
                </span>
                <p className="text-xs font-medium text-white">
                  &quot;When a customer webhook arrives, summarize customer issue, classify priority, and save in DB.&quot;
                </p>
              </div>

              {/* Generated Nodes Flow Pipeline */}
              <div className="space-y-2.5">
                <span className="text-[10.5px] uppercase font-mono text-gray-400 tracking-wider">
                  Compiled Graph Sequence (3 Nodes, 2 Edges)
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-gray-800">
                    <div className="font-semibold text-blue-400 text-[11.5px]">Webhook Trigger</div>
                    <div className="text-[10px] text-gray-400 font-mono mt-0.5">POST /hooks/inbound</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-indigo-900/40">
                    <div className="font-semibold text-indigo-400 text-[11.5px]">Gemini Reasoning</div>
                    <div className="text-[10px] text-gray-400 font-mono mt-0.5">Summary + Priority</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-gray-800">
                    <div className="font-semibold text-gray-200 text-[11.5px]">HTTP Request</div>
                    <div className="text-[10px] text-gray-400 font-mono mt-0.5">POST /api/tickets</div>
                  </div>
                </div>
              </div>

              {/* Draft Review Guarantee Banner */}
              <div className="mt-4 p-2.5 rounded-lg bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-300 flex items-center justify-between">
                <span className="font-medium font-sans">Mandatory Draft Review: Safe sandbox generation</span>
                <span className="font-mono text-[10px] bg-black/60 border border-amber-800/60 px-1.5 py-0.5 rounded text-amber-400">
                  autoExecuted: false
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Visual Workflow Builder */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-800/80 bg-zinc-950/80 shadow-2xl p-5 sm:p-6 overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-800/80">
                <div className="flex items-center gap-2">
                  <GitBranch className="size-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white">
                    React Flow Graph Canvas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] text-gray-400 bg-zinc-900 border border-gray-800 px-2 py-0.5 rounded font-mono">
                    Snap Grid: 15px
                  </span>
                  <span className="text-[10.5px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded font-medium">
                    DAG Valid
                  </span>
                </div>
              </div>

              {/* Visual Node Diagram (clean luxury dark canvas, no dot grid) */}
              <div className="relative rounded-xl border border-gray-800/80 bg-black/80 p-6 h-56 flex items-center justify-between overflow-hidden">
                {/* Left Node */}
                <div className="w-36 bg-zinc-900 rounded-lg border border-gray-800 p-2.5 shadow-md z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Webhook className="size-3.5 text-blue-400" />
                    <span>Inbound Lead</span>
                  </div>
                  <div className="mt-1 text-[10px] text-gray-400 font-mono">trigger.webhook</div>
                </div>

                {/* Center SVG Wires */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 170 112 C 220 112, 230 112, 280 112"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 400 112 C 450 112, 460 112, 510 112"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Middle Node */}
                <div className="w-40 bg-zinc-900 rounded-lg border-2 border-blue-500/80 p-2.5 shadow-lg z-10 ring-2 ring-blue-500/20">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Cpu className="size-3.5 text-indigo-400" />
                    <span>Gemini Analyzer</span>
                  </div>
                  <div className="mt-1 text-[10px] text-indigo-400 font-mono">gemini-1.5-pro</div>
                </div>

                {/* Right Node */}
                <div className="w-36 bg-zinc-900 rounded-lg border border-gray-800 p-2.5 shadow-md z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Mail className="size-3.5 text-rose-400" />
                    <span>VIP Alert</span>
                  </div>
                  <div className="mt-1 text-[10px] text-gray-400 font-mono">action.sendEmail</div>
                </div>
              </div>

              {/* Bottom Canvas Controls */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-gray-400">
                <span>Drag &amp; drop palette • Bezier routing • Cycle detection</span>
                <span className="font-mono text-[11px] text-gray-300">100% Client-side Zustand</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-heading font-medium tracking-tight text-white">
              Visual Workflow Builder
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm sm:text-base font-sans">
              Design complex pipelines intuitively on an infinite canvas. Combine triggers, AI agents, conditionals, and webhooks with visual feedback at every stage.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Drag-and-drop nodes with auto-snapping",
                "Connect triggers and actions with interactive handles",
                "Configure each step with dynamic parameter forms",
                "Save, validate topology, and execute instantly",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 font-sans">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-950/40 text-blue-400 border border-blue-800/40 mt-0.5">
                    <Check className="size-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 3: AI-Powered Actions */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-heading font-medium tracking-tight text-white">
              AI-Powered Actions
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm sm:text-base font-sans">
              Harness top-tier AI models directly in your workflow. From reasoning and data extraction to content creation and sentiment scoring, Kivo provides native action blocks.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Generate Text: Long-form copy, emails, and personalized messages",
                "Summarize: Distill documents, call logs, and incident reports",
                "Extract Data: Convert messy unstructured text into strict JSON schema",
                "Classify Content: Zero-shot routing and sentiment categorization",
                "Multi-Provider: Google Gemini 1.5 Pro & OpenAI GPT-4o supported",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 font-sans">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-950/40 text-indigo-400 border border-indigo-800/40 mt-0.5">
                    <Check className="size-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-2xl border border-gray-800/80 bg-zinc-950/80 shadow-2xl p-5 sm:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-800/80">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-white">
                    AI Capabilities Matrix
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-zinc-900 border border-gray-800 p-0.5 rounded-lg text-xs">
                  <button
                    onClick={() => setActiveAiTab("gemini")}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                      activeAiTab === "gemini"
                        ? "bg-white text-black font-semibold shadow-xs"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Google Gemini
                  </button>
                  <button
                    onClick={() => setActiveAiTab("openai")}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                      activeAiTab === "openai"
                        ? "bg-white text-black font-semibold shadow-xs"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    OpenAI GPT-4o
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-gray-800/80 bg-zinc-900/60 hover:bg-zinc-900 hover:border-gray-700 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FileText className="size-4 text-blue-400" />
                    <h5 className="text-xs font-semibold text-white">Generate Text</h5>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    Creative writing, contextual email replies, and dynamic motivational prompts.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-gray-800/80 bg-zinc-900/60 hover:bg-zinc-900 hover:border-gray-700 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="size-4 text-indigo-400" />
                    <h5 className="text-xs font-semibold text-white">Summarizer</h5>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    Transform thousands of tokens into concise bullet points and executive takeaways.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-gray-800/80 bg-zinc-900/60 hover:bg-zinc-900 hover:border-gray-700 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Filter className="size-4 text-emerald-400" />
                    <h5 className="text-xs font-semibold text-white">Data Extractor</h5>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    Extract structured entities from invoices, receipts, and messy documents.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-gray-800/80 bg-zinc-900/60 hover:bg-zinc-900 hover:border-gray-700 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Layers className="size-4 text-violet-400" />
                    <h5 className="text-xs font-semibold text-white">Content Classifier</h5>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    Score intent, urgency, and sentiment with confidence scores for smart routing.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                <span>Offline Development Mode: Universal AI Engine Fallback</span>
                <span className="font-semibold text-emerald-400">Zero API lock-in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Workflow Execution & Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-800/80 bg-zinc-950/80 shadow-2xl p-5 sm:p-6 overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-800/80">
                <div className="flex items-center gap-2">
                  <Activity className="size-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">
                    Execution Telemetry &amp; Logs
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded font-medium">
                    STATUS: 200 OK
                  </span>
                  <span className="text-[10.5px] font-mono text-gray-400 bg-zinc-900 border border-gray-800 px-2 py-0.5 rounded">
                    Latency: 184ms
                  </span>
                </div>
              </div>

              {/* Step Logs Drawer */}
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 border border-gray-800 text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>[Step 1] trigger.schedule: Triggered 09:00:00 UTC</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">12ms</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 border border-gray-800 text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>[Step 2] action.aiGenerateText: Gemini Flash returned 128 tokens</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">142ms</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 border border-gray-800 text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>[Step 3] action.sendEmail: Transactional mail staged</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">30ms</span>
                </div>
              </div>

              {/* SSRF & Security Guardrail Strip */}
              <div className="mt-4 pt-3.5 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Shield className="size-3.5 text-blue-400" />
                  <span className="font-medium text-[11px]">
                    SSRF Guard Active: Private RFC1918 &amp; AWS metadata blocked
                  </span>
                </div>
                <span className="font-mono text-[10.5px] text-gray-400">
                  AES-256-GCM Vault
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-heading font-medium tracking-tight text-white">
              Workflow Execution
            </h3>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm sm:text-base font-sans">
              Run manual tests or trigger production executions with full visibility. Inspect per-node payloads, execution durations, and cycle diagnostics in real time.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Run workflows manually or via external webhooks",
                "Track execution status with step-by-step progress",
                "View logs, intermediate variables, and output payloads",
                "Identify and resolve errors with built-in SSRF guardrails",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 font-sans">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 mt-0.5">
                    <Check className="size-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
