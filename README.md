# Kivo Landing Page

> Production marketing website for **Kivo** — AI Visual Workflow Automation Platform.
> Production URL: [https://kivo.codes](https://kivo.codes)

---

## 1. Overview

This repository contains the standalone marketing landing page for Kivo. It is built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **GSAP ScrollTrigger**, designed for lightning-fast TTFB, fluid animations, and high visitor-to-user conversion.

### Core Sections:
- **Hero Section**: High-contrast headline combining modern sans-serif (*Satoshi*) and editorial italic serif (*Instrument Serif*), natural language prompt demonstration, and real-time interactive workflow execution preview.
- **Features Section**: Asymmetric editorial grid highlighting AI Workflow Generation, Visual Node Editor, Smart AI Agents, and Integrations.
- **How It Works**: 3-step automation journey (Describe &rarr; Generate &rarr; Automate).
- **Product Preview**: Connected node architecture preview with real-time payload inspection.
- **Final CTA**: Conversion-focused closing statement.
- **Global Footer**: Company, resource, status, and legal links.

---

## 2. Cross-Domain Routing

- **Primary CTAs** ("Get Started", "Start Building Free") redirect to: `https://app.kivo.codes/signup`
- **Secondary Sign-In Links** redirect to: `https://app.kivo.codes/login`
- **Domain Configuration**: Configured in `src/lib/config/domains.ts` via `NEXT_PUBLIC_APP_URL` and `NEXT_PUBLIC_SITE_URL`.

---

## 3. Getting Started

### Prerequisites:
- Node.js 18.17+ or 20+
- npm or pnpm

### Installation:
```bash
npm install
```

### Development:
```bash
npm run dev
# Starts on http://localhost:3001
```

### Production Build:
```bash
npm run build
npm run start
```

---

## 4. Environment Variables

Create `.env.local` using `.env.example`:
```env
NEXT_PUBLIC_SITE_URL=https://kivo.codes
NEXT_PUBLIC_APP_URL=https://app.kivo.codes
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 5. Deployment (Vercel)

1. Connect this repository to a new Vercel Project named `kivo-landing`.
2. Add custom domain: `kivo.codes` (and `www.kivo.codes`).
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://kivo.codes`
   - `NEXT_PUBLIC_APP_URL` = `https://app.kivo.codes`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `[Your GA4 Measurement ID]`
