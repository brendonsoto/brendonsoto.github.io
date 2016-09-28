module.exports = function(gulp, plugins, paths) {
  return function() {
    return gulp.src(paths.src.jsCustom)
      .pipe(plugins.concat('main.js'))
      .pipe(plugins.rename({ suffix: '.min' }))
      .pipe(plugins.stripDebug())
      .pipe(plugins.uglify())
      .pipe(gulp.dest(paths.dist.js));
  };
};
