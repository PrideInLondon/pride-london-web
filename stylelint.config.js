module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
    'stylelint-a11y/recommended',
  ],
  plugins: ['stylelint-prettier', 'stylelint-a11y'],
  rules: {
    'prettier/prettier': true,
    'string-quotes': null,
    'no-duplicate-selectors': true,
    'color-no-invalid-hex': true,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'a11y/media-prefers-reduced-motion': null,
  },
}
