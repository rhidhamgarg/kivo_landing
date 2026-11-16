"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { KivoLogo } from "@/components/ui/kivo-logo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { KIVO_LINKS } from "@/lib/config/domains";
import { trackEvent } from "@/lib/analytics";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Product Preview", href: "#preview" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200 border-b border-gray-800/50 bg-black/80 backdrop-blur-md",
        scrolled && "shadow-2xl shadow-black/80",
        className
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <KivoLogo size="md" theme="dark" priority />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={KIVO_LINKS.login}
            onClick={() => {
              trackEvent({
                name: "signup_click",
                params: { cta_location: "navbar", target_url: KIVO_LINKS.login },
              });
            }}
            className="text-sm text-white/60 hover:text-white transition-colors px-2 py-1"
          >
            Sign in
          </a>
          <a
            href={KIVO_LINKS.signup}
            onClick={() => {
              trackEvent({
                name: "get_started_click",
                params: { cta_location: "navbar", target_url: KIVO_LINKS.signup },
              });
            }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-4 py-2 text-sm bg-white text-black hover:bg-gray-100 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="size-3.5" />
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 animate-[slideDown_0.3s_ease-out]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm text-white/60 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-800/50">
              <a href={KIVO_LINKS.login} className="text-sm text-white/60 hover:text-white py-1">
                Sign in
              </a>
              <a href={KIVO_LINKS.signup}>
                <button
                  type="button"
                  className="w-full h-10 rounded-md font-medium text-sm bg-white text-black hover:bg-gray-100"
                >
                  Start Building Free
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
