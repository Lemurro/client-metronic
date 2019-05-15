/**
 * Инициализация загрузки файлов
 *
 * @version 15.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example._initFile = function () {
    // Подключаем плагин загрузки файлов
    var classFile = 'js-files__file';
    lemurro.file.init(classFile);

    // Вешаем загрузчик на кнопку
    var btn        = $('#js-files__upload');
    var onComplete = function (fileID, fileAction, fileName, btn) {
        $('#js-files__box').append(example._templates.file({
            id    : fileID,
            action: fileAction,
            name  : fileName
        }));
    };
    lemurro.file.bindUpload(btn, onComplete);
};