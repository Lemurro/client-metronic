/**
 * Добавление записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 25.08.2020
 */
example.insert = function () {
    var data = example._collectData();

    if (!isEmpty(data)) {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'example',
            {
                json: JSON.stringify(data),
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    var container = $('#js-example__items');
                    container.prepend(example._getNewRecord(data, result.data));

                    var row = container.find('tr[data-id="' + result.data.id + '"]');
                    lemurro.helper.initBootstrapConfirmation(row, null);

                    lemurro.tabs.tabInsertEdit('hide');

                    swal('Выполнено', 'Запись успешно добавлена', 'success');
                }
            }
        );
    }
};
