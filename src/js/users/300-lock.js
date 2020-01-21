/**
 * Заблокировать пользователя
 *
 * @param {string} id ИД записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
users.lock = function (id) {
    lemurro.users.lock(id, function (result) {
        // Дополнительный функционал после выполнения
    });
};