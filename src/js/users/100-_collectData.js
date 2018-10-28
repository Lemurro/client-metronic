/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users._collectData = function () {
    var form  = $('#js-user-form');
    var roles = {};

    form.find('.js-role:checked').each(function () {
        var elem = $(this);
        var page = elem.attr('data-page');

        if (page === 'admin') {
            roles.admin = true;
        } else {
            if (!roles.hasOwnProperty(page)) {
                roles[page] = [];
            }

            roles[page].push(elem.attr('data-access'));
        }
    });

    if (roles.hasOwnProperty('admin')) {
        roles = {admin: true};
    }

    return {
        id        : form.attr('data-id'),
        auth_id   : form.find('input[name="auth_id"]').val(),
        roles     : roles,
        info_users: {}
    };
};