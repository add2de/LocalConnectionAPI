/**
 * Created by es on 10.02.2016.
 */
;
'use strict';
var gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    stripComment = require('gulp-strip-comments'),
    stripDebug = require('gulp-strip-debug'),
    del = require('del');
gulp.task('clean:out', function () {
    return del(['./out/*.html']);
});
gulp.task('js', function () {
    gulp.src('src/localconnection.js')
        .pipe(rename('localconnection.dev.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename('localconnection.min.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(livereload());
});
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/localconnection.js', ['js']);

});
gulp.task('default', ['js', 'jsdoc', 'watch']);