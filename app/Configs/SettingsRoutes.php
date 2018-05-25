<?php
/**
 * Маршруты приложения
 *
 * @version 18.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Configs;

/**
 * Class SettingsRoutes
 *
 * @package Lemurro\Configs
 */
class SettingsRoutes
{
    /**
     * Маршруты
     */
    const ROUTES = [
        '/'              => 'Main',
        '/guide/[:type]' => 'Guide',
        '/users'         => 'Users',
    ];
}
