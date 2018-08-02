/**
 * Редактирование записи
 *
 * @param {integer} id ИД записи
 *
 * @version 02.08.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guideExample.edit = function (id) {
    guide.edit(id, function (result) {
        var form = $('#js-guide-form');

        form.find('input[name="name"]').val(result.data.name);
    });
};