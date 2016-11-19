module.exports = function(gulp, plugins, paths) {
  return function() {
    return gulp.src(paths.src.jsVendor, { base: 'src' })
      .pipe(gulp.dest(paths.dist.root));
  };
};
