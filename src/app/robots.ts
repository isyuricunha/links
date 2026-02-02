import type { MetadataRoute } from "next";

const siteUrl = (() => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const fallback = "https://links.yuricunha.com";

  try {
    return new URL(fromEnv ?? fallback);
  } catch {
    return new URL(fallback);
  }
})();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
