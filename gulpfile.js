var gulp = require('gulp'); // Сам Gulp JS
var cleanCSS = require('gulp-clean-css'); // Минификация CSS
var concat = require('gulp-concat'); // Склейка css и js файлов
var fileinclude = require('gulp-file-include'); // Склейка html файлов
var rename = require('gulp-rename'); // Переименование файлов
var rev = require('gulp-rev'); // Версионность файлов
var revRewrite = require('gulp-rev-rewrite'); // Внедрение ссылок на css и js файлы в index.html
var sort = require('gulp-sort'); // Сортировка списка файлов
var uglify = require('gulp-uglify'); // Минификация JS
var del = require('del'); // Удаление файлов
var {readFileSync} = require('fs');

var pathsPlugins = [];

// CLEAN

function cleanBuild() {
    return del('build/**', {force: true});
}

function cleanAppCSS() {
    return del('build/assets/app-*.min.css');
}

function cleanAppJS() {
    return del('build/assets/app-*.min.js');
}

function cleanAppMinCSS() {
    return del('build/assets/app.min.css');
}

function cleanAppMinJS() {
    return del('build/assets/app.min.js');
}

// WATCHER

function watcherCSS() {
    return gulp.watch('src/css/*.css', gulp.series(
        cleanAppCSS,
        appCSS,
        revManifestAppCSS,
        cleanAppMinCSS,
        indexHTML
    ));
}

function watcherJS() {
    return gulp.watch('src/js/**/*.js', gulp.series(
        cleanAppJS,
        appJS,
        revManifestAppJS,
        cleanAppMinJS,
        indexHTML
    ));
}

function watcherHTML() {
    return gulp.watch('src/html/**/*.html', gulp.parallel(
        pagesHTML,
        indexHTML
    ));
}

// APP

function plugins(done) {
    if (pathsPlugins.length > 0) {
        return gulp.src(pathsPlugins)
            .pipe(gulp.dest('build/assets/plugins'));
    } else {
        done();
    }
}

function copyToBuild() {
    return gulp.src(['src/copy-to-build/**/*'])
        .pipe(gulp.dest('build'));
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
    return gulp
        .src([
            'node_modules/lemurro-client-metronic-core-frontend/dist/lemurro.min.css',
            'node_modules/lemurro-client-metronic-core-frontend/dist/lemurro.min.js',
        ])
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            base: 'build/assets',
            merge: true,
        }))
        .pipe(gulp.dest('build/assets'));
}

function appCSS() {
    return gulp.src('src/css/*.css')
        .pipe(sort())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets'));
}

function appJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(sort())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets'));
}

function minAppCSS() {
    return gulp.src('build/assets/app.min.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/assets'));
}

function minAppJS() {
    return gulp.src('build/assets/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/assets'));
}

function revManifestAppCSS() {
    return gulp.src('build/assets/app.min.css')
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            base: 'build/assets',
            merge: true,
        }))
        .pipe(gulp.dest('build/assets'));
}

function revManifestAppJS() {
    return gulp.src('build/assets/app.min.js')
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest('build/rev-manifest.json', {
            base: 'build/assets',
            merge: true,
        }))
        .pipe(gulp.dest('build/assets'));
}

function pagesHTML() {
    return gulp
        .src('src/html/pages/*.html')
        .pipe(
            fileinclude({
                prefix: '<!-- ',
                suffix: ' -->',
                basepath: './src/html',
            })
        )
        .pipe(gulp.dest('build'));
}

function indexHTML() {
    var manifest = readFileSync('build/rev-manifest.json');

    return gulp
        .src('src/html/index.html')
        .pipe(
            fileinclude({
                prefix: '<!-- ',
                suffix: ' -->',
                basepath: './src/html',
            })
        )
        .pipe(revRewrite({manifest}))
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

var allFirst = gulp.series(
    gulp.parallel(
        copyToBuild,
        plugins,
        fontawesomeCSS,
        fontawesomeWebfonts
    ),
    lemurro,
    appCSS,
    appJS
);

var allSecond = gulp.series(
    revManifestAppCSS,
    revManifestAppJS,
    cleanAppMinCSS,
    cleanAppMinJS,
    pagesHTML,
    indexHTML
);

// TASKS

gulp.task('build', gulp.series(
    cleanBuild,
    allFirst,
    gulp.parallel(
        minAppCSS,
        minAppJS
    ),
    allSecond,
    envProd
));

gulp.task('build-dev', gulp.series(
    cleanBuild,
    allFirst,
    allSecond,
    envDev
));

gulp.task('watcher', gulp.series(
    'build-dev',
    gulp.parallel(
        watcherCSS,
        watcherJS,
        watcherHTML
    )
));
