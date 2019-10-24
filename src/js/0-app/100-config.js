/**
 * Настройки
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 24.10.2019
 */
app.config = {
    // Название приложения
    title: 'Lemurro',

    // Вид аутентификации
    //   email: по электронной почте (код через email)
    //   phone: по номеру телефона (код через смс)
    //   mixed: смешанная аутентификация (в поле auth_id может быть email или номер телефона)
    auth: {
        type   : 'email',
        strings: {
            email: {
                getForm  : {
                    inputLabel: 'Электронная почта',
                    inputClass: ''
                },
                checkForm: {
                    inputLabel   : 'Код из письма',
                    repeatMessage: 'Не пришло письмо?'
                }
            },
            phone: {
                getForm  : {
                    inputLabel: 'Номер телефона',
                    inputClass: 'js-phone-mask'
                },
                checkForm: {
                    inputLabel   : 'Код из смс',
                    repeatMessage: 'Не пришло смс?'
                }
            },
            mixed: {
                getForm  : {
                    inputLabel: 'Логин',
                    inputClass: ''
                },
                checkForm: {
                    inputLabel   : 'Код для входа',
                    repeatMessage: 'Не пришёл код?'
                }
            }
        }
    },

    // Роли пользователей
    userRoles: {
        // Список ролей с правами доступа
        list: [
            {
                name  : 'guide',
                title : 'Справочники',
                access: [
                    'read',
                    'create-update',
                    'delete'
                ]
            }, {
                name  : 'example',
                title : 'Example',
                access: [
                    'read',
                    'create-update',
                    'delete'
                ]
            }
        ],

        // Справочник названий прав доступа
        guideAccess: {
            'read'         : 'Просмотр',
            'create-update': 'Добавление и изменение',
            'delete'       : 'Удаление'
        }
    },

    // Настройки маршрутизатора Navigo
    router: {
        useHash: false,
        hash   : '#'
    }
};