/**
 * Инициализация загрузки файлов
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 31.10.2019
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

        swal('Выполнено', 'Файл <strong>' + fileName + '</strong>' + ' успешно загружен', 'success');
    };
    lemurro.file.bindUpload(btn, onComplete);
};