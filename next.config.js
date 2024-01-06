/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  style: {
    global: '/public/fonts/Chillax_Complete/Fonts/OTF/Chillax-Bold.otf',
  },
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
