<?php
/**
 * Изменение объекта Response перед запуском контроллера приложения
 *
 * @version 09.06.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro\Client\App;

use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

/**
 * Class Response
 *
 * @package Lemurro\Client\App
 */
class Response
{
    /**
     * Выполним действие
     *
     * @param SymfonyResponse $response Объект ответа
     *
     * @return boolean
     *
     * @version 09.06.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function run(SymfonyResponse $response)
    {
        // Здесь вы можете переопределить параметры ответа
        // $response->headers->set('My-Header', 'My value');

        return true;
    }
}
