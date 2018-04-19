'use strict';

const gulp = require('gulp');

require('./gulp/tasks/fonts');
require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/images');
require('./gulp/tasks/svg');
require('./gulp/tasks/markup');
require('./gulp/tasks/clean');
require('./gulp/tasks/devServer');
require('./gulp/tasks/watch');

gulp.task('default',
  gulp.series(
    'clean',
    gulp.parallel(
      'fonts',
      'styles:dev',
      'scripts:dev',
      'images',
      'svg',
      'markup'
    ),
    gulp.parallel('watch', 'devServer')
  )
);

require('./gulp/docs/docs');
