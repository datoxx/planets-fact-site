/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Mercury',
        permanent: true,
      },
    ]
  },
}
