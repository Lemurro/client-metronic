/**
 * Добавление записи
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users.insert = function () {
    lemurro.users.insert(users._collectData(), function (result) {
        $('#js-users__items').prepend(users.templates.item(result.data));

        lemurro.tabs.tabInsertEdit('hide');
    });
};