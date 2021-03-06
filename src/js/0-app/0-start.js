/**
 * Загрузочный скрипт приложения
 *
 * @version 24.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект приложения
 *
 * @type {object}
 */
var app = {};

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