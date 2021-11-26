/**
 * Удаление записи
 *
 * @param {integer} id ИД записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
users.remove = function (id) {
    lemurro.users.remove(id, function (result) {
        var container = $('#js-users__items');

        container.find('tr[data-item-id="' + result.data.id + '"]').remove();

        swal('Выполнено', 'Запись успешно удалена', 'success');
    });
};
