/**
 * Изменение записи
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
users.save = function () {
    usersCore.save(users._collectData(), function (result) {
        var newRecord = $(users.templates.item(result.data));

        $('#js-users__items')
            .find('tr[data-item-id="' + result.data.id + '"]')
            .html(newRecord.html());

        tabs.tabInsertEdit('hide');

        swal('Выполнено', 'Запись успешно изменена', 'success');
    });
};