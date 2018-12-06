/**
 * Инициализация
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
dashboard.init = function () {
    lemurro.lightajax.get(true, app.config.apiUrl, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        var apiStatusText  = 'Не доступен';
        var apiStatusColor = 'text-danger';

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            apiStatusText  = 'Работает';
            apiStatusColor = 'text-success';
        }

        $('#js-api-status')
            .removeClass('text-danger text-success')
            .addClass(apiStatusColor)
            .text(apiStatusText);
    });
};