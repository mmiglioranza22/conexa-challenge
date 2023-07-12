/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:8080',
      },
      {
        source: '/api/:slug',
        destination: 'http://localhost:8080/:slug', // Matched parameters can be used in the destination
      },
    ]
  },
}

module.exports = nextConfig
