module.exports = function(gulp, plugins) {
  return function() {
    plugins.browserSync.init({
      server: './',
      files: [
        '**/*.css',
        '**/images/**'
      ],
      logLevel: 'debug'
    });
  };
};
