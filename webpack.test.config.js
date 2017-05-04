/* eslint-env node */
module.exports = {
  plugins: [
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
    'react-dom/test-utils': true,
    'react-test-renderer/shallow': true,
  },
  devtool: 'inline-source-map',
};