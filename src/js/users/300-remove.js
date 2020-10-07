/**
 * Удаление записи
 *
 * @param {integer} id ИД записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
users.remove = function (id) {
    lemurro.users.remove(id, function (result) {
        var container = $('#js-users__items');

        container.find('tr[data-item-id="' + result.data.id + '"]').remove();

        Swal.fire('Выполнено', 'Запись успешно удалена', 'success');
    });
};
