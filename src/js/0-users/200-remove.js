/**
 * Удаление записи
 *
 * @param {integer} id ИД записи
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users.remove = function (id) {
    var authID = $('#js-users__items').find('tr[data-item-id="' + id + '"] .auth_id').text();

    lemurro.users.remove(id, authID, function (result) {
        var container = $('#js-users__items');

        container.find('tr[data-item-id="' + result.data.id + '"]').remove();

        swal('Выполнено', 'Запись успешно удалена', 'success');
    });
};