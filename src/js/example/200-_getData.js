/**
 * Список элементов
 *
 * @version 21.02.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example._getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'example', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        $('#js-example__loader').hide();

        if (result.data.length === 0) {
            $('#js-example__empty').show();
        } else {
            var html = '';

            for (var i in result.data) {
                html += example._templates.item(result.data[i]);
            }

            $('#js-example__items').html(html);
            $('#js-example__list').show();
        }
    });
};