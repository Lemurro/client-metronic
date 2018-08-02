/**
 * Добавление записи
 *
 * @version 02.08.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guideExample.insert = function () {
    guide.insert(guideExample._collectData(), function (result) {
        $('#js-guide__empty').hide();
        $('#js-guide__items').prepend(guide.templates.item(result.data));
        $('#js-guide__list').show();

        tabs.tabInsertEdit('hide');
    });
};