/**
 * Добавление записи
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
example.insert = function () {
    guide.insert(example._collectData(), function (result) {
        $('#js-guide__empty').hide();
        $('#js-guide__items').prepend(guide.templates.item(result.data));
        $('#js-guide__list').show();

        tabs.tabInsertEdit('hide');
    });
};