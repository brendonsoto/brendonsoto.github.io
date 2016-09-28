module.exports = function(gulp, plugins, paths) {
  return function() {
    return gulp.src(paths.src.scss)
      .pipe(plugins.plumber())
      .pipe(plugins.concat('main.css'))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass())
      .pipe(plugins.rename({ suffix: '.min' }))
      .pipe(plugins.cssnano({
        autoprefixer: {
          add: true,
          browsers: ['last 2 versions']
        }
      }))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist.styles));
  };
};
