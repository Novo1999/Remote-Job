/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
