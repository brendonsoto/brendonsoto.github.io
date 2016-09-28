module.exports = function(gulp, plugins) {
  return function(done) {
    plugins.browserSync.reload('**/*.html');
    done();
  };
};
