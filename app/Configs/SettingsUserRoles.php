<?php
/**
 * Роли пользователей
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Client\App\Configs;

/**
 * Class SettingsUserRoles
 *
 * @package Lemurro\Client\App\Configs
 */
class SettingsUserRoles
{
    /**
     * Список ролей
     */
    const LIST = [
        'example' => [
            'read',
            'create-update',
            'delete',
        ],
    ];

    /**
     * Справочник названий ролей
     */
    const GUIDE_PAGES = [
        'example' => 'Example',
    ];

    /**
     * Справочник названий ролей
     */
    const GUIDE_ACCESS = [
        'read'          => 'Просмотр',
        'create-update' => 'Добавление и изменение',
        'delete'        => 'Удаление',
    ];
}
