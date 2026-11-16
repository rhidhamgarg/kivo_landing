"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Clock,
  Sparkles,
  Mail,
  Play,
  CheckCircle2,
  Sliders,
  Terminal,
  ArrowRight,
  Webhook,
  Filter,
} from "lucide-react";
import { KIVO_LINKS } from "@/lib/config/domains";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ProductPreviewSection() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<"daily" | "leads">("daily");
  const [selectedNode, setSelectedNode] = useState<string>("ai");
  const [isRunning, setIsRunning] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[DAG Resolver] Graph validated: 3 nodes, 2 edges, 0 cycles",
    "[BullMQ] Worker connected to Redis execution channel",
  ]);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".preview-header",
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
        ".preview-window",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".preview-window",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTestRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRunSuccess(false);
    setLogs(["[Engine:INIT] Initializing pipeline execution..."]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        selectedWorkflow === "daily"
          ? "[Trigger:PASS] Schedule Trigger verified: Cron 0 9 * * *"
          : "[Trigger:PASS] Inbound Webhook parsed: POST /api/v1/leads",
      ]);
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          selectedWorkflow === "daily"
            ? "[AI:PASS] Gemini 1.5 Flash generated content (128 tokens in 114ms)"
            : "[AI:PASS] Gemini evaluated lead score: 94/100 (Tier: Enterprise VIP)",
        ]);
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            selectedWorkflow === "daily"
              ? "[Action:PASS] Resend delivered transactional email (msg_9f21x)"
              : "[Action:PASS] Routed to #sales-vip and updated database record",
            "[Engine:SUCCESS] Pipeline completed in 184ms • Exit Code: 0",
          ]);
          setIsRunning(false);
          setRunSuccess(true);
        }, 500);
      }, 500);
    }, 400);
  };

  return (
    <section ref={sectionRef} id="preview" className="py-28 md:py-36 bg-black text-white border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="preview-header flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-[-0.035em] leading-[1.08] mb-4"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.75))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The visual studio built for{" "}
              <span
                className="font-serif italic font-normal tracking-[-0.02em]"
                style={{
                  background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                uncompromising speed.
              </span>
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed font-sans">
              Direct manipulation of prompts, credentials, and conditional branches with live execution tracing and zero node spaghetti.
            </p>
          </div>

          <div>
            <a href={KIVO_LINKS.dashboard}>
              <button
                type="button"
                className="h-11 px-6 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white hover:scale-105 active:scale-95 text-xs font-mono rounded-lg flex items-center gap-2.5 transition-all cursor-pointer shadow-lg"
              >
                <span>Launch Studio Canvas</span>
                <ArrowRight className="size-3.5" />
              </button>
            </a>
          </div>
        </div>

        {/* Studio Window Preview */}
        <div className="preview-window rounded-2xl border border-neutral-800/90 bg-[#0a0a0c] shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Top Window Bar */}
          <div className="h-12 bg-neutral-950/90 border-b border-neutral-800/80 px-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-neutral-700" />
                <div className="size-2.5 rounded-full bg-neutral-700" />
                <div className="size-2.5 rounded-full bg-neutral-700" />
              </div>
              <span className="text-xs font-semibold text-white font-mono">
                Kivo Studio
              </span>
              <span className="text-neutral-600">/</span>
              {/* Workflow Selector Tabs */}
              <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-lg border border-neutral-800">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedWorkflow("daily");
                    setSelectedNode("ai");
                  }}
                  className={`text-[11px] font-mono px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedWorkflow === "daily"
                      ? "bg-neutral-800 text-white font-medium shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Daily Focus Brief
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedWorkflow("leads");
                    setSelectedNode("classifier");
                  }}
                  className={`text-[11px] font-mono px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedWorkflow === "leads"
                      ? "bg-neutral-800 text-white font-medium shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Lead Triage &amp; Alert
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleTestRun}
                disabled={isRunning}
                className="h-7 px-3.5 text-xs bg-white text-black hover:bg-neutral-200 font-medium rounded-md flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <Play className="size-3 fill-current" />
                <span>{isRunning ? "Executing..." : "Run Pipeline"}</span>
              </button>
            </div>
          </div>

          {/* Studio Body: Canvas + Live Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            {/* Left/Canvas Panel (Span 8) */}
            <div className="lg:col-span-8 p-6 lg:p-10 bg-[#09090b] relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800/80">
              {/* Canvas Dot Grid */}
              <div
                className="absolute inset-0 opacity-[0.14] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Node Sequence */}
              <div className="relative z-10 space-y-5 my-auto">
                {selectedWorkflow === "daily" ? (
                  <>
                    {/* Node 1: Schedule Trigger */}
                    <div
                      onClick={() => setSelectedNode("trigger")}
                      className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer relative ${
                        selectedNode === "trigger"
                          ? "border-amber-400/90 bg-neutral-900 shadow-[0_0_24px_rgba(245,158,11,0.2)]"
                          : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                            <Clock className="size-4 text-amber-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Schedule Trigger</p>
                            <p className="text-xs font-mono text-neutral-400">Cron: 0 9 * * * (Daily at 9:00 AM)</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Trigger
                        </span>
                      </div>
                    </div>

                    {/* Node 2: AI Generate Text */}
                    <div
                      onClick={() => setSelectedNode("ai")}
                      className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer relative ${
                        selectedNode === "ai"
                          ? "border-purple-400/90 bg-neutral-900 shadow-[0_0_24px_rgba(168,85,247,0.22)]"
                          : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                            <Sparkles className="size-4 text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">AI Generate Text</p>
                            <p className="text-xs font-mono text-neutral-400">Model: Google Gemini 1.5 Flash</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                          AI Reasoning
                        </span>
                      </div>
                    </div>

                    {/* Node 3: Send Email */}
                    <div
                      onClick={() => setSelectedNode("email")}
                      className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer relative ${
                        selectedNode === "email"
                          ? "border-emerald-400/90 bg-neutral-900 shadow-[0_0_24px_rgba(16,185,129,0.22)]"
                          : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Mail className="size-4 text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Send Email</p>
                            <p className="text-xs font-mono text-neutral-400">Provider: Resend Transactional API</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          Action
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Node 1: Webhook Trigger */}
                    <div
                      onClick={() => setSelectedNode("webhook")}
                      className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer relative ${
                        selectedNode === "webhook"
                          ? "border-blue-400/90 bg-neutral-900 shadow-[0_0_24px_rgba(59,130,246,0.2)]"
                          : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                            <Webhook className="size-4 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Inbound Webhook</p>
                            <p className="text-xs font-mono text-neutral-400">Endpoint: POST /api/v1/leads</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          Trigger
                        </span>
                      </div>
                    </div>

                    {/* Node 2: AI Classifier */}
                    <div
                      onClick={() => setSelectedNode("classifier")}
                      className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer relative ${
                        selectedNode === "classifier"
                          ? "border-purple-400/90 bg-neutral-900 shadow-[0_0_24px_rgba(168,85,247,0.22)]"
                          : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                            <Filter className="size-4 text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Lead Score Qualifier</p>
                            <p className="text-xs font-mono text-neutral-400">Model: Gemini 1.5 Pro (JSON Output)</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                          AI Classifier
                        </span>
                      </div>
                    </div>

                    {/* Node 3: Slack Notification */}
                    <div
                      onClick={() => setSelectedNode("slack")}
                      className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer relative ${
                        selectedNode === "slack"
                          ? "border-emerald-400/90 bg-neutral-900 shadow-[0_0_24px_rgba(16,185,129,0.22)]"
                          : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Mail className="size-4 text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">VIP Lead Notification</p>
                            <p className="text-xs font-mono text-neutral-400">Channel: #sales-enterprise</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          Action
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Mini Console */}
              <div className="relative z-10 mt-6 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-400 space-y-1.5">
                <div className="flex items-center justify-between text-neutral-500 text-[11px] pb-1.5 border-b border-neutral-800/80">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="size-3.5" />
                    <span>Live Execution Log</span>
                  </span>
                  <span className="text-emerald-400">{runSuccess ? "Status: 200 OK • Completed" : "Ready for execution"}</span>
                </div>
                {logs.slice(-3).map((l, i) => (
                  <p key={i} className="truncate text-neutral-300">
                    {l}
                  </p>
                ))}
              </div>
            </div>

            {/* Right/Inspector Panel (Span 4) */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-neutral-950/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-neutral-800">
                  <span className="text-xs font-semibold text-white flex items-center gap-2">
                    <Sliders className="size-3.5 text-neutral-400" />
                    <span>Node Configuration</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    {selectedNode}
                  </span>
                </div>

                {selectedNode === "trigger" && (
                  <div className="space-y-4 text-xs font-mono">
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Trigger Type</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200">
                        Schedule (Interval Routine)
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Cron Expression</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-300 font-semibold">
                        0 9 * * * (Daily at 9:00 AM)
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Timezone</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                        UTC (Universal Time Coordinated)
                      </div>
                    </div>
                  </div>
                )}

                {selectedNode === "ai" && (
                  <div className="space-y-4 text-xs font-mono">
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Model Provider</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-purple-300 font-semibold">
                        Google Gemini 1.5 Flash
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">System Prompt Template</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs leading-relaxed">
                        Generate 3 concise bullet points outlining key priorities for the engineering team today.
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Temperature</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                        0.7 (Balanced Creative Reasoning)
                      </div>
                    </div>
                  </div>
                )}

                {selectedNode === "email" && (
                  <div className="space-y-4 text-xs font-mono">
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Email Service</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-300 font-semibold">
                        Resend Transactional API
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Target Recipient</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200">
                        team@company.com
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Interpolated Body</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                        &#123;&#123; ai_text_1.output &#125;&#125;
                      </div>
                    </div>
                  </div>
                )}

                {(selectedNode === "webhook" || selectedNode === "classifier" || selectedNode === "slack") && (
                  <div className="space-y-4 text-xs font-mono">
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Node Type</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-blue-300 font-semibold">
                        {selectedNode === "webhook"
                          ? "Inbound HTTP Webhook"
                          : selectedNode === "classifier"
                          ? "Gemini Intent Classifier"
                          : "Slack Message Webhook"}
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Payload Variables</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                        req.body.company, req.body.revenue
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-400 block mb-1">Security Validation</label>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400">
                        SSRF Blocklist Checked ✓
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-800">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>DAG ID: wf_prod_901</span>
                  <span className="text-emerald-400">Configuration Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
