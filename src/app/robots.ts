import type { MetadataRoute } from 'next'

const get_site_url = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return process.env.NODE_ENV === 'production'
    ? 'https://links.yuricunha.com'
    : 'http://localhost:3000'
}

export default function robots(): MetadataRoute.Robots {
  const site_url = get_site_url()

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${site_url}/sitemap.xml`
  }
}
