/**
 * Изменение записи
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users.save = function () {
    var data = users._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.users.save(data, function (result) {
            var newRecord = $(users.templates.item(result.data));

            $('#js-users__items')
                .find('tr[data-item-id="' + result.data.id + '"]')
                .html(newRecord.html());

            lemurro.tabs.tabInsertEdit('hide');

            swal('Выполнено', 'Запись успешно изменена', 'success');
        });
    }
};