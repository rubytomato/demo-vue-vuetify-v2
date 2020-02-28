/** @type {import('prettier').Options} */
module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.{md,yml}',
      options: {
        printWidth: 80,
        semi: true,
        singleQuote: false,
        trailingComma: 'none'
      }
    }
  ]
}
