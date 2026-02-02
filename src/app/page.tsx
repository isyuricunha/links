export default function Home() {
  type link_item = {
    label: string;
    href: string;
    icon: "blog" | "steam" | "github" | "discord" | "x" | "stackoverflow" | "devto";
  };

  const profile = {
    name: "Yuri",
    subtitle: "a dba",
    pills: [
      { label: "Website", href: "https://isyuricunha.com" },
      { label: "me@yuricunha.com", href: "mailto:me@yuricunha.com" },
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
    ] satisfies link_item[],
  };

  const icon = (name: link_item["icon"]) => {
    const base =
      "size-4 text-muted transition-colors group-hover:text-foreground";

    switch (name) {
      case "blog":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4H15L19 8V20H7V4Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M15 4V8H19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "steam":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.3 14.4L7.2 13.5C6.3 13.1 5.9 12 6.3 11.1C6.7 10.2 7.8 9.8 8.7 10.2L10.8 11.1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M14.8 7.5a3.4 3.4 0 1 0 0 6.8a3.4 3.4 0 0 0 0-6.8Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M12 12.1l-1.2 1.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "github":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 19c-3 1-3-1-4-1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M15 19v-2.2c0-.6.2-1.1.6-1.5c2.1-.2 4.4-1.1 4.4-5a3.9 3.9 0 0 0-1.1-2.7c.3-.8.3-1.7 0-2.5c0 0-.9-.3-2.8 1.1a9.7 9.7 0 0 0-5.2 0C9 4.9 8.1 5.2 8.1 5.2c-.3.8-.3 1.7 0 2.5A3.9 3.9 0 0 0 7 10.3c0 3.9 2.3 4.8 4.4 5c.4.4.6.9.6 1.5V19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "discord":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.2 7.6c1.6-1.2 3.2-1.5 4.8-1.5s3.2.3 4.8 1.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M8.2 17.8c1.2.8 2.5 1.2 3.8 1.2s2.6-.4 3.8-1.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M8 16c-1.2-2.6-1.3-5.4-.1-8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M16 16c1.2-2.6 1.3-5.4.1-8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M9.5 13.2h.1"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M14.4 13.2h.1"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        );
      case "x":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M7 7l10 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "stackoverflow":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 20h10v-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M9 16h7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M9.4 13.3l6.8 1.4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M10.4 10.2l6.1 2.9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "devto":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 8v8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M10 8h3.2c1.8 0 3.8 1.5 3.8 4s-2 4-3.8 4H10V8Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 grid-background grid-mask opacity-60" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(65%_45%_at_50%_0%,rgba(255,122,24,0.16),transparent_62%)]" />

      <main className="relative mx-auto flex w-full max-w-xl flex-col items-center px-6 pt-14 pb-24">
        <header className="flex w-full flex-col items-center gap-4 text-center motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both]">
          <div className="relative">
            <div className="size-16 overflow-hidden rounded-full border border-border bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,24,0.18),transparent_60%),linear-gradient(145deg,rgba(244,244,245,0.14),rgba(244,244,245,0.02))]" />
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
                {pill.label}
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
              className="group grid w-full grid-cols-[28px_1fr_28px] items-center rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-[rgba(255,122,24,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both]"
              style={{
                animationDelay: `${200 + index * 70}ms`,
              }}
            >
              <span className="grid place-items-center">{icon(link.icon)}</span>
              <span className="text-center font-medium tracking-tight">
                {link.label}
              </span>
              <span className="grid place-items-center">
                <span className="size-1.5 rounded-full bg-accent/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
