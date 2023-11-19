import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/signin/', '/signup/'],
      disallow: ['/account/', '/assets/'],
    },
    sitemap: 'https://www.estudiopetbnu.com.br/sitemap.xml.tsx',
  }
}
