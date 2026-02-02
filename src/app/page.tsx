import type { IconType } from "react-icons";
import Image from "next/image";
import fullLogo from "./full-logo.webp";
import {
  FaDiscord,
  FaGithub,
  FaHackerNews,
  FaLinkedin,
  FaMedium,
  FaPinterest,
  FaRedditAlien,
  FaStackOverflow,
  FaSteam,
  FaTwitch,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlineGlobeAlt, HiOutlineShieldCheck } from "react-icons/hi2";
import { SiDevdotto, SiHuggingface, SiMyanimelist, SiNexusmods } from "react-icons/si";
import { LuFileText, LuRss } from "react-icons/lu";

export default function Home() {
  type linkItem = {
    label: string;
    href: string;
    icon: IconType;
  };

  type pillItem = {
    label: string;
    href: string;
    icon: IconType;
  };

  const profile = {
    name: "Yuri",
    subtitle: "a DBA",
    pills: [
      { label: "Website", href: "https://yuricunha.com", icon: HiOutlineGlobeAlt },
      { label: "me@yuricunha.com", href: "mailto:me@yuricunha.com", icon: HiOutlineEnvelope },
    ],
    links: [
      { label: "Website", href: "https://yuricunha.com/", icon: HiOutlineGlobeAlt },
      { label: "Blog", href: "https://yuricunha.com/blog", icon: LuFileText },
      { label: "Bear Blog", href: "https://yuricunha.bearblog.dev/", icon: LuRss },

      { label: "GitHub", href: "https://github.com/isyuricunha", icon: FaGithub },
      { label: "Gist", href: "https://gist.github.com/isyuricunha", icon: FaGithub },
      { label: "LinkedIn", href: "https://br.linkedin.com/in/isyuricunha", icon: FaLinkedin },

      { label: "X", href: "https://x.com/isyuricunha", icon: FaXTwitter },
      {
        label: "Stack Overflow",
        href: "https://stackoverflow.com/users/19750503/yuri-cunha",
        icon: FaStackOverflow,
      },
      { label: "Dev.to", href: "https://dev.to/isyuricunha", icon: SiDevdotto },
      { label: "Medium", href: "https://medium.com/@isyuricunha", icon: FaMedium },
      { label: "Hugging Face", href: "https://huggingface.co/isyuricunha", icon: SiHuggingface },

      { label: "Discord", href: "https://discordapp.com/users/1018988240151253002", icon: FaDiscord },
      { label: "Steam", href: "https://steamcommunity.com/id/isyuricunha/", icon: FaSteam },
      { label: "Twitch", href: "https://www.twitch.tv/isyuricunha/", icon: FaTwitch },

      { label: "Reddit", href: "https://www.reddit.com/user/isyuricunha/", icon: FaRedditAlien },
      { label: "Pinterest", href: "https://www.pinterest.com/isyuricunha/", icon: FaPinterest },
      { label: "Nexus Mods", href: "https://www.nexusmods.com/profile/isyuricunha/", icon: SiNexusmods },
      { label: "MyAnimeList", href: "https://myanimelist.net/profile/isyuricunha", icon: SiMyanimelist },
      {
        label: "Privacy Guides Forum",
        href: "https://discuss.privacyguides.net/u/isyuricunha/summary",
        icon: HiOutlineShieldCheck,
      },
      { label: "Hacker News", href: "https://news.ycombinator.com/user?id=isyuricunha", icon: FaHackerNews },
    ] satisfies linkItem[],
  } satisfies {
    name: string;
    subtitle: string;
    pills: pillItem[];
    links: linkItem[];
  };

  const iconClassName =
    "size-4 text-muted transition-colors group-hover:text-foreground";

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 grid-background grid-mask opacity-60 motion-safe:animate-[grid-drift_28s_linear_infinite]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(65%_45%_at_50%_0%,rgba(255,122,24,0.16),transparent_62%)]" />
      <div className="pointer-events-none fixed inset-0 aurora motion-safe:animate-[aurora-shift_18s_ease-in-out_infinite]" />
      <div className="pointer-events-none fixed inset-0 scanlines motion-safe:animate-[scanline-shift_12s_linear_infinite]" />
      <div className="pointer-events-none fixed inset-0 overflow-hidden bg-squares">
        <span
          className="motion-safe:animate-[square-float_26s_linear_infinite]"
          style={{ left: "6%", width: 18, height: 18, animationDelay: "-8s" }}
        />
        <span
          className="motion-safe:animate-[square-float_32s_linear_infinite]"
          style={{ left: "14%", width: 34, height: 34, animationDelay: "-22s" }}
        />
        <span
          className="motion-safe:animate-[square-float_20s_linear_infinite]"
          style={{ left: "28%", width: 22, height: 22, animationDelay: "-12s" }}
        />
        <span
          className="motion-safe:animate-[square-float_28s_linear_infinite]"
          style={{ left: "42%", width: 42, height: 42, animationDelay: "-18s" }}
        />
        <span
          className="motion-safe:animate-[square-float_24s_linear_infinite]"
          style={{ left: "54%", width: 26, height: 26, animationDelay: "-5s" }}
        />
        <span
          className="motion-safe:animate-[square-float_36s_linear_infinite]"
          style={{ left: "66%", width: 54, height: 54, animationDelay: "-28s" }}
        />
        <span
          className="motion-safe:animate-[square-float_22s_linear_infinite]"
          style={{ left: "74%", width: 20, height: 20, animationDelay: "-9s" }}
        />
        <span
          className="motion-safe:animate-[square-float_30s_linear_infinite]"
          style={{ left: "82%", width: 30, height: 30, animationDelay: "-16s" }}
        />
        <span
          className="motion-safe:animate-[square-float_26s_linear_infinite]"
          style={{ left: "90%", width: 16, height: 16, animationDelay: "-2s" }}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 vignette" />

      <main className="relative mx-auto flex w-full max-w-xl flex-col items-center px-6 pt-14 pb-24">
        <header className="flex w-full flex-col items-center gap-4 text-center motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both]">
          <Image
            src={fullLogo}
            alt="Yuri links"
            priority
            className="h-8 w-auto opacity-90"
          />
          <div className="relative">
            <div className="size-16 overflow-hidden rounded-full border border-border bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,24,0.18),transparent_60%),linear-gradient(145deg,rgba(244,244,245,0.14),rgba(244,244,245,0.02))] motion-safe:animate-[accent-pulse_7s_ease-in-out_infinite]">
              <Image
                src="/me.png"
                alt="Yuri Cunha"
                width={64}
                height={64}
                priority
                className="size-16 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold tracking-tight text-foreground">
              {profile.name}
            </h1>
            <p className="text-xs text-muted">{profile.subtitle}</p>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {profile.pills.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-surface px-5 py-2 text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span className="inline-flex items-center gap-2">
                  <pill.icon className="size-4 text-muted" aria-hidden="true" />
                  {pill.label}
                </span>
              </a>
            ))}
          </div>
        </header>

        <section className="mt-10 flex w-full flex-col gap-3">
          {profile.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative grid w-full grid-cols-[28px_1fr_28px] items-center overflow-hidden rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-[rgba(255,122,24,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both] motion-safe:transition-[transform,box-shadow,border-color,background-color] motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)]"
              style={{
                animationDelay: `${200 + index * 70}ms`,
              }}
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.18),transparent_60%)]" />
                <span className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(244,244,245,0.07)_45%,transparent_60%)]" />
              </span>

              <span className="relative z-10 grid place-items-center">
                <link.icon className={iconClassName} aria-hidden="true" />
              </span>
              <span className="relative z-10 text-center font-medium tracking-tight">
                {link.label}
              </span>
              <span className="relative z-10 grid place-items-center">
                <span className="size-1.5 rounded-full bg-accent/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
