/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
