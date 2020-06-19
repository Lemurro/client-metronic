/**
 * Редактирование записи
 *
 * @param {integer} id ИД записи
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
example.edit = function (id) {
    lemurro.lightajax.get(true, pathServerAPI + 'example/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var form = $('#js-example-form');
            var filesBox = $('#js-files__box');

            form.attr('data-id', id);
            form.find('.js-title').text('Редактирование записи');

            form.find('input[name="name"]').val(result.data.name);

            filesBox.html('');

            for (var i in result.data.files) {
                if (result.data.files.hasOwnProperty(i)) {
                    var file = result.data.files[i];

                    filesBox.append(
                        example._templates.file({
                            id: file.id,
                            action: 'exist',
                            name: file.name + '.' + file.ext,
                        })
                    );
                }
            }

            form.find('.js-action__insert').hide();
            form.find('.js-action__save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');
        }
    });
};
