module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    commonjs: true,
    es6: true,
    amd: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'google'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['off', 'windows'],
    'max-len': ['error', {code: 120}],
  },
};
