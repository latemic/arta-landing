'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cssGlobbing = require('gulp-css-globbing');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const config = require('../config');

gulp.task('styles:dev', function() {
  return gulp.src(config.paths.styles.src)
    .pipe(plumber())
    .pipe(cssGlobbing({
      extensions: ['.scss'],
      autoReplaceBlock: {
        onOff: true,
        globBlockBegin: 'cssGlobbingBegin',
        globBlockEnd: 'cssGlobbingEnd',
        globBlockContents: 'modules/*.scss'
      },
      scssImportPath: {
        leading_underscore: false,
        filename_extension: false
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(rename(config.names.css))
    .pipe(gulp.dest(config.paths.styles.dest));
});
