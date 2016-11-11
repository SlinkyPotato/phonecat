//jshint strict: false
module.exports = function(config) {
  config.set({
    basePath: './app',
    files: [
      // Library files, no need to watch files
      { pattern: '../node_modules/jquery/dist/jquery.min.js', watched: false },
      { pattern: '../node_modules/angular/angular.js', watched: false },
      { pattern: '../node_modules/angular-animate/angular-animate.js', watched: false },
      { pattern: '../node_modules/angular-resource/angular-resource.js', watched: false },
      { pattern: '../node_modules/angular-route/angular-route.js', watched: false },
      { pattern: '../node_modules/angular-mocks/angular-mocks.js', watched: false },
      
      // Core Files
      '**/*.module.js',
      '**/*.service.js',
      '**/*.component.js',
      '**/*.filter.js',
      '*!(.test).js',

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
