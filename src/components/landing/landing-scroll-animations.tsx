"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function LandingScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Refresh ScrollTrigger to ensure accurate layout geometry
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const ctx = gsap.context(() => {
      // 1. Hero visual smooth entrance
      gsap.from(".hero-visual-card", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.1,
      });

      // 2. Sections header reveal
      const sections = [
        "#problem-solution",
        "#features",
        "#how-it-works",
        "#templates",
        "#product",
        "#choreography",
        "#pricing",
      ];

      sections.forEach((selector) => {
        const el = document.querySelector(selector);
        if (!el) return;

        const heading = el.querySelector("h2");
        const subtitle = el.querySelector("p");

        if (heading) {
          gsap.from(heading, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
          });
        }

        if (subtitle) {
          gsap.from(subtitle, {
            scrollTrigger: {
              trigger: el,
              start: "top 83%",
              toggleActions: "play none none none",
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.15,
          });
        }
      });

      // 3. Problem/Solution comparison cards stagger
      const compCards = document.querySelectorAll("#problem-solution .group");
      if (compCards.length) {
        gsap.from(compCards, {
          scrollTrigger: {
            trigger: "#problem-solution",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // 4. How it works steps stagger
      const stepCards = document.querySelectorAll("#how-it-works .grid > div");
      if (stepCards.length) {
        gsap.from(stepCards, {
          scrollTrigger: {
            trigger: "#how-it-works",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 45,
          opacity: 0,
          stagger: 0.18,
          duration: 0.85,
          ease: "power2.out",
        });
      }

      // 5. Template workflow cards stagger
      const templateCards = document.querySelectorAll("#templates .grid > div");
      if (templateCards.length) {
        gsap.from(templateCards, {
          scrollTrigger: {
            trigger: "#templates",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 35,
          opacity: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: "power2.out",
        });
      }

      // 6. UI/UX Choreography cards
      const choreoCards = document.querySelectorAll("#choreography .grid > div");
      if (choreoCards.length) {
        gsap.from(choreoCards, {
          scrollTrigger: {
            trigger: "#choreography",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 35,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // 7. Pricing tiers reveal
      const pricingCards = document.querySelectorAll("#pricing .grid > div");
      if (pricingCards.length) {
        gsap.from(pricingCards, {
          scrollTrigger: {
            trigger: "#pricing",
            start: "top 78%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          scale: 0.98,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.2)",
        });
      }
    });

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return null;
}
