require('dotenv').config();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    // domains: ['localhost', 'localhost:1337'],
    domains: ['admin.cnit-solutions.com'],
  },
}

module.exports = nextConfig
