var gulp     = require('gulp');           // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat   = require('gulp-concat');    // Склейка файлов
var uglify   = require('gulp-uglify');    // Минификация JS
var del      = require('del');            // Удаление файлов
var rename   = require('gulp-rename');    // Переименование файлов
var rev      = require('gulp-rev');       // Версионность файлов

// Сборка проекта для тестирования
gulp.task('default', ['build', 'watcher.css', 'watcher.js']);

// Сборка проекта для релиза
gulp.task('build', ['del.old', 'libs', 'select2.lang', 'core', 'app.css', 'app.js']);

gulp.task('watcher.css', function () {
    return gulp.watch('src/css/*.css', ['app.css']);
});

gulp.task('watcher.js', function () {
    return gulp.watch('src/js/**/*.js', ['app.js']);
});

gulp.task('del.old', function () {
    return del(['assets/*.css', 'assets/*.js'], {
        force: true
    });
});

gulp.task('libs', function () {
    var libs = [
        'bower_components/bowser/src/bowser.js',
        'bower_components/jquery-lightajax/dist/jquery.lightajax.min.css',
        'bower_components/jquery-lightajax/dist/jquery.lightajax.min.js',
        'bower_components/jsdeferred/jsdeferred.nodoc.js',
        'bower_components/localforage/dist/localforage.min.js',
        'bower_components/Template7/dist/template7.min.js'
    ];

    return gulp.src(libs)
        .pipe(gulp.dest('assets/plugins'));
});

gulp.task('select2.lang', function () {
    return gulp.src('bower_components/select2/dist/js/i18n/ru.js')
        .pipe(rename('select2.lang.ru.js'))
        .pipe(gulp.dest('assets/plugins'));
});

gulp.task('core', function () {
    var core = [
        'bower_components/lemurro-client-metronic-core-frontend/dist/core.min.css',
        'bower_components/lemurro-client-metronic-core-frontend/dist/core.min.js'
    ];

    return gulp.src(core)
        .pipe(rev())
        .pipe(gulp.dest('assets'))
        .pipe(rev.manifest({
            base : 'assets',
            merge: true
        }))
        .pipe(gulp.dest('assets'));
});

gulp.task('app.css.del', function () {
    return del('assets/app-*.css', {
        force: true
    });
});

gulp.task('app.js.del', function () {
    return del('assets/app-*.js', {
        force: true
    });
});

gulp.task('app.css', ['app.css.del'], function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('app.min.css'))
        .pipe(cleanCSS())
        .pipe(rev())
        .pipe(gulp.dest('assets'))
        .pipe(rev.manifest({
            base : 'assets',
            merge: true
        }))
        .pipe(gulp.dest('assets'));
});

gulp.task('app.js', ['app.js.del'], function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('assets'))
        .pipe(rev.manifest({
            base : 'assets',
            merge: true
        }))
        .pipe(gulp.dest('assets'));
});