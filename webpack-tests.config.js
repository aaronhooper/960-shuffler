const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './test/960.test.js',
  output: {
    filename: 'test-bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()]
}