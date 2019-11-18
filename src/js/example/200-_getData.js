/**
 * Список элементов
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 01.11.2019
 */
example._getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'example', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        $('#js-example__loader').hide();

        if (result.data.length === 0) {
            $('#js-example__empty').show();
        } else {
            var container = $('#js-example__items');
            var html      = '';

            for (var i in result.data) {
                if (result.data.hasOwnProperty(i)) {
                    html += example._templates.item(result.data[i]);
                }
            }

            container.html(html);
            $('#js-example__list').show();

            lemurro.helper.initBootstrapConfirmation(container, null);
        }
    });
};