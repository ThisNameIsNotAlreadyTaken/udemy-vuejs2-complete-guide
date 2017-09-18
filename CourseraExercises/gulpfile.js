'use strict';

const gulp = require('gulp');
const debug = require("gulp-debug");
const runSequence = require("run-sequence");
const cache = require('gulp-cached');
const through2 = require('through2');
const gutil = require('gulp-util');
const clean = require("gulp-clean");
const filter = require('gulp-filter');
const browserify = require('browserify');
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
const watchify = require('watchify');
const exec = require('child_process').exec;
const babelify = require('babelify');
const vueify = require('vueify');
const envify = require('envify');
const gulpif = require('gulp-if');

/* helpers */
gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

/* clean tasks */

gulp.task("clean:dist", function () {
    return gulp.src(['./dist/*'], { read: false }).pipe(clean());
});

gulp.task("clean", function (callback) {
    runSequence("clean:dist", callback);
});

/* copy tasks */

gulp.task("html:copy", function () {
    return gulp.src('./src/index.html').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist"));
});

gulp.task("css:copy", function () {
    return gulp.src('./styles/**/*.css').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/styles/"));
});

gulp.task("fonts:copy", function () {
    return gulp.src('./fonts/**/*').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("icons:copy", function () {
    return gulp.src('./src/*.png').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/"));
});

gulp.task("webconfig:copy", function () {
    return gulp.src('./src/web.config').pipe(rename({ dirname: '' })).pipe(gulp.dest("./dist/"));
});

gulp.task("copy", function (callback) {
    runSequence("html:copy", "css:copy", "fonts:copy", "icons:copy", "webconfig:copy", callback);
});

/* browserify tasks */

const getBrowserifyCommonObj = () => {
    return browserify({
        cache: {},
        packageCache: {},
        entries: ['./src/main.js'],
        debug: process.env.NODE_ENV === 'production' ? false : true
    })
    .transform("envify", { NODE_ENV: process.env.NODE_ENV, global: true })
    .transform("vueify")
    .transform("babelify")
    .transform(["require-globify"]);
};

function bundleJs(bundle) {
    return bundle.on("error", function (err) {
        gutil.log(
            gutil.colors.red("Browserify compile error:"),
            err.message
        );
        this.emit("end");
    }).pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.write("./")))
        .pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
        .pipe(gulp.dest('./dist/js/'));
}

gulp.task('browserify:compile', function () {
    return bundleJs(getBrowserifyCommonObj().bundle());
});

gulp.task('browserify:watch', function () {
    const watchObject = getBrowserifyCommonObj().plugin(watchify);

    function update() {
        return bundleJs(watchObject.bundle());
    }

    watchObject.on("update", update);
    watchObject.on("log", gutil.log);

    return update();
});

gulp.task("build:dev", function (callback) {
    runSequence("set-dev-node-env", "clean", "copy", "browserify:compile", callback);
});

gulp.task("build:prod", function (callback) {
    runSequence("set-prod-node-env", "clean", "copy", "browserify:compile", callback);
});

gulp.task('dev', function (callback) {
    runSequence("build:dev", "browserify:watch", callback);
});