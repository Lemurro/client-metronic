/**
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
users.init = function () {
    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    users.templates = {
        item: Template7.compile($('#js-tpl-user__item').html()),
    };
};
