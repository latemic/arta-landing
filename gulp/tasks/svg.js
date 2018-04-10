'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const path = require('path');
const config = require('../config');

gulp.task('svg', function() {
  return gulp.src(config.paths.svg.src)
    .pipe(plumber())
    .pipe(svgmin(function(file) {
      const prefix = path.basename(file.relative, path.extname(file.relative));
      
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-ico',
            minify: true
          }
        }]
      };
    }))
    .pipe(gulp.dest(config.paths.svg.dest))
    .pipe(svgstore())
    .pipe(rename(config.names.svgSprite))
    .pipe(gulp.dest(config.paths.svg.dest));
});