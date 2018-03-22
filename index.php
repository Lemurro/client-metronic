<?php
/**
 * Запуск приложения
 *
 * @version 14.03.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

header("Content-type: text/html; charset=UTF-8");

require 'vendor/autoload.php';

$app = new Lemurro\App();
$app->start();
