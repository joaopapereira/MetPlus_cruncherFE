const webpackConfig = require('./webpack.test.config.js');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-sourcemap-loader'
    ],
    files: [
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'src/**/*.jsx', included: false},
      'test/**/*.jsx',
      'test/**/*.js',
    ],
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.jsx': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only',
    },
    reporters: ['progress', 'mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    mochaReporter: {
      colors: {
        success: 'green',
        info: 'bgBlue',
        warning: 'cyan',
        error: 'bgRed',
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x',
      },
    },
  });
};