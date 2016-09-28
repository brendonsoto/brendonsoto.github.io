module.exports = function(gulp, plugins) {
  return function() {
    gulp.start(
      'markup',
      'fonts',
      'styles',
      'scripts-custom-dist',
      'scripts-vendor',
      'images'
    );
  };
};
