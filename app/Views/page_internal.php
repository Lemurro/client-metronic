<?=$view->render('Views/block_head.php')?>
    <div class="m-grid m-grid--hor m-grid--root m-page">
        <!-- begin::Header -->
        <header class="m-grid__item m-header" data-minimize="minimize" data-minimize-offset="200" data-minimize-mobile-offset="200">
            <div class="m-header__top">
                <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
                    <div class="m-stack m-stack--ver m-stack--desktop">
                        <!-- begin::Brand -->
                        <div class="m-stack__item m-brand m-stack__item--left">
                            <div class="m-stack m-stack--ver m-stack--general m-stack--inline">
                                <div class="m-stack__item m-stack__item--middle m-brand__logo">
                                    <a href="<?=$short_root?>" class="m-brand__logo-wrapper">
                                        <img src="<?=$short_root?>assets/img/logo.png" style="height: 30px;">
                                    </a>
                                </div>
                                <div class="m-stack__item m-stack__item--middle m-brand__tools">
                                    <!-- begin::Responsive Header Menu Toggler-->
                                    <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                        <span></span>
                                    </a>
                                    <!-- end::Responsive Header Menu Toggler-->
                                    <!-- begin::Topbar Toggler-->
                                    <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                        <i class="flaticon-more"></i>
                                    </a>
                                    <!--end::Topbar Toggler-->
                                </div>
                            </div>
                        </div>
                        <!-- end::Brand -->
                        <!-- begin::Topbar -->
                        <div class="m-stack__item m-stack__item--right m-header-head" id="m_header_nav">
                            <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
                                <div class="m-stack__item m-topbar__nav-wrapper">
                                    <ul class="m-topbar__nav m-nav m-nav--inline">
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
                                                                    <a href="javascript:usersCore.return();" class="m-nav__link">
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
                                                                    <a href="javascript:auth.logout();" class="m-nav__link">
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
                        <!-- end::Topbar -->
                    </div>
                </div>
            </div>
            <div class="m-header__bottom">
                <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
                    <div class="m-stack m-stack--ver m-stack--desktop">
                        <!-- begin::Horizontal Menu -->
                        <?=$view->render('Views/block_menu.php')?>
                        <!-- end::Horizontal Menu -->
                    </div>
                </div>
            </div>
        </header>
        <!-- end::Header -->
        <!-- begin::Body -->
        <div class="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop m-container m-container--responsive m-container--xxl m-page__container m-body">
            <div class="m-grid__item m-grid__item--fluid m-wrapper">
                <?=$view->render($index)?>
            </div>
        </div>
        <!-- end::Body -->
        <!-- begin::Footer -->
        <footer class="m-grid__item m-footer ">
            <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
                <div class="m-footer__wrapper">
                    <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                        <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                            <span class="m-footer__copyright">
                                <?php
                                $begin_year = 2018;
                                $copy_date = (date('Y') == $begin_year ? $begin_year : $begin_year . '-' . date('Y'));
                                ?>
                                <?=$copy_date?> &copy; <a href="https://bestion.ru" class="m-link">Лучшее решение</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- end::Footer -->
    </div>
    <!-- end:: Page -->

    <!-- begin::Scroll Top -->
    <div class="m-scroll-top m-scroll-top--skin-top" data-toggle="m-scroll-top" data-scroll-offset="500" data-scroll-speed="300">
        <i class="la la-arrow-up"></i>
    </div>
    <!-- end::Scroll Top -->
<?=$view->render('Views/block_foot.php')?>