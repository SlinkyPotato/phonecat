//jshint strict: false
module.exports = function(config) {
  config.set({
    basePath: './app',
    files: [
      // Library files, no need to watch files
      { pattern: '../node_modules/angular/angular.js', watched: false },
      { pattern: '../node_modules/angular-route/angular-route.js', watched: false },
      { pattern: '../node_modules/angular-mocks/angular-mocks.js', watched: false },
      
      // Core Files
      '**/*.component.js',
      '*!(.module|.filter|.test).js',

      // Test files
      '**/*.test.js'
    ],
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Firefox', 'IE'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    client: {
      captureConsole: true
    },
    colors: true
  });
};
