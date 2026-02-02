<p align="center">
  <img src="src/app/full-logo.webp" height="96" alt="Yuri links" />
  <h1 align="center">links.yuricunha.com</h1>
</p>

A minimal, Linktree-like page for Yuri Cunha.

## Getting Started

### Requirements

- Node.js >= 24
- pnpm

### Setup

1. Install dependencies.

```bash
pnpm install
```

2. Create your local environment file.

```bash
cp .env.example .env.local
```

3. Start the development server.

```bash
pnpm dev
```

Open http://localhost:3000

## Environment variables

- `NEXT_PUBLIC_SITE_URL` (required)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (optional)
- `NEXT_PUBLIC_BING_SITE_VERIFICATION` (optional)

## Scripts

- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm lint`
