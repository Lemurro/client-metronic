<script id="js-tpl-example__item" type="text/template7">
    <tr data-id="{{id}}">
        <td>
            <div class="m-dropdown m-dropdown--up m-dropdown--inline m-dropdown--arrow m-dropdown--align-left m-dropdown--align-push" m-dropdown-toggle="click" aria-expanded="true">
                <a href="#" class="m-portlet__nav-link m-dropdown__toggle btn btn-sm btn-secondary m-btn m-btn--icon">
                    <i class="la la-ellipsis-h"></i>
                </a>
                <div class="m-dropdown__wrapper">
                    <div class="m-dropdown__inner">
                        <div class="m-dropdown__body">
                            <div class="m-dropdown__content">
                                <ul class="m-nav">
                                    <li class="m-nav__item">
                                        <a href="javascript:example.edit('{{id}}');" class="btn m-btn--icon">
                                            <span>
                                                <i class="fas fa-fw fa-pencil-alt"></i>
                                                <span>Редактировать</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li class="m-nav__item">
                                        <a href="javascript:example.remove('{{id}}');" class="btn m-btn--icon text-danger">
                                            <span>
                                                <i class="fas fa-fw fa-trash-alt"></i>
                                                <span>Удалить</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <span class="m-dropdown__arrow m-dropdown__arrow--left m-dropdown__arrow--adjust"></span>
                </div>
            </div>
        </td>
        <td class="align-middle">
            {{name}}
        </td>
    </tr>
</script>