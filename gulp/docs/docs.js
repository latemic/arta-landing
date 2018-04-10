'use strict';

const gulp = require('gulp');

let defaultTask;

defaultTask = gulp.task('default');
defaultTask.description = 'Watches for changes and quickly generates styles, images, svgs and markup. BrowserSynced.';

defaultTask = gulp.task('clean');
defaultTask.description = `Devares 'dist' folder`;

defaultTask = gulp.task('devServer');
defaultTask.description = `Fire up BrowserSync webserver on localhost:3000. Doesn't open the page in browser automatically by default.`;

defaultTask = gulp.task('styles:dev');
defaultTask.description = "Combine all sass and compiles it to generatedByGulp.css, add source maps.";

defaultTask = gulp.task('images');
defaultTask.description = 'Optimize images';

defaultTask = gulp.task('svg');
defaultTask.description = 'Optimize SVGs and export them to dist. Make SVG sprite and export it, too.';

defaultTask = gulp.task('markup');
defaultTask.description = 'Generates html templates from Nunjucks source files';

defaultTask = gulp.task('watch');
defaultTask.description = 'Watch for changes and fire appropriate tasks.';
