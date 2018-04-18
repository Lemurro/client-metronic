<?php
/**
 * Поиск необходимого файла (core_*.css или core_*.js) для определения его точного имени
 *
 * @usage $file_getter = new \Lemurro\Helpers\ScriptStylesheetFilename();
 * $js_file_name = $file_getter->find('core_', 'js');
 * $css_file_name = $file_getter->find('core_', 'css');
 *
 * @version 18.04.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Helpers;

use Lemurro\Configs\SettingsGeneral;

/**
 * Class ScriptStylesheetFilename
 *
 * @package Lemurro\Helpers
 */
class ScriptStylesheetFilename
{
    /**
     * Найдем имя файла
     *
     * @param string $prefix Префикс файла (например 'core_' для подключения ядра)
     * @param string $type   Тип файла (js|css)
     *
     * @return string
     *
     * @version 18.04.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function find($prefix, $type)
    {
        if ($type == 'js' || $type == 'css') {
            $filename = '';

            if ($handle = opendir(SettingsGeneral::FULL_ROOT_PATH . 'assets')) {
                while (false !== ($file = readdir($handle))) {
                    $pathinfo = pathinfo($file);

                    if ($pathinfo['extension'] == $type AND substr_count($pathinfo['filename'], $prefix) > 0) {
                        $filename = $file;
                    }
                }

                closedir($handle);
            }

            return $filename;
        }

        return '';
    }
}
