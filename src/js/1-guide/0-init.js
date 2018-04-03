/**
 * Операции со справочниками
 *
 * @version 03.04.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

var guide = (function () {
    /**
     * Тип справочника
     *
     * @type {string}
     */
    var type = '';

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
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function init() {
        guide.type = $('#js-page').attr('data-type');

        guide.templates = {
            item: Template7.compile($('#js-tpl-guide__item').html())
        };

        _getData();
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
     * @param {function} callback Функция обратного вызова
     *
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function showInsertForm(callback) {
        var container = $('#js-guide-form');

        container.attr('data-id', '0');
        container.find('.js-title').text('Добавление записи');
        helper.clearFields(container);

        $('#js-guide__button-insert').show();
        $('#js-guide__button-save').hide();

        $('#js-tab-form-button').html('<i class="fa fa-plus"></i> Добавить');

        tabs.tabInsertEdit('show');

        callback();
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
     * @param {object}   data     Объект с данными
     * @param {function} callback Функция обратного вызова
     *
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function insert(data, callback) {
        bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type, {
            data: data
        }, function (result) {
            bootstrap.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                bootstrap.showErrors(result.errors);
            } else {
                callback(result);
            }
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
     * @param {integer}  id       ИД записи
     * @param {function} callback Функция обратного вызова
     *
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function edit(id, callback) {
        bootstrap.lightajax.get(true, pathServerAPI + 'guide/' + guide.type + '/' + id, {}, function (result) {
            bootstrap.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                bootstrap.showErrors(result.errors);
            } else {
                var container = $('#js-guide-form');

                container.attr('data-id', id);
                container.find('.js-title').text('Редактирование записи');

                $('#js-guide__button-insert').hide();
                $('#js-guide__button-save').show();

                $('#js-tab-form-button').html('<i class="fa fa-pencil"></i> Редактировать');

                tabs.tabInsertEdit('show');

                callback(result);
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
     * @param {object}   data     Объект с данными
     * @param {function} callback Функция обратного вызова
     *
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function save(data, callback) {
        bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type + '/' + data.id, {
            data: data
        }, function (result) {
            bootstrap.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                bootstrap.showErrors(result.errors);
            } else {
                callback(result);
            }
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
     * @param {integer}  id       ИД записи
     * @param {string}   name     Имя записи
     * @param {function} callback Функция обратного вызова
     *
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function remove(id, name, callback) {
        swal({
            title            : 'Удаление записи',
            html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
            type             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Да, удалить!',
            cancelButtonText : 'Отмена'
        }).then(function (result) {
            if (result.value) {
                bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type + '/' + id + '/remove', {}, function (result) {
                    bootstrap.lightajax.preloader('hide');

                    if (result.hasOwnProperty('errors')) {
                        bootstrap.showErrors(result.errors);
                    } else {
                        callback(result);
                    }
                });
            } else {

            }
        });
    }

    //          d888b  d88888b d888888b d8888b.  .d8b.  d888888b  .d8b.
    //         88' Y8b 88'     `~~88~~' 88  `8D d8' `8b `~~88~~' d8' `8b
    //         88      88ooooo    88    88   88 88ooo88    88    88ooo88
    //         88  ooo 88~~~~~    88    88   88 88~~~88    88    88~~~88
    //         88. ~8~ 88.        88    88  .8D 88   88    88    88   88
    // C88888D  Y888P  Y88888P    YP    Y8888D' YP   YP    YP    YP   YP
    //
    //

    /**
     * Список элементов справочника
     *
     * @version 03.04.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function _getData() {
        bootstrap.lightajax.get(true, pathServerAPI + 'guide/' + guide.type, {}, function (result) {
            bootstrap.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                bootstrap.showErrors(result.errors);
            } else {
                $('#js-guide__loader').hide();

                if (result.data.count === 0) {
                    $('#js-guide__empty').show();
                } else {
                    var html = '';

                    for (var i in result.data.items) {
                        html += guide.templates.item(result.data.items[i]);
                    }

                    $('#js-guide__items').html(html);
                    $('#js-guide__list').show();
                }
            }
        });
    }

    return {
        type          : type,
        templates     : templates,
        init          : init,
        showInsertForm: showInsertForm,
        insert        : insert,
        edit          : edit,
        save          : save,
        remove        : remove
    };
})();