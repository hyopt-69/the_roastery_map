/** @type {import('next').NextConfig} */

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
});
