/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
