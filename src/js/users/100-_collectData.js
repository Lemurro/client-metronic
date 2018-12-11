/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users._collectData = function () {
    var form = $('#js-user-form');

    return {
        id        : form.attr('data-id'),
        auth_id   : form.find('input[name="auth_id"]').val(),
        roles     : lemurro.users.getRoles(form),
        info_users: {}
    };
};