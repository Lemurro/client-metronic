/**
 * Добавление записи
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users.insert = function () {
    var data = users._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.users.insert(data, function (result) {
            $('#js-users__items').prepend(users.templates.item(result.data));

            lemurro.tabs.tabInsertEdit('hide');
        });
    }
};