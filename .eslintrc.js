module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // no-multiple-empty-lines: https://github.com/sveltejs/eslint-plugin-svelte3/issues/41
    // import/first: https://github.com/sveltejs/eslint-plugin-svelte3/issues/32
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
    'import/first': 0
  },
  ignorePatterns: ['/public/build/bundle.js']

}
