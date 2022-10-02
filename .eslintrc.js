module.exports = {
  plugins: ['@typescript-eslint', 'jest', 'import'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    'import/extensions': [
      'off',
      {
        ignorePackages: false,
      },
    ],
    // prop-typesの省略を禁止 (TS利用の為off)
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // 単体のexportを禁止 (名前付きexportでDXを優先した為off)
    'import/prefer-default-export': 'off',
    // Redux Toolkitで値の更新を許可するため、propsをfalseにする
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // TypeScriptの型推論を利用したい為false
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 返り値の型は型推論も許容したい為OFF
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // devDependenciesのimportを禁止 (Storybookのみoff)
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['storybook/**', '**/*.stories.tsx'],
      },
    ],
    // 基本的に引数は型で強制しているので無闇に渡されることがない、スプレッド的な渡し方もしたい場合があるので許可する
    'react/jsx-props-no-spreading': 'off',
    // indexしかkeyになるものがない場合が往々にしてあるのでoff
    'react/no-array-index-key': 'off',
    // emotionでcssを使用するので無効
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    // アロー関数でのコンポーネント定義を許可する。
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // importのorderを強制
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    // airbnb-typescriptのバージョンをあげた時に発生
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-shadow': 'off',
    // next/link使用しているは、aタグの方にhrefを指定しないためエラーを打ち消し
    'jsx-a11y/anchor-is-valid': 'off',
    // 全ての画像に必須というわけではないので、エラーを打ち消し
    'jsx-a11y/alt-text': 'off',
  },
};
