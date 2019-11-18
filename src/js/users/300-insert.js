/**
 * Добавление записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 01.11.2019
 */
users.insert = function () {
    var data = users._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.users.insert(data, function (result) {
            var container = $('#js-users__items');
            container.prepend(users.templates.item(result.data));

            var row = container.find('tr[data-item-id="' + result.data.id + '"]');
            lemurro.helper.initBootstrapConfirmation(row, null);

            lemurro.tabs.tabInsertEdit('hide');
        });
    }
};