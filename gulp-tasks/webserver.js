module.exports = function(gulp, plugins) {
  return function() {
    plugins.browserSync.init({
      server: 'docs',
      files: [
        '**/*.css',
        '**/images/**'
      ],
      logLevel: 'debug'
    });
  };
};
