module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['import', 'promise', 'compat', 'react', 'prettier', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'configs/webpack.config.eslint.js',
      },
    },
    'import/core-modules': ['electron'],
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/namespace': 'off',
    'import/named': 'off',
    'import/default': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', { parser: 'typescript' }],
  },
}
