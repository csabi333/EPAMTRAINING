/**
 * @author  Daniel Koos <Daniel_Koos@epam.com>
 * @since 0.0.1
 *
 * @description
 * This is the main Gulp file.
 * Individual Gulp tasks are externalized into their own
 * source files under the gulp-tasks folder and are loaded
 * into this module with require-dir.
 *
 * gulp-sequence is used for defining an order between tasks when
 * it makes sense and gulp-stats provide execution statistics in the
 * log.
 */
(function (gulp) {
    'use strict';

    const reqDir   = require('require-dir');
    const stats    = require('gulp-stats');
    const sequence = require('gulp-sequence');

    reqDir('gulp-tasks');
    stats(gulp);

    gulp.task('build');
    gulp.task('default',    sequence('build', 'nodemon'));

}(require('gulp')));
