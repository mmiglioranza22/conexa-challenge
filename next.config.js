/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
    const server = process.env.NODE_ENV != 'dev' ? 'https://conexa-challenge-server-4327208ecb73.herokuapp.com/' : 'http://localhost:8080';
    return [
      {
        source: '/api',
        destination: `${server}`,
      },
      {
        source: '/api/:slug',
        destination: `${server}/:slug`, // Matched parameters can be used in the destination
      },
    ]
  },
}

module.exports = nextConfig
