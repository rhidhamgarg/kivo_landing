/**
 * Kivo Domain Architecture Configuration
 *
 * Landing Website: https://kivo.codes
 * SaaS Dashboard: https://app.kivo.codes
 */

export const LANDING_DOMAIN = "kivo.codes";
export const APP_DOMAIN = "app.kivo.codes";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kivo.codes";
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.kivo.codes";

/**
 * Resolves full destination URLs for cross-application links.
 * Works across production domains and local development.
 */
export function getAppUrl(path = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return `${process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "")}${cleanPath}`;
  }
  return `https://${APP_DOMAIN}${cleanPath}`;
}

export function getSiteUrl(path = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}${cleanPath}`;
  }
  return `https://${LANDING_DOMAIN}${cleanPath}`;
}

export const KIVO_LINKS = {
  landing: getSiteUrl("/"),
  features: `${getSiteUrl("/")}#features`,
  pricing: `${getSiteUrl("/")}#pricing`,
  howItWorks: `${getSiteUrl("/")}#how-it-works`,
  about: `${getSiteUrl("/")}#about`,
  contact: `${getSiteUrl("/")}#contact`,
  docs: `${getSiteUrl("/docs")}`,

  // Dashboard & Auth
  dashboard: getAppUrl("/dashboard"),
  login: getAppUrl("/login"),
  signup: getAppUrl("/signup"),
  workflows: getAppUrl("/workflows"),
  newWorkflow: getAppUrl("/workflows/new"),
  executions: getAppUrl("/executions"),
  templates: getAppUrl("/templates"),
  settings: getAppUrl("/settings"),
  integrations: getAppUrl("/settings"),
  billing: getAppUrl("/settings"),
  documentation: `${getSiteUrl("/docs")}`,
  apiDocs: `${getSiteUrl("/docs/api")}`,
  status: "https://status.kivo.codes",
  github: "https://github.com/kivo-ai",
  privacy: `${getSiteUrl("/privacy")}`,
  terms: `${getSiteUrl("/terms")}`,
  security: `${getSiteUrl("/security")}`,
};
