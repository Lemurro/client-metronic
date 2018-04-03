<?php
/**
 * Поиск необходимого файла (bootstrap_*.css или bootstrap_*.js) для определения его точного имени
 *
 * @usage $file_getter = new \Lemurro\Helpers\ScriptStylesheetFilename();
 * $js_file_name = $file_getter->find('js');
 * $css_file_name = $file_getter->find('css');
 *
 * @version 14.03.2018
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
     * @param string $type Тип файла (js|css)
     *
     * @return string
     *
     * @version 14.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function find($type)
    {
        if ($type == 'js' || $type == 'css') {
            $filename = '';

            if ($handle = opendir(SettingsGeneral::FULL_ROOT_PATH . 'assets')) {
                while (false !== ($file = readdir($handle))) {
                    $pathinfo = pathinfo($file);

                    if ($pathinfo['extension'] == $type AND substr_count($pathinfo['filename'], 'bootstrap_') > 0) {
                        $filename = $file;
                    }
                }

                closedir($handle);
            }

            return $filename;
        } else {
            return '';
        }
    }
}
