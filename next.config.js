/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLinaria = require('next-linaria');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const linariaOption = {};

module.exports = withLinaria({
  ...nextConfig,
  linaria: linariaOption,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@public'] = path.resolve(__dirname, 'public');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
