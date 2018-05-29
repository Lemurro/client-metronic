<?php
/**
 * Инициализация приложения
 *
 * @version 26.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

namespace Lemurro;

use Lemurro\Configs\SettingsGeneral;
use LemurroLib\JsCssGetter;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Loader\YamlFileLoader;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Templating\Loader\FilesystemLoader;
use Symfony\Component\Templating\PhpEngine;
use Symfony\Component\Templating\TemplateNameParser;

/**
 * Class App
 *
 * @package Lemurro
 */
class App
{
    /**
     * \Symfony\Component\Routing\Matcher\UrlMatcher
     *
     * @var object
     */
    protected $url_matcher;

    /**
     * \Symfony\Component\HttpFoundation\Request
     *
     * @var object
     */
    protected $request;

    /**
     * \Symfony\Component\HttpFoundation\Response
     *
     * @var object
     */
    protected $response;

    /**
     * \Symfony\Component\Templating\PhpEngine
     *
     * @var object
     */
    protected $templating;

    /**
     * Конструктор
     *
     * @version 26.05.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function __construct()
    {
        date_default_timezone_set(SettingsGeneral::TIMEZONE);

        $fileLocator = new FileLocator([__DIR__]);
        $loader = new YamlFileLoader($fileLocator);
        $routes = $loader->load('routes.yaml');

        $this->request = Request::createFromGlobals();
        $this->response = new Response();

        $this->response->headers->set('Content-Type', 'text/html; charset=utf-8');

        $context = new RequestContext();
        $context->fromRequest($this->request);

        $this->url_matcher = new UrlMatcher($routes, $context);

        $filesystemLoader = new FilesystemLoader(__DIR__ . '/%name%');
        $this->templating = new PhpEngine(new TemplateNameParser(), $filesystemLoader);

        $file_getter = new JsCssGetter();
        $this->templating->addGlobal('core_css', $file_getter->find('core_', 'css'));
        $this->templating->addGlobal('core_js', $file_getter->find('core_', 'js'));
        $this->templating->addGlobal('app_css', $file_getter->find('app_', 'css'));
        $this->templating->addGlobal('app_js', $file_getter->find('app_', 'js'));

        $this->templating->addGlobal('api_url', SettingsGeneral::API_URL);
    }

    /**
     * Старт приложения
     *
     * @version 26.05.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    public function start()
    {
        try {
            $matcher = $this->url_matcher->match($this->request->getPathInfo());
            $this->request->attributes->add($matcher);

            if ($this->request->get('_controller') == 'Error403') {
                $this->templating->addGlobal('title', 'Доступ ограничен | ' . SettingsGeneral::APP_NAME);

                $content = $this->templating->render('Views/page_403.php');
            } else {
                $this->templating->addGlobal('uri', $this->request->getRequestUri());
                $this->templating->addGlobal('title', SettingsGeneral::APP_NAME);
                $this->templating->addGlobal('short_root', SettingsGeneral::SHORT_ROOT_PATH);

                $tpl_file = 'Pages/' . $this->request->get('_controller') . '/view_index.php';
                $tpl_data = array_merge($this->request->attributes->all(), $this->request->query->all());

                $content = $this->templating->render($tpl_file, $tpl_data);
            }

            $this->response->setContent($content);
            $this->response->send();
        } catch (ResourceNotFoundException $e) {
            $this->templating->addGlobal('title', 'Страница не найдена | ' . SettingsGeneral::APP_NAME);

            $content = $this->templating->render('Views/page_404.php');

            $this->response->setContent($content);
            $this->response->send();
        }
    }
}
