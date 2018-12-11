/**
 * Редактирование записи
 *
 * @param {integer} id ИД записи
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users.edit = function (id) {
    lemurro.users.edit(id, function (result) {
        var form = $('#js-user-form');

        form.find('input[name="auth_id"]').val(result.data.auth_id);

        lemurro.users.setRoles(form, result.data.roles);
    });
};