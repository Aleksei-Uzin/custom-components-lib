const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    globalObject: 'this',
    library: {
      name: 'CustomComponentsLib',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
