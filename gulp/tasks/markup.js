'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const config = require('../config');

gulp.task('markup', function() {
  return gulp.src(config.paths.markup.templates)
    .pipe(plumber())
    .pipe(nunjucksRender({
      path: [config.paths.markup.path]
    }))
    .pipe(gulp.dest(config.paths.markup.dest))
});