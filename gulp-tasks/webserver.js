module.exports = function(gulp, plugins) {
  return function() {
    plugins.browserSync.init({
      server: 'dist',
      files: [
        '**/*.css',
        '**/images/**'
      ],
      logLevel: 'debug'
    });
  };
};
