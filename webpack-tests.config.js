const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './test/960.test.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    filename: 'test-bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()]
}
