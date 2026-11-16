"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { KIVO_LINKS } from "@/lib/config/domains";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { trackEvent } from "@/lib/analytics";

export function FinalCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-headline",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
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
        ".cta-body",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.15,
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
        ".cta-btn",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.25,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-black text-white border-t border-neutral-900 relative overflow-hidden text-center">
      {/* Subtle Ambient Radial Lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 filter blur-[120px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.25), rgba(120, 119, 198, 0.12), transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2
          className="cta-headline text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-medium tracking-[-0.04em] leading-[1.05] mb-8"
        >
          <span
            style={{
              background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.75))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Describe what you want.
          </span>{" "}
          <br />
          <span
            className="font-serif italic font-normal tracking-[-0.02em]"
            style={{
              background: "linear-gradient(to bottom, #efe6d2, #ffffff, #dcd4c0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kivo builds the workflow.
          </span>
        </h2>

        <p className="cta-body text-base sm:text-lg text-center max-w-xl mx-auto font-sans text-neutral-400 leading-relaxed mb-12">
          Start automating your repetitive workflows today. No credit card, complicated setups, or node wiring required.
        </p>

        <div className="cta-btn flex items-center justify-center">
          <a
            href={KIVO_LINKS.signup}
            onClick={() => {
              trackEvent({
                name: "signup_click",
                params: { cta_location: "final_cta", target_url: KIVO_LINKS.signup },
              });
            }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-12 px-8 text-base bg-white text-black hover:bg-neutral-200 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_35px_rgba(255,255,255,0.18)]"
              aria-label="Start Building Free"
            >
              <span>Start Building Free</span>
              <ArrowRight size={16} />
            </button>
          </a>
        </div>

        {/* Minimal trust signals */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span>Free developer tier</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span>Production ready DAGs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
