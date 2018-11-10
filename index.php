<?php
/**
 * Запуск приложения
 *
 * @version 10.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

use Lemurro\Client\App\Configs\SettingsGeneral;
use Lemurro\Client\Core\Core;

header("Content-type: text/html; charset=UTF-8");

require '../lemurro-composer-vendors/client/autoload.php';

date_default_timezone_set(SettingsGeneral::TIMEZONE);

$core = new Core();
$core->start();
