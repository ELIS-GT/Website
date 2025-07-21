/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig