const gulp        = require('gulp');              // Сам Gulp JS
const cleanCSS    = require('gulp-clean-css');    // Минификация CSS
const concat      = require('gulp-concat');       // Склейка css и js файлов
const rename      = require('gulp-rename');       // Переименование файлов
const rev         = require('gulp-rev');          // Версионность файлов
const revRewrite  = require('gulp-rev-rewrite');  // Внедрение ссылок на css и js файлы в index.html
const sort        = require('gulp-sort');         // Сортировка списка файлов
const uglify      = require('gulp-uglify');       // Минификация JS
const includer    = require('gulp-x-includer');   // Склейка html файлов
const del         = require('del');               // Удаление файлов

const pathsPlugins = [];

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
    return gulp.src(['src/copy-to-build/**/*', 'src/copy-to-build/.htaccess'])
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
    const files = [
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
            base : 'build/assets',
            merge: true
        }))
        .pipe(gulp.dest('build/assets'));
}

function revManifestAppJS() {
    return gulp.src('build/assets/app.min.js')
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
    const manifest = gulp.src('build/rev-manifest.json');

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

const allFirst = gulp.series(
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

const allSecond = gulp.series(
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