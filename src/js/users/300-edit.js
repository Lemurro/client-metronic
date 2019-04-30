/**
 * Редактирование записи
 *
 * @param {string} id ИД записи
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users.edit = function (id) {
    lemurro.users.edit(id, function (result) {
        var form = $('#js-user-form');

        form.find('input[name="auth_id"]').val(result.data.auth_id);
        form.find('input[name="last_name"]').val(result.data.last_name);
        form.find('input[name="first_name"]').val(result.data.first_name);
        form.find('input[name="second_name"]').val(result.data.second_name);

        lemurro.users.setRoles(form, result.data.roles);
    });
};