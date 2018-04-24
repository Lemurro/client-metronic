/**
 * Работа с пользователями
 *
 * @version 24.04.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

var users = (function () {
    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    var templates = {};

    // d888888b d8b   db d888888b d888888b
    //   `88'   888o  88   `88'   `~~88~~'
    //    88    88V8o 88    88       88
    //    88    88 V8o88    88       88
    //   .88.   88  V888   .88.      88
    // Y888888P VP   V8P Y888888P    YP
    //
    //

    /**
     * Инициализация
     *
     * @version 19.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function init() {
        users.templates = {
            item: Template7.compile($('#js-tpl-user__item').html())
        };

        usersCore.getData();
    }

    // .d8888. db   db  .d88b.  db   d8b   db d888888b d8b   db .d8888. d88888b d8888b. d888888b d88888b  .d88b.  d8888b. .88b  d88.
    // 88'  YP 88   88 .8P  Y8. 88   I8I   88   `88'   888o  88 88'  YP 88'     88  `8D `~~88~~' 88'     .8P  Y8. 88  `8D 88'YbdP`88
    // `8bo.   88ooo88 88    88 88   I8I   88    88    88V8o 88 `8bo.   88ooooo 88oobY'    88    88ooo   88    88 88oobY' 88  88  88
    //   `Y8b. 88~~~88 88    88 Y8   I8I   88    88    88 V8o88   `Y8b. 88~~~~~ 88`8b      88    88~~~   88    88 88`8b   88  88  88
    // db   8D 88   88 `8b  d8' `8b d8'8b d8'   .88.   88  V888 db   8D 88.     88 `88.    88    88      `8b  d8' 88 `88. 88  88  88
    // `8888Y' YP   YP  `Y88P'   `8b8' `8d8'  Y888888P VP   V8P `8888Y' Y88888P 88   YD    YP    YP       `Y88P'  88   YD YP  YP  YP
    //
    //

    /**
     * Покажем форму добавления
     *
     * @version 19.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function showInsertForm() {
        usersCore.showInsertForm(function () {
            // Специфичная очистка формы
        });
    }

    // d888888b d8b   db .d8888. d88888b d8888b. d888888b
    //   `88'   888o  88 88'  YP 88'     88  `8D `~~88~~'
    //    88    88V8o 88 `8bo.   88ooooo 88oobY'    88
    //    88    88 V8o88   `Y8b. 88~~~~~ 88`8b      88
    //   .88.   88  V888 db   8D 88.     88 `88.    88
    // Y888888P VP   V8P `8888Y' Y88888P 88   YD    YP
    //
    //

    /**
     * Добавление записи
     *
     * @version 19.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function insert() {
        usersCore.insert(_collectData(), function (result) {
            $('#js-users__items').prepend(users.templates.item(result.data));

            tabs.tabInsertEdit('hide');
        });
    }

    // d88888b d8888b. d888888b d888888b
    // 88'     88  `8D   `88'   `~~88~~'
    // 88ooooo 88   88    88       88
    // 88~~~~~ 88   88    88       88
    // 88.     88  .8D   .88.      88
    // Y88888P Y8888D' Y888888P    YP
    //
    //

    /**
     * Редактирование записи
     *
     * @param {integer} id ИД записи
     *
     * @version 24.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function edit(id) {
        usersCore.edit(id, function (result) {
            var form = $('#js-user-form');

            form.find('input[name="auth_id"]').val(result.data.auth_id);

            form.find('.js-role').prop('checked', false);

            for (var page in result.data.roles) {
                if (page === 'admin') {
                    form.find('.js-role[data-page="admin"]').prop('checked', true);
                } else {
                    for (var i in result.data.roles[page]) {
                        form.find('.js-role[data-page="' + page + '"][data-access="' + result.data.roles[page][i] + '"]').prop('checked', true);
                    }
                }
            }
        });
    }

    // .d8888.  .d8b.  db    db d88888b
    // 88'  YP d8' `8b 88    88 88'
    // `8bo.   88ooo88 Y8    8P 88ooooo
    //   `Y8b. 88~~~88 `8b  d8' 88~~~~~
    // db   8D 88   88  `8bd8'  88.
    // `8888Y' YP   YP    YP    Y88888P
    //
    //

    /**
     * Изменение записи
     *
     * @version 19.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function save() {
        usersCore.save(_collectData(), function (result) {
            var newRecord = $(users.templates.item(result.data));

            $('#js-users__items')
                .find('tr[data-item-id="' + result.data.id + '"]')
                .html(newRecord.html());

            tabs.tabInsertEdit('hide');

            swal('Выполнено', 'Запись успешно изменена', 'success');
        });
    }

    // d8888b. d88888b .88b  d88.  .d88b.  db    db d88888b
    // 88  `8D 88'     88'YbdP`88 .8P  Y8. 88    88 88'
    // 88oobY' 88ooooo 88  88  88 88    88 Y8    8P 88ooooo
    // 88`8b   88~~~~~ 88  88  88 88    88 `8b  d8' 88~~~~~
    // 88 `88. 88.     88  88  88 `8b  d8'  `8bd8'  88.
    // 88   YD Y88888P YP  YP  YP  `Y88P'     YP    Y88888P
    //
    //

    /**
     * Удаление записи
     *
     * @param {integer} id ИД записи
     *
     * @version 19.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function remove(id) {
        var authID = $('#js-users__items').find('tr[data-item-id="' + id + '"] .auth_id').text();

        usersCore.remove(id, authID, function (result) {
            var container = $('#js-users__items');

            container.find('tr[data-item-id="' + result.data.id + '"]').remove();

            swal('Выполнено', 'Запись успешно удалена', 'success');
        });
    }

    //          .o88b.  .d88b.  db      db      d88888b  .o88b. d888888b d8888b.  .d8b.  d888888b  .d8b.
    //         d8P  Y8 .8P  Y8. 88      88      88'     d8P  Y8 `~~88~~' 88  `8D d8' `8b `~~88~~' d8' `8b
    //         8P      88    88 88      88      88ooooo 8P         88    88   88 88ooo88    88    88ooo88
    //         8b      88    88 88      88      88~~~~~ 8b         88    88   88 88~~~88    88    88~~~88
    //         Y8b  d8 `8b  d8' 88booo. 88booo. 88.     Y8b  d8    88    88  .8D 88   88    88    88   88
    // C88888D  `Y88P'  `Y88P'  Y88888P Y88888P Y88888P  `Y88P'    YP    Y8888D' YP   YP    YP    YP   YP
    //
    //

    /**
     * Сбор данных формы
     *
     * @return {object}
     *
     * @version 24.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function _collectData() {
        var form  = $('#js-user-form');
        var roles = {};

        form.find('.js-role:checked').each(function () {
            var elem = $(this);
            var page = elem.attr('data-page');

            if (page === 'admin') {
                roles.admin = true;
            } else {
                if (!roles.hasOwnProperty(page)) {
                    roles[page] = [];
                }

                roles[page].push(elem.attr('data-access'));
            }
        });

        if (roles.hasOwnProperty('admin')) {
            roles = {admin: true};
        }

        return {
            id        : form.attr('data-id'),
            auth_id   : form.find('input[name="auth_id"]').val(),
            roles     : roles,
            info_users: {}
        };
    }

    return {
        templates     : templates,
        init          : init,
        showInsertForm: showInsertForm,
        insert        : insert,
        edit          : edit,
        save          : save,
        remove        : remove
    };
})();