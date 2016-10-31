module.exports = function(gulp, plugins, paths) {
  return function() {
    return gulp.src(paths.src.fonts, { base: 'src' })
      .pipe(gulp.dest('docs'));
  };
};
