<?=$view->render('Views/block_external_head.php')?>
<div class="m-error-1 text-center">
    <div class="m-error_container">
        <div class="m-error_number">
            <h1>403</h1>
        </div>
        <p class="m-error_desc">
            Доступ ограничен
        </p>
        <p class="m-error_desc">
            <a href="<?=$short_root?>" class="btn btn-primary"><i class="fa fa-angle-left"></i> Назад на главную</a>
        </p>
    </div>
</div>
<?=$view->render('Views/block_external_foot.php')?>