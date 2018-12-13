/**
 * Удаление записи
 *
 * @param {integer} id ИД записи
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.remove = function (id) {
    swal({
        title            : 'Удаление записи',
        html             : 'Вы хотите удалить запись?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, app.config.apiUrl + 'example/' + id + '/remove', {}, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
                } else {
                    var container = $('#js-example__items');

                    container.find('tr[data-id="' + result.data.id + '"]').remove();

                    if (container.find('tr').length === 0) {
                        $('#js-example__empty').show();
                        $('#js-example__list').hide();
                    }

                    swal('Выполнено', 'Запись успешно удалена', 'success');
                }
            });
        } else {

        }
    });
};