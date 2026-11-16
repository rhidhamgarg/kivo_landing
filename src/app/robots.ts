import { MetadataRoute } from "next";

/**
 * Technical SEO: Search Engine Crawling Instructions for Kivo Public Marketing
 * Production Domain: https://kivo.codes
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kivo.codes";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
