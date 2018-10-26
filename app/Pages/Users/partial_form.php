<?php

use Lemurro\Client\App\Configs\SettingsUserRoles;

?>
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
        <button type="button" id="js-user__button-insert" class="btn btn-primary m-btn--icon" onclick="users.insert()">
            <span>
                <i class="fas fa-plus"></i>
                <span>Добавить</span>
            </span>
        </button>
        <button type="button" id="js-user__button-save" class="btn btn-success m-btn--icon" onclick="users.save()">
            <span>
                <i class="fas fa-save"></i>
                <span>Сохранить</span>
            </span>
        </button>
        &nbsp;
        <button type="button" class="btn btn-secondary" onclick="lemurro.tabs.tabInsertEdit('hide')">
            Закрыть
        </button>
    </div>
</form>