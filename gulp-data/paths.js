module.exports = {
  src: {
    // Add any extra partials directories to the HTML & partials arrays below
    data: 'src/assets/data/*',
    fonts: 'src/assets/fonts/*',
    handlebars: ['src/views/**/*.html', 'src/views/partials/**', 'src/views/layouts/**', 'src/data/projects.json'], 
    html: ['src/views/**/*.html', '!src/views/partials/**', '!src/views/layouts/**'], 

    images: 'src/assets/images/**/*',

    js: 'src/assets/js/**/*.js',
    jsCustom: ['src/assets/js/**/*.js', '!src/assets/js/vendor/**'],
    jsVendor: 'src/assets/js/vendor/**',
    partials: ['src/views/partials', 'src/views/layouts'],
    scss: 'src/assets/styles/*.scss'
  },
  dist: {
    js: 'docs/assets/js',
    root: 'docs',
    styles: 'docs/assets/styles'
  }
};
