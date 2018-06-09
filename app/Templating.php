<?php
/**
 * Изменение объекта PhpEngine перед запуском контроллера приложения
 *
 * @version 09.06.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Client\App;

use Symfony\Component\Templating\PhpEngine;

/**
 * Class Templating
 *
 * @package Lemurro\Client\App
 */
class Templating
{
    /**
     * Выполним действие
     *
     * @param PhpEngine $templating Шаблонизатор
     *
     * @return boolean
     *
     * @version 09.06.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function run(PhpEngine $templating)
    {
        // Здесь вы можете добавлять свои глобальные элементы в шаблонизатор
        // Используется symfony-шаблонизатор Templating (https://github.com/symfony/templating)
        // Пример: $templating->addGlobal('my-variable', 'My super value');

        return true;
    }
}
