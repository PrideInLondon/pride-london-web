const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx|js|jsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: ['babel-plugin-styled-components'],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    ],
    exclude: [/node_modules/],
  })

  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx')
  return config
}
