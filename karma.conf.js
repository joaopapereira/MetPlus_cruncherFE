var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';


module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'src/components/**/*.jsx',
            'test/**/*.spec.jsx'
        ],

        autoWatch: true,

        frameworks: ['mocha'],

        plugins: [
            require("karma-webpack"),
            require("karma-mocha"),
            require("karma-phantomjs-launcher"),
            require("karma-spec-reporter"),
            require('karma-sourcemap-loader')
        ],

        preprocessors: {
            // only specify one entry point
            // and require all tests in there
            'test/helpers/mains.jsx': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        browsers: ['PhantomJS'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
