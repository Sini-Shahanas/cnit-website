/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Disable CSS minification for debugging
    config.optimization.minimize = false;
    return config;
  },
}

module.exports = nextConfig
