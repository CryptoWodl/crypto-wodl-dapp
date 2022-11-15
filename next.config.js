/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // see https://nextjs.org/docs/messages/swc-minify-enabled
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
