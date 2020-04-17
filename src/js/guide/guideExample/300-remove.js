/**
 * Удаление записи
 *
 * @param {integer} id ИД записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 17.04.2020
 */
guideExample.remove = function (id) {
    var name = $('#js-guide__items').find('tr[data-item-id="' + id + '"] .name').text();

    lemurro.guide.remove(id, name, null);
};