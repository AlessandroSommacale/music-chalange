import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/' : '',
  basePath: isProd ? '' : '',
  output: 'export'
};

export default nextConfig;
