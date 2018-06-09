<?php

use Lemurro\Client\Configs\SettingsUserRoles;

?>
<?=$view->render('Views/block_internal_head.php')?>
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
                            <i class="fa fa-list"></i> Список
                        </a>
                    </li>
                    <li class="nav-item hidden">
                        <a href="#tab-form" class="nav-link" data-toggle="tab" data-target="#tab-form">
                            <span id="js-tab-form-button"><i class="fa fa-plus"></i> Добавить</span>
                        </a>
                    </li>
                </ul>
                <div id="js-tabs__contents" class="tab-content tabs-bordered bg-white m--padding-20">
                    <!--
                    // db      d888888b .d8888. d888888b
                    // 88        `88'   88'  YP `~~88~~'
                    // 88         88    `8bo.      88
                    // 88         88      `Y8b.    88
                    // 88booo.   .88.   db   8D    88
                    // Y88888P Y888888P `8888Y'    YP
                    //
                    //
                    -->
                    <div class="tab-pane active show" id="tab-list" role="tabpanel">
                        <form class="form-inline">
                            <button type="button" class="btn btn-primary" onclick="users.showInsertForm()">
                                <i class="fa fa-plus"></i> Добавить
                            </button>&nbsp;&nbsp;
                        </form>

                        <table id="js-users__table" class="table table-hover m--margin-top-20">
                            <thead>
                                <tr>
                                    <th class="w1">#</th>
                                    <th>Идентификатор для входа</th>
                                    <th class="w1">&nbsp;</th>
                                </tr>
                            </thead>
                            <!-- Динамический контент -->
                            <tbody id="js-users__items"></tbody>
                        </table>
                    </div>

                    <!--
                    // d88888b  .d88b.  d8888b. .88b  d88.
                    // 88'     .8P  Y8. 88  `8D 88'YbdP`88
                    // 88ooo   88    88 88oobY' 88  88  88
                    // 88~~~   88    88 88`8b   88  88  88
                    // 88      `8b  d8' 88 `88. 88  88  88
                    // YP       `Y88P'  88   YD YP  YP  YP
                    //
                    //
                    -->
                    <div class="tab-pane" id="tab-form" role="tabpanel">
                        <form id="js-user-form" data-id="0">
                            <h5 class="js-title m--margin-bottom-20">
                                Добавление пользователя
                            </h5>
                            <div class="form-group m-form__group">
                                <label>Идентификатор для входа</label>
                                <input type="text" class="form-control m-input" name="auth_id">
                            </div>
                            <div class="form-group m-form__group">
                                <label>Права доступа</label>
                                <div class="m-checkbox-inline">
                                    <label class="m-checkbox">
                                        <input type="checkbox" class="js-role" data-page="admin"> Администратор
                                        <span></span>
                                    </label>
                                </div>
                                <table class="table table-hover">
                                    <tr>
                                        <td class="w1 text-nowrap">"Справочники"</td>
                                        <td>
                                            <div class="m-checkbox-inline">
                                                <label class="m-checkbox">
                                                    <input type="checkbox" class="js-role" data-page="guide" data-access="read"> Просмотр
                                                    <span></span>
                                                </label>
                                                <label class="m-checkbox">
                                                    <input type="checkbox" class="js-role" data-page="guide" data-access="create-update"> Добавление и изменение
                                                    <span></span>
                                                </label>
                                                <label class="m-checkbox">
                                                    <input type="checkbox" class="js-role" data-page="guide" data-access="delete"> Удаление
                                                    <span></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <?php
                                    foreach (SettingsUserRoles::LIST as $page => $arr_access) {
                                        ?>
                                        <tr>
                                            <td class="w1 text-nowrap">"<?=SettingsUserRoles::GUIDE_PAGES[$page]?>"</td>
                                            <td>
                                                <div class="m-checkbox-inline">
                                                    <?php
                                                    foreach ($arr_access as $access) {
                                                        ?>
                                                        <label class="m-checkbox">
                                                            <input type="checkbox" class="js-role" data-page="<?=$page?>" data-access="<?=$access?>"> <?=SettingsUserRoles::GUIDE_ACCESS[$access]?>
                                                            <span></span>
                                                        </label>
                                                        <?php
                                                    }
                                                    ?>
                                                </div>
                                            </td>
                                        </tr>
                                        <?php
                                    }
                                    ?>
                                </table>
                            </div>
                            <div>
                                <button type="button" id="js-user__button-insert" class="btn btn-primary float-left" onclick="users.insert()">
                                    <i class="fa fa-plus"></i> Добавить
                                </button>
                                <button type="button" id="js-user__button-save" class="btn btn-success float-left hidden" onclick="users.save()">
                                    <i class="fa fa-save"></i> Сохранить
                                </button>
                                &nbsp;
                                <button type="button" class="btn btn-secondary" onclick="tabs.tabInsertEdit('hide')">
                                    Закрыть
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <script id="js-tpl-user__item" type="text/template7">
                    <tr data-item-id="{{id}}">
                        <td class="text-nowrap">
                            {{id}}
                        </td>
                        <td>
                            <span class="auth_id">{{auth_id}}</span>
                        </td>
                        <td>
                            <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="click" aria-expanded="true">
                                <a href="#" class="m-portlet__nav-link m-dropdown__toggle btn btn-secondary m-btn m-btn--icon">
                                    <i class="la la-ellipsis-h"></i>
                                </a>
                                <div class="m-dropdown__wrapper">
                                    <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                    <div class="m-dropdown__inner">
                                        <div class="m-dropdown__body">
                                            <div class="m-dropdown__content">
                                                <ul class="m-nav">
                                                    <li class="m-nav__item">
                                                        <a href="javascript:users.edit({{id}});" class="btn btn-link">
                                                            <i class="fa fa-fw fa-pencil"></i> Редактировать
                                                        </a>
                                                    </li>
                                                    <li class="m-nav__item">
                                                        <a href="javascript:users.remove({{id}});" class="btn btn-link text-danger">
                                                            <i class="fa fa-fw fa-trash"></i> Удалить
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </script>
            </div>
        </div>
    </div>
</div>
<?=$view->render('Views/block_internal_foot.php')?>