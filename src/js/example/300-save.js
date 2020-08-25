/**
 * Изменение записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 25.08.2020
 */
example.save = function () {
    var data = example._collectData();

    if (!isEmpty(data)) {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'example/' + data.id,
            {
                json: JSON.stringify(data),
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    var newRecord = example._getNewRecord(data, result.data);
                    var row = $('#js-example__items').find('tr[data-id="' + data.id + '"]');

                    row.html(newRecord.html());

                    lemurro.helper.initBootstrapConfirmation(row, null);

                    lemurro.tabs.tabInsertEdit('hide');

                    swal('Выполнено', 'Запись успешно изменена', 'success');
                }
            }
        );
    }
};
