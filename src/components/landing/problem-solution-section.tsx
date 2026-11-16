"use client";

import React from "react";
import {
  RotateCcw,
  Sparkles,
  Network,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Layers,
  Clock,
} from "lucide-react";

export function ProblemSolutionSection() {
  const comparisons = [
    {
      id: "manual-vs-automated",
      icon: <Clock className="size-5 text-blue-600" />,
      tag: "Process Efficiency",
      problemTitle: "Repetitive manual work",
      problemDescription:
        "Engineers and teams spend hours drafting repetitive messages, moving data between portals, and babysitting routine operations.",
      solutionTitle: "Automated workflows",
      solutionDescription:
        "Define your triggers once. Kivo executes scheduled cron routines and event-driven tasks reliably in the background 24/7.",
      benefit: "Saves 15+ hours weekly per team",
    },
    {
      id: "complex-vs-ai",
      icon: <Sparkles className="size-5 text-indigo-600" />,
      tag: "Fast Authoring",
      problemTitle: "Complex automation setup",
      problemDescription:
        "Traditional workflow builders require tedious node wiring, complex JSON configurations, and steep learning curves.",
      solutionTitle: "Natural language AI generation",
      solutionDescription:
        "Simply type your intention in plain language. Kivo's AI generator compiles the complete, validated DAG graph in seconds.",
      benefit: "Idea to working DAG in 5 seconds",
    },
    {
      id: "siloed-vs-connected",
      icon: <Network className="size-5 text-sky-600" />,
      tag: "Unified Architecture",
      problemTitle: "Disconnected tools",
      problemDescription:
        "AI models, internal webhooks, email providers, and REST endpoints are isolated across separate tools and tabs.",
      solutionTitle: "Connected apps and APIs",
      solutionDescription:
        "Unify Google Gemini, OpenAI, Resend, HTTP requests, and conditional branches into a single secure visual orchestration layer.",
      benefit: "19+ native node connectors ready to use",
    },
  ];

  return (
    <section id="problem-solution" className="py-20 md:py-28 bg-black border-y border-gray-800/60 text-white">
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
            Stop Repeating. Start{" "}
            <span
              className="font-serif italic font-normal tracking-tight"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Automating.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            Eliminate tedious manual steps and complex configuration bottlenecks. Here is how Kivo transforms your automation workflow from friction to flow.
          </p>
        </div>

        {/* 3 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {comparisons.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-zinc-950/80 rounded-2xl border border-gray-800/80 p-6 lg:p-7 hover:border-gray-700 hover:shadow-xl transition-all duration-200"
            >
              <div>
                {/* Header with icon and tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 border border-gray-800 shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Problem Block */}
                <div className="mb-5 pb-5 border-b border-gray-800/70">
                  <div className="flex items-center gap-2 mb-2 text-rose-400 font-semibold text-sm">
                    <XCircle className="size-4 shrink-0" />
                    <span className="text-gray-300 line-through decoration-rose-500/60">
                      {item.problemTitle}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-6 font-sans">
                    {item.problemDescription}
                  </p>
                </div>

                {/* Solution Block */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                    <span className="text-white font-semibold">{item.solutionTitle}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed pl-6 font-normal font-sans">
                    {item.solutionDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Value Metric */}
              <div className="mt-5 pt-3 border-t border-gray-800/60 flex items-center justify-between text-[11.5px] text-gray-400 font-medium">
                <span className="text-blue-400 font-semibold">{item.benefit}</span>
                <ArrowRight className="size-3.5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
