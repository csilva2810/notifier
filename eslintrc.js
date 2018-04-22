exports.default = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },

  env: {
    browser: true
  },

  extends: ['eslint:recomended', 'airbnb-base'],

  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never'
    }],

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
