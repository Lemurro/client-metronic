    <?=$view->render('Views/block_auth.php')?>

    <!-- Metronic 5: JS Here -->
    <script src="<?=$short_root?>assets/metronic-v5.3.0/base/vendors.bundle.js" type="text/javascript"></script>
    <script src="<?=$short_root?>assets/metronic-v5.3.0/demo5/scripts.bundle.js" type="text/javascript"></script>

    <!-- Plugins -->
    <script src="<?=$short_root?>assets/plugins/jsdeferred.nodoc.js" type="text/javascript"></script>

    <!-- App -->
    <?=($lemurro_js != '' ? '<script src="' . $short_root . 'assets/' . $lemurro_js . '" type="text/javascript"></script>' : '')?>
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