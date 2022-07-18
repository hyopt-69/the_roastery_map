module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['@linaria/stylelint', 'stylelint-config-prettier'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'function-whitespace-after': 'never',
    'property-no-unknown': true,
    'no-invalid-position-at-import-rule': true,
  },
};
