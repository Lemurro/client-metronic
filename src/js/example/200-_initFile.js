/**
 * Инициализация загрузки файлов
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
example._initFile = function () {
    // Подключаем плагин загрузки файлов
    var classFile = 'js-files__file';
    lemurro.file.init(classFile);

    // Вешаем загрузчик на кнопку
    var btn = $('#js-files__upload');
    var onComplete = function (fileID, fileAction, fileName, btn) {
        $('#js-files__box').append(
            example._templates.file({
                id: fileID,
                action: fileAction,
                name: fileName,
            })
        );

        Swal.fire('Выполнено', 'Файл <strong>' + fileName + '</strong>' + ' успешно загружен', 'success');
    };
    lemurro.file.bindUpload(btn, onComplete);
};
