<?=$view->render('Views/block_internal_head.php')?>
<div id="js-page" data-page="main">
    <div class="m-subheader">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="m-subheader__title">
                    Main
                </h3>
            </div>
        </div>
    </div>
    <div class="m-content">
        <p>Проверка API-сервера</p>
        <p>Статус API-сервера: <strong id="js-api-status"><i class="fa fa-spinner fa-pulse"></i></strong></p>
    </div>
</div>
<?=$view->render('Views/block_internal_foot.php')?>