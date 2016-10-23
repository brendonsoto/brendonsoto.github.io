module.exports = {
  src: {
    // Add any extra partials directories to the HTML & partials arrays below
    html: ['src/views/**/*.html', '!src/views/partials/**', '!src/views/layouts/**', 'src/data/projects.json'], 
    handlebars: ['src/views/**/*.html', 'src/views/partials/**', 'src/views/layouts/**'], 
    partials: ['src/views/partials', 'src/views/layouts'],
    scss: 'src/assets/styles/*.scss',
    js: 'src/assets/js/**/*.js',
    jsCustom: ['src/assets/js/**/*.js', '!src/assets/js/vendor/**'],
    jsVendor: 'src/assets/js/vendor/**',
    images: 'src/assets/images/**/*',
    fonts: 'src/assets/fonts/*',
    data: 'src/assets/data/*'
  },
  dist: {
    styles: 'dist/assets/styles',
    js: 'dist/assets/js'
  }
};
