<?php
/**
 * Инициализация приложения
 *
 * @version 26.04.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro;

use Klein\Klein;
use Lemurro\Configs\SettingsGeneral;
use Lemurro\Configs\SettingsRoutes;

/**
 * Class App
 *
 * @package Lemurro
 */
class App
{
    /**
     * Старт приложения
     *
     * @version 26.04.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function start()
    {
        date_default_timezone_set(SettingsGeneral::TIMEZONE);

        // Определим корневую папку, необходимо для правильной работы Klein
        $_SERVER['REQUEST_URI'] = substr($_SERVER['REQUEST_URI'], strlen(SettingsGeneral::SHORT_ROOT_PATH) - 1);

        $klein = new Klein();

        $klein->respond(function ($request, $response, $service, $di) {
            $service->layout(SettingsGeneral::FULL_ROOT_PATH . 'app/Views/layout-default.php');

            $service->uri = $request->uri();
            $service->title = SettingsGeneral::APP_NAME;
            $service->short_root = SettingsGeneral::SHORT_ROOT_PATH;
            $service->external_page = false;
        });

        $klein->respond('GET', '/403', function ($request, $response, $service) {
            $service->title = 'Доступ ограничен | ' . SettingsGeneral::APP_NAME;
            $service->external_page = true;
            $service->render(SettingsGeneral::FULL_ROOT_PATH . 'app/Views/partial-403.php');
        });

        $routes = SettingsRoutes::ROUTES;
        if (is_array($routes) && count($routes) > 0) {
            foreach ($routes as $route_url => $route_info) {
                $klein->respond($route_info['method'], $route_url, function ($request, $response, $service) use ($route_info) {
                    $service->render(SettingsGeneral::FULL_ROOT_PATH . 'app/Pages/' . $route_info['page'] . '/view_index.php');
                });
            }
        }

        $klein->onHttpError(function ($code, $router) {
            if ($code >= 400 && $code < 500) {
                $template_file = '404';
                $title = 'Страница не найдена';
            } else {
                $template_file = '500';
                $title = 'Произошла ошибка';
            }

            $router->service()->title = $title . ' | ' . SettingsGeneral::APP_NAME;
            $router->service()->external_page = true;
            $router->service()->render(__DIR__ . '/Views/partial-' . $template_file . '.php');
        });

        $klein->dispatch();
    }
}
