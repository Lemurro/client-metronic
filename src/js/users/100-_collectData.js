/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
users._collectData = function () {
    var form = $('#js-user-form');

    if (form.valid()) {
        return {
            id        : form.attr('data-id'),
            auth_id   : form.find('input[name="auth_id"]').val(),
            roles     : lemurro.users.getRoles(form),
            info_users: {
                last_name  : form.find('input[name="last_name"]').val(),
                first_name : form.find('input[name="first_name"]').val(),
                second_name: form.find('input[name="second_name"]').val()
            }
        };
    } else {
        swal('Внимание!', 'Заполните все поля, помеченные красным', 'warning');

        return {};
    }
};