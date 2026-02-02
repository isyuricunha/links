import type { MetadataRoute } from "next";

const siteUrl = (() => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const fallback = "https://yuricunha.com";

  try {
    return new URL(fromEnv ?? fallback);
  } catch {
    return new URL(fallback);
  }
})();

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
