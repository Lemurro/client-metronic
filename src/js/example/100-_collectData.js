/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
example._collectData = function () {
    var form = $("#js-example-form");

    if (form.valid()) {
        return {
            id  : form.attr("data-id"),
            name: form.find('input[name="name"]').val()
        };
    } else {
        swal('Внимание!', 'Заполните все поля, помеченные красным', 'warning');

        return {};
    }
};