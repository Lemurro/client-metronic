/**
 * Покажем форму добавления
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example.showInsertForm = function () {
    var form = $('#js-example-form');

    form.attr('data-id', '0');
    form.find('.js-title').text('Добавление записи');

    lemurro.helper.clearFields(form);

    $('#js-files__box').html('');

    form.find('.js-action__insert').show();
    form.find('.js-action__save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');
};