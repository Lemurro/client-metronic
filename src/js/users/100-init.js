/**
 * Инициализация
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users.init = function () {
    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    users.templates = {
        item: Template7.compile($('#js-tpl-user__item').html())
    };

    lemurro.users.getData();
};