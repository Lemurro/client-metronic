# Создание нового проекта

## Требования
1. [Metronic](http://keenthemes.com/metronic/) v5+

## Порядок установки
1. Устанавливаем копию скелета: `composer create-project lemurro/client-metronic /my/project/path`
2. Устанавливаем js-зависимости: `npm install`
3. Устанавливаем библиотеки: `bower install`
4. Запускаем первичную сборку и слежку за изменениями исходников `gulp default`
5. Определяем параметры проекта: `app/Configs`
6. В файле `app/Views/layout-default.php` подключаем необходимый шаблон Metronic, по умолчанию подключен шаблон `Demo5`
  - `<!-- Metronic 5: CSS Here -->`
  - `<!-- Metronic 5: JS Here -->`
7. Запускаем в браузере url-путь до файла: `index.php`