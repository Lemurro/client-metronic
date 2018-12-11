/**
 * Настройки
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.config = {
    // Название приложения
    title: 'Lemurro',

    // URL-адрес API-сервера (обязательно с конечной "/")
    apiUrl: 'http://lemurro-api.localhost/',

    // Вид аутентификации
    //   email: по электронной почте (код через email)
    //   phone: по номеру телефона (код через смс)
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
            }
        }
    },

    // Роли пользователей
    userRoles: {
        // Список ролей с правами доступа
        list: [
            {
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