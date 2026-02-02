const config = {
  entry: [
    "src/app/**/{page,layout,loading,not-found,error,global-error,template}.{ts,tsx}",
    "src/app/**/{route,robots,sitemap,manifest}.{ts,tsx}",
    "src/app/**/{opengraph-image,twitter-image}.{ts,tsx}",
  ],
  project: ["src/**/*.{ts,tsx}"],
  ignoreDependencies: ["@commitlint/cli", "tailwindcss"],
  ignore: [
    "src/app/**/favicon.*",
    "src/app/**/apple-touch-icon.*",
    "src/app/**/android-chrome-*.png",
    "src/app/**/mstile-*.png",
    "src/app/**/logo-*.png",
    "src/app/**/full-logo.webp",
  ],
};

export default config;
