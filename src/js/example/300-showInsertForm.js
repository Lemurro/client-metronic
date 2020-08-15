/**
 * Покажем форму добавления
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 15.08.2020
 */
example.showInsertForm = function () {
    var form = $('#js-example-form');

    form.attr('data-id', '0');
    form.find('.js-title').text('Добавление записи');

    lemurro.helper.clearFields(form);

    $('#js-files__box').html('');

    form.find('.js-action__insert').show();
    form.find('.js-action__save').hide();

    $('#js-tab-form-button').html(lemurro.tabs.getTabTitle('add'));

    lemurro.tabs.tabInsertEdit('show');
};