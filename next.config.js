/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  experimental: {
    staleTimes: { dynamic: 30, static: 3600 },
  },
  output: "standalone",
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
