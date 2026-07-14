/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> deploys to Cloudflare Pages as plain assets.
  // Produces the `out/` directory on `next build`.
  output: 'export',
  images: {
    // Images are pre-optimized (max 2048px, q85) and served directly.
    // `unoptimized` is required for static export (no on-demand optimizer).
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // NOTE: next.config redirects() is NOT supported with `output: 'export'`.
  // The /sveto-krstenje -> /krstenja 301s now live in `public/_redirects`,
  // which Cloudflare Pages applies at the edge.
}

module.exports = nextConfig
