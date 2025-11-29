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
  assetPrefix: isProd ? '/music-challange/' : '',
  basePath: isProd ? '/music-challange' : '',
  output: 'export'
};

export default nextConfig;
