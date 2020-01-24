require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
  cache: true,
})

module.exports = require('./gatsby-node.esm.js')
