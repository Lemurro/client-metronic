/**
 * Хелперы
 *
 * @version 03.04.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

var helper = (function () {
    // .d8888. db   db  .d88b.  db   d8b   db  .o88b.  .d88b.  d8b   db d88888b d888888b d8888b. .88b  d88.
    // 88'  YP 88   88 .8P  Y8. 88   I8I   88 d8P  Y8 .8P  Y8. 888o  88 88'       `88'   88  `8D 88'YbdP`88
    // `8bo.   88ooo88 88    88 88   I8I   88 8P      88    88 88V8o 88 88ooo      88    88oobY' 88  88  88
    //   `Y8b. 88~~~88 88    88 Y8   I8I   88 8b      88    88 88 V8o88 88~~~      88    88`8b   88  88  88
    // db   8D 88   88 `8b  d8' `8b d8'8b d8' Y8b  d8 `8b  d8' 88  V888 88        .88.   88 `88. 88  88  88
    // `8888Y' YP   YP  `Y88P'   `8b8' `8d8'   `Y88P'  `Y88P'  VP   V8P YP      Y888888P 88   YD YP  YP  YP
    //
    //

    /**
     * Покажем подтверждение
     *
     * @param {string}   title              Заголовок
     * @param {string}   content            HTML-Содержимое
     * @param {string}   confirmButtonText  Текст кнопки "OK"
     * @param {string}   cancelButtonText   Текст кнопки "Cancel"
     * @param {function} callbackOpen       Функция при открытии формы
     * @param {function} callbackPreConfirm Функция перед вызовом callbackConfirm
     * @param {function} callbackConfirm    Функция при нажатии confirmButton
     * @param {function} callbackCancel     Функция при нажатии cancelButton
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function showConfirm(title, content, confirmButtonText, cancelButtonText, callbackOpen, callbackPreConfirm, callbackConfirm, callbackCancel) {
        swal({
            title            : title,
            html             : content,
            type             : '',
            allowOutsideClick: false,
            showCancelButton : true,
            confirmButtonText: confirmButtonText,
            cancelButtonText : cancelButtonText,
            onOpen           : callbackOpen,
            preConfirm       : callbackPreConfirm
        }).then(function (result) {
            if (result.value) {
                callbackConfirm();
            } else {
                if (callbackCancel !== null) {
                    callbackCancel();
                }
            }
        });
    }

    //  .o88b. db      d88888b  .d8b.  d8888b. d88888b d888888b d88888b db      d8888b. .d8888.
    // d8P  Y8 88      88'     d8' `8b 88  `8D 88'       `88'   88'     88      88  `8D 88'  YP
    // 8P      88      88ooooo 88ooo88 88oobY' 88ooo      88    88ooooo 88      88   88 `8bo.
    // 8b      88      88~~~~~ 88~~~88 88`8b   88~~~      88    88~~~~~ 88      88   88   `Y8b.
    // Y8b  d8 88booo. 88.     88   88 88 `88. 88        .88.   88.     88booo. 88  .8D db   8D
    //  `Y88P' Y88888P Y88888P YP   YP 88   YD YP      Y888888P Y88888P Y88888P Y8888D' `8888Y'
    //
    //

    /**
     * Покажем указанный таб
     *
     * @param {object} container jQuery-объект контейнера
     *
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function clearFields(container) {
        container.find('input[type="text"],input[type="password"],input[type="email"],input[type="number"],input[type="tel"],input[type="url"],input[type="date"],input[type="time"]')
            .val('');

        container.find('textarea').val('');

        container.find('select').each(function () {
            $(this).val(null).trigger('change');
        });

        container.find('input[type="checkbox"]').each(function () {
            $(this).prop('checked', false);
        });

        container.find('input[type="radio"]').each(function () {
            $(this).prop('checked', false);
        });
    }

    return {
        showConfirm: showConfirm,
        clearFields: clearFields
    };
})();