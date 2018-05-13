/**
 * Работа с пользователями
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект страницы
 *
 * @type {object}
 */
var users = {};

/**
 * Объект для хранения шаблонов
 *
 * @type {object}
 */
users.templates = {};

/**
 * Инициализация
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
users.init = function () {
    users.templates = {
        item: Template7.compile($('#js-tpl-user__item').html())
    };

    usersCore.getData();
};