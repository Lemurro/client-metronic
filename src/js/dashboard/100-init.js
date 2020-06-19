/**
 * Инициализация
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
dashboard.init = function () {
    lemurro.lightajax.get(true, pathServerAPI, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        var apiStatusText = 'Не доступен';
        var apiStatusColor = 'text-danger';

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            apiStatusText = 'Работает';
            apiStatusColor = 'text-success';
        }

        $('#js-api-status').removeClass('text-danger text-success').addClass(apiStatusColor).text(apiStatusText);
    });
};
