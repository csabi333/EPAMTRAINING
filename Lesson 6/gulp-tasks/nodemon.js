(function (gulp) {
    'use strict';

    const path      = require('path');
    const nodemon   = require('gulp-nodemon');

    const nodemonConfig = {
        script: 'bootstrap.js',
        ext: 'js scss',
        tasks: function (changedFiles) {
            let tasks = [];
            changedFiles.forEach(function (file) {
                if (path.extname(file) === '.scss' && !~tasks.indexOf('sass')) tasks.push('sass');
            });
            return tasks;
        }
    };

    gulp.task('nodemon', () => {
        nodemon(nodemonConfig).on('change', [ 'build' ]);
    });

}(require('gulp')));
