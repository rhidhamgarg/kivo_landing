/**
 * Kivo Landing Page — Google Analytics 4 Tracker
 * Uses NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export type LandingAnalyticsEvent =
  | { name: "page_view"; params?: { page_title?: string; page_location?: string; page_path?: string } }
  | { name: "get_started_click"; params?: { cta_location: "navbar" | "hero" | "features" | "final_cta"; target_url: string } }
  | { name: "signup_click"; params?: { cta_location: "navbar" | "hero" | "pricing" | "final_cta"; target_url: string } }
  | { name: "pricing_view"; params?: { plan_name?: string } };

export function trackEvent(event: LandingAnalyticsEvent) {
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  try {
    window.gtag("event", event.name, event.params || {});
  } catch (err) {
    console.debug("[Analytics:debug] Failed to send event:", err);
  }
}
