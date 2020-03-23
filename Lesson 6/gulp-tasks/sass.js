(function (gulp, config) {
    'use strict';

    const sass = require('gulp-sass');
    const uiRoot = config.get('paths.ui');

    gulp.task('sass', () => {
        return gulp.src(uiRoot + '/assets/scss/*.scss')
            .pipe(sass({
                errLogToConsole: true
            }))
            .pipe(gulp.dest(uiRoot + '/assets/css'));
    });

}(require('gulp'), require('config')));
