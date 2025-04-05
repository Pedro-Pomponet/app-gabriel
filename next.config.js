/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig