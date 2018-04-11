/**
 * Операции с табами
 *
 * @version 05.04.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

var tabs = (function () {
    // .d8888. db   db  .d88b.  db   d8b   db d888888b  .d8b.  d8888b.
    // 88'  YP 88   88 .8P  Y8. 88   I8I   88 `~~88~~' d8' `8b 88  `8D
    // `8bo.   88ooo88 88    88 88   I8I   88    88    88ooo88 88oooY'
    //   `Y8b. 88~~~88 88    88 Y8   I8I   88    88    88~~~88 88~~~b.
    // db   8D 88   88 `8b  d8' `8b d8'8b d8'    88    88   88 88   8D
    // `8888Y' YP   YP  `Y88P'   `8b8' `8d8'     YP    YP   YP Y8888P'
    //
    //

    /**
     * Покажем указанный таб
     *
     * @param {string} tabID Идентификатор нужного таба
     *
     * @version 03.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function showTab(tabID) {
        var tabsLinks    = $('#js-tabs__links');
        var tabsContents = $('#js-tabs__contents');

        tabsLinks.find('.nav-link').removeClass('active show');
        tabsContents.find('.tab-pane').removeClass('active show');

        tabsLinks.find('a[data-target="#' + tabID + '"]').addClass('active show');
        tabsContents.find('#' + tabID).addClass('active show');
    }

    // d888888b  .d8b.  d8888b. d888888b d8b   db .d8888. d88888b d8888b. d888888b d88888b d8888b. d888888b d888888b
    // `~~88~~' d8' `8b 88  `8D   `88'   888o  88 88'  YP 88'     88  `8D `~~88~~' 88'     88  `8D   `88'   `~~88~~'
    //    88    88ooo88 88oooY'    88    88V8o 88 `8bo.   88ooooo 88oobY'    88    88ooooo 88   88    88       88
    //    88    88~~~88 88~~~b.    88    88 V8o88   `Y8b. 88~~~~~ 88`8b      88    88~~~~~ 88   88    88       88
    //    88    88   88 88   8D   .88.   88  V888 db   8D 88.     88 `88.    88    88.     88  .8D   .88.      88
    //    YP    YP   YP Y8888P' Y888888P VP   V8P `8888Y' Y88888P 88   YD    YP    Y88888P Y8888D' Y888888P    YP
    //
    //

    /**
     * Скрыть\Показать вторую вкладку
     *
     * @param {string} action Действие (show|hide)
     *
     * @version 05.04.2018
     * @author Дмитрий Щербаков <atomcms@ya.ru>
     */
    function tabInsertEdit(action) {
        var tabsLinks    = $('#js-tabs__links');
        var tabsContents = $('#js-tabs__contents');

        if (action === 'show') {
            tabsLinks.find('a[data-target="#tab-form"]').parent().show();
            tabsContents.find('#tab-form').addClass('active show');
            tabs.showTab('tab-form');
        } else {
            tabsLinks.find('a[data-target="#tab-form"]').parent().hide();
            tabsContents.find('#tab-form').removeClass('active show');
            tabs.showTab('tab-list');
        }
    }

    return {
        showTab      : showTab,
        tabInsertEdit: tabInsertEdit
    };
})();