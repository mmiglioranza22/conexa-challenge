/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
    return [
      {
        source: '/api',
        destination: 'https://conexa-challenge-server-21913d323079.herokuapp.com/',
      },
      {
        source: '/api/:slug',
        destination: 'https://conexa-challenge-server-21913d323079.herokuapp.com/:slug', // Matched parameters can be used in the destination
      },
    ]
  },
}

module.exports = nextConfig
