import { MetadataRoute } from 'next'
import { weddingItems } from './vjencanja/data'
import { maturalneItems } from './maturalne-veceri/data'
import { photoboothItems } from './photobooth/data'
import { krstenjeItems } from './krstenja/data'

const baseUrl = 'https://www.luma-productions.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/vjencanja`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/maturalne-veceri`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/krstenja`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/photobooth`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ]

  const galleryPages: MetadataRoute.Sitemap = [
    ...weddingItems.map((i) => `${baseUrl}/vjencanja/${i.slug}`),
    ...maturalneItems.map((i) => `${baseUrl}/maturalne-veceri/${i.slug}`),
    ...photoboothItems.map((i) => `${baseUrl}/photobooth/${i.slug}`),
    ...krstenjeItems.map((i) => `${baseUrl}/krstenja/${i.slug}`),
  ].map((url) => ({
    url,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...galleryPages]
}
