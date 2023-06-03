/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
const nextConfig = {
  output: "standalone", // Deploy on Liara
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  env: {
    BASE_URL: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = nextConfig;
