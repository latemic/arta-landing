'use strict';

const gulp = require('gulp');
const config = require('../config');

gulp.task('watch:styles', function() {
  return gulp.watch(config.paths.styles.src,
    gulp.series('styles:dev'));
});

gulp.task('watch:scripts', function() {
  return gulp.watch(config.paths.scripts.src,
    gulp.series('scripts:dev'));
});

gulp.task('watch:images', function() {
  return gulp.watch(config.paths.images.src,
    gulp.series('images'));
});

gulp.task('watch:markup', function() {
  return gulp.watch(config.paths.markup.src,
    gulp.series('markup'));
});

gulp.task('watch', gulp.parallel('watch:styles', 'watch:scripts', 'watch:images', 'watch:markup'));
