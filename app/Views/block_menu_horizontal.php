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
                        Dashboard
                    </span>
                </a>
            </li>
            <li class="m-menu__item<?=($uri == '/example' ? ' m-menu__item--active' : '')?> js-role js-role__example" style="display: none;" aria-haspopup="true">
                <a href="<?=$short_root?>example" class="m-menu__link ">
                    <span class="m-menu__item-here"></span>
                    <span class="m-menu__link-text">
                        Example
                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>