/**
 * Удаление записи
 *
 * @param {integer} id ИД записи
 *
 * @version 02.08.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guideExample.remove = function (id) {
    var name = $('#js-guide__items').find('tr[data-item-id="' + id + '"] .name').text();

    guide.remove(id, name, function (result) {
        var container = $('#js-guide__items');

        container.find('tr[data-item-id="' + result.data.id + '"]').remove();

        if (container.find('tr').length === 0) {
            $('#js-guide__empty').show();
            $('#js-guide__list').hide();
        }

        swal('Выполнено', 'Запись успешно удалена', 'success');
    });
};