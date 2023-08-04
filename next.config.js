/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  }
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.tsx"
);

module.exports = withNextIntl(nextConfig);
