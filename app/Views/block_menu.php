<div class="m-stack__item m-stack__item--middle m-stack__item--fluid">
    <button class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-light " id="m_aside_header_menu_mobile_close_btn">
        <i class="la la-close"></i>
    </button>
    <div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light ">
        <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
            <li class="m-menu__item<?=($uri == '/' ? ' m-menu__item--active' : '')?>" aria-haspopup="true">
                <a href="<?=$short_root?>" class="m-menu__link ">
                    <span class="m-menu__item-here"></span>
                    <span class="m-menu__link-text">
                        Main
                    </span>
                </a>
            </li>
            <li class="m-menu__item m-menu__item--submenu m-menu__item--rel js-role js-role__guide js-role__admin" style="display: none" m-menu-submenu-toggle="click" aria-haspopup="true">
                <a href="#" class="m-menu__link m-menu__toggle">
                    <span class="m-menu__item-here"></span>
                    <span class="m-menu__link-text">
                        <i class="fas fa-cogs"></i>
                    </span>
                    <i class="m-menu__hor-arrow la la-angle-down"></i>
                    <i class="m-menu__ver-arrow la la-angle-right"></i>
                </a>
                <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                    <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                    <ul class="m-menu__subnav">
                        <li class="m-menu__item <?=(substr_count($uri, '/guide/') > 0 ? ' m-menu__item--active' : '')?> js-role js-role__guide" style="display: none" m-menu-link-redirect="1" aria-haspopup="true">
                            <a href="<?=$short_root?>guide/example" class="m-menu__link">
                                <i class="m-menu__link-bullet m-menu__link-bullet--line">
                                    <span></span>
                                </i>
                                <span class="m-menu__link-text">
                                    Справочники
                                </span>
                            </a>
                        </li>
                        <li class="m-menu__item <?=($uri == '/users' ? ' m-menu__item--active' : '')?> js-role js-role__admin" style="display: none" m-menu-link-redirect="1" aria-haspopup="true">
                            <a href="<?=$short_root?>users" class="m-menu__link">
                                <i class="m-menu__link-bullet m-menu__link-bullet--line">
                                    <span></span>
                                </i>
                                <span class="m-menu__link-text">
                                    Пользователи
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>