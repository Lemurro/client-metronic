/**
 * Инициализация загрузки файлов
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example._initFile = function () {
    // Подключаем плагин загрузки файлов
    var classFile = 'js-files__file';
    lemurro.file.init(classFile);

    // Вешаем загрузчик на кнопку
    var btn      = $('#js-files__upload');
    var callback = function (fileID, fileAction, fileName) {
        $('#js-files__box').append(example._templates.file({
            id    : fileID,
            action: fileAction,
            name  : fileName
        }));
    };
    lemurro.file.bindUpload(btn, callback);
};