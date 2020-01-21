/**
 * Разблокировать пользователя
 *
 * @param {string} id ИД записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
users.unlock = function (id) {
    lemurro.users.unlock(id, function (result) {
        // Дополнительный функционал после выполнения
    });
};