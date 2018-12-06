/**
 * Редактирование записи
 *
 * @param {integer} id ИД записи
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.edit = function (id) {
    lemurro.lightajax.get(true, app.config.apiUrl + 'example/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var form = $('#js-example-form');

            form.attr('data-id', id);
            form.find('.js-title').text('Редактирование записи');

            form.find('input[name="name"]').val(result.data.name);

            form.find('.js-action__insert').hide();
            form.find('.js-action__save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');
        }
    });
};