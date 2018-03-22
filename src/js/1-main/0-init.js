/**
 * Скрипт главной страницы
 *
 * @version 14.03.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

var main = (function () {
    // d888888b d8b   db d888888b d888888b
    //   `88'   888o  88   `88'   `~~88~~'
    //    88    88V8o 88    88       88
    //    88    88 V8o88    88       88
    //   .88.   88  V888   .88.      88
    // Y888888P VP   V8P Y888888P    YP
    //
    //

    /**
     * Инициализация
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function init() {
        bootstrap.lightajax.get(true, pathServerAPI, {}, function (result) {
            bootstrap.lightajax.preloader('hide');

            var apiStatusText  = 'Не доступен';
            var apiStatusColor = 'text-danger';

            if (result.hasOwnProperty('errors')) {
                bootstrap.showErrors(result.errors);
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

    return {
        init: init
    };
})();