'use strict';

const gulp = require('gulp');
const del = require('del');
const config = require('../config');

gulp.task('fonts', function() {
  return gulp.src(config.paths.fonts.src)
    .pipe(gulp.dest(config.paths.fonts.dest))
});