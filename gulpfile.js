var gulp     = require('gulp');           // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat   = require('gulp-concat');    // Склейка файлов
var uglify   = require('gulp-uglify');    // Минификация JS
var del      = require('del');            // Удаление файлов
var md5      = require('gulp-md5-plus');  // Подстановка в имени файлов md5-хеша

// Сборка проекта для тестирования
gulp.task('default', ['watcher', 'js', 'css', 'libs']);

// Сборка проекта для релиза
gulp.task('build', ['libs'], function () {
    // bootstrap.js
    del('assets/bootstrap_*.js', {
        force: true
    });

    gulp.src('src/js/**/*.js')
        .pipe(concat('bootstrap.js'))
        .pipe(uglify())
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));

    // bootstrap.css
    del('assets/bootstrap_*.css', {
        force: true
    });

    gulp.src('src/css/*.css')
        .pipe(concat('bootstrap.css'))
        .pipe(cleanCSS())
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));
});

gulp.task('watcher', function () {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/css/*.css', ['css']);
});

gulp.task('js', function () {
    // bootstrap.js
    del('assets/bootstrap_*.js', {
        force: true
    });

    gulp.src('src/js/**/*.js')
        .pipe(concat('bootstrap.js'))
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));
});

gulp.task('css', function () {
    // bootstrap.css
    del('assets/bootstrap_*.css', {
        force: true
    });

    gulp.src('src/css/*.css')
        .pipe(concat('bootstrap.css'))
        .pipe(md5(10))
        .pipe(gulp.dest('assets'));
});

// Перенос необходимых библиотек
gulp.task('libs', function () {
    var libs = [
        'bower_components/bowser/src/bowser.js',
        'bower_components/jquery-lightajax/dist/jquery.lightajax.min.css',
        'bower_components/jquery-lightajax/dist/jquery.lightajax.min.js',
        'bower_components/jsdeferred/jsdeferred.nodoc.js',
        'bower_components/localforage/dist/localforage.min.js'
    ];

    return gulp.src(libs)
        .pipe(gulp.dest('assets/plugins'));
});