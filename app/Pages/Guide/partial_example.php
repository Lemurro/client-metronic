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
        <div id="js-guide__loader">
            <h5>
                <i class="fa fa-spinner fa-pulse"></i> Загрузка списка
            </h5>
        </div>
        <div id="js-guide__empty" class="hidden">
            <div class="text-center">
                <h2>
                    <i class="fa fa-info-circle font-100"></i><br>
                    Записи отсутствуют
                </h2>
                <p class="m--padding-top-20">
                    <button class="btn btn-primary" onclick="example.showInsertForm()">
                        <i class="fa fa-plus"></i> Добавить
                    </button>
                </p>
            </div>
        </div>
        <div id="js-guide__list" class="hidden">
            <form class="form-inline">
                <button type="button" class="btn btn-primary" onclick="example.showInsertForm()">
                    <i class="fa fa-plus"></i> Добавить
                </button>&nbsp;&nbsp;
            </form>

            <table id="js-guide__table" class="table table-hover m--margin-top-20">
                <thead>
                    <tr>
                        <th class="w1">#</th>
                        <th>Название</th>
                        <th class="w1">&nbsp;</th>
                    </tr>
                </thead>
                <!-- Динамический контент -->
                <tbody id="js-guide__items"></tbody>
            </table>
        </div>
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
        <form id="js-guide-form" data-id="0">
            <h5 class="js-title m--margin-bottom-20">
                Добавление записи
            </h5>
            <div class="form-group m-form__group">
                <label>Название</label>
                <input type="text" class="form-control m-input" name="name">
            </div>
            <div>
                <button type="button" id="js-guide__button-insert" class="btn btn-primary float-left" onclick="example.insert()">
                    <i class="fa fa-plus"></i> Добавить
                </button>
                <button type="button" id="js-guide__button-save" class="btn btn-success float-left hidden" onclick="example.save()">
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

<script id="js-tpl-guide__item" type="text/template7">
    <tr data-item-id="{{id}}">
        <td class="text-nowrap">
            {{id}}
        </td>
        <td>
            <span class="name">{{name}}</span>
        </td>
        <td>
            <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="click" aria-expanded="true">
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
                                        <a href="javascript:example.edit({{id}});" class="btn btn-link">
                                            <i class="fa fa-fw fa-pencil"></i> Редактировать
                                        </a>
                                    </li>
                                    <li class="m-nav__item">
                                        <a href="javascript:example.remove({{id}});" class="btn btn-link text-danger">
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