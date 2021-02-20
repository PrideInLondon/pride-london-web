const path = require('path')

module.exports = {
  process: (_src, filename) =>
    `module.exports = ${JSON.stringify(path.basename(filename))};`,
}
