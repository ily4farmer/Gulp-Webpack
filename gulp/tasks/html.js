const gulp = require('gulp');
const include = require('gulp-file-include');
const webphtml = require('gulp-webp-html'),
      formatHtml = require('gulp-format-html');

module.exports = function html() {
    return gulp.src('app/index.html')
        .pipe(include())
        .pipe(webphtml())
        .pipe(formatHtml())
        .pipe(gulp.dest('dist'))
}