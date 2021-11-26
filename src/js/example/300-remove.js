/**
 * Удаление записи
 *
 * @param {integer} id ИД записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
example.remove = function (id) {
    lemurro.lightajax.post(true, pathServerAPI + 'example/' + id + '/remove', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-example__items');

            container.find('tr[data-id="' + result.data.id + '"]').remove();

            if (container.find('tr').length === 0) {
                $('#js-example__empty').show();
                $('#js-example__list').hide();
            }

            Swal.fire('Выполнено', 'Запись успешно удалена', 'success');
        }
    });
};
