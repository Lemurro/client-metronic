/**
 * Загрузочный скрипт приложения
 *
 * @version 03.04.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

$(function () {
    bootstrap.init();
});

var bootstrap = (function () {
    /**
     * ИД сессии
     *
     * @type {string}
     */
    var sessionID = '';

    /**
     * Объект для выполнения Ajax-запросов
     *
     * @type {object}
     */
    var lightajax;

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
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function init() {
        // Инициализируем плагин LightAjax
        bootstrap.lightajax = new LightAjax({
            callbackAlert: function (title, message) {
                swal(title, message, 'error');
            },
            ajax         : {
                beforeSend: function (xhr, settings) {
                    if (!/^(HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                        xhr.setRequestHeader("X-SESSION-ID", bootstrap.sessionID);
                    }
                }
            }
        });

        _bindPhoneMask();
        _bindCodeMask();
        _bindSelect2();

        // Достанем из локального хранилища ИД сессии, если есть
        localforage.getItem('sessionID', function (err, value) {
            bootstrap.sessionID = value;
            auth.check();
        });
    }

    // .d8888. db   db  .d88b.  db   d8b   db d88888b d8888b. d8888b.  .d88b.  d8888b. .d8888.
    // 88'  YP 88   88 .8P  Y8. 88   I8I   88 88'     88  `8D 88  `8D .8P  Y8. 88  `8D 88'  YP
    // `8bo.   88ooo88 88    88 88   I8I   88 88ooooo 88oobY' 88oobY' 88    88 88oobY' `8bo.
    //   `Y8b. 88~~~88 88    88 Y8   I8I   88 88~~~~~ 88`8b   88`8b   88    88 88`8b     `Y8b.
    // db   8D 88   88 `8b  d8' `8b d8'8b d8' 88.     88 `88. 88 `88. `8b  d8' 88 `88. db   8D
    // `8888Y' YP   YP  `Y88P'   `8b8' `8d8'  Y88888P 88   YD 88   YD  `Y88P'  88   YD `8888Y'
    //
    //

    /**
     * Отображение ошибок
     *
     * @param errors array Массив ошибок
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function showErrors(errors) {
        if (errors.length === 1 && errors[0].status === '401 Unauthorized') {
            bootstrap.authScreen('show');
        } else {
            for (var i in errors) {
                var item  = errors[i];
                var title = 'Неизвестная ошибка';
                var code  = 'error';

                switch (item.code) {
                    case 'danger':
                        code  = 'error';
                        title = 'Критическая ошибка';
                        break;

                    case 'warning':
                        code  = 'warning';
                        title = 'Внимание!';
                        break;

                    case 'info':
                        code  = 'info';
                        title = 'Информация';
                        break;
                }

                swal(title, item.title, code);
            }
        }
    }

    //  .d8b.  db    db d888888b db   db .d8888.  .o88b. d8888b. d88888b d88888b d8b   db
    // d8' `8b 88    88 `~~88~~' 88   88 88'  YP d8P  Y8 88  `8D 88'     88'     888o  88
    // 88ooo88 88    88    88    88ooo88 `8bo.   8P      88oobY' 88ooooo 88ooooo 88V8o 88
    // 88~~~88 88    88    88    88~~~88   `Y8b. 8b      88`8b   88~~~~~ 88~~~~~ 88 V8o88
    // 88   88 88b  d88    88    88   88 db   8D Y8b  d8 88 `88. 88.     88.     88  V888
    // YP   YP ~Y8888P'    YP    YP   YP `8888Y'  `Y88P' 88   YD Y88888P Y88888P VP   V8P
    //
    //

    /**
     * Покажем форму входа
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function authScreen(action) {
        var modal = $('#js-auth');

        if (action === 'show') {
            $('#js-auth__get-form').show();
            $('#js-auth__check-form').hide();

            modal.find('input[type="text"]').val('');

            modal.modal({
                backdrop: 'static',
                keyboard: false
            });
        } else {
            modal.modal('hide');
        }
    }

    // d888888b d8b   db d888888b d888888b d8888b.  .d8b.   d888b  d88888b
    //   `88'   888o  88   `88'   `~~88~~' 88  `8D d8' `8b 88' Y8b 88'
    //    88    88V8o 88    88       88    88oodD' 88ooo88 88      88ooooo
    //    88    88 V8o88    88       88    88~~~   88~~~88 88  ooo 88~~~~~
    //   .88.   88  V888   .88.      88    88      88   88 88. ~8~ 88.
    // Y888888P VP   V8P Y888888P    YP    88      YP   YP  Y888P  Y88888P
    //
    //

    /**
     * Определим загруженную страницу и запустим ее init() если он есть
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function initPage() {
        var page = $('#js-page');

        if (page.length > 0) {
            var pageScript = window[page.attr('data-page')];

            if (pageScript !== undefined) {
                if (pageScript.hasOwnProperty('init')) {

                    pageScript.init();
                }
            }
        }
    }

    //         d8888b. d888888b d8b   db d8888b. d8888b. db   db  .d88b.  d8b   db d88888b .88b  d88.  .d8b.  .d8888. db   dD
    //         88  `8D   `88'   888o  88 88  `8D 88  `8D 88   88 .8P  Y8. 888o  88 88'     88'YbdP`88 d8' `8b 88'  YP 88 ,8P'
    //         88oooY'    88    88V8o 88 88   88 88oodD' 88ooo88 88    88 88V8o 88 88ooooo 88  88  88 88ooo88 `8bo.   88,8P
    //         88~~~b.    88    88 V8o88 88   88 88~~~   88~~~88 88    88 88 V8o88 88~~~~~ 88  88  88 88~~~88   `Y8b. 88`8b
    //         88   8D   .88.   88  V888 88  .8D 88      88   88 `8b  d8' 88  V888 88.     88  88  88 88   88 db   8D 88 `88.
    // C88888D Y8888P' Y888888P VP   V8P Y8888D' 88      YP   YP  `Y88P'  VP   V8P Y88888P YP  YP  YP YP   YP `8888Y' YP   YD
    //
    //

    /**
     * Создадим маску для телефона
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function _bindPhoneMask() {
        $('.js-phone-mask').each(function () {
            var element = $(this);

            Inputmask({
                'mask': '+7 (999) 999-99-99'
            }).mask(element);
        });
    }

    //         d8888b. d888888b d8b   db d8888b.  .o88b.  .d88b.  d8888b. d88888b .88b  d88.  .d8b.  .d8888. db   dD
    //         88  `8D   `88'   888o  88 88  `8D d8P  Y8 .8P  Y8. 88  `8D 88'     88'YbdP`88 d8' `8b 88'  YP 88 ,8P'
    //         88oooY'    88    88V8o 88 88   88 8P      88    88 88   88 88ooooo 88  88  88 88ooo88 `8bo.   88,8P
    //         88~~~b.    88    88 V8o88 88   88 8b      88    88 88   88 88~~~~~ 88  88  88 88~~~88   `Y8b. 88`8b
    //         88   8D   .88.   88  V888 88  .8D Y8b  d8 `8b  d8' 88  .8D 88.     88  88  88 88   88 db   8D 88 `88.
    // C88888D Y8888P' Y888888P VP   V8P Y8888D'  `Y88P'  `Y88P'  Y8888D' Y88888P YP  YP  YP YP   YP `8888Y' YP   YD
    //
    //

    /**
     * Создадим маску для кода авторизации
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function _bindCodeMask() {
        $('.js-code-mask').each(function () {
            var element = $(this);

            Inputmask({
                'mask': '9999'
            }).mask(element);
        });
    }

    //         d8888b. d888888b d8b   db d8888b. .d8888. d88888b db      d88888b  .o88b. d888888b .d888b.
    //         88  `8D   `88'   888o  88 88  `8D 88'  YP 88'     88      88'     d8P  Y8 `~~88~~' VP  `8D
    //         88oooY'    88    88V8o 88 88   88 `8bo.   88ooooo 88      88ooooo 8P         88       odD'
    //         88~~~b.    88    88 V8o88 88   88   `Y8b. 88~~~~~ 88      88~~~~~ 8b         88     .88'
    //         88   8D   .88.   88  V888 88  .8D db   8D 88.     88booo. 88.     Y8b  d8    88    j88.
    // C88888D Y8888P' Y888888P VP   V8P Y8888D' `8888Y' Y88888P Y88888P Y88888P  `Y88P'    YP    888888D
    //
    //

    /**
     * Подключим Select2
     *
     * @version 30.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function _bindSelect2() {
        $('.js-select2').each(function () {
            $(this).select2({
                language   : 'ru',
                placeholder: 'Выберите из списка'
            });
        });
    }

    return {
        sessionID : sessionID,
        lightajax : lightajax,
        init      : init,
        showErrors: showErrors,
        authScreen: authScreen,
        initPage  : initPage
    };
})();