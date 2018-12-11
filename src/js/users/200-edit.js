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

        form.find('.js-role').prop('checked', false);

        for (var role in result.data.roles) {
            if (role === 'admin') {
                form.find('.js-role[data-role="admin"]').prop('checked', true);
            } else {
                for (var i in result.data.roles[role]) {
                    form.find('.js-role[data-role="' + role + '"][data-access="' + result.data.roles[role][i] + '"]').prop('checked', true);
                }
            }
        }
    });
};