import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.wptest.tharusha.dev.**'
      },
      {
        protocol: 'https',
        hostname: '*.gravatar.**'
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

module.exports = nextConfig