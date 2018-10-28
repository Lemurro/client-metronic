/**
 * Инициализация
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.init = function () {
    /**
     * Объект для хранения шаблонов страницы
     *
     * @type {object}
     */
    example._templates = {
        item: Template7.compile($('#js-tpl-example__item').html())
    };

    example._getData();
};