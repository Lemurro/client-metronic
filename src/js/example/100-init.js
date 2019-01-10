/**
 * Инициализация
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.init = function () {
    /**
     * Объект для хранения шаблонов страницы
     *
     * @type {object}
     */
    example._templates = {
        item: Template7.compile($('#js-tpl-example__item').html()),
        file: Template7.compile($('#js-tpl-example__file').html())
    };

    example._initFile();

    example._getData();
};