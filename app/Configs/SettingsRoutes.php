<?php
/**
 * Маршруты приложения
 *
 * @version 14.03.2018
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
        '/' => [
            'method' => 'GET',
            'page'   => 'Main',
        ],
    ];
}
