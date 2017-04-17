let typescriptPlugin = require('rollup-plugin-typescript');
let nodeResolvePlugin = require('rollup-plugin-node-resolve');
let typescript = require('typescript/lib/typescript');

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine'
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-rollup-preprocessor'
    ],

    // list of files / patterns to load in the browser
    files: [
      'src/ts/**/*.ts'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/ts/**/*.ts': ['rollup']
    },

    rollupPreprocessor: {
      // rollup settings. See Rollup documentation
      plugins: [,
        typescriptPlugin({
          typescript: typescript,
          importHelpers: true
        }),
        nodeResolvePlugin()
      ],
      // will help to prevent conflicts between different tests entries
      sourceMap: 'inline',
      format: 'iife',
      moduleName: 'main'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
