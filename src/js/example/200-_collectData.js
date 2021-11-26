/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
example._collectData = function () {
    var form = $('#js-example-form');
    var files = [];

    form.find('.js-files__file').each(function () {
        var elem = $(this);
        var action = elem.attr('data-file-action');
        var file = {
            file_id: elem.attr('data-file-id'),
            action: action,
        };

        if (action === 'add') {
            file.orig_name = elem.find('.js-name').text();
        }

        files.push(file);
    });

    if (form.valid()) {
        return {
            id: form.attr('data-id'),
            name: form.find('input[name="name"]').val(),
            files: files,
        };
    } else {
        Swal.fire('Внимание!', 'Заполните все поля, помеченные красным', 'warning');

        return {};
    }
};
