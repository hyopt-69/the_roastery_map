const path = require('path');

module.exports = {
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  // storybookでemotionを使えるようにする設定。
  babel: async (options) => {
    options.presets.push('@emotion/babel-preset-css-prop');
    return options;
  },
  viteFinal: async (config) => {
    // pathエイリアスの設定
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@public': path.resolve(__dirname, '../public'),
    };

    return config;
  },
};
