module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
  ],

  // TODO: Remove, current workaround https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'none',
  },
}
