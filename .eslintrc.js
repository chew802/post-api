module.exports = {
  env: {
    es2021: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    'standard',
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}