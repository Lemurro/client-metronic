/**
 * Добавление записи
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
guideExample.insert = function () {
    lemurro.guide.insert(guideExample._collectData(), function (result) {
        $('#js-guide__empty').hide();
        $('#js-guide__items').prepend(lemurro.guide.templates.item(result.data));
        $('#js-guide__list').show();

        lemurro.tabs.tabInsertEdit('hide');
    });
};