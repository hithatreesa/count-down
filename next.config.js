/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure for GitHub Pages sub-path: /countdown/
  basePath: '/countdown',
  assetPrefix: '/countdown',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
