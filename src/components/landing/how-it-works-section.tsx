"use client";

import React, { useRef, useEffect } from "react";
import { Sparkles, CheckCircle2, Zap } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".how-header",
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
        ".step-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".steps-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const steps = [
    {
      step: "01",
      tag: "Plain Language Input",
      title: "Describe your task",
      description:
        "Type your automation requirement in plain English. No technical jargon, node theory, or API schema writing needed.",
      visual: (
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 pb-2 border-b border-neutral-800/80">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Sparkles className="size-3" />
              <span>Prompt Terminal</span>
            </span>
            <span>English</span>
          </div>
          <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-[11.5px] leading-relaxed">
            &quot;When a support ticket arrives, classify sentiment with Gemini and escalate negative issues to Discord.&quot;
          </div>
          <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
            <span>Model: Gemini 1.5 Flash</span>
            <span className="text-emerald-400 font-semibold">✓ Intent Parsed in 42ms</span>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      tag: "Automatic Compilation",
      title: "Kivo generates your workflow",
      description:
        "Kivo automatically constructs nodes, connects ports, configures parameters, and validates graph cycles in real time.",
      visual: (
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 pb-2 border-b border-neutral-800/80">
            <span className="flex items-center gap-1.5 text-blue-400">
              <Zap className="size-3" />
              <span>DAG Topology</span>
            </span>
            <span className="text-emerald-400 font-semibold">0 Cycles Validated</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px]">
              <span className="text-neutral-300 font-medium">Inbound Webhook Trigger</span>
              <span className="size-1.5 rounded-full bg-blue-400" />
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px]">
              <span className="text-neutral-300 font-medium">AI Sentiment Classifier</span>
              <span className="size-1.5 rounded-full bg-purple-400" />
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px]">
              <span className="text-neutral-300 font-medium">Discord Escalation Action</span>
              <span className="size-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      tag: "Execution & Monitoring",
      title: "Review and execute",
      description:
        "Test on the live canvas with sample inputs, deploy with a single click, and monitor executions with real-time telemetry.",
      visual: (
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 pb-2 border-b border-neutral-800/80">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="size-3" />
              <span>Production Worker</span>
            </span>
            <span className="text-emerald-400">Active</span>
          </div>
          <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 space-y-2 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">Status:</span>
              <span className="text-emerald-400 font-semibold">200 OK (Delivered)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">Latency:</span>
              <span className="text-neutral-200">142ms total</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">Engine Queue:</span>
              <span className="text-neutral-200">BullMQ / Redis #1</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
            <span>Uptime: 99.99%</span>
            <span className="text-emerald-400">Auto-retry active</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-28 md:py-36 bg-black text-white border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="how-header max-w-3xl mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-[-0.035em] leading-[1.08] mb-5"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.75))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            From plain language to{" "}
            <span
              className="font-serif italic font-normal tracking-[-0.02em]"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              production in 3 steps.
            </span>
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed font-sans max-w-xl">
            Automating workflows does not require complex wiring diagrams. Describe what you want, review the generated graph, and launch.
          </p>
        </div>

        {/* Editorial 3-Column Sequence with Hairline Dividers */}
        <div className="steps-grid grid grid-cols-1 md:grid-cols-3 border border-neutral-800 rounded-2xl bg-[#09090b] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-neutral-800/90">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="step-card p-8 sm:p-10 flex flex-col justify-between group hover:bg-neutral-900/30 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif italic text-4xl sm:text-5xl text-neutral-600 group-hover:text-amber-400/90 transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-medium text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans mb-8">
                  {item.description}
                </p>
              </div>

              {/* Step Product Micro Visual */}
              <div className="mt-auto">
                {item.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
