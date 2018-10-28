/**
 * Получим jQuery-объект мероприятия для вставки в таблицу
 *
 * @param {object} dataInput  Объект данных полученных из формы
 * @param {object} dataResult Объект данных полученных из ответа на запрос
 *
 * @return {jQuery}
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example._getNewRecord = function (dataInput, dataResult) {
    dataInput.id = dataResult.id;

    return $(example._templates.item(dataInput));
};