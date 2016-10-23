/*!
 * gulp
 * npm install 
 */

// Load plugins
var gulp = require('gulp'),
    paths = require('./gulp-data/paths'),
    plugins = require('gulp-load-plugins')({ pattern: ['*', '!jshint'] });


// Handlebars -- Register helpers
plugins.handlebars.registerHelper(plugins.handlebarsLayouts(plugins.handlebars));

// Task helper -- save on typing 'require' in the tasks below
function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, paths);
}

/*===== Tasks =====*/
gulp.task('bs-inject-html', ['markup'], getTask('bs-inject-html'));
gulp.task('bs-reload', ['scripts-custom'], getTask('bs-reload'));
gulp.task('clean', getTask('clean'));
gulp.task('dist', ['clean'], getTask('dist'));
gulp.task('fonts', getTask('fonts'));
gulp.task('images', getTask('images'));
gulp.task('markup', getTask('markup'));
gulp.task('scripts-custom', getTask('scripts-custom'));
gulp.task('scripts-custom-dist', getTask('scripts-custom-dist'));
gulp.task('scripts-vendor', getTask('scripts-vendor'));
gulp.task('styles', getTask('styles'));
gulp.task('watch', [
    'fonts',
    'images',
    'markup',
    'styles',
    'scripts-custom',
    'scripts-vendor'
  ],
  getTask('watch'));
gulp.task('webserver', ['watch'], getTask('webserver'));


// Default task -- not a module for quick reference
gulp.task('default', ['clean'], function() {
  gulp.start('webserver');
});
