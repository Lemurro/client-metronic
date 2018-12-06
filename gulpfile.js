var gulp        = require('gulp');             // Сам Gulp JS
var cleanCSS    = require('gulp-clean-css');   // Минификация CSS
var concat      = require('gulp-concat');      // Склейка css и js файлов
var del         = require('del');              // Удаление файлов
var includer    = require('gulp-x-includer');  // Склейка html файлов
var rev         = require('gulp-rev');         // Версионность файлов
var revRewrite  = require('gulp-rev-rewrite'); // Внедрение ссылок на css и js файлы в index.html
var runSequence = require('run-sequence');     // Выполнение gulp-задач по очереди
var uglify      = require('gulp-uglify');      // Минификация JS

var plugins = [];

// Сборка проекта + watchers
gulp.task('default', function () {
    runSequence(
        'build',
        ['watch.css', 'watch.js', 'watch.html']
    );
});

// Сборка проекта
gulp.task('build', function () {
    runSequence(
        'clean',
        ['htaccess', 'plugins', 'assets', 'fontawesome'],
        'lemurro',
        'app.css',
        'app.js',
        ['pages.html', 'index.html']
    );
});

gulp.task('watch.css', function () {
    return gulp.watch('src/css/*.css', function () {
        runSequence(
            'app.css',
            'index.html'
        );
    });
});

gulp.task('watch.js', function () {
    return gulp.watch('src/js/**/*.js', function () {
        runSequence(
            'app.js',
            'index.html'
        );
    });
});

gulp.task('watch.html', function () {
    return gulp.watch('src/html/**/*.html', ['pages.html', 'index.html']);
});

gulp.task('clean', function () {
    return del('build/**', {force: true});
});

gulp.task('htaccess', function () {
    return gulp.src('.htaccess')
        .pipe(gulp.dest('build'));
});

gulp.task('plugins', function () {
    return gulp.src(plugins)
        .pipe(gulp.dest('build/assets/plugins'));
});

gulp.task('assets', function () {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('build/assets'));
});

gulp.task('fontawesome', ['fontawesome.css', 'fontawesome.webfonts']);

gulp.task('fontawesome.css', function () {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
        .pipe(gulp.dest('build/assets/fonts/fontawesome-free/css'));
});

gulp.task('fontawesome.webfonts', function () {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('build/assets/fonts/fontawesome-free/webfonts'));
});

gulp.task('lemurro', function () {
    var files = [
        'node_modules/lemurro-client-metronic-core-frontend/dist/lemurro.min.css',
        'node_modules/lemurro-client-metronic-core-frontend/dist/lemurro.min.js'
    ];

    return gulp.src(files)
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            base : 'build/assets',
            merge: true
        }))
        .pipe(gulp.dest('build/assets'));
});

gulp.task('app.css', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('app.min.css'))
        .pipe(cleanCSS())
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            base : 'build/assets',
            merge: true
        }))
        .pipe(gulp.dest('build/assets'));
});

gulp.task('app.js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            base : 'build/assets',
            merge: true
        }))
        .pipe(gulp.dest('build/assets'));
});

gulp.task('pages.html', function () {
    return gulp.src('src/html/pages/*.html')
        .pipe(includer())
        .pipe(gulp.dest('build'));
});

gulp.task('index.html', function () {
    var manifest = gulp.src('build/rev-manifest.json');

    return gulp.src('src/html/index.html')
        .pipe(includer())
        .pipe(revRewrite({
            manifest: manifest
        }))
        .pipe(gulp.dest('build'));
});