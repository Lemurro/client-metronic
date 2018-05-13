/**
 * Изменение записи
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
example.save = function () {
    guide.save(example._collectData(), function (result) {
        var newRecord = $(guide.templates.item(result.data));

        $('#js-guide__items')
            .find('tr[data-item-id="' + result.data.id + '"]')
            .html(newRecord.html());

        tabs.tabInsertEdit('hide');

        swal('Выполнено', 'Запись успешно изменена', 'success');
    });
};