module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['vuetify'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'vuetify/no-deprecated-classes': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
