require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2015',
  },
})
// eslint-disable-next-line no-native-reassign
require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')
