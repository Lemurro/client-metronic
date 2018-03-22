# AJAX-запросы на сервер
Для AJAX-запросов используется jQuery-плагин [LightAjax](https://github.com/DimNS/jQuery.LightAjax)

Для GET-запросов используйте
```
bootstrap.lightajax.get(true, pathServerAPI + 'path/to/server', {
    'param1': 'value1',
    'param2': 'value2'
}, function(result) {
    bootstrap.lightajax.preloader('hide');

    if (result.hasOwnProperty('errors')) {
        bootstrap.showErrors(result.errors);
    } else {
        // Обработка данных полученных с сервера
        console.log(result);
    }
});
```
Для POST-запросов просто замените слово `get` на `post` в строке `bootstrap.lightajax.get(...`

При каждом запросе на сервер отправляется заголовок `X-SESSION-ID` с текущим значением переменной `bootstrap.sessionID`

Для скрытных запросов, укажите `false` в качестве первого параметра в строке `bootstrap.lightajax.get(false, `. В этом случае прелоадер показываться не будет и нет необходимости его скрывать при успешном завершении запроса (строка: `bootstrap.lightajax.preloader('hide');` в примере выше).

# JS-хелперы
- Для диалоговых окон подтверждения используется `SweetAlert2`, у него более расширенный функционал нежели у диалогов `Framework7`. Подготовлен быстрый фасад:
  ```
  helper.showConfirm(
      'Заголовок',
      '<p>Содержимое окна</p><p>Может содержать <strong>любой</strong> html-код</p>',
      'OK',
      'Отмена',
      function () {
          console.log('showConfirm.open');
      }, function () {
          console.log('showConfirm.preconfirm');
      }, function () {
          console.log('showConfirm.confirm');
      }, function () {
          console.log('showConfirm.cancel');
      });
  ```