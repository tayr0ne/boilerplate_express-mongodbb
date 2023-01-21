const pkg = require('../../../package.json')

// Only specific keys are needed, not the whole file.

module.exports = {
  bugs: {
    url: 'url do possivel bug'
  },
  name: pkg.name,
  version: pkg.version
}
