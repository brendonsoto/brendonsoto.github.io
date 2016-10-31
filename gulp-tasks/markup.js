module.exports = function(gulp, plugins, paths) {
  var fs = require('fs');

  return function() {
    var templateData = {
      projects: JSON.parse(fs.readFileSync('src/data/projects.json', 'utf8'))
    },
        options = {
           batch: paths.src.partials
        };

    return gulp.src(paths.src.html, { base: 'src/views' })
      .pipe(plugins.compileHandlebars(templateData, options))
      .pipe(plugins.bootlint())		// Check if valid bootstrap
      .pipe(plugins.htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('docs'));
  };
};
