/**
 * Добавление записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 01.11.2019
 */
guideExample.insert = function () {
    lemurro.guide.insert(guideExample._collectData(), function (result) {
        var container = $('#js-guide__items');
        container.prepend(lemurro.guide._templates.item(result.data));

        var row = container.find('tr[data-item-id="' + result.data.id + '"]');
        lemurro.helper.initBootstrapConfirmation(row, null);

        $('#js-guide__empty').hide();
        $('#js-guide__list').show();

        lemurro.tabs.tabInsertEdit('hide');
    });
};