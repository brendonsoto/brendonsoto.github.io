module.exports = function(gulp, plugins, paths) {
  return function() {
    return gulp.src(paths.src.jsCustom)
      .pipe(plugins.plumber())
      .pipe(plugins.jshint('.jshintrc'))
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat('main.js'))
      .pipe(plugins.rename({ suffix: '.min' }))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(paths.dist.js));
  };
};
