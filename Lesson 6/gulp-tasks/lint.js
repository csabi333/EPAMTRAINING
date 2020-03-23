(function (gulp) {
    'use strict';

    const jshint = require('gulp-jshint');

    gulp.task('lint', () => {
        return gulp.src(['./src/**/*.js', '!./src/**/lib/**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

}(require('gulp')));
