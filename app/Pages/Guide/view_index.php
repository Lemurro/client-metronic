<?php
switch ($type) {
    case 'example':
        $title = 'Пример';
        $partial = 'Pages/Guide/partial_example.php';
        break;

    default:
        $title = 'Неизвестный тип справочника';
        $partial = 'Pages/Guide/partial_unknown.php';
        break;
}
?>
<?=$view->render('Views/block_internal_head.php')?>
<div id="js-page" data-page="guide" data-type="<?=$type?>">
    <div class="m-content">
        <div class="row">
            <div class="col-3">
                <div class="m-portlet m-portlet--full-height">
                    <div class="m-portlet__body">
                        <ul class="m-nav m-nav--active-bg m-nav--active-bg-padding-lg m-nav--font-lg m-nav--font-bold" id="m_nav" role="tablist">
                            <li class="m-nav__item<?=($type == 'example' ? ' m-nav__item--active' : '')?>">
                                <a class="m-nav__link" href="<?=$short_root?>guide/example">
                                    <span class="m-nav__link-text">
                                        Пример
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <div class="m-portlet m-portlet--full-height">
                    <div class="m-portlet__head">
                        <div class="m-portlet__head-caption">
                            <div class="m-portlet__head-title">
                                <h3 class="m-portlet__head-text">
                                    <?=$title?>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="m-portlet__body">
                        <?=$view->render($partial)?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?=$view->render('Views/block_internal_foot.php')?>