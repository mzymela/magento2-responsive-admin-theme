define([
    'jquery',
], function ($) {
    'use strict';

    // var menuTriggerClass = '.mobile-menu-trigger';

    $.widget('flexydev.responsive', {
        options: {
            menuTriggerClass: '.mobile-menu-trigger',
        },
        _create: function () {
            $(this.options.menuTriggerClass).click(function () {
                $(this).toggleClass('active');
                $('body').toggleClass('menu-visible');
            });
        }
    });

    return $.flexydev.responsive;
});
