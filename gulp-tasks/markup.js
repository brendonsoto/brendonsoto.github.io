module.exports = function(gulp, plugins, paths) {
  return function() {
    var templateData = {},
        options = {
           batch: paths.src.partials
        };

    return gulp.src(paths.src.html, { base: 'src/views' })
      .pipe(plugins.compileHandlebars(templateData, options))
      .pipe(plugins.bootlint())		// Check if valid bootstrap
      .pipe(plugins.htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
  };
};
