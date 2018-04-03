<?php
/**
 * Маршруты приложения
 *
 * @version 03.04.2018
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
        '/'              => [
            'method' => 'GET',
            'page'   => 'Main',
        ],
        '/guide/[:type]' => [
            'method' => 'GET',
            'page'   => 'Guide',
        ],
    ];
}
