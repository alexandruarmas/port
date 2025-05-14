/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/port',
  assetPrefix: '/port/',
  trailingSlash: true,
};

module.exports = nextConfig;
