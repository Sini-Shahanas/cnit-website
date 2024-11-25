require('dotenv').config();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Disable CSS minification for debugging
    config.optimization.minimize = false;
    return config;
  },
  env: {
    // Add your environment variable here
    // API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ['localhost', 'localhost:1337'],
  },
}

module.exports = nextConfig
