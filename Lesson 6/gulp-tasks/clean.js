(function (gulp, config) {
    'use strict';

    const del = require('del');

    gulp.task('clean-sass', () => {
        return del([ config.get('paths.ui') + '/assets/css' ]);
    });

    gulp.task('clean', [ 'clean-sass' ]);

}(require('gulp'), require('config')));
