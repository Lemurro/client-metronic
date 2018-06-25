<?=$view->render('Views/block_head.php')?>
<div class="m-grid m-grid--hor m-grid--root m-page">
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2" id="m_login">
        <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
            <div class="m-login__container">
                <?=$view->render($index)?>
            </div>
        </div>
    </div>
</div>
<?=$view->render('Views/block_foot.php')?>