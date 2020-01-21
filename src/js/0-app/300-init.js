/**
 * Инициализация
 *
 * @param {function} callback Функция которая запускает страницу, выбранную маршрутизатором
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
app.init = function (callback) {
    if (typeof callback === 'function') {
        callback();
    }
};