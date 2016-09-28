module.exports = function(gulp, plugins, paths) {
  return function() {
    // Watch .html files
    plugins.watch(paths.src.handlebars, function() {
      gulp.start('bs-inject-html');
    });

    // Watch .scss files
    plugins.watch(paths.src.scss, function() {
      gulp.start('styles');
    });

    // Watch .js files
    plugins.watch([paths.src.js, '!' + paths.src.jsVendor], function() {
      gulp.start('bs-reload');
    });

    plugins.watch(paths.src.jsVendor, function() {
      gulp.start('scripts-vendor');
    });

    // Watch image files
    plugins.watch(paths.src.images, function() {
      gulp.start('images');
    });
  };
};
