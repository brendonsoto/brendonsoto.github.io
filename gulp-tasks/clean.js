module.exports = function(gulp, plugins, paths) {
  return function() {
    return plugins.del([paths.dist.root]);
  };
};
