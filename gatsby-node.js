// require('ts-node').register({
//   compilerOptions: {
//     module: 'commonjs',
//     target: 'es2015',
//   },
// })
// // eslint-disable-next-line no-native-reassign
// require = require('esm')(module)

require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
  cache: true,
})

module.exports = require('./gatsby-node.esm.js')
