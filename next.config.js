const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
}

module.exports = withContentlayer(nextConfig)
