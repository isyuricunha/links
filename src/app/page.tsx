import {
  FaDiscord,
  FaGithub,
  FaStackOverflow,
  FaSteam,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiDevdotto } from "react-icons/si";
import { HiOutlineEnvelope, HiOutlineGlobeAlt } from "react-icons/hi2";
import { LuFileText } from "react-icons/lu";

export default function Home() {
  type linkItem = {
    label: string;
    href: string;
    icon: "blog" | "steam" | "github" | "discord" | "x" | "stackoverflow" | "devto";
  };

  const profile = {
    name: "Yuri",
    subtitle: "a DBA",
    pills: [
      { label: "Website", href: "https://isyuricunha.com", kind: "website" },
      { label: "me@yuricunha.com", href: "mailto:me@yuricunha.com", kind: "email" },
    ],
    links: [
      { label: "Blog", href: "https://isyuricunha.com", icon: "blog" },
      { label: "Steam", href: "https://steamcommunity.com", icon: "steam" },
      { label: "GitHub", href: "https://github.com", icon: "github" },
      { label: "Discord", href: "https://discord.com", icon: "discord" },
      { label: "X", href: "https://x.com", icon: "x" },
      {
        label: "Stack Overflow",
        href: "https://stackoverflow.com",
        icon: "stackoverflow",
      },
      { label: "Dev.to", href: "https://dev.to", icon: "devto" },
    ] satisfies linkItem[],
  };

  const iconClassName =
    "size-4 text-muted transition-colors group-hover:text-foreground";

  const icon = (name: linkItem["icon"]) => {
    switch (name) {
      case "blog":
        return <LuFileText className={iconClassName} aria-hidden="true" />;
      case "steam":
        return <FaSteam className={iconClassName} aria-hidden="true" />;
      case "github":
        return <FaGithub className={iconClassName} aria-hidden="true" />;
      case "discord":
        return <FaDiscord className={iconClassName} aria-hidden="true" />;
      case "x":
        return <FaXTwitter className={iconClassName} aria-hidden="true" />;
      case "stackoverflow":
        return (
          <FaStackOverflow className={iconClassName} aria-hidden="true" />
        );
      case "devto":
        return <SiDevdotto className={iconClassName} aria-hidden="true" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 grid-background grid-mask opacity-60 motion-safe:animate-[grid-drift_28s_linear_infinite]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(65%_45%_at_50%_0%,rgba(255,122,24,0.16),transparent_62%)]" />
      <div className="pointer-events-none fixed inset-0 vignette" />

      <main className="relative mx-auto flex w-full max-w-xl flex-col items-center px-6 pt-14 pb-24">
        <header className="flex w-full flex-col items-center gap-4 text-center motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both]">
          <div className="relative">
            <div className="size-16 overflow-hidden rounded-full border border-border bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,24,0.18),transparent_60%),linear-gradient(145deg,rgba(244,244,245,0.14),rgba(244,244,245,0.02))] motion-safe:animate-[accent-pulse_7s_ease-in-out_infinite]" />
            <div className="pointer-events-none absolute inset-0 grid place-items-center rounded-full">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                {profile.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")
                  .toUpperCase()}
              </span>
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
                  {pill.kind === "email" ? (
                    <HiOutlineEnvelope className="size-4 text-muted" aria-hidden="true" />
                  ) : (
                    <HiOutlineGlobeAlt className="size-4 text-muted" aria-hidden="true" />
                  )}
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

              <span className="relative z-10 grid place-items-center">{icon(link.icon)}</span>
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
