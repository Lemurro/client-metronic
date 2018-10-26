/**
 * Изменение записи
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
guideExample.save = function () {
    lemurro.guide.save(guideExample._collectData(), function (result) {
        var newRecord = $(lemurro.guide.templates.item(result.data));

        $('#js-guide__items')
            .find('tr[data-item-id="' + result.data.id + '"]')
            .html(newRecord.html());

        lemurro.tabs.tabInsertEdit('hide');

        swal('Выполнено', 'Запись успешно изменена', 'success');
    });
};