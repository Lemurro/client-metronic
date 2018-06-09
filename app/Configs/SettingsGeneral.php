<?php
/**
 * Основные параметры
 *
 * @version 14.03.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Client\Configs;

/**
 * Class SettingsGeneral
 *
 * @package Lemurro\Client\Configs
 */
class SettingsGeneral
{
    /**
     * Это боевой сервер если стоит значение true
     */
    const PRODUCTION = false;

    /**
     * Название приложения
     */
    const APP_NAME = 'Lemurro';

    /**
     * Короткий путь до корня, с начальной и конечной "/"
     * Пример: "/" - если приложение находится в корне домена
     * Пример: "/proj_sub_folder/" - если приложение находится в каталоге
     */
    const SHORT_ROOT_PATH = '/';

    /**
     * Полный путь до корня
     */
    const FULL_ROOT_PATH = __DIR__ . '/../../';

    /**
     * Временная зона
     */
    const TIMEZONE = 'UTC';

    /**
     * Вид аутентификации
     *   email: по электронной почте (код через email)
     *   phone: по номеру телефона (код через смс)
     */
    const AUTH_TYPE = 'email';

    /**
     * URL-адрес API-сервера
     */
    const API_URL = 'http://lemurro-api.localhost/';
}
