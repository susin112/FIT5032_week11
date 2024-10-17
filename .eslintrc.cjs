/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  },
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    browser: true,
    node: true
  }
}
  