/**
 * Скрипт главной страницы
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект страницы
 *
 * @type {object}
 */
var main = {};

/**
 * Инициализация
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
main.init = function () {
    lemurro.lightajax.get(true, pathServerAPI, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        var apiStatusText  = 'Не доступен';
        var apiStatusColor = 'text-danger';

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            apiStatusText  = 'Работает';
            apiStatusColor = 'text-success';

            swal('Main', 'Страница успешно загружена', 'success');
        }

        $('#js-api-status')
            .removeClass('text-danger text-success')
            .addClass(apiStatusColor)
            .text(apiStatusText);
    });
}