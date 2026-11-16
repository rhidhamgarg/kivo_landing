"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { ProductPreviewSection } from "@/components/landing/product-preview-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { trackEvent } from "@/lib/analytics";

export default function LandingPage() {
  useEffect(() => {
    trackEvent({
      name: "page_view",
      params: {
        page_title: "Kivo Landing Page",
        page_path: "/",
      },
    });
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white scroll-smooth antialiased font-sans">
        {/* Navigation */}
        <Navbar />

        <main>
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Features Section (Asymmetric editorial grid, AI Workflow Generation) */}
          <FeaturesSection />

          {/* 3. How It Works (Describe -> Generate -> Automate) */}
          <HowItWorksSection />

          {/* 4. Product Preview (Connected visual canvas & node inspector) */}
          <ProductPreviewSection />

          {/* 5. Final CTA */}
          <FinalCtaSection />
        </main>

        {/* 6. Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
