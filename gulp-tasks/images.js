module.exports = function(gulp, plugins, paths) {
  return function() {
    return gulp.src(paths.src.images, { base: 'src' })
      .pipe(
        plugins.cache(
          plugins.imagemin(
            { optimizationLevel: 3, progressive: true, interlaced: true }
          )
        )
      )
      .pipe(gulp.dest(paths.dist.root));
  };
};
