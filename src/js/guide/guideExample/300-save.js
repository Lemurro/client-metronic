/**
 * Изменение записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 01.11.2019
 */
guideExample.save = function () {
    lemurro.guide.save(guideExample._collectData(), function (result) {
        var newRecord = $(lemurro.guide._templates.item(result.data));
        var row       = $('#js-guide__items').find('tr[data-item-id="' + result.data.id + '"]');

        row.html(newRecord.html());

        lemurro.helper.initBootstrapConfirmation(row, null);

        lemurro.tabs.tabInsertEdit('hide');

        swal('Выполнено', 'Запись успешно изменена', 'success');
    });
};