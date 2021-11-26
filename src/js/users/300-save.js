/**
 * Изменение записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
users.save = function () {
    var data = users._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.users.save(data, function (result) {
            var newRecord = $(users.templates.item(result.data));
            var row = $('#js-users__items').find('tr[data-item-id="' + result.data.id + '"]');

            row.html(newRecord.html());

            lemurro.helper.initBootstrapConfirmation(row, null);

            lemurro.tabs.tabInsertEdit('hide');

            Swal.fire('Выполнено', 'Запись успешно изменена', 'success');
        });
    }
};
