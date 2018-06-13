<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">

    <!--begin::Web font -->
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
        WebFont.load({
            google: {"families": ["Roboto:300,400,500,600,700"]},
            active: function () {
                sessionStorage.fonts = true;
            }
        });
    </script>
    <!--end::Web font -->

    <!-- Metronic 5: CSS Here -->
    <link href="<?=$short_root?>assets/metronic-v5.1/base/vendors.bundle.css" rel="stylesheet" type="text/css">
    <link href="<?=$short_root?>assets/metronic-v5.1/demo5/style.bundle.css" rel="stylesheet" type="text/css">

    <!-- Plugins -->
    <link href="<?=$short_root?>assets/plugins/jquery.lightajax.min.css" rel="stylesheet" type="text/css">

    <!-- App -->
    <?=($core_css != '' ? '<link href="' . $short_root . 'assets/' . $core_css . '" rel="stylesheet" type="text/css">' : '')?>
    <?=($app_css != '' ? '<link href="' . $short_root . 'assets/' . $app_css . '" rel="stylesheet" type="text/css">' : '')?>

    <title><?=$title?></title>
</head>
<body class="m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default">