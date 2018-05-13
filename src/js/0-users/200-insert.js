/**
 * Добавление записи
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
users.insert = function () {
    usersCore.insert(users._collectData(), function (result) {
        $('#js-users__items').prepend(users.templates.item(result.data));

        tabs.tabInsertEdit('hide');
    });
};