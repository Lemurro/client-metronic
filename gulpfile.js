var gulp       = require('gulp');             // Сам Gulp JS
var cleanCSS   = require('gulp-clean-css');   // Минификация CSS
var concat     = require('gulp-concat');      // Склейка css и js файлов
var del        = require('del');              // Удаление файлов
var includer   = require('gulp-x-includer');  // Склейка html файлов
var rename     = require('gulp-rename');      // Переименование файлов
var rev        = require('gulp-rev');         // Версионность файлов
var revRewrite = require('gulp-rev-rewrite'); // Внедрение ссылок на css и js файлы в index.html
var uglify     = require('gulp-uglify');      // Минификация JS

var pathsPlugins = [];

// CLEAN

function clean() {
    return del('build/**', {force: true});
}

// WATCHER

function watcherCSS() {
    return gulp.watch('src/css/*.css', gulp.series(appCSS, indexHTML));
}

function watcherJS() {
    return gulp.watch('src/js/**/*.js', gulp.series(appJS, indexHTML));
}

function watcherHTML() {
    return gulp.watch('src/html/**/*.html', gulp.parallel(pagesHTML, indexHTML));
}

// APP

function htaccess() {
    return gulp.src('.htaccess')
        .pipe(gulp.dest('build'));
}

function plugins(done) {
    if (pathsPlugins.length > 0) {
        return gulp.src(pathsPlugins)
            .pipe(gulp.dest('build/assets/plugins'));
    } else {
        done();
    }
}

function assets() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('build/assets'));
}

function fontawesomeCSS() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
        .pipe(gulp.dest('build/assets/fonts/fontawesome-free/css'));
}

function fontawesomeWebfonts() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('build/assets/fonts/fontawesome-free/webfonts'));
}

function lemurro() {
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
}

function appCSS() {
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
}

function appJS() {
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
}

function pagesHTML() {
    return gulp.src('src/html/pages/*.html')
        .pipe(includer())
        .pipe(gulp.dest('build'));
}

function indexHTML() {
    var manifest = gulp.src('build/rev-manifest.json');

    return gulp.src('src/html/index.html')
        .pipe(includer())
        .pipe(revRewrite({
            manifest: manifest
        }))
        .pipe(gulp.dest('build'));
}

function envProd() {
    return gulp.src('src/env/prod.js')
        .pipe(rename('env.js'))
        .pipe(gulp.dest('build/assets'));
}

function envDev() {
    return gulp.src('src/env/dev.js')
        .pipe(rename('env.js'))
        .pipe(gulp.dest('build/assets'));
}

// VARS

var all = gulp.series(
    clean,
    gulp.parallel(htaccess, plugins, assets, fontawesomeCSS, fontawesomeWebfonts),
    lemurro,
    appCSS,
    appJS,
    pagesHTML,
    indexHTML
);

// TASKS

gulp.task('build', gulp.series(all, envProd));

gulp.task('build-dev', gulp.series(all, envDev));

gulp.task('watcher', gulp.series(
    'build-dev',
    gulp.parallel(watcherCSS, watcherJS, watcherHTML)
));