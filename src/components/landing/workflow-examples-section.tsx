"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  Sparkles,
  Mail,
  Webhook,
  Filter,
  GitFork,
  Globe,
  FileText,
  Bot,
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function WorkflowExamplesSection() {
  const workflows = [
    {
      id: "wf-daily-reminder",
      name: "Daily Reminder",
      tag: "Productivity",
      description:
        "Generates curated morning motivation, daily priority checklists, and wellness reminders delivered to your inbox.",
      nodes: [
        { label: "Schedule", icon: <Clock className="size-3 text-blue-400" /> },
        { label: "AI Generate Text", icon: <Sparkles className="size-3 text-indigo-400" /> },
        { label: "Email", icon: <Mail className="size-3 text-rose-400" /> },
      ],
      link: "/workflows/wf_daily_reminder",
    },
    {
      id: "wf-lead-management",
      name: "Lead Management",
      tag: "Sales & Growth",
      description:
        "Catches incoming inbound form submissions, scores customer intent with Gemini reasoning, and routes VIP leads immediately.",
      nodes: [
        { label: "Webhook", icon: <Webhook className="size-3 text-blue-400" /> },
        { label: "AI Classifier", icon: <Filter className="size-3 text-violet-400" /> },
        { label: "If/Else", icon: <GitFork className="size-3 text-amber-400" /> },
        { label: "Email", icon: <Mail className="size-3 text-rose-400" /> },
      ],
      link: "/workflows/wf_lead_enrich_01",
    },
    {
      id: "wf-website-monitoring",
      name: "Website Monitoring",
      tag: "DevOps & SRE",
      description:
        "Pings your production HTTP endpoints every 5 minutes, validates health status codes, and triggers urgent alerts on failure.",
      nodes: [
        { label: "Schedule", icon: <Clock className="size-3 text-blue-400" /> },
        { label: "HTTP Request", icon: <Globe className="size-3 text-emerald-400" /> },
        { label: "If/Else", icon: <GitFork className="size-3 text-amber-400" /> },
        { label: "Email", icon: <Mail className="size-3 text-rose-400" /> },
      ],
      link: "/templates",
    },
    {
      id: "wf-content-generator",
      name: "Content Generator",
      tag: "Marketing",
      description:
        "Synthesizes weekly industry updates, drafts social newsletters using OpenAI GPT-4o, and stages them for human sign-off.",
      nodes: [
        { label: "Schedule", icon: <Clock className="size-3 text-blue-400" /> },
        { label: "AI Generate Text", icon: <Sparkles className="size-3 text-indigo-400" /> },
        { label: "Email", icon: <Mail className="size-3 text-rose-400" /> },
      ],
      link: "/templates",
    },
    {
      id: "wf-customer-support",
      name: "Customer Support",
      tag: "Operations",
      description:
        "Ingests support tickets, performs intent and urgency categorization, and generates empathetic draft replies for the agent.",
      nodes: [
        { label: "Webhook", icon: <Webhook className="size-3 text-blue-400" /> },
        { label: "AI Classifier", icon: <Filter className="size-3 text-violet-400" /> },
        { label: "AI Generate Text", icon: <Sparkles className="size-3 text-indigo-400" /> },
        { label: "Email", icon: <Mail className="size-3 text-rose-400" /> },
      ],
      link: "/workflows/wf_support_triage_02",
    },
    {
      id: "wf-performance-report",
      name: "Performance Report",
      tag: "Analytics",
      description:
        "Fetches key business metrics from external APIs, summarizes anomalies and weekly trends with AI, and emails an executive digest.",
      nodes: [
        { label: "Schedule", icon: <Clock className="size-3 text-blue-400" /> },
        { label: "HTTP Request", icon: <Globe className="size-3 text-emerald-400" /> },
        { label: "AI Summarizer", icon: <FileText className="size-3 text-indigo-400" /> },
        { label: "Email", icon: <Mail className="size-3 text-rose-400" /> },
      ],
      link: "/templates",
    },
  ];

  return (
    <section id="templates" className="py-20 md:py-28 bg-[#070709] border-t border-gray-800/60 text-white relative">
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
            Automate the Work That{" "}
            <span
              className="font-serif italic font-normal tracking-tight"
              style={{
                background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Slows You Down.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            Choose from battle-tested workflow architectures or build your own custom DAG in seconds using natural language.
          </p>
        </div>

        {/* 6 Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((wf) => (
            <div
              key={wf.id}
              className="flex flex-col justify-between rounded-2xl border border-gray-800/80 bg-zinc-950/80 p-6 backdrop-blur-md hover:border-gray-700/90 hover:shadow-2xl transition-all duration-200 group text-white"
            >
              <div>
                {/* Header with Title & Tag */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {wf.name}
                  </h3>
                  <span className="text-[10px] font-mono text-gray-400 bg-zinc-900 border border-gray-800 px-2 py-0.5 rounded uppercase tracking-wider">
                    {wf.tag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed mb-5 font-sans">
                  {wf.description}
                </p>
              </div>

              <div>
                {/* Connected Node Sequence */}
                <div className="pt-4 border-t border-gray-800/80 mb-4">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Node Sequence
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {wf.nodes.map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-gray-800 text-[11px] font-medium text-gray-300">
                          {node.icon}
                          <span>{node.label}</span>
                        </div>
                        {i < wf.nodes.length - 1 && (
                          <span className="text-gray-600 text-xs font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <Link
                  href={wf.link}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Launch in Studio</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explorer CTA */}
        <div className="mt-12 text-center">
          <Link href="/templates">
            <Button
              variant="outline"
              className="bg-zinc-900/80 border-gray-800 text-gray-300 hover:bg-zinc-800 hover:text-white text-xs font-medium h-9 px-4 rounded-lg"
            >
              <span>Explore All Templates in Marketplace</span>
              <ArrowRight className="size-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
