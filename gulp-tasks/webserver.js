module.exports = function(gulp, plugins, paths) {
  return function() {
    plugins.browserSync.init({
      server: paths.dist.root,
      files: [
        '**/*.css',
        '**/images/**'
      ],
      logLevel: 'debug'
    });
  };
};
