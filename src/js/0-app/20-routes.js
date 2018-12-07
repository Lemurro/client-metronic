/**
 * Маршруты
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
app.routes = {
    notFound: function () {
        app.page = {
            name  : '404',
            title : 'Страница не найдена',
            onLoad: null,
            params: {}
        };
    },
    pages   : {
        // Пользовательские маршруты
        'example': function () {
            app.page = {
                name  : 'example',
                title : 'Пример',
                onLoad: function () {
                    example.init();
                },
                params: {}
            };
        },

        // Системные маршруты
        '403'          : function () {
            app.page = {
                name  : '403',
                title : 'Доступ ограничен',
                onLoad: null,
                params: {}
            };
        },
        'guide/example': function () {
            app.page = {
                name  : 'guide', // Всегда guide для всех справочников
                title : 'Пример | Справочник',
                onLoad: function () {
                    lemurro.guide.init('example', 'guideExample');
                },
                params: {}
            };
        },
        'users'        : function () {
            app.page = {
                name  : 'users',
                title : 'Пользователи',
                onLoad: function () {
                    lemurro.users.init();
                },
                params: {}
            };
        },

        // Основной маршрут (должен находиться в конце)
        '/': function (params) {
            app.page = {
                name  : 'dashboard',
                title : 'Главная',
                onLoad: function () {
                    dashboard.init();
                },
                params: params
            };
        }
    }
};