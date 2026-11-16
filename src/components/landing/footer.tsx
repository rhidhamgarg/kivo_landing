"use client";

import React from "react";
import Link from "next/link";
import { KivoLogo } from "@/components/ui/kivo-logo";
import { KIVO_LINKS } from "@/lib/config/domains";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 py-20 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-neutral-900">
          {/* Brand Column (Spans 2 on desktop) */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <KivoLogo size="md" theme="dark" />
            </Link>
            <p className="text-xs leading-relaxed max-w-xs text-neutral-400 font-sans">
              AI-powered visual workflow automation. Describe what you want. Kivo generates the executable workflow.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] pt-1">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3.5">
            <p className="font-medium text-white tracking-tight text-xs uppercase font-mono">Product</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#preview" className="text-neutral-400 hover:text-white transition-colors">
                  Workflow Studio
                </a>
              </li>
              <li>
                <a href={KIVO_LINKS.templates} className="text-neutral-400 hover:text-white transition-colors">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3.5">
            <p className="font-medium text-white tracking-tight text-xs uppercase font-mono">Resources</p>
            <ul className="space-y-2.5">
              <li>
                <a href={KIVO_LINKS.documentation} className="text-neutral-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href={KIVO_LINKS.apiDocs} className="text-neutral-400 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href={KIVO_LINKS.status} className="text-neutral-400 hover:text-white transition-colors">
                  System Status
                </a>
              </li>
              <li>
                <a href={KIVO_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3.5">
            <p className="font-medium text-white tracking-tight text-xs uppercase font-mono">Company</p>
            <ul className="space-y-2.5">
              <li>
                <a href={KIVO_LINKS.about} className="text-neutral-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href={KIVO_LINKS.privacy} className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={KIVO_LINKS.terms} className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href={KIVO_LINKS.security} className="text-neutral-400 hover:text-white transition-colors">
                  Security Vault
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            &copy; {currentYear} Kivo, Inc. Built for autonomous visual automation.
          </div>
          <div className="flex items-center gap-6">
            <a href={KIVO_LINKS.privacy} className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href={KIVO_LINKS.terms} className="hover:text-white transition-colors">
              Terms
            </a>
            <a href={KIVO_LINKS.security} className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
