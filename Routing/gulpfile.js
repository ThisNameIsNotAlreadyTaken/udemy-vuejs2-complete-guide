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

const browserifyOptions = {
    cache: {},
    packageCache: {},
    entries: ['./src/main.js'],
    debug: true,
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
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/js/'));
}

gulp.task('browserify:compile', function () {
    return bundleJs(browserify(browserifyOptions)
    .transform("vueify")
    .transform("babelify", {presets: ["es2015"]})
    .transform(["require-globify"])
    .bundle());
});

gulp.task('browserify:watch', function () {
    const watchObject = browserify(browserifyOptions)
    .transform("vueify")
    .transform("babelify", {presets: ["es2015"]})
    .transform(["require-globify"])
    .plugin(watchify);

    function update() {
        return bundleJs(watchObject.bundle());
    }

    watchObject.on("update", update);
    watchObject.on("log", gutil.log);

    return update();
});

gulp.task("build:dev", function (callback) {
    runSequence("clean", "copy", "browserify:compile", callback);
});

gulp.task('dev', function (callback) {
    runSequence("build:dev", "browserify:watch", callback);
});