var gulp     = require('gulp');           // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat   = require('gulp-concat');    // Склейка файлов
var uglify   = require('gulp-uglify');    // Минификация JS
var del      = require('del');            // Удаление файлов
var md5      = require('gulp-md5-plus');  // Подстановка в имени файлов md5-хеша
var rename   = require('gulp-rename');    // Переименование файлов

// Сборка проекта для тестирования
gulp.task('default', ['watcher', 'js', 'css', 'libs']);

// Сборка проекта для релиза
gulp.task('build', ['libs'], function () {
    // app.js
    del('assets/app_*.js', {
        force: true
    });

    gulp.src('src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));

    // app.css
    del('assets/app_*.css', {
        force: true
    });

    gulp.src('src/css/*.css')
        .pipe(concat('app.css'))
        .pipe(cleanCSS())
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));
});

gulp.task('watcher', function () {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/css/*.css', ['css']);
});

gulp.task('js', function () {
    // app.js
    del('assets/app_*.js', {
        force: true
    });

    gulp.src('src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));
});

gulp.task('css', function () {
    // app.css
    del('assets/app_*.css', {
        force: true
    });

    gulp.src('src/css/*.css')
        .pipe(concat('app.css'))
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));
});

// Перенос необходимых библиотек
gulp.task('libs', function () {
    gulp.src('bower_components/lemurro-client-metronic-core/dist/core.min.css')
        .pipe(rename('core.css'))
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));

    gulp.src('bower_components/lemurro-client-metronic-core/dist/core.min.js')
        .pipe(rename('core.js'))
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));

    var libs = [
        'bower_components/bowser/src/bowser.js',
        'bower_components/jquery-lightajax/dist/jquery.lightajax.min.css',
        'bower_components/jquery-lightajax/dist/jquery.lightajax.min.js',
        'bower_components/jsdeferred/jsdeferred.nodoc.js',
        'bower_components/localforage/dist/localforage.min.js',
        'bower_components/Template7/dist/template7.min.js'
    ];

    gulp.src(libs)
        .pipe(gulp.dest('assets/plugins'));

    gulp.src('bower_components/select2/dist/js/i18n/ru.js')
        .pipe(rename('select2.lang.ru.js'))
        .pipe(gulp.dest('assets/plugins'));
});