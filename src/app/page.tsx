export default function Home() {
  const get_display_host = (href: string) => {
    try {
      const url = new URL(href, "https://example.com");

      if (url.protocol === "mailto:") {
        return "email";
      }

      if (url.protocol === "tel:") {
        return "phone";
      }

      if (url.host) {
        return url.host.replace(/^www\./, "");
      }

      return url.protocol.replace(":", "");
    } catch {
      return "";
    }
  };

  const profile = {
    name: "Seu Nome",
    bio: "Links rápidos.",
    location: "",
    links: [
      {
        label: "Instagram",
        href: "https://instagram.com/",
        description: "Fotos e updates",
      },
      {
        label: "GitHub",
        href: "https://github.com/",
        description: "Código e projetos",
      },
      {
        label: "X (Twitter)",
        href: "https://x.com/",
        description: "Pensamentos curtos",
      },
      {
        label: "Email",
        href: "mailto:seuemail@exemplo.com",
        description: "Contato direto",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(255,122,24,0.14),transparent_60%)]" />

      <main className="relative mx-auto flex w-full max-w-xl flex-col gap-10 px-6 pt-16 pb-20">
        <header className="flex flex-col gap-5 motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both]">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-full border border-border bg-surface text-sm font-medium tracking-tight text-foreground">
                {profile.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")
                  .toUpperCase()}
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold tracking-tight text-foreground">
                  {profile.name}
                </h1>
                <p className="text-sm leading-6 text-muted">{profile.bio}</p>
              </div>
            </div>

            <div className="hidden shrink-0 text-xs text-muted sm:block">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
                <span className="size-1.5 rounded-full bg-accent" />
                online
              </span>
            </div>
          </div>

          {profile.location ? (
            <div className="text-xs text-muted">{profile.location}</div>
          ) : null}
        </header>

        <section className="flex flex-col gap-3">
          {profile.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors duration-200 hover:border-accent/40 hover:bg-[rgba(255,122,24,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both]"
              style={{
                animationDelay: `${160 + index * 70}ms`,
              }}
            >
              <div className="flex min-w-0 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium tracking-tight text-foreground">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted">·</span>
                  <span className="truncate text-xs text-muted">
                    {get_display_host(link.href)}
                  </span>
                </div>
                <span className="text-xs leading-5 text-muted">
                  {link.description}
                </span>
              </div>

              <span className="grid size-9 place-items-center rounded-full border border-border bg-background text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:text-foreground">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 7H17V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </section>

        <footer className="flex flex-col gap-2 text-center text-xs text-muted motion-safe:animate-[fade-up_700ms_cubic-bezier(0.2,0.8,0.2,1)_both] motion-safe:[animation-delay:520ms]">
          <div className="mx-auto h-px w-24 bg-border" />
          <div>
            <span className="text-foreground/90">{profile.name}</span>
            <span className="text-muted"> · </span>
            <span className="text-muted">feito com Next.js</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
