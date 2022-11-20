/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules/**/*.*', 'public/*.*'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  env: {
    'node': true,
    'es2021': true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 0
  },
};
