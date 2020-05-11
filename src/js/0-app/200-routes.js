/**
 * Маршруты
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
app.routes = {
    notFound: function (params, query) {
        app.page = {
            name: '404',
            title: 'Страница не найдена',
            onLoad: null,
            params: params,
            query: query,
        };
    },
    pages: {
        // Пользовательские маршруты
        '/example': function (params, query) {
            app.page = {
                name: 'example',
                title: 'Пример',
                onLoad: function () {
                    example.init();
                },
                params: params,
                query: query,
            };
        },

        // Справочники
        '/guide/example': function (params, query) {
            app.page = {
                name: 'guide', // Всегда guide для всех справочников
                title: 'Пример | Справочник',
                onLoad: function () {
                    lemurro.guide.init('example', 'guideExample');
                },
                params: params,
                query: query,
            };
        },

        // Системные маршруты
        '/403': function (params, query) {
            app.page = {
                name: '403',
                title: 'Доступ ограничен',
                onLoad: null,
                params: params,
                query: query,
            };
        },
        '/profile': function (params, query) {
            app.page = {
                name: 'profile',
                title: 'Мой профиль',
                onLoad: function () {
                    lemurro.profile.init();
                },
                params: params,
                query: query,
            };
        },
        '/users': function (params, query) {
            app.page = {
                name: 'users',
                title: 'Пользователи',
                onLoad: function () {
                    lemurro.users.init();
                },
                params: params,
                query: query,
            };
        },

        // Основной маршрут (должен находиться в конце)
        '/': function (params, query) {
            app.page = {
                name: 'dashboard',
                title: 'Главная',
                onLoad: function () {
                    dashboard.init();
                },
                params: params,
                query: query,
            };
        },
    },
};
