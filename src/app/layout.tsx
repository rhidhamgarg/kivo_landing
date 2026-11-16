import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kivo.codes"),
  title: {
    default: "Kivo — AI Visual Workflow Automation Platform",
    template: "%s | Kivo",
  },
  description:
    "Describe what you want in natural language. Kivo automatically generates complete, connected, production-ready workflows with visual intelligence.",
  alternates: {
    canonical: "https://kivo.codes",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Kivo — AI Visual Workflow Automation Platform",
    description:
      "Describe what you want in natural language. Kivo automatically generates complete, connected, production-ready workflows with visual intelligence.",
    url: "https://kivo.codes",
    siteName: "Kivo",
    images: [
      {
        url: "/images/kivo-og.png",
        width: 1200,
        height: 630,
        alt: "Kivo — AI Visual Workflow Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kivo — AI Visual Workflow Automation Platform",
    description:
      "Describe what you want in natural language. Kivo automatically generates complete, connected, production-ready workflows with visual intelligence.",
    images: ["/images/kivo-og.png"],
    creator: "@kivocodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kivo.codes/#organization",
      "name": "Kivo",
      "url": "https://kivo.codes",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kivo.codes/icon.png",
        "width": 512,
        "height": 512,
      },
      "sameAs": ["https://github.com/rhidhamgarg/FlowMind-AI"],
    },
    {
      "@type": "WebSite",
      "@id": "https://kivo.codes/#website",
      "url": "https://kivo.codes",
      "name": "Kivo",
      "publisher": {
        "@id": "https://kivo.codes/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://kivo.codes/#software",
      "name": "Kivo",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "url": "https://kivo.codes",
      "description":
        "Production-grade AI visual workflow automation platform that translates natural language prompts into complete, connected execution DAGs.",
      "softwareVersion": "1.0",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "featureList": [
        "Prompt-to-Workflow Semantic DAG Generation",
        "Multi-model AI Orchestration with Gemini 1.5 and GPT-4o",
        "Visual Node Editor with Real-Time Execution Tracing",
        "Inbound Webhooks and Cron Scheduling Triggers",
        "Resilient Universal Fallback Synthesizer",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-black text-white min-h-screen antialiased selection:bg-white/20 selection:text-white">
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
