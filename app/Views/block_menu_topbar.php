<div class="m-stack__item m-stack__item--right m-header-head" id="m_header_nav">
    <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
        <div class="m-stack__item m-topbar__nav-wrapper">
            <ul class="m-topbar__nav m-nav m-nav--inline">
                <li class="m-nav__item m-dropdown m-dropdown--arrow m-dropdown--align-right m-dropdown--mobile-full-width m--padding-right-20 js-role js-role__admin" style="display: none;" m-dropdown-toggle="click" aria-expanded="true">
                    <a href="#" class="m-nav__link m-dropdown__toggle">
                        <span class="m-nav__link-text text-muted">
                            <i class="flaticon-cogwheel"></i>
                            <i class="fas fa-angle-down"></i>
                        </span>
                    </a>
                    <div class="m-dropdown__wrapper" style="z-index: 101;">
                        <span class="m-dropdown__arrow m-dropdown__arrow--right"></span>
                        <div class="m-dropdown__inner">
                            <div class="m-dropdown__body">
                                <div class="m-dropdown__content">
                                    <div class="m-scrollable m-scroller ps ps--active-y" data-scrollable="true" data-height="200" style="height: 200px; overflow: hidden;">
                                        <ul class="m-nav">
                                            <li class="m-nav__section">
                                                <span class="m-nav__section-text">Настройки</span>
                                            </li>
                                            <li class="m-nav__item">
                                                <a href="<?=$short_root?>guide/example" class="m-nav__link">
                                                    <span class="m-nav__link-text">
                                                        <i class="flaticon-folder"></i>
                                                        &nbsp;
                                                        Справочники
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="m-nav__item">
                                                <a href="<?=$short_root?>users" class="m-nav__link">
                                                    <span class="m-nav__link-text">
                                                        <i class="flaticon-users"></i>
                                                        &nbsp;
                                                        Пользователи
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="m-nav__item m-topbar__user-profile  m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                    <a href="#" class="m-nav__link m-dropdown__toggle">
                        <span class="m-topbar__welcome">
                            Привет,&nbsp;
                        </span>
                        <span class="m-topbar__username">
                            <span class="js-user-data js-user__auth-id">
                                <i class="fas fa-spinner fa-pulse"></i>
                            </span>
                        </span>
                        <span class="m-topbar__welcome">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class="m-dropdown__wrapper">
                        <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                        <div class="m-dropdown__inner">
                            <div class="m-dropdown__body">
                                <div class="m-dropdown__content">
                                    <ul class="m-nav m-nav--skin-light">
                                        <li id="js-user-return" class="m-nav__item" style="display: none;">
                                            <a href="javascript:lemurro.users.return();" class="m-nav__link">
                                                <i class="m-nav__link-icon fas fa-fw fa-undo-alt"></i>
                                                <span class="m-nav__link-title">
                                                    <span class="m-nav__link-wrap">
                                                        <span class="m-nav__link-text">
                                                            Вернуться
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li class="m-nav__item">
                                            <a href="javascript:lemurro.auth.logout();" class="m-nav__link">
                                                <i class="m-nav__link-icon fas fa-fw fa-power-off"></i>
                                                <span class="m-nav__link-title">
                                                    <span class="m-nav__link-wrap">
                                                        <span class="m-nav__link-text">
                                                            Выход
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>