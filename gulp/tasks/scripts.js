'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const jshint = require('gulp-jshint');
const rename = require('gulp-rename');
const config = require('../config');

gulp.task('scripts:dev', function() {
  return gulp.src(config.paths.scripts.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('will-be-renamed.js'))
    .pipe(sourcemaps.write())
    .pipe(rename(config.names.js))
    .pipe(gulp.dest(config.paths.scripts.dest));
});

gulp.task('scripts:test', function() {
  return gulp.src(config.paths.scripts.src)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
