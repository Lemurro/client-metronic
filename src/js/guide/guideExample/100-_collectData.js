/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 02.08.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
guideExample._collectData = function () {
    var form = $('#js-guide-form');

    return {
        id  : form.attr('data-id'),
        name: form.find('input[name="name"]').val()
    };
};