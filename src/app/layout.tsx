import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = (() => {
  const from_env = process.env.NEXT_PUBLIC_SITE_URL;
  const fallback = "https://yuricunha.com";

  try {
    return new URL(from_env ?? fallback);
  } catch {
    return new URL(fallback);
  }
})();

const verification = (() => {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  if (!google && !bing) {
    return undefined;
  }

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { bing } } : {}),
  } satisfies Metadata["verification"];
})();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Yuri Cunha | Links",
    template: "%s | Yuri Cunha",
  },
  description: "Links to my profiles, socials, and projects.",
  applicationName: "Yuri Cunha | Links",
  authors: [{ name: "Yuri Cunha", url: "https://yuricunha.com" }],
  creator: "Yuri Cunha",
  publisher: "Yuri Cunha",
  alternates: {
    canonical: "/",
  },
  ...(verification ? { verification } : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Yuri Cunha | Links",
    description: "Links to my profiles, socials, and projects.",
    siteName: "Yuri Cunha | Links",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yuri Cunha | Links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Cunha | Links",
    description: "Links to my profiles, socials, and projects.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl.href}#yuri-cunha`,
        name: "Yuri Cunha",
        url: siteUrl.href,
        email: "mailto:me@yuricunha.com",
        sameAs: [
          "https://yuricunha.com/",
          "https://yuricunha.com/blog",
          "https://yuricunha.bearblog.dev/",
          "https://github.com/isyuricunha",
          "https://gist.github.com/isyuricunha",
          "https://br.linkedin.com/in/isyuricunha",
          "https://x.com/isyuricunha",
          "https://www.twitch.tv/isyuricunha/",
          "https://www.pinterest.com/isyuricunha/",
          "https://www.nexusmods.com/profile/isyuricunha/",
          "https://myanimelist.net/profile/isyuricunha",
          "https://dev.to/isyuricunha",
          "https://www.reddit.com/user/isyuricunha/",
          "https://discuss.privacyguides.net/u/isyuricunha/summary",
          "https://medium.com/@isyuricunha",
          "https://huggingface.co/isyuricunha",
          "https://news.ycombinator.com/user?id=isyuricunha",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl.href}#website`,
        url: siteUrl.href,
        name: "Yuri Cunha | Links",
        description: "Links to my profiles, socials, and projects.",
        inLanguage: "en",
        publisher: {
          "@id": `${siteUrl.href}#yuri-cunha`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
