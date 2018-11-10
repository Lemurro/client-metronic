var gulp     = require('gulp');           // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat   = require('gulp-concat');    // Склейка файлов
var uglify   = require('gulp-uglify');    // Минификация JS
var del      = require('del');            // Удаление файлов
var rev      = require('gulp-rev');       // Версионность файлов

// Сборка проекта для тестирования
gulp.task('default', ['build', 'watcher.css', 'watcher.js']);

// Сборка проекта для релиза
gulp.task('build', ['del.old', 'libs', 'fontawesome', 'core', 'app.css', 'app.js']);

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
        'node_modules/jsdeferred/jsdeferred.nodoc.js'
    ];

    return gulp.src(libs)
        .pipe(gulp.dest('assets/plugins'));
});

gulp.task('fontawesome', ['fontawesome.css', 'fontawesome.webfonts']);

gulp.task('fontawesome.css', function () {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
        .pipe(gulp.dest('assets/fonts/fontawesome-free/css'));
});

gulp.task('fontawesome.webfonts', function () {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('assets/fonts/fontawesome-free/webfonts'));
});

gulp.task('core', function () {
    var core = [
        'node_modules/lemurro-client-metronic-core-frontend/dist/core.min.css',
        'node_modules/lemurro-client-metronic-core-frontend/dist/core.min.js'
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