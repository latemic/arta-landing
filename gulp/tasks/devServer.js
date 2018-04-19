'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('../config');

gulp.task('devServer', function() {
  browserSync.init({
    ghostMode: false,
    open: false,
    notify: false,
    server: {
      baseDir: config.paths.dist,
      index: 'index.html'
    },
    files: [
      config.paths.dist +'fonts/*.woff2',
      config.paths.dist + 'css/*.css',
      config.paths.dist + 'js/*.js',
      config.paths.dist + 'img/**/*',
      config.paths.dist + '*.html'
    ]
  });
});
