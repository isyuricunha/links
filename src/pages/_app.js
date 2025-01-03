// Packages
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

// Styles
import "@/styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
	const meta = {
		title: "Yuri Cunha | Senior Cloud and Infrastructure Specialist",
		description:
			"Just another guy trying to speed up the supermarket line with the power of the mind. Definitely born on Earth, not in gamma-7 quadrant.",
		image: "https://yuricunha.com/static/images/tech.png",
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta name="description" content={meta.description} />
				<meta property="og:site_name" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta property="og:url" content="https://yuricunha.com/" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@isyuricunha" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				<meta name="apple-touch-fullscreen" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content={meta.title} />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta
					name="viewport"
					content="initial-scale=1, viewport-fit=cover, user-scalable=no"
				/>
				<link
					rel="shortcut icon"
					type="image/png"
					href="/images/favicon-180.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/favicon-180.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					as="font"
					crossOrigin="anonymous"
					href="/fonts/inter.var.woff2"
					rel="preload"
					type="font/woff2"
				/>
				<script
					defer
					src="https://umami.yuricunha.com/script.js"
					data-website-id="ae078a6c-02fb-45c2-96d3-3274da991093"
				></script>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
