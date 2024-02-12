/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
