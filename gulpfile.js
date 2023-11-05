const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const jsonminify = require('gulp-jsonminify');

// Minify HTML
function minifyHtml() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
}

// Minify CSS
function minifyCss() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

// Minify JavaScript
function minifyJs() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Minify JSON
function minifyJson() {
    return gulp.src('src/data/*.json')
        .pipe(jsonminify())
        .pipe(gulp.dest('dist/data'));
}

// Default task to run all minification tasks
gulp.task('default', gulp.series(minifyHtml, minifyCss, minifyJs, minifyJson));

exports.minifyHtml = minifyHtml;
exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;
