'use strict';
// Событие, которое отслеживает скроллит ли человек.
document.addEventListener('scroll',
    function () {
        if ($(window).scrollTop() > 1000)
        {
            // если больше 1000 → добавляем класс
            $('.js-header-fixed').addClass('is-show');
        }
    else
        {
            // если меньше 1000 → удаляем класс
            $('.js-header-fixed').removeClass('is-show');
        }
    })
// Модуль приложения
var app = (function($) {

    var $body = $('body'),
        page = $body.data('page'),
        options = {
            elAddToCart: '.js-add-to-cart',
            attrId: 'data-id',
            attrName: 'data-name',
            attrPrice: 'data-price',
            attrDelta: 'data-delta',
            elCart: '#cart',
            elTotalCartCount: '#total-cart-count',
            elTotalCartSumma: '#total-cart-summa',
            elCartItem: '.js-cart-item',
            elCartCount: '.js-count',
            elCartSumma: '.js-summa',
            elChangeCount: '.js-change-count',
            elRemoveFromCart: '.js-remove-from-cart'
        },
        optionsCatalog = _.extend({
            renderCartOnInit: false,
            renderMenuCartOnInit: true
        }, options),
        optionsCart = _.extend({
            renderCartOnInit: true,
            renderMenuCartOnInit: true
        }, options),
        optionsOrder = _.extend({
            renderCartOnInit: false,
            renderMenuCartOnInit: true
        }, options);

    function init() {
        if (page === 'catalog') {
            catalog.init();
            cart.init(optionsCatalog);
        }
        if (page === 'catalogDB') {
            catalogDB.init();
            cart.init(optionsCatalog);
            compare.init();
        }
        if (page === 'catalogPag') {
            catalogPag.init();
            cart.init(optionsCatalog);
        }
        if (page === 'compare') {
            cart.init(optionsCatalog);
            compare.init();
        }
        if (page === 'cart') {
            cart.init(optionsCart);
        }
        if (page === 'order') {
            order.init();
            cart.init(optionsOrder);
        }
        compare.updateCompareTab();
    }
    return {
        init: init
    }    

})(jQuery);

jQuery(document).ready(app.init);