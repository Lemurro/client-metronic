<div id="js-page" data-page="users">
    <div class="m-subheader">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="m-subheader__title">
                    Пользователи
                </h3>
            </div>
        </div>
    </div>
    <div class="m-content">
        <div class="m-portlet">
            <div class="m-portlet__body">
                <ul id="js-tabs__links" class="nav nav-tabs nav-tabs-bordered" role="tablist">
                    <li class="nav-item">
                        <a href="#tab-list" class="nav-link active show" data-toggle="tab" data-target="#tab-list">
                            <i class="fas fa-list-ul"></i> Список
                        </a>
                    </li>
                    <li class="nav-item hidden">
                        <a href="#tab-form" class="nav-link" data-toggle="tab" data-target="#tab-form">
                            <span id="js-tab-form-button"><i class="fas fa-plus"></i> Добавить</span>
                        </a>
                    </li>
                </ul>
                <div id="js-tabs__contents" class="tab-content tabs-bordered bg-white m--padding-20">
                    <div class="tab-pane active show" id="tab-list" role="tabpanel">
                        <?=$view->render('Pages/Users/partial_list.php')?>
                    </div>
                    <div class="tab-pane" id="tab-form" role="tabpanel">
                        <?=$view->render('Pages/Users/partial_form.php')?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?=$view->render('Pages/Users/partial-tpl_item.php')?>