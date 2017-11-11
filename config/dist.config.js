const path = require('path');
const packageName = require('../package.json').name;

module.exports = {

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: packageName,
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
      }
    },
    {
      'detect-browser': {
        root: 'DetectBrowser',
        commonjs2: 'detect-browser',
        commonjs: 'detect-browser',
        amd: 'detect-browser'
      }
    }
  ],
};