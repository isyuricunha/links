import type { MetadataRoute } from "next";

import androidChrome192 from "./android-chrome-192x192.png";
import androidChrome384 from "./android-chrome-384x384.png";
import androidChrome512 from "./android-chrome-512x512.png";
import appleTouchIcon from "./apple-touch-icon.png";
import mstile150 from "./mstile-150x150.png";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yuri Cunha | Links",
    short_name: "Yuri Links",
    description: "Links to my profiles, socials, and projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: androidChrome192.src,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: androidChrome384.src,
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: androidChrome512.src,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: androidChrome512.src,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: appleTouchIcon.src,
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: mstile150.src,
        sizes: "150x150",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
