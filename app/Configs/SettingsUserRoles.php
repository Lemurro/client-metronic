<?php
/**
 * Роли пользователей
 *
 * @version 24.04.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Configs;

/**
 * Class SettingsUserRoles
 *
 * @package Lemurro\Configs
 */
class SettingsUserRoles
{
    /**
     * Список ролей
     */
    const LIST = [];

    /**
     * Справочник названий ролей
     */
    const GUIDE_PAGES = [];

    /**
     * Справочник названий ролей
     */
    const GUIDE_ACCESS = [
        'read'          => 'Просмотр',
        'create-update' => 'Добавление и изменение',
        'delete'        => 'Удаление',
    ];
}
