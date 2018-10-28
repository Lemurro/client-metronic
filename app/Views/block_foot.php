    <?=$view->render('Views/block_auth.php')?>

    <!-- Metronic 5: JS Here -->
    <script src="<?=$short_root?>assets/metronic-v5.3.0/base/vendors.bundle.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/metronic-v5.3.0/demo5/scripts.bundle.js" type="text/javascript"></script>

    <!-- Plugins -->
    <script src="<?=$short_root?>assets/plugins/bowser.bundled.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/plugins/jquery.lightajax.min.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/plugins/jsdeferred.nodoc.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/plugins/isEmpty.min.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/plugins/localforage.min.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/plugins/template7.min.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/plugins/select2.lang.ru.js" type="text/javascript"></script>

    <!-- App -->
    <?=($core_js != '' ? '<script src="' . $short_root . 'assets/' . $core_js . '" type="text/javascript"></script>' : '')?>
    <?=($app_js != '' ? '<script src="' . $short_root . 'assets/' . $app_js . '" type="text/javascript"></script>' : '')?>
    <script type="text/javascript">
        var pathServerAPI = '<?=$api_url?>';

        $(function () {
            lemurro.init({
                onLoad: app.init
            });
        });
    </script>
</body>
</html>