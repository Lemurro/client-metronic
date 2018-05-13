/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
example._collectData = function () {
    var form = $('#js-guide-form');

    return {
        id  : form.attr('data-id'),
        name: form.find('input[name="name"]').val()
    };
};