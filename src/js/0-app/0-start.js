/**
 * Загрузочный скрипт приложения
 */

/**
 * Объект приложения
 *
 * @type {object}
 */
var app = {};

/**
 * Актуальный номер версии программы (X.Y.Z)
 *
 * @type {string}
 */
app.version = '1.0.0';

/**
 * Параметр для определения запущено приложение или только запускается
 *
 * @type {boolean}
 */
app.started = false;

/**
 * Объект страницы
 *
 * @type {object}
 */
app.page = {
    name  : '500',
    title : 'Внутренняя ошибка',
    onLoad: null,
    params: null,
    query : ''
};

$(function () {
    lemurro.start();
});
