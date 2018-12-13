/**
 * Изменение записи
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.save = function () {
    var data = example._collectData();

    if (!isEmpty(data)) {
        lemurro.lightajax.post(true, app.config.apiUrl + 'example/' + data.id, {
            data: data
        }, function (result) {
            lemurro.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                lemurro.showErrors(result.errors);
            } else {
                $('#js-example__items').find('tr[data-id="' + data.id + '"]')
                    .html(example._getNewRecord(data, result.data).html());

                lemurro.tabs.tabInsertEdit('hide');

                swal('Выполнено', 'Запись успешно изменена', 'success');
            }
        });
    }
};