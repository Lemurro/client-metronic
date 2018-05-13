/**
 * Редактирование записи
 *
 * @param {integer} id ИД записи
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
users.edit = function (id) {
    usersCore.edit(id, function (result) {
        var form = $('#js-user-form');

        form.find('input[name="auth_id"]').val(result.data.auth_id);

        form.find('.js-role').prop('checked', false);

        for (var page in result.data.roles) {
            if (page === 'admin') {
                form.find('.js-role[data-page="admin"]').prop('checked', true);
            } else {
                for (var i in result.data.roles[page]) {
                    form.find('.js-role[data-page="' + page + '"][data-access="' + result.data.roles[page][i] + '"]').prop('checked', true);
                }
            }
        }
    });
};