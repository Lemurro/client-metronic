/**
 * Работа с примером
 *
 * @version 03.04.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

var example = (function () {
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
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function showInsertForm() {
        guide.showInsertForm(function () {
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
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function insert() {
        guide.insert(_collectData(), function (result) {
            $('#js-guide__empty').hide();
            $('#js-guide__items').prepend(guide.templates.item(result.data));
            $('#js-guide__list').show();

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
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function edit(id) {
        guide.edit(id, function (result) {
            var form = $('#js-guide-form');

            form.find('input[name="name"]').val(result.data.name);
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
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function save() {
        guide.save(_collectData(), function (result) {
            var newRecord = $(guide.templates.item(result.data));

            $('#js-guide__items')
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
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function remove(id) {
        var name = $('#js-guide__items').find('tr[data-item-id="' + id + '"] .name').text();

        guide.remove(id, name, function (result) {
            var container = $('#js-guide__items');

            container.find('tr[data-item-id="' + result.data.id + '"]').remove();

            if (container.find('tr').length === 0) {
                $('#js-guide__empty').show();
                $('#js-guide__list').hide();
            }

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
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function _collectData() {
        var form = $('#js-guide-form');

        return {
            id  : form.attr('data-id'),
            name: form.find('input[name="name"]').val()
        };
    }

    return {
        showInsertForm: showInsertForm,
        insert        : insert,
        edit          : edit,
        save          : save,
        remove        : remove
    };
})();