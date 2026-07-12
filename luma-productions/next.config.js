/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  async redirects() {
    return [
      // Krštenja preseljena sa /sveto-krstenje na /krstenja
      { source: '/sveto-krstenje', destination: '/krstenja', permanent: true },
      { source: '/sveto-krstenje/:slug', destination: '/krstenja/:slug', permanent: true },
    ]
  },
}

module.exports = nextConfig
