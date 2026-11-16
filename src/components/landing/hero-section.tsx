"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Clock, Sparkles, Mail, Play, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { KIVO_LINKS } from "@/lib/config/domains";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { trackEvent } from "@/lib/analytics";

export function HeroSection() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [executionDone, setExecutionDone] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.5"
        )
        .fromTo(
          cardRef.current,
          { y: 40, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power2.out", clearProps: "all" },
          "-=0.4"
        );

      // ScrollTrigger subtle parallax on scroll
      if (cardRef.current && sectionRef.current) {
        gsap.to(cardRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 40,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setExecutionDone(false);
    setActiveStep(1);

    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        setActiveStep(3);
        setTimeout(() => {
          setIsRunning(false);
          setActiveStep(null);
          setExecutionDone(true);
        }, 600);
      }, 700);
    }, 500);
  };

  return (
    <section ref={sectionRef} className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-black text-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        {/* Headline with Editorial Reference Typography (Strictly 2 lines) */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[80px] font-heading font-medium tracking-[-0.035em] leading-[1.08] max-w-5xl mx-auto mb-7"
        >
          <span
            className="block"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.75))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Automate your workflows
          </span>
          <span className="block mt-1 sm:mt-2">
            <span
              style={{
                background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.75))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with{" "}
            </span>
            <span
              className="font-serif italic font-normal tracking-[-0.02em]"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              visual intelligence.
            </span>
          </span>
        </h1>

        {/* Subtitle with refined editorial spacing */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto px-4 mb-10 leading-relaxed font-sans text-neutral-400"
        >
          Describe what you want in plain English. Kivo analyzes your requirements, selects optimal models, and generates connected production pipelines in seconds.
        </p>

        {/* Primary High-Contrast CTA & Secondary Exploration CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-20">
          <a
            href={KIVO_LINKS.signup}
            onClick={() => {
              trackEvent({
                name: "get_started_click",
                params: { cta_location: "hero", target_url: KIVO_LINKS.signup },
              });
            }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-12 px-8 text-base bg-white text-black hover:bg-neutral-200 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              aria-label="Start Building Free"
            >
              <span>Start Building Free</span>
              <ArrowRight size={16} />
            </button>
          </a>
          <a href="#preview">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-12 px-8 text-base border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm text-neutral-200 hover:bg-neutral-800 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              Explore Demo
            </button>
          </a>
        </div>

        {/* Hero Visual Container: Expansive, Highly Legible Workflow Canvas */}
        <div ref={cardRef} className="w-full max-w-6xl mx-auto relative text-left">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute left-1/2 -top-12 -translate-x-1/2 w-[85%] h-[280px] pointer-events-none z-0 opacity-25 filter blur-[100px]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2), rgba(120, 119, 198, 0.15), transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Workflow Builder Surface */}
          <div className="relative z-10 rounded-2xl overflow-hidden border border-neutral-800/90 shadow-[0_25px_80px_rgba(0,0,0,0.85)] bg-[#09090b]">
            {/* Window Header */}
            <div className="h-12 bg-neutral-950/90 border-b border-neutral-800/80 px-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-neutral-700" />
                <div className="size-2.5 rounded-full bg-neutral-700" />
                <div className="size-2.5 rounded-full bg-neutral-700" />
                <span className="ml-3 text-xs font-mono text-neutral-400">
                  kivo.studio / workflows / daily_intelligence_brief
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified DAG • 0 Cycles
                </span>
                <button
                  type="button"
                  onClick={handleRunSimulation}
                  disabled={isRunning}
                  className="h-7 px-3.5 text-[11px] font-medium rounded-md bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  aria-label="Simulate Workflow Run"
                >
                  <Play className="size-3 fill-current" />
                  <span>{isRunning ? "Running Pipeline..." : "Test DAG"}</span>
                </button>
              </div>
            </div>

            {/* Natural Language Prompt Input Bar */}
            <div className="px-5 py-3 bg-neutral-900/60 border-b border-neutral-800/80 flex items-center gap-3 text-xs">
              <div className="size-7 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
                <Sparkles className="size-3.5 text-amber-400" />
              </div>
              <div className="flex-1 font-mono text-neutral-300 text-[12px] truncate">
                <span className="text-neutral-500">Natural Language Prompt:</span>{" "}
                <span className="text-white">&quot;Every morning at 9:00 AM, generate a motivational daily focus brief with Gemini AI and send it to my team via email&quot;</span>
              </div>
              <span className="hidden sm:inline-flex items-center text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                Compiled in 140ms
              </span>
            </div>

            {/* Canvas Surface with Connected Workflow Nodes */}
            <div className="p-8 sm:p-14 bg-[#09090b] relative overflow-x-auto min-h-[360px] flex items-center justify-center">
              {/* Subtle Canvas Dot Grid */}
              <div
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-5xl py-4">
                {/* Node 1: Schedule Trigger */}
                <div
                  className={`w-full md:w-72 p-5 rounded-xl border transition-all duration-300 relative ${
                    activeStep === 1
                      ? "border-amber-400/90 bg-neutral-900 shadow-[0_0_30px_rgba(245,158,11,0.22)] scale-[1.02]"
                      : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                  }`}
                >
                  {/* Right Output Port Dot */}
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-neutral-900 border-2 border-amber-400" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <Clock className="size-4 text-amber-400" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">Schedule Trigger</span>
                        <span className="text-[10px] font-mono text-neutral-500">trigger.cron</span>
                      </div>
                    </div>
                    {activeStep === 1 ? (
                      <span className="size-2 rounded-full bg-amber-400 animate-ping" />
                    ) : executionDone ? (
                      <CheckCircle2 className="size-4 text-emerald-400" />
                    ) : (
                      <span className="size-2 rounded-full bg-neutral-700" />
                    )}
                  </div>
                  <div className="space-y-1.5 text-[11px] font-mono p-2.5 rounded-lg bg-neutral-900/70 border border-neutral-800/80 text-neutral-400">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Cron:</span>
                      <span className="text-neutral-200">0 9 * * *</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Frequency:</span>
                      <span className="text-amber-400/90 font-medium">Daily at 9:00 AM</span>
                    </div>
                  </div>
                </div>

                {/* Connecting Wire with Flow Indicator */}
                <div className="hidden md:flex items-center text-neutral-600 px-1">
                  <div className={`h-[2px] w-10 transition-colors duration-300 ${activeStep && activeStep >= 2 ? "bg-amber-400" : "bg-neutral-800"}`} />
                  <ChevronRight className={`size-4 -ml-1.5 transition-colors duration-300 ${activeStep && activeStep >= 2 ? "text-amber-400" : "text-neutral-700"}`} />
                </div>

                {/* Node 2: AI Generate Text */}
                <div
                  className={`w-full md:w-80 p-5 rounded-xl border transition-all duration-300 relative ${
                    activeStep === 2
                      ? "border-purple-400/90 bg-neutral-900 shadow-[0_0_30px_rgba(168,85,247,0.25)] scale-[1.02]"
                      : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                  }`}
                >
                  {/* Left Input Port Dot */}
                  <div className="hidden md:block absolute -left-2 top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-neutral-900 border-2 border-purple-400" />
                  {/* Right Output Port Dot */}
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-neutral-900 border-2 border-purple-400" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <Sparkles className="size-4 text-purple-400" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">AI Generate Text</span>
                        <span className="text-[10px] font-mono text-neutral-500">ai.reasoning</span>
                      </div>
                    </div>
                    {activeStep === 2 ? (
                      <span className="size-2 rounded-full bg-purple-400 animate-ping" />
                    ) : executionDone ? (
                      <CheckCircle2 className="size-4 text-emerald-400" />
                    ) : (
                      <span className="size-2 rounded-full bg-neutral-700" />
                    )}
                  </div>
                  <div className="space-y-1.5 text-[11px] font-mono p-2.5 rounded-lg bg-neutral-900/70 border border-neutral-800/80 text-neutral-400">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Model:</span>
                      <span className="text-purple-300">Gemini 1.5 Flash</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Output:</span>
                      <span className="text-neutral-200">Formatted Markdown</span>
                    </div>
                  </div>
                </div>

                {/* Connecting Wire with Flow Indicator */}
                <div className="hidden md:flex items-center text-neutral-600 px-1">
                  <div className={`h-[2px] w-10 transition-colors duration-300 ${activeStep && activeStep >= 3 ? "bg-emerald-400" : "bg-neutral-800"}`} />
                  <ChevronRight className={`size-4 -ml-1.5 transition-colors duration-300 ${activeStep && activeStep >= 3 ? "text-emerald-400" : "text-neutral-700"}`} />
                </div>

                {/* Node 3: Send Email */}
                <div
                  className={`w-full md:w-72 p-5 rounded-xl border transition-all duration-300 relative ${
                    activeStep === 3
                      ? "border-emerald-400/90 bg-neutral-900 shadow-[0_0_30px_rgba(16,185,129,0.25)] scale-[1.02]"
                      : "border-neutral-800 bg-neutral-950/80 hover:border-neutral-700"
                  }`}
                >
                  {/* Left Input Port Dot */}
                  <div className="hidden md:block absolute -left-2 top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-neutral-900 border-2 border-emerald-400" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <Mail className="size-4 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">Send Email</span>
                        <span className="text-[10px] font-mono text-neutral-500">action.notification</span>
                      </div>
                    </div>
                    {activeStep === 3 ? (
                      <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                    ) : executionDone ? (
                      <CheckCircle2 className="size-4 text-emerald-400" />
                    ) : (
                      <span className="size-2 rounded-full bg-neutral-700" />
                    )}
                  </div>
                  <div className="space-y-1.5 text-[11px] font-mono p-2.5 rounded-lg bg-neutral-900/70 border border-neutral-800/80 text-neutral-400">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Service:</span>
                      <span className="text-neutral-200">Resend API</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Recipient:</span>
                      <span className="text-emerald-400/90">team@company.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Telemetry */}
            <div className="px-5 py-3 bg-neutral-950/90 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <Zap className="size-3.5 text-amber-400" />
                <span>DAG Engine: Topological Resolver • 0 cycles detected</span>
              </span>
              <span className="text-neutral-300">
                {executionDone ? "✓ 3 nodes executed in 142ms • Status: 200 OK • Worker #1" : "Pipeline Idle • Ready for test execution"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
