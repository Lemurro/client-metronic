/**
 * Добавление записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 10.11.2020
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

                    $('#js-example__empty').hide();
                    $('#js-example__list').show();

                    lemurro.tabs.tabInsertEdit('hide');

                    Swal.fire('Выполнено', 'Запись успешно добавлена', 'success');
                }
            }
        );
    }
};
