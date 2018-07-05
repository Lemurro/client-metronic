<script id="js-tpl-user__item" type="text/template7">
    <tr data-item-id="{{id}}">
        <td class="text-nowrap">
            {{id}}
        </td>
        <td>
            <span class="auth_id">{{auth_id}}</span>
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
                                        <a href="javascript:users.edit({{id}});" class="btn m-btn--icon">
                                            <span>
                                                <i class="fas fa-fw fa-pencil-alt"></i>
                                                <span>Редактировать</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li class="m-nav__item">
                                        <a href="javascript:users.remove({{id}});" class="btn m-btn--icon text-danger">
                                            <span>
                                                <i class="far fa-fw fa-trash-alt"></i>
                                                <span>Удалить</span>
                                            </span>
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